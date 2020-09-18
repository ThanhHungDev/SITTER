<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\PaymentModel;
use App\Models\PayoutModel;
use Illuminate\Support\Carbon;
class Transfer extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:tranfers';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Transfer to sitters';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        //get data tranfers in payment table
        $dataTranfer = $this->getDataTransfer();
        $dataTranfer = [
            [
                'stripe_account_id' => 'acct_1HMSAZIl0nAvONsO',
                'amount' => 2000
            ]
        ];//db test
        foreach ($dataTranfer as $key => $value) {
            $resTranfer = $this->transfer($value);
            $resUpdateDB = $this->updateDbTransfer($resTranfer);
        }
        return 0;
    }

    public function getDataTransfer()
    {
        $data = (new PaymentModel())->getListForPayout();
        return $data;
    }

    public function calculatorAmountTranfer($data)
    {
        $amound = 0;
        if(!empty($data)){
            if($data['sitter_accept'] == 0 && $data['status'] == 1){
                return 0;
            }

            if(($data['sitter_accept'] == 1) && ($data['employer_accept'] == 1) && ($data['status'] == 1)){
                return (int)$data['price'] - (int)$data['fee_stripe'];
            }

            if( ($data['employer_accept'] == 0) && ($data['status'] == 1)){
                $dateCancel  = Carbon::parse($data['date_cancel']);
                $dateBooking = Carbon::parse($data['work_date']);
                $diffHour    = $dateCancel->diffInHours($dateBooking);
                if($diffHour > 48){
                    return 0;
                }
    
                if(($diffHour >= 24) && ($diffHour <= 48)){
                    return (int)((int)$data['price'] - (int)$data['fee_stripe'])/2;
                }
    
                if($diffHour < 24){
                    return (int)$data['price'] - (int)$data['fee_stripe'];
                }
            }
        }
    }

    public function transfer($data)
    {
        \Stripe\Stripe::setApiKey(config('constant.STRIPE_SECRET_KEY'));

        $amount = $this->calculatorAmountTranfer($data);
        $res = [
            'transfer_id' => '',
            'status'      => '',
            'type'        => '',
            'code'        => '',
            'message'     => '',
            'payment_id'  => ''
        ];
        try {
            if($amount > 0){
                $transfer = \Stripe\Transfer::create([
                    "amount"      => $amount,
                    "currency"    => "jpy",
                    "destination" => $data['stripe_account_id'],
                ]);
                $res['transfer_id'] = $transfer->id;
                $res['status']      = 200;
                $res['code']        = 'TRANS_SUCCESS';
                $res['message']     = 'Transfer success!';
                $res['payment_id']  = $data['payment_id'];
            }
            
            return $res;

        } catch(\Stripe\Exception\CardException $e) {
            // Since it's a decline, \Stripe\Exception\CardException will be caught
            return handleExceptionStripe($e);
        } catch (\Stripe\Exception\RateLimitException $e) {
        // Too many requests made to the API too quickly
            return handleExceptionStripe($e);
        } catch (\Stripe\Exception\InvalidRequestException $e) {
        // Invalid parameters were supplied to Stripe's API
            return handleExceptionStripe($e);
        } catch (\Stripe\Exception\AuthenticationException $e) {
        // Authentication with Stripe's API failed
        // (maybe you changed API keys recently)
            return handleExceptionStripe($e);
        } catch (\Stripe\Exception\ApiConnectionException $e) {
        // Network communication with Stripe failed
            return handleExceptionStripe($e);
        } catch (\Stripe\Exception\ApiErrorException $e) {
        // Display a very generic error to the user, and maybe send
        // yourself an email
            return handleExceptionStripe($e);
        } 
    }

    public function updateDbTransfer($data)
    {
        if($data['code'] && $data['code'] == 'TRANS_SUCCESS'){
            $paymentModel = new PaymentModel();
            $reqUpdate = $paymentModel::where('id', $data['payment_id'])->update([
                'is_payout' => true
            ]);
            $payOutModel  = new PayoutModel();
            $reqStore = $payOutModel->create([
                'payment_id'     => $data['payment_id'],
                'stripe_tranfer' => $data['transfer_id'],
                'status'         => $data['status'],
                'note'           => $data['message'],
            ]);
        } else {
            //ghi log baos looix
        }
    }
    //* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
}

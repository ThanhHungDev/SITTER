<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\PaymentModel;
use App\Models\PayoutModel;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;
class Transfer extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:transfer';

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
        $dataTransfer = $this->getDataTransfer();
        //db test
        foreach ($dataTransfer as $key => $value) {
            try {

                $resTransfer = $this->transfer($value);
                $this->LoggingTransfer('HANDEL_TRANSFER_STRIPE',$resTransfer);

                $resUpdateDB = $this->updateDbTransfer($resTransfer);
                $this->LoggingTransfer('HANDEL_UPDATE_DB_STRIPE',$resUpdateDB);

            } catch (\Throwable $th) {
                $this->LoggingTransfer('',$th);
            }
        }
        return 0;
    }

    public function getDataTransfer()
    {
        $data = (new PaymentModel())->getListForPayout();
        if(!empty($data)){
            $data = $data->toArray();
        }
        return $data;
    }

    public function calculatorAmountTransfer($data)
    {
        if(!empty($data)){
            if($data['sitter_accept'] == 0 && $data['status_booking'] == 1){
                return 0;
            }

            if(($data['sitter_accept'] == 1) && ($data['employer_accept'] == 1) && ($data['status_booking'] == 1)){
                return (int)$data['price'] - (int)$data['fee_stripe'];
            }

            if( ($data['employer_accept'] == 0) && ($data['status_booking'] == 1)){
                $dateCancel  = Carbon::parse($data['date_cancel']);
                $dateBooking = Carbon::parse($data['work_date']);
                $diffHour    = $dateCancel->diffInHours($dateBooking);
                if($diffHour > 48){
                    return 0;
                }
    
                if(($diffHour >= 24) && ($diffHour <= 48)){
                    return (int)(($data['price'] - $data['fee_stripe'])/2);
                }
    
                if($diffHour < 24){
                    return (int)($data['price'] - $data['fee_stripe']);
                }
            }
        }
    }

    public function transfer($data)
    {
        \Stripe\Stripe::setApiKey(config('app.STRIPE_API_KEY'));

        $amount = $this->calculatorAmountTransfer($data);
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
                if($transfer->id){
                    $res['transfer_id'] = $transfer->id;
                    $res['status']      = 200;
                    $res['code']        = 'TRANS_SUCCESS';
                    $res['message']     = 'Transfer success!';
                    $res['payment_id']  = $data['payment_id'];
                }
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
        $res = [];
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
            if($reqStore->id){
                return $data;
            }
        }
        return $res;
    }

    public function LoggingTransfer($type, $data)
    {
        switch ($type) {
            case 'HANDEL_TRANSFER_STRIPE':
                if($data['transfer_id'] != ''){
                    //success
                    $message = 'TRANSFER_ID: '.$data['transfer_id'] . ' CODE: ' . $data['code']. ' MESSAGE: '. $data['message'];
                    Log::channel('transfer')->info($message);
                }else{  
                    $message = 'TYPE: '.$data['type'] ?? '' . 'STATUS: '. $data['status'] ?? ''.  ' CODE: ' . $data['code']. ' MESSAGE: '. $data['message'];
                    Log::channel('transfer')->warning($message);
                    // warning
                }
                break;
            case 'HANDEL_UPDATE_DB_STRIPE':
                if($data['transfer_id'] != ''){
                    //success
                    $message = 'INSERT DB TRANSFER_ID: '.$data['transfer_id'] . ' CODE: '.$data['status']. ' MESSAGE: '. $data['message'];
                    Log::channel('transfer')->info($message);
                }else{  
                    $message = 'INSERT DB TRANSFER_ID: '.$data['transfer_id'] . ' MESSAGE: ERROR';
                    Log::channel('transfer')->warning($message);
                    // warning
                }
                break;
            default:
                $message = "NULL";
                Log::channel('transfer')->debug($data);
                break;
        }
    }
    //* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
}

<?php

namespace App\Console\Commands;

use App\Models\BookingModel;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class HiddenChannelSitters extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'channel:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'update channel hidden when booking timeout or after 24h of date_booking success';

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
        $description = ' Command Run hidden chat channel';
        $model = new BookingModel();

        $bookingsMaxWorkDate = $model->findBookingsHidden()->get()->toArray();

        $bookingHidden       = array_values(array_filter($bookingsMaxWorkDate, function($booking){ return $booking['filter']; } ));
        $bookingIdsHidden    = array_map(function($booking){ return $booking['id']; }, $bookingHidden);

        Log::channel('hidden_channel')->info("BEGIN"); 
        if(!count($bookingIdsHidden)){
            $description = " Command Run hidden chat channel none booking close";
            Log::channel('hidden_channel')->info($description); 
            die($description);
        }

        try {
            Log::channel('hidden_channel')->info("HIDDEN CHANNEL OF BOOKING:" . json_encode($bookingIdsHidden) ); 
            $action = env("REALTIME_URL") . "/api/hidden-channel";

            $client = new \GuzzleHttp\Client();
            $res    = $client->put($action, 
                array(
                    'form_params' => array(
                        'key' => env("KEY_SITTER_PHP"),
                        'data' => json_encode($bookingIdsHidden)
                    )
                ));
            $status = $res->getStatusCode();
            if( $status == 200 ){
                $condition = array(
                    'less-than-booking' => $bookingHidden
                );
                /// update code booking
                $model->hiddenBookingByCondition($condition);
                $description .= ' successfully!';
            }else{
                /// ghi log 
                throw new \Error("error call api cron job have error: " . $res->getBody());
            }
        } catch (\Throwable $th) {
            Log::channel('hidden_channel')->info("HIDDEN CHANNEL ERRROR:" . $th->getMessage() ); 
            $description = $th->getMessage();
        }
        Log::channel('hidden_channel')->info("END"); 
        $this->info( $this->signature . $description);
    }
}

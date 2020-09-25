<?php

namespace App\Console\Commands;

use App\Models\BookingModel;
use Illuminate\Console\Command;

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

        if(!count($bookingIdsHidden)){
            $description = " Command Run hidden chat channel none booking close";
            die($description);
        }

        try {
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
            
            $description = $th->getMessage();
        }
        $this->info( $this->signature . $description);
    }
}

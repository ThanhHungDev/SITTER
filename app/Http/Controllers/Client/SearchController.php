<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\FactoryModel\FactoryModelInterface;
use Carbon\Carbon;

class SearchController extends Controller
{
    private $model = null;
    public function __construct(FactoryModelInterface $_model) {
        $this->model = $_model;
        $this->JP_LOCATION = config('constant.JP_LOCATION');
    }

    public function convertDate($date)
    {

    }

    //Phong:18062020: return index page
    public function searchSitters(Request $request){
        //get request
        $_wdate = $request->wdate;
        $_cage = $request->cage;
        $_wplace = $request->wplace;
        $_wcond = $request->wcond;
        $_wplacedetail = $request->wplacedetail;
        $_wdatedetail = $request->wdatedetail;
        $_time_in = $request->time_in;
        $_time_out = $request->time_out;
        $_age_range = $request->age_range;
        $_num_child = $request->num_child;
        $_cash = $request->cash;
        $_exps = $request->exps;
        $_skills = $request->skills;

        if(!empty($_wdate))
        {
            $date_to_arr = explode(',', $_wdate);
            $func_convert_date = function ($date) {
                $date_raw = Carbon::parse($date);
                $date_final = $date_raw->format('yy-m-d');
                return $date_final;
            };
            $date_arr = array_map($func_convert_date, $date_to_arr);
            $_wdate  = $date_arr;
        }
        //assign request to array
        $data_params['wdate'] = $_wdate;
        $data_params['cage'] = $_cage;
        $data_params['wplace'] = $_wplace;
        $data_params['wcond'] = $_wcond;
        $data_params['wplacedetail'] = $_wplacedetail;
        $data_params['wdatedetail'] = $_wdatedetail;
        $data_params['time_in'] = (!empty($_time_in)?(new Carbon($_time_in))->format('H:i:s'): null);
        $data_params['time_out'] = (!empty($_time_out)?(new Carbon($_time_out))->format('H:i:s'): null);
        $data_params['age_range'] = $_age_range;
        $data_params['num_child'] = $_num_child;
        $data_params['cash'] = $_cash;
        $data_params['exps'] = $_exps;
        $data_params['skills'] = $_skills;

        //dd($data_params);
        //get data from model
        $_list_items = $this->model->createUserModel()->searchItems( $data_params);

        //return data
        $data['list_items']  = $_list_items;
        $data['jp_locations']  = $this->JP_LOCATION;
        $data['data_params'] = $data_params;
        return view('client.search.search_result', $data);
    }
    public function advanceSearch(){

        $data['jp_locations']  = $this->JP_LOCATION;
        return view('client.search.advance_search', $data);
    }
}

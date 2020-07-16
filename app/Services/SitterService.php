<?php
namespace App\Services;
use Illuminate\Support\Carbon;

class SitterService
{
    public static function convertScheduleDataToArray($schedules){
        if(empty($schedules)){
            return [];
        }
        $newDatas = [];
        foreach ($schedules as $year => $scheduleYears) {
            foreach ($scheduleYears as $month => $scheduleMonths) {
                foreach ($scheduleMonths as $day => $scheduleDays) {
                    $work_date = Carbon::create($year, $month, $day)->format('Y-m-d');
                    $scheduleDays['work_date'] = $work_date;
                    array_push($newDatas, $scheduleDays);
                }
            }
        }

        return $newDatas;
    }

    public static function convertScheduleDataToJson($schedules){
        
        if($schedules->isEmpty()){
            return json_encode([], JSON_FORCE_OBJECT);
        }
        $newDatas = [];
        foreach ($schedules as $schedule) {
            switch ($schedule['status']) {
                case config('constant.CALENDAR.DAY_FREE'):
                    $schedule['class'] = 'old';
                    break;
                
                case config('constant.CALENDAR.DAY_BUSY'):
                    $schedule['class'] = 'event-over';
                    break;
                
                default:
                    $schedule['class'] = 'old';
                    break;
            }
            $year = (new Carbon($schedule['work_date']))->format('Y');
            $month = (new Carbon($schedule['work_date']))->format('m');
            $day = (new Carbon($schedule['work_date']))->format('d');
            $schedule['start'] = (new Carbon($schedule['start']))->format('H:i');
            $schedule['finish'] = (new Carbon($schedule['finish']))->format('H:i');
            unset($schedule['work_date']);
            unset($schedule['created_at']);
            unset($schedule['updated_at']);
            unset($schedule['id']);
            unset($schedule['user_id']);
            $newDatas[$year][$month][$day] = $schedule;
        }
        return json_encode($newDatas);
    }
}
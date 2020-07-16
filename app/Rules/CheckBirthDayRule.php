<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class CheckBirthDayRule implements Rule
{
    private $param = null;
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($_param)
    {
        $this->param = $_param;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $year = $this->param['birth_year'];
        $month = $this->param['birth_month'];
        $day = $this->param['birth_day'];
        $dateCurrent = Date($year . '-' . $month . '-' . $day);
        $today = date("Y-m-d");
        if (strtotime($dateCurrent) > strtotime($today)) {
            return false;
        }
        return checkdate($month, $day, $year);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return '間違った生年月日';
    }
}

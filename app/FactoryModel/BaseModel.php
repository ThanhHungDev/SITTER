<?php

namespace App\FactoryModel;

use Illuminate\Support\Facades\DB;

use App\Models\UserModel;
use App\Models\SkillModel;
use App\Models\GalaryModel;
use App\Models\SalaryModel;
use App\Models\SitterModel;
use App\Models\BookingModel;
use App\Models\ChannelModel;
use App\Models\MessageModel;
use App\Models\ScheduleModel;
use App\Models\ExperienceModel;
use App\Models\VerifyRateModel;
use App\Models\TokenRefeshModel;
use App\Models\VerifyEmailModel;
use App\Models\SitterReviewModel;
use App\Models\ActivitySkillModel;
use App\Models\PasswordResetModel;
use App\Models\SitterProfileModel;
use App\Models\EmployerProfileModel;
use App\Models\DateBookingModel;

class BaseModel implements FactoryModelInterface{

    public static $UserModel;
    public static $MessageModel;
    public static $ChannelModel;
    public static $VerifyEmailModel;
    public static $DBModel;
    public static $TokenRefeshModel;
    public static $SitterProfileModel;
    public static $GalaryModel;
    public static $EmployerProfileModel;
    public static $SkillModel;
    public static $ExperienceModel;
    public static $SitterModel;
    public static $SalaryModel;
    public static $PasswordResetModel;
    public static $ScheduleModel;
    public static $VerifyRateModel;
    public static $SitterReviewModel;
    public static $BookingModel;
    public static $DateBookingModel;

    public function createUserModel(){
        
        if(!self::$UserModel){
            self::$UserModel = new UserModel();
        }
        return new UserModel();
    }
    public function createDBModel(){

        if(!self::$DBModel){
            self::$DBModel = DB::class;
        }
        
        return self::$DBModel;
    }
    public function createMessageModel(){

        if(!self::$MessageModel){
            self::$MessageModel = MessageModel::class;
        }
        
        return self::$MessageModel;
    }
    public function createChannelModel(){

        if(!self::$ChannelModel){
            self::$ChannelModel = ChannelModel::class;
        }
        
        return self::$ChannelModel;
    }

    public function createVerifyEmailModel(){

        if(!self::$VerifyEmailModel){
            self::$VerifyEmailModel = new VerifyEmailModel();
        }
        
        return new VerifyEmailModel();
    }

    public function createTokenRefeshModel(){
        
        if(!self::$TokenRefeshModel){
            self::$TokenRefeshModel = new TokenRefeshModel();
        }
        return new TokenRefeshModel();
    }

    public function createSitterProfileModel(){
        
        if(!self::$SitterProfileModel){
            self::$SitterProfileModel = new SitterProfileModel();
        }
        return new SitterProfileModel();
    }

    public function createGalaryModel(){
        
        if(!self::$GalaryModel){
            self::$GalaryModel = new GalaryModel();
        }
        return new GalaryModel();
    }
    public function createEmployerProfileModel(){

        if(!self::$EmployerProfileModel){
            self::$EmployerProfileModel = new EmployerProfileModel();
        }
        
        return new EmployerProfileModel();
    }

    public function createSkillModel(){

        if(!self::$SkillModel){
            self::$SkillModel = new SkillModel();
        }
        
        return new SkillModel();
    }

    public function createExperienceModel(){

        if(!self::$ExperienceModel){
            self::$ExperienceModel = new ExperienceModel();
        }
        
        return new ExperienceModel();
    }

    public function createSkillActivityModel()
    {
        if(!self::$ExperienceModel){
            self::$ExperienceModel = new ActivitySkillModel();
        }
        
        return new ActivitySkillModel();
    }
    
    public function createSitterModel(){
        if(!self::$SitterModel){
            self::$SitterModel = new SitterModel();
        }
        return new SitterModel();
    }

    public function createSalaryModel(){
        if(!self::$SalaryModel){
            self::$SalaryModel = new SalaryModel();
        }
        return new SalaryModel();
    }

    public function createPasswordResetModel(){
        if(!self::$PasswordResetModel){
            self::$PasswordResetModel = new PasswordResetModel();
        }
        return new PasswordResetModel();
    }

    public function createScheduleModel(){
        if(!self::$ScheduleModel){
            self::$ScheduleModel = new ScheduleModel();
        }
        return new ScheduleModel();
    }

    public function createVerifyRateModel(){
        if(!self::$VerifyRateModel){
            self::$VerifyRateModel = new VerifyRateModel();
        }
        return new VerifyRateModel();
    }
    public function createSitterReviewModel(){
        if(!self::$SitterReviewModel){
            self::$SitterReviewModel = new SitterReviewModel();
        }
        return new SitterReviewModel();
    }
    public function createBookingModel(){
        if(!self::$BookingModel){
            self::$BookingModel = new BookingModel();
        }
        return new BookingModel();
    }

    public function createDateBookingModel(){
        if(!self::$DateBookingModel){
            self::$DateBookingModel = new DateBookingModel();
        }
        return new DateBookingModel();
    }
}
<?php

namespace App\FactoryModel;

use App\Models\ChannelModel;
use App\Models\MessageModel;
use App\Models\UserModel;
use Illuminate\Support\Facades\DB;

class BaseModel implements FactoryModelInterface{

    public static $UserModel;
    public static $MessageModel;
    public static $ChannelModel;
    public static $DBModel;


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
    
}
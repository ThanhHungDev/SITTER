<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PasswordResetTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('password_reset')) {
            
            Schema::create('password_reset', function (Blueprint $table) {
                $table->increments('id');
                $table->unsignedInteger('user_id')->unsigned();
                $table->foreign('user_id')->references('id')->on('users')
                ->onDelete('CASCADE');
                $table->string('verify_code');
                $table->dateTime('date_send')->nullable();
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('password_reset');
    }
}

   


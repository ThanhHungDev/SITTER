<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    
    public function up()
    {
        if (!Schema::hasTable('schedules')) {
            
            Schema::create('schedules', function (Blueprint $table) {
                $table->increments('id');
                $table->unsignedInteger('user_id')->unsigned();
                $table->foreign('user_id')->references('id')->on('users')
                ->onDelete('CASCADE');
                $table->date('work_date')->nullable();
                $table->timestamp('start')->nullable();
                $table->timestamp('finish')->nullable();
                $table->boolean('overnight')->default(false);
                $table->string('type', 125)->nullable();//type_working , type save eg:,1,2,
                $table->integer('status')->default(0);
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
        Schema::dropIfExists('schedules');
    }
}


<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDateBooking extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('date_bookings', function (Blueprint $table) {
            $table->id();
            
            $table->unsignedInteger('booking_id')->unsigned();
            $table->foreign('booking_id')->references('id')->on('bookings')
            ->onDelete('CASCADE');
            $table->date('work_date')->nullable();
            $table->time('start')->nullable();
            $table->time('finish')->nullable();
            $table->string('type', 125)->nullable();//type_working , giữ trẻ hay giúp việc hay cả 2
            $table->string('salary', 100)->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('date_bookings');
    }
}

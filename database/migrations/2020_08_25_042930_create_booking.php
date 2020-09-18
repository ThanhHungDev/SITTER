<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBooking extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('bookings')) {
            
            Schema::create('bookings', function (Blueprint $table) {
                $table->increments('id');
                $table->unsignedInteger('employer_id')->unsigned();
                $table->foreign('employer_id')->references('id')->on('users')
                ->onDelete('CASCADE');
                $table->unsignedInteger('sitter_id')->unsigned();
                $table->foreign('sitter_id')->references('id')->on('users')
                ->onDelete('CASCADE');
                $table->integer('status')->default(0); /// status accept, cancel of row
                $table->integer('sitter_accept')->default(0);
                $table->integer('employer_accept')->default(0);
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
        Schema::dropIfExists('bookings');
    }
}

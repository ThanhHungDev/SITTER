<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrders extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('booking_id')->unsigned();
            $table->foreign('booking_id')->references('id')->on('bookings')
                ->onDelete('CASCADE');
            $table->string('salary', 100)->default('0');
            $table->string('diff_time', 100)->default('0');
            $table->string('price', 100)->default('0');
            $table->string('vat', 100)->default('0');
            $table->string('fee_stripe', 100)->default('0');
            $table->string('profit_sitter', 100)->default('0');
            $table->string('profit_employer', 100)->default('0');// 20% của giá tiền * giờ 
            $table->integer('status')->default(0);
            $table->text('note')->nullable();
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
        Schema::dropIfExists('orders');
    }
}

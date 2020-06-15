<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TokenRefeshesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('token_refeshes')) {
            
            Schema::create('token_refeshes', function (Blueprint $table) {
                $table->increments('id');
                $table->unsignedInteger('user_id')->unsigned();
                $table->foreign('user_id')->references('id')->on('users')
                ->onDelete('CASCADE');
                $table->string('token', 255)->nullable();
                $table->text('detect')->nullable();
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
        Schema::dropIfExists('token_refeshes');
    }
}
  
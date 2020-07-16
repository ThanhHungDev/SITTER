<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSittersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sitters', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')
                ->onDelete('CASCADE');
            
            $table->string('age', 5)->nullable();
            $table->string('pref')->nullable();
            $table->string('city')->nullable();
            $table->integer('kid_age')->nullable();
            $table->integer('kid_qty')->nullable();
            $table->boolean('exp_parenting')->nullable();
            $table->boolean('exp_sitter')->nullable();
            $table->time('time_support')->nullable();
            $table->text('self_introduce')->nullable();
            $table->text('service_introduce')->nullable();
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
        Schema::dropIfExists('sitters');
    }
}

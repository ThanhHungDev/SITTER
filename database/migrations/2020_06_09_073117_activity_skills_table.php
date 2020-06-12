<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ActivitySkillsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('activity_skills')) {
            
            Schema::create('activity_skills', function (Blueprint $table) {
                $table->increments('id');
                $table->unsignedInteger('user_id')->unsigned();
                $table->foreign('user_id')->references('id')->on('users')
                ->onDelete('CASCADE');
                $table->unsignedInteger('skill_id')->unsigned();
                $table->foreign('skill_id')->references('id')->on('skills')
                ->onDelete('CASCADE');
                $table->boolean('deleted')->default(false);
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
        Schema::dropIfExists('activity_skills');
    }
}

  

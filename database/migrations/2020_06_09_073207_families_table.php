<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class FamiliesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('families')) {
            
            Schema::create('families', function (Blueprint $table) {
                $table->increments('id');
                $table->unsignedInteger('id_profile')->unsigned();
                $table->foreign('id_profile')->references('id')->on('employer_profiles')
                ->onDelete('CASCADE');
                $table->string('first_name', 255)->nullable();
                $table->string('last_name', 255)->nullable();
                $table->string('first_name_furigana', 255)->nullable();
                $table->string('last_name_furigana', 255)->nullable();
                $table->date('birth_date')->nullable();
                $table->integer('gender')->default(0); 
                $table->boolean('allergic')->default(false);
                $table->boolean('chronic')->default(false);
                $table->integer('type')->nullable(); /// mapping type wife, husband, child ...
                $table->string('remark')->nullable();
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
        Schema::dropIfExists('families');
    }
}

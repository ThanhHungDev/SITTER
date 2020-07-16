<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ExperiencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('experiences')) {
            
            Schema::create('experiences', function (Blueprint $table) {
                $table->increments('id');
                $table->string('name', 100);
                $table->integer('type')->default(1);
                $table->text('remark')->nullable();
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
        Schema::dropIfExists('experiences');
    }
}

   
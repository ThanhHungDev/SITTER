<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SitterProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('sitter_profiles')) {

            Schema::create('sitter_profiles', function (Blueprint $table) {
                $table->increments('id');
                $table->unsignedInteger('user_id')->unsigned();
                $table->foreign('user_id')->references('id')->on('users')
                ->onDelete('CASCADE');
                $table->integer('type_upload');
                $table->string('contact_name', 255)->nullable();
                $table->string('contact_address', 255)->nullable();
                $table->string('contact_phone', 20)->nullable();
                $table->string('contact_relationship', 255)->nullable();
                $table->boolean('publish')->default(false);
                $table->boolean('deleted')->default(false);
                $table->text('remark')->nullable();
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
        Schema::dropIfExists('sitter_profiles');
    }
}



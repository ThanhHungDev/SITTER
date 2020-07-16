<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('users')) {
  
            Schema::create('users', function (Blueprint $table) {
                $table->increments('id');
                $table->string('avatar')->nullable();
                $table->string('email')->unique();
                $table->string('password');

                $table->string('first_name', 255)->nullable();
                $table->string('last_name', 255)->nullable();
                $table->string('first_name_furigana', 255)->nullable();
                $table->string('last_name_furigana', 255)->nullable();
                $table->date('birth_date');
                $table->integer('gender')->default(0); /// enum not boolean
                $table->string('post_code', 20)->nullable();
                $table->string('pref', 100)->nullable();
                $table->string('town', 100)->nullable();
                $table->string('address', 255 )->nullable();
                $table->string('phone', 20)->nullable();
                $table->integer('role_id');
                $table->boolean('online')->default(0);
                $table->string('socket_id')->nullable();
                $table->string('token_verify')->nullable();
                $table->boolean('active')->default(false);
                $table->boolean('deleted')->default(false);
                
                $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}



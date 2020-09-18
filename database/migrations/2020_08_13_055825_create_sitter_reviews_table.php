<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSitterReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sitter_reviews', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('sitter_id')->unsigned();
            $table->foreign('sitter_id')->references('id')->on('users')
            ->onDelete('CASCADE');
            $table->unsignedInteger('employer_id');
            $table->text('comment', 255);
            $table->float('rate', 2, 1);
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
        Schema::dropIfExists('sitter_reviews');
    }
}

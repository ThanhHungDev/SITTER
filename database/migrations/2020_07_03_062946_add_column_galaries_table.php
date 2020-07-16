<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnGalariesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('galaries', function (Blueprint $table) {
            if (!Schema::hasColumn('name', 'path')) {
                $table->string('name')->nullable();
                $table->string('path')->nullable();
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('galaries', function (Blueprint $table) {
            $table->dropColumn('name')->nullable();
            $table->dropColumn('path')->nullable();
        });
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeSittersTableColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sitters', function (Blueprint $table) {
            $table->renameColumn('kid_age', 'kid_age_start');
            $table->integer('kid_age_end')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sitters', function (Blueprint $table) {
            $table->renameColumn('kid_age_start', 'kid_age');
            $table->dropColumn('kid_age_end');
        });
    }
}

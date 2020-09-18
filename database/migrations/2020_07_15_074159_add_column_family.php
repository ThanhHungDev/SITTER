<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnFamily extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('families', function (Blueprint $table) {
            if (!Schema::hasColumn('families', 'allergic_note')) {
                $table->text('allergic_note')->nullable();
            }
            if (!Schema::hasColumn('families', 'chronic_note')) {
                $table->text('chronic_note')->nullable();
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
        Schema::table('families', function (Blueprint $table) {
            $table->dropColumn('allergic_note')->nullable();
            $table->dropColumn('chronic_note')->nullable();
        });
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnBooking extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasColumn('bookings', 'date_cancel')) {
            Schema::table('bookings', function (Blueprint $table) {
                $table->timestamp('date_cancel')->nullable();
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
        if (Schema::hasColumn('bookings', 'date_cancel')) {
            Schema::table('bookings', function (Blueprint $table) {
                $table->dropColumn('date_cancel');
            });
        }
    }
}

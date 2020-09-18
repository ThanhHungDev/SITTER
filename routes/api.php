<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::post('/upload','API\BaseController@uploadFile')->name('UPLOAD_FILE');
Route::post('/remove-file','API\BaseController@removeFile')->name('REMOVE_FILE');


Route::group([ 'prefix'=>'/v1' ], function () {
    // Lấy danh sách booking
    Route::get('bookings', 'Api\BookingController@index')->name('bookings.index');

    // Lấy thông tin booking theo id
    Route::get('bookings/{id}', 'Api\BookingController@show')->name('bookings.show');

    // Thêm booking mới
    Route::post('bookings', 'Api\BookingController@store')->name('bookings.store');

    // Cập nhật thông tin booking theo id
    # Sử dụng put nếu cập nhật toàn bộ các trường
    Route::put('bookings/{id}', 'Api\BookingController@update')->name('bookings.update');
    # Sử dụng patch nếu cập nhật 1 vài trường
    Route::patch('bookings/{id}', 'Api\BookingController@update')->name('bookings.update');

    // Xóa bookings theo id
    Route::delete('bookings/{id}', 'Api\BookingController@destroy')->name('bookings.destroy');

    Route::group([ 'prefix'=>'/users' ], function () {
        //{id}/bookings
        // Lấy danh sách booking theo user 
        Route::get('/{id}/bookings', 'Api\BookingController@userBooking')->name('user.bookings.index');
    });
});

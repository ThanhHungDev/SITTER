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

    Route::get('/wplace-list','API\BaseController@getWPlaceList')->name('base.wplace');
    Route::get('/jp-pref','API\BaseController@jpPrefectures')->name('base.jpprefectures');
    Route::post('/jp-postal','API\BaseController@jpPostal')->name('base.jppostal');
    Route::post('/contact','API\BaseController@contact')->name('base.contact');

    Route::group([ 'prefix'=>'/sitters' ], function () {
        Route::get('/list','API\SittersController@getSitterList')->name('sitters.list');
        Route::get('/exps','API\SittersController@getExps')->name('sitters.exps');
        Route::get('/skills','API\SittersController@getSkills')->name('sitters.skills');
        Route::get('/profile','API\SittersController@profile')->name('sitters.profile');
        Route::get('/item-search','API\SittersController@getItemSearch')->name('sitters.item.search');
        Route::post('/search','API\SittersController@searchSitters')->name('sitters.search');
        Route::post('/register','API\SittersController@register')->name('sitters.register');
        Route::post('/login','API\SittersController@login')->name('sitters.login');
        Route::group(['middleware' => 'auth:api', ], function() {
            Route::get('/logout','API\SittersController@logout')->name('sitters.logout');
        });
    });

    Route::group([ 'prefix'=>'/employer' ], function () {
        Route::get('/sitters-booked','API\EmployerController@sittersBooked')->name('employer.sitters.booked');
        Route::post('/register','API\EmployerController@register')->name('employer.register');
        Route::post('/login','API\EmployerController@login')->name('employer.login');
        Route::group(['middleware' => 'auth:api', ], function() {
            Route::get('/logout','API\EmployerController@logout')->name('employer.logout');
        });
    });

});

Route::group(['prefix' => 'sitter'], function() {
    Route::get('/bank-code', 'API\SittersController@bankCode')->name('BANK_CODE');
    Route::get('/branch-code', 'API\SittersController@branchCode')->name('BRANCH_CODE');
});

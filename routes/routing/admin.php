<?php 
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin'], function () {

    Route::get('/login','Admin\LoginController@login')->name('ADMIN_LOGIN');
    Route::post('/login','Admin\LoginController@postLogin')->name('ADMIN_POST_LOGIN');
    Route::get('/logout','Admin\LoginController@logout')->name('ADMIN_LOGOUT');

    Route::group(['prefix' => '/', 'middleware' => 'ADMIN_LOGGED'], function () {
        Route::get('/','Admin\AdminController@index')->name('ADMIN_SITTER');
        Route::get('/detail-sitter/{id}','Admin\AdminController@ajaxDetailSitter')->name('ADMIN_SITTER_AJAX_VIEW');
        Route::post('/update-publish-sitter','Admin\AdminController@ajaxUpdatePublishSitter')->name('ADMIN_SITTER_AJAX_UPDATE_PUBLISH');
        Route::post('/delete-sitter','Admin\AdminController@ajaxUserDelete')->name('ADMIN_SITTER_AJAX_DELETE');
        Route::post('/accept-sitter','Admin\AdminController@ajaxUserAccept')->name('ADMIN_SITTER_AJAX_ACCEPT');
        Route::get('/employers','Admin\AdminController@employers')->name('ADMIN_EMPLOYERS');
        Route::post('/accept-employer','Admin\AdminController@ajaxCensorAccount')->name('ADMIN_EMPLOYER_AJAX_ACCEPT');
        Route::get('/chat','Admin\AdminController@chat')->name('ADMIN_CHAT');
        Route::get('/support','Admin\AdminController@support')->name('ADMIN_SUPPORT');
        Route::get('/message-reader/{id}/{channel?}','Admin\AdminController@messageReader')->name('ADMIN_READ_MESSAGE');
        Route::post('/ajax-get-family','Admin\AdminController@ajaxGetFamily')->name('ADMIN_AJAX_GET_FAMILY');
        Route::post('/delete-employer','Admin\AdminController@ajaxUserDelete')->name('ADMIN_AJAX_EMPLOYER_DELETE');
        Route::post('/send-email-sitter','Admin\AdminController@ajaxListSitterSendLink')->name('ADMIN_AJAX_EMPLOYER_SEND_SITTER');
        Route::get('/list-booking','Admin\AdminController@listBooking')->name('ADMIN_LIST_BOOKING');
        Route::get('/ajax-info-employer/{id}','Admin\AdminController@ajaxInfoEmployer')->name('AJAX_INFO_EMPLOYER');
        Route::get('/ajax-info-sitter/{id}','Admin\AdminController@ajaxInfoSitter')->name('AJAX_INFO_SITTER');
        Route::post('/ajax-booking-cancel','Admin\AdminController@ajaxBookingCancelByAdmin')->name('AJAX_BOOKING_CANCEL_ADMIN');
        Route::get('/info-sitter/{id}','Admin\AdminController@infoSitter')->name('INFO_SITTER');
        Route::get('/info-employer/{id}','Admin\AdminController@infoEmployer')->name('INFO_EMPLOYER');
        Route::get('/test-refund','Admin\AdminController@refundPayment')->name('testRefund');
        Route::get('/reviews','Admin\AdminController@listReviews')->name('ADMIN_LIST_REVIEWS');
        Route::post('/delete-review','Admin\AdminController@ajaxDeleteReview')->name('ADMIN_AJAX_DELETE_REVIEW');

        /** new thread for crontab linux */
        Route::get("/test-cron", 'Admin\AdminController@testCrontab');
    });
});
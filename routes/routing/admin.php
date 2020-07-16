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
        Route::get('/chat','Admin\AdminController@chat')->name('ADMIN_CHAT');
        Route::get('/support','Admin\AdminController@support')->name('ADMIN_SUPPORT');
        Route::get('/message-reader/{id}/{channel?}','Admin\AdminController@messageReader')->name('ADMIN_READ_MESSAGE');
        Route::post('/ajax-get-family','Admin\AdminController@ajaxGetFamily')->name('ADMIN_AJAX_GET_FAMILY');
        Route::post('/delete-employer','Admin\AdminController@ajaxUserDelete')->name('ADMIN_AJAX_EMPLOYER_DELETE');
    });
});
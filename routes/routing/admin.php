<?php 
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin'], function () {

    Route::get('/login','LoginController@login')->name('ADMIN_LOGIN');
    Route::post('/login','LoginController@postLogin')->name('ADMIN_POST_LOGIN');
    Route::get('/logout','LoginController@logout')->name('ADMIN_LOGOUT');

    Route::group(['prefix' => '/', 'middleware' => 'CHECK_ADMIN_LOGIN'], function () {

        Route::get('/dashboard','AdminController@dashboard')->name('ADMIN_DASHBOARD');

    });
});
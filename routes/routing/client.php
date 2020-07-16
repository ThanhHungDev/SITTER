<?php 
use Illuminate\Support\Facades\Route;

Route::get('/404', function(){
    echo 'ページが見つかりません';
})->name('CLIENT_404');

Route::get('/','Client\TopPageController@index')->name('TOP_PAGE');
Route::get('/search','Client\SearchController@searchSitters')->name('search-sitters');
Route::get('/ajax-load-items','Client\TopPageController@ajaxLoadItems')->name('ajax-load-items');
Route::get('/advance-search','Client\SearchController@advanceSearch')->name('advance-search');
Route::get('/calendar','Client\TopPageController@calendar')->name('calendar');
Route::get('/calendar-view','Client\TopPageController@calendarViewer')->name('calendar_view');
Route::get('/view-sitter/{id}','Client\TopPageController@viewSitter')->name('VIEW_SITTER');

Route::group(['prefix' => 'sitter'], function() {
    Route::get('/login','Client\Sitter\AuthController@login')->name('SITTER_LOGIN');
    Route::post('/login','Client\Sitter\AuthController@postLogin')->name('SITTER_POST_LOGIN');
    Route::get('/logout','Client\Sitter\AuthController@logout')->name('SITTER_LOGOUT');
    Route::get('/forgot','Client\Sitter\AuthController@forgot')->name('SITTER_FORGOT');
    Route::post('/forgot','Client\Sitter\AuthController@postForgot')->name('SITTER_POST_FORGOT');
    Route::get('/register-comfirm','Client\Sitter\AuthController@registerComfirm')->name('SITTER_REGISTER_COMFIRM');
    Route::get('/renew-password','Client\Sitter\AuthController@renewPassword')->name('SITTER_RENEW_PASSWORD');
    Route::post('/renew-password','Client\Sitter\AuthController@postRenewPassword')->name('SITTER_POST_RENEW_PASSWORD');
    Route::get('/register','Client\Sitter\RegisterController@register')->name('SITTER_REGISTER');
    Route::post('/register','Client\Sitter\RegisterController@postRegister')->name('SITTER_POST_REGISTER');
    Route::get('/register-success','Client\Sitter\RegisterController@registerSuccess')->name('SITTER_REGISTER_SUCCESS');
    Route::get('/register-parent','Client\Sitter\RegisterController@registerParent')->name('SITTER_REGISTER_NEXT_STEP');
    Route::post('/register-parent','Client\Sitter\RegisterController@postRegisterParent')->name('SITTER_POST_REGISTER_NEXT_STEP');

    Route::group(['middleware' => 'SITTER_LOGGED'], function() {
        Route::get('/chat/{id?}','Client\Sitter\SitterController@chat')->name('SITTER_CHAT');
        Route::get('/','Client\Sitter\SitterController@index')->name('SITTER_MYPAGE');
        Route::get('/edit','Client\Sitter\SitterController@editMypage')->name('SITTER_EDIT');
        Route::post('/edit','Client\Sitter\SitterController@postEditMypage')->name('SITTER_POST_EDIT');
        Route::post('/remove-avatar','Client\Sitter\SitterController@ajaxRemoveAvatar')->name('SITTER_AJAX_REMOVE_AVATAR');
        Route::post('/upload-avatar','Client\Sitter\SitterController@ajaxUploadAvatar')->name('SITTER_AJAX_ADD_AVATAR');
        Route::get('/load-avatars','Client\Sitter\SitterController@ajaxLoadAvatars')->name('SITTER_AJAX_LOAD_AVATAR');
        Route::get('/publish-profile','Client\Sitter\SitterController@ajaxPublishProfile')->name('SITTER_AJAX_PUBLISH_PROFILE');
    });
});

Route::group(['prefix' => 'employer'], function() {

    Route::get('/register','Client\employer\RegisterController@register')->name('EMPLOYER_REGISTER');
    Route::post('/register','Client\employer\RegisterController@store')->name('EMPLOYER_POST_REGISTER');
    Route::get('/register-comfirm','Client\employer\RegisterController@registerComfirm')->name('EMPLOYER_REGISTER_COMFIRM');
    Route::get('/register-homie','Client\employer\RegisterController@registerParent')->name('EMPLOYER_REGISTER_PARENT');
    Route::post('/register-homie','Client\employer\RegisterController@postRegisterParent')->name('EMPLOYER_POST_REGISTER_PARENT');
    Route::get('/register-success','Client\employer\RegisterController@registerSuccess')->name('EMPLOYER_REGISTER_SUCCESS');
    Route::get('/login/{route?}/{param?}','Client\employer\LoginController@login')->name('EMPLOYER_LOGIN');
    Route::post('/login','Client\employer\LoginController@postLogin')->name('EMPLOYER_POST_LOGIN');
    Route::get('/logout','Client\employer\LoginController@logout')->name('EMPLOYER_LOGOUT');
    Route::get('/forgot','Client\employer\RegisterController@forgot')->name('EMPLOYER_FORGOT');
    Route::post('/forgot','Client\employer\RegisterController@postForgot')->name('EMPLOYER_POST_FORGOT');
    Route::get('/renew-password','Client\employer\RegisterController@renewPassword')->name('EMPLOYER_RENEW_PASSWORD');
    Route::post('/renew-password','Client\employer\RegisterController@postRenewPassword')->name('EMPLOYER_POST_RENEW_PASSWORD');
    
    Route::group(['middleware' => 'EMPLOYER_LOGGED'], function() {
        Route::get('/','Client\employer\EmployerController@myPage')->name('EMPLOYER_MYPAGE');
        Route::get('/chat/{id?}','Client\employer\EmployerController@chat')->name('EMPLOYER_CHAT');
        Route::get('/edit','Client\employer\EmployerController@editProfile')->name('EMPLOYER_EDIT_PROFILE');
        Route::post('/edit','Client\employer\EmployerController@postEditProfile')->name('EMPLOYER_POST_EDIT_PROFILE');
        Route::post('/ajax-delete-member','Client\employer\EmployerController@ajaxDeleteMember')->name('AJAX_DELETE_MEMBER_FAMILY');
        Route::post('/upload-avatar','Client\employer\EmployerController@ajaxUploadAvatar')->name('AJAX_UPLOAD_AVATAR');
    });
});


Route::get('/admin','Admin\AdminController@index')->name('ADMIN-INDEX');
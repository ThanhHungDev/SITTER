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
Route::get('/view-sitter/{id?}','Client\TopPageController@viewSitter')->name('VIEW_SITTER');
Route::get('/view-employer/{id?}','Client\employer\EmployerController@detail')->name('VIEW_EMPLOYER');
Route::get('/site-policy','Client\TopPageController@sitePolicy')->name('SITEPOLICY');
Route::get('/privacy-policy','Client\TopPageController@privacyPolicy')->name('PRIVACYSITEPOLICY');
Route::get('/tokuteisho','Client\TopPageController@tokuteisho')->name('TOKUTEISHO');
Route::get('/reviews','Client\TopPageController@ajaxLoadreviews')->name('AJAX_LOAD_REVIEWS');
Route::get('/contact','Client\ContactPageController@contact')->name('VIEW_CONTACT_PAGE');
Route::post('/contact','Client\ContactPageController@sendEmail')->name('POST_CONTACT');
Route::get('/contact-success/{tittle?}/{ms1?}','Client\ContactPageController@contactSuccess')->name('CONTACT_SUCCESS');

Route::group(['prefix' => 'sitter'], function() {
    Route::get('/login','Client\Sitter\AuthController@login')->name('SITTER_LOGIN');
    Route::post('/login','Client\Sitter\AuthController@postLogin')->name('SITTER_POST_LOGIN');
    Route::get('/logout','Client\Sitter\AuthController@logout')->name('SITTER_LOGOUT');
    Route::get('/forgot','Client\Sitter\AuthController@forgot')->name('SITTER_FORGOT');
    Route::post('/forgot','Client\Sitter\AuthController@postForgot')->name('SITTER_POST_FORGOT');
    Route::get('/renew-password','Client\Sitter\AuthController@renewPassword')->name('SITTER_RENEW_PASSWORD');
    Route::post('/renew-password','Client\Sitter\AuthController@postRenewPassword')->name('SITTER_POST_RENEW_PASSWORD');
    Route::get('/renew-confirm','Client\Sitter\AuthController@renewConfirm')->name('SITTER_RENEW_CONFIRM');
    Route::get('/register','Client\Sitter\RegisterController@register')->name('SITTER_REGISTER');
    Route::post('/register','Client\Sitter\RegisterController@postRegister')->name('SITTER_POST_REGISTER');
    Route::get('/register-success','Client\Sitter\RegisterController@registerSuccess')->name('SITTER_REGISTER_SUCCESS');
    Route::get('/register-confirm','Client\Sitter\RegisterController@registerConfirm')->name('SITTER_REGISTER_CONFIRM');
    Route::get('/register-parent','Client\Sitter\RegisterController@registerParent')->name('SITTER_REGISTER_NEXT_STEP');
    Route::post('/register-parent','Client\Sitter\RegisterController@postRegisterParent')->name('SITTER_POST_REGISTER_NEXT_STEP');
    Route::get('/create-stripe-account','Client\Sitter\RegisterController@regStripeAccount')->name('SITTER_REG_STRIPE_ACC');
    Route::get('/register-stripe-success/{stripe_acc_id}','Client\Sitter\RegisterController@registerStripeSuccess')->name('SITTER_REGISTER_STRIPE_SUCCESS');
    Route::get('/payout','Client\Sitter\RegisterController@payoutTest')->name('SITTER_PAYOUT');
    Route::get('/reauth','Client\Sitter\RegisterController@reauth')->name('SITTER_REAUTH');
    Route::get('/payment','Client\Sitter\RegisterController@payment')->name('SITTER_payment');

    Route::group(['middleware' => 'SITTER_LOGGED'], function() {
        Route::get('/chat/{id?}','Client\Sitter\SitterController@chat')->name('SITTER_CHAT');
        Route::get('/','Client\Sitter\SitterController@index')->name('SITTER_MYPAGE');
        Route::get('/edit','Client\Sitter\SitterController@editMypage')->name('SITTER_EDIT');
        Route::post('/edit','Client\Sitter\SitterController@postEditMypage')->name('SITTER_POST_EDIT');
        Route::post('/remove-avatar','Client\Sitter\SitterController@ajaxRemoveAvatar')->name('SITTER_AJAX_REMOVE_AVATAR');
        Route::post('/upload-avatar','Client\Sitter\SitterController@ajaxUploadAvatar')->name('SITTER_AJAX_ADD_AVATAR');
        Route::get('/load-avatars','Client\Sitter\SitterController@ajaxLoadAvatars')->name('SITTER_AJAX_LOAD_AVATAR');
        Route::get('/publish-profile','Client\Sitter\SitterController@ajaxPublishProfile')->name('SITTER_AJAX_PUBLISH_PROFILE');
        Route::get('/load-list-bookings','Client\Sitter\SitterController@ajaxLoadListBookings')->name('SITTER_AJAX_LOAD_LIST_BOOKINGS');
        Route::get('/stripe-account','Client\Sitter\SitterController@getStripeAccount')->name('SITTER_STRIPE_ACC');
    });
});

Route::group(['prefix' => 'employer'], function() {

    Route::get('/register','Client\employer\RegisterController@register')->name('EMPLOYER_REGISTER');
    Route::post('/register','Client\employer\RegisterController@store')->name('EMPLOYER_POST_REGISTER');
    Route::get('/register-confirm/{tittle?}/{ms1?}/{ms2?}','Client\employer\RegisterController@registerComfirm')->name('EMPLOYER_REGISTER_COMFIRM');
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
    Route::get('/collect-card','Client\employer\RegisterController@collectCard')->name('EMPLOYER_COLLECT_CARD');
    Route::post('/collect-card','Client\employer\RegisterController@postCollectCard')->name('EMPLOYER_POST_COLLECT_CARD');
    Route::get('/collect-card-success','Client\employer\RegisterController@registerPaymentSuccess')->name('EMPLOYER_COLLECT_CARD_SUCCESS');

    Route::group(['middleware' => 'EMPLOYER_LOGGED'], function() {
        Route::get('/','Client\employer\EmployerController@myPage')->name('EMPLOYER_MYPAGE');
        Route::get('/chat/{id?}','Client\employer\EmployerController@chat')->name('EMPLOYER_CHAT');
        Route::get('/edit','Client\employer\EmployerController@editProfile')->name('EMPLOYER_EDIT_PROFILE');
        Route::post('/edit','Client\employer\EmployerController@postEditProfile')->name('EMPLOYER_POST_EDIT_PROFILE');
        Route::post('/ajax-delete-member','Client\employer\EmployerController@ajaxDeleteMember')->name('AJAX_DELETE_MEMBER_FAMILY');
        Route::post('/upload-avatar','Client\employer\EmployerController@ajaxUploadAvatar')->name('AJAX_UPLOAD_AVATAR');
        Route::post('/upload-galleries','Client\employer\EmployerController@ajaxUploadGalleries')->name('AJAX_UPLOAD_GALLERIES');
        Route::get('/review-sitter','Client\employer\EmployerController@reviewSitter')->name('EMPLOYER_REVIEW');
        Route::post('/review-sitter','Client\employer\EmployerController@postReviewSitter')->name('EMPLOYER_POST_REVIEW');
        Route::get('/booking-sitter','Client\employer\EmployerController@ajaxBookingSitter')->name('AJAX_EMPLOYER_BOOKING_SITTER');
        Route::get('/edit-card','Client\employer\EmployerController@editPaymentMethod')->name('EMPLOYER_EDIT_CARD');
        Route::post('/edit-card','Client\employer\EmployerController@postEditPaymentMethod')->name('EMPLOYER_POST_EDIT_CARD');
    });
});


Route::get('/admin','Admin\AdminController@index')->name('ADMIN-INDEX');

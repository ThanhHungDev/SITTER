<?php 
use Illuminate\Support\Facades\Route;

Route::get('/404', function(){
    echo 'ページが見つかりません';
})->name('CLIENT_404');

Route::get('/','Client\TopPageController@index')->name('TOP_PAGE');



Route::group(['prefix' => 'sitter'], function() {

    Route::get('/register','Client\SitterController@register')->name('SITTER_REGISTER');
    Route::post('/register','Client\SitterController@postRegister')->name('SITTER_POST_REGISTER');
    Route::get('/login','Client\SitterController@login')->name('SITTER_LOGIN');
    Route::post('/login','Client\SitterController@postLogin')->name('SITTER_POST_LOGIN');

    Route::get('/chat','Client\SitterController@chat')->name('CHAT_PAGE');

    Route::group(['middleware' => 'CANDIDATE_LOGGED'], function() {

        Route::get('/mypage','Client\SitterController@myPage')->name('CANDIDATE_MYPAGE');
    });
});
Route::group(['prefix' => 'employer'], function() {

    Route::get('/register','Client\EmployerController@register')->name('EMPLOYER_REGISTER');
    Route::post('/register','Client\EmployerController@postRegister')->name('EMPLOYER_POST_REGISTER');
    Route::get('/register_parent','Client\EmployerController@registerParent')->name('EMPLOYER_REGISTER_PARENT');
    Route::post('/register_parent/{token}','Client\EmployerController@postRegisterParent')->name('EMPLOYER_POST_REGISTER_PARENT');
    Route::get('/login','Client\EmployerController@login')->name('EMPLOYER_LOGIN');
    Route::post('/login','Client\EmployerController@postLogin')->name('EMPLOYER_POST_LOGIN');
    
    Route::group(['middleware' => 'EMPLOYER_LOGGED'], function() {
        Route::get('/mypage','Client\EmployerController@myPage')->name('EMPLOYER_MYPAGE');
    });
});
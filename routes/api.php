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

Route::prefix('auth')->group( function() {
    Route::post('register', 'Api\AuthController@register');
    Route::post('verify', 'Api\AuthController@verifyOtp');
    Route::post('login', 'Api\AuthController@login');

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('logout', 'Api\AuthController@logout');
    });
});

Route::prefix('user')->group( function() {
    Route::middleware('auth:api')->group(function() {
        Route::middleware(['scope:subscriber'])->group(function() {
            Route::get('subscriber', 'Api\SubscribersController@index');
            Route::get('subscriber/profile', 'Api\SubscribersController@profile');
            Route::put('subscriber/profile/update', 'Api\SubscribersController@profileUpdate');
        });
        Route::middleware(['scope:administrator'])->group(function() {
            Route::get('administrator', 'Api\AdministratorsController@index');
        });
    });
});

Route::middleware('auth:api')->group(function() {
    Route::get('products', 'Api\ProductsController@index');
    Route::get('products/{id}', 'Api\ProductsController@show');
    Route::get('category', 'Api\ProductsController@category');
    Route::get('category/{id}', 'Api\ProductsController@showCategory');
});
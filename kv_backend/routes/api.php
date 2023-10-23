<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('categories')->group(function(){
    Route::get('/',[\App\Http\Controllers\CategoryController::class,'index']);
    Route::post('/create',[\App\Http\Controllers\CategoryController::class,'store']);
    Route::delete('/delete/{id}',[\App\Http\Controllers\CategoryController::class,'delete']);
});

Route::prefix('characters')->group(function(){
    Route::get('/{id}',[\App\Http\Controllers\CharacterController::class,'index']);
    Route::post('/create',[\App\Http\Controllers\CharacterController::class,'store']);
    Route::delete('/delete/{id}',[\App\Http\Controllers\CharacterController::class,'delete']);
});

Route::prefix('sounds')->group(function(){
    Route::get('/{id}',[\App\Http\Controllers\SoundController::class,'index']);
    Route::post('/create',[\App\Http\Controllers\SoundController::class,'store']);
    Route::delete('/delete/{id}',[\App\Http\Controllers\SoundController::class,'delete']);
});

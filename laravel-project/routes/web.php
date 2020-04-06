<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function(){
    return view('welcome');
});

Route::get('/another_page',function(){
    return view('another_page');
});

Route::get('/examples',function(){
    return view('examples');
});

Route::get('/page',function(){
    return view('page');
});

Route::get('/contact',function(){
    return view('contact');
});
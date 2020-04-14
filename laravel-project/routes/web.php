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

Route::get('/test/{post}', function($post){
    return view('articles.show',['post'=>$post]);
});

Route::get('/another_page',function(){
    return view('another_page');
});

Route::get('/page',function(){
    return view('page');
});

Route::get('/contact',function(){
    return view('contact');
});

Route::get('/articles',function(){
    return View::make('articles.index', [
        'articles' => App\Articles::latest()->get()
    ]);
});

Route::get('/articles','ArticlesController@index')->name('articles.index');
Route::post('/articles','ArticlesController@store');
Route::get('/articles/create', 'ArticlesController@create');
Route::get('/articles/{articles}','ArticlesController@show')->name('articles.show');
Route::get('/articles/{article}/edit','ArticlesController@edit');
Route::put('/articles/{article}','ArticlesController@update');



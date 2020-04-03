<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/',function (){
    $name = request('name');
    return view('welcome');
});

Route::get('posts/{post}', function($post){
    $posts=[
        'my-first-post' =>'My First blog post',
        'my-second-post' =>'This is my second blog post'
    ];

    if(! array_key_exists($post,$posts)){
        abort(404,'Sorry that post does not exists');
    }
    return view('post',[
        'post'=>$posts[$post]
    ]);
});

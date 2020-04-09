<?php

use Faker\Generator as Faker;

$factory->define(App\Articles::class, function (Faker $faker) {
    return [
        //
        'user_id'=>factory(\App\User::class),
        'title'=>$faker->sentence(),
        'excerpt'=>$faker->sentence(),
        'body'=>$faker->paragraph()
    ];
});

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Articles extends Model
{
    public function path(){
        return route('articles.show',$this);
    }
    public function tags(){
        return $this->belongsToMany(Tags::class);
    }
}

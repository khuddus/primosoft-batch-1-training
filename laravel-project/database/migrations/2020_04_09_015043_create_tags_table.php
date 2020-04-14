<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tags', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('name');
            $table->timestamps();
        });

        Schema::create('articles_tags',function(Blueprint $table){
            $table->Increments('id');
            $table->unsignedinteger('articles_id');
            $table->unsignedinteger('tags_id');
            $table->timestamps();

            $table->unique(['articles_id','tags_id']);
            $table->foreign('articles_id')->references('id')->on('articles')->onDelete('cascade');
            $table->foreign('tags_id')->references('id')->on('tags')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}

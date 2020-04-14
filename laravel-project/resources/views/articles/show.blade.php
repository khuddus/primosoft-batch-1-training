@extends('layout')
@section('content')
<div class='content'>
    <div class = 'title'>
    <h2>
        {{$articles->title}}
    </h2>
    </div>
    {!! $articles->body !!}
    <p>
        @foreach ($articles->tags as $tag)
            <a href="{{ route('articles.index',['tag'=> $tag->name])}}">
                {{$tag -> name}}
            <a>
        @endforeach
    </p>
</div>
@endsection
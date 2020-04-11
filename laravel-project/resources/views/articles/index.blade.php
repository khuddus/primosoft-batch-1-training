@extends('layout')
@section('content')
@forelse ($articles as $article)
<div class='content'>
    <div class = 'title'>
    <h2>
        <a href="{{$article->path()}}">
            {{$article->title}}
        </a>
    </h2>
    </div>
</div>
@empty
    <p>No relevant articles yet</p>
@endforelse
@endsection
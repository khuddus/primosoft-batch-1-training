@extends('layout')
@section('content')
<div id="wrapper">
    <div id="page" class="container">
        <form method="POST" action="/articles">
            @csrf
            <div>
                <label for="title">Title</label>
                <input type="text" name="title" id="title">
            </div>
            <div>
                <label for="excert">Excert</label>
                <textarea name="excert" id="body" cols="30" rows="10"></textarea>
            </div>
            <div>
                <label for="body">Body</label>
                <textarea name="body" id="body" cols="30" rows="10"></textarea>
            </div>
            <div>
                <label for="tags">Tags</label>
                <select name="tags[]" id="tags" multiple>
                    @foreach($tags as $tag)
                    <option value="{{$tag->id}}">{{$tag->name}}</option>
                    @endforeach
                </select>
            </div>
            <button type="sumbit">Submit</button>
        </form>
    </div>
</div>
@endsection

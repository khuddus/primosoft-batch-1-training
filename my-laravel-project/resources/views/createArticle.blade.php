@extends('layout')
@section('content')
<div>
    <div>
        <form  method="POST" action="/articles">
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
            <button type="sumbit">Submit</button>
        </form>
    </div>
</div>
@endsection

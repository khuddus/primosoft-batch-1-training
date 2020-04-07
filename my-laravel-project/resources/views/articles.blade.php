@extends ('layout')
@section('content')

<div id="wrapper">
	<div id="page" class="container">
		<div id="content">
			@foreach ($articles as $article)
			<div class="title">
				<h2>{{$article->title}}</h2>
			</div>
			<p><img src="images/banner.jpg" alt="" class="image image-full" /> </p>
			<p>{{ $article->excerpt}}</p>
			<p>{{ $article->body}} </p>
			@endforeach
		</div>
	</div>
</div>

@endsection

<?php

namespace App\Http\Controllers;
use App\Tags;
use App\Articles;
use Illuminate\Http\Request;

class ArticlesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(request('tag')){
            $articles = Tags::where('name',request('tag'))->firstOrfail()->articles;
        }
        else{
            $articles = Articles::latest()->get();
        }
        
        return view('articles.index',['articles' => $articles]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('articles.create',[
            'tags' => Tags::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store()
    {
        $this->validateArticle();
        $articles = new Articles(requesr(['title','excerpt','body']));
        $articles->user_id = 1;
        $articles->save();
        $articles->tags()->attach(request('tags'));
        return redirect(route('articles.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function show(Articles $articles)
    {
        return view('articles.show',['articles' => $articles]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Article $article)
    {
        //
        $article->update($this->validateArticle());
        return redirect($article->path());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        //
    }
    protected function validateArticle(){
        return request()->validate([
            'title'=>'required',
            'body' =>'required',
            'excerpt'=>'required',
            'tags'=>'exists:tags,id'
        ])
    }
}

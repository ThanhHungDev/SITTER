@section('title', '404 not found')
@extends('_LAYOUT.index')
@section('content')
    <div class="main main-top main-not-found">
        <div class="container">
            <div class="not-found">
                <h1 class="h1-img">
                    <img src="{{ asset('') }}images/contents/404.svg" alt="404">
                </h1>
            <p class="ttl-not-found">Page not found</p>
                <p class="requested">アクセスしたページは存在しないか、読み込みに失敗しました</p>
                <div class="btn-back">
                <a href="/" class="btn-back-home btn-all">ホームに戻る</a>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('scripts')
@endsection
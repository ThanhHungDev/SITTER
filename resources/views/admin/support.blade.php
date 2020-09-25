
@section('title', 'Sitters Admin')
@section('stylesheets-admin')
    <link rel="stylesheet" href="{{ asset('css/library/jquery-ui.min.css')}}">
@endsection
@extends('admin._LAYOUT.index')

@section('content-admin')
<div class="wrapper-chat">
    <noscript>
        You need to enable JavaScript to run this app.
    </noscript>
    <div style="max-width: 1100px; margin: 50px auto;">

        <div class=""></div>
        <div id="TOKEN_REFESH" data-refesh="{{ $refresh ?? null }}" data-user="{{ Auth::user()->id }}"></div>
        <div id="CHAT_ELEMENT" class="position-relative">loading...</div>
    </div>
</div>
@endsection

@section('scripts-admin')

    <script src="{{ asset('chat/js/vendors~main.index.bundle.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('chat/js/index.bundle.js' . Config::get('app.version')) }}"></script>
@endsection
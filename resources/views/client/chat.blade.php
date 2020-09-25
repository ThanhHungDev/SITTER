@section('title', 'chat page')
@extends('_LAYOUT.index')
@section('content')
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

@section('scripts')
    <script src="{{ asset('chat/js/vendors~main.index.bundle.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('chat/js/index.bundle.js' . Config::get('app.version')) }}"></script>
@endsection
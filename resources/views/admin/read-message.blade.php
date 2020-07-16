
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
    <div style="max-width: 1100px; margin: 0px auto;">

        <div class=""></div>
        <div id="TOKEN_REFESH" 
        data-refesh="{{ $refresh ?? null }}"
        data-channel="{{  $channel ?? null  }}"
        data-id="{{  $id ?? null  }}"
        ></div>
        <div id="CHAT_ELEMENT" class="position-relative">loading...</div>
    </div>
</div>
@endsection

@section('scripts-admin')

    <script src="{{ asset('read-chat/js/vendors~main.index.bundle.js') }}"></script>
    <script src="{{ asset('read-chat/js/index.bundle.js') }}"></script>
@endsection
@section('title', 'chat page')
@extends('_LAYOUT.index')
@section('content')
<div class="wrapper-chat">
    <noscript>
        You need to enable JavaScript to run this app.
    </noscript>
    <div id="CHAT_ELEMENT" class="position-relative">loading chat...</div>
</div>

@endsection

@section('scripts')
    <script type="text/javascript" src="{{ asset('/js/jquery.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/app.min.js') }}"></script>
@endsection
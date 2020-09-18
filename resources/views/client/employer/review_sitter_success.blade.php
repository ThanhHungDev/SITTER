@section('title', 'review success')
@extends('_LAYOUT.index')

@section('stylesheets')
    <link href="{{ asset('css/library/rateit.css') }}" rel="stylesheet">
@endsection

@section('content')
<div class="employer">
    <div class="max-width-1080 emp-mypage">
        <div class="body-mypage ">
            <div class="wapper-mypage">
                <h2>あなたのレビューをありがとう</h2>
            </div>
        </div>
    </div>
</div>

@endsection

@section('scripts')
    <script type="text/javascript" src="{{ asset('js/library/jquery.rateit.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/rate.min.js') }}"></script>
@endsection
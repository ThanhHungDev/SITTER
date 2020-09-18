@section('title', 'Sitter Register Success Page')
@extends('_LAYOUT.index')
@section('content')
<div class="sitter-common">
    <div class="sitter-after-register">
        <h1 class="text-center">
            銀行口座の更新が成功しました<br/>
            <a href="{{ route('SITTER_LOGIN') }}">シッターログイン</a>
        </h1>
    </div>
</div>
@endsection
@section('scripts')
    {{-- <script type="text/javascript" src="{{ asset('js/sitter-register-success.min.js') }}"></script> --}}
@endsection

@section('title', 'Sitter Register Success Page')
@extends('_LAYOUT.index')
@section('content')
<div class="sitter-common">
    <div class="sitter-after-register">
        <h1 class="text-center">
            ご登録が完了いたしました。<br/>
            審査結果をご登録いただいたメールアドレスに通知いたします。<br/>
            通知が来るまで今しばらくお待ちください。<br/>
            <a href="/">ホームページ</a>
        </h1>
    </div>
</div>
@endsection
@section('scripts')
    {{-- <script type="text/javascript" src="{{ asset('js/sitter-register-success.min.js') }}"></script> --}}
@endsection

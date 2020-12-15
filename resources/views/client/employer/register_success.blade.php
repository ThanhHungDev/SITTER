@section('title', 'Employer Register Success Page')
@extends('_LAYOUT.index')
@section('content')
<div class="employer-success">
    <div class="max-width-780 sitter-after-register">
        
    {{-- <h2 class="text-center">ご登録ありがとうございます。<a href="{{route('EMPLOYER_LOGIN')}}">こちら</a>からログインしてください。</h2> --}}
        <h2 class="text-center">
            ご登録が完了いたしました。<br/>
            審査結果をご登録いただいたメールアドレスに通知いたします。<br/>
            通知が来るまで今しばらくお待ちください。<br/>
            <a href="/">ホームページ</a> 
        </h2>
    </div>
</div>
@endsection
@section('scripts')
@endsection
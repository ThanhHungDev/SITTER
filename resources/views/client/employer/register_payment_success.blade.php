@section('title', 'Employer Register Payment Success Page')
@extends('_LAYOUT.index')
@section('content')
<div class="sitter-common">
    <div class="max-width-780 sitter-after-register">
        
    {{-- <h2 class="text-center">ご登録ありがとうございます。<a href="{{route('EMPLOYER_LOGIN')}}">こちら</a>からログインしてください。</h2> --}}
        <h2 class="text-center">
            クレジットカード登録が完了いたしました。<br/>
            <a href="{{route('EMPLOYER_LOGIN')}}">利用者ログイン</a> 
        </h2>
    </div>
</div>
@endsection
@section('scripts')
@endsection
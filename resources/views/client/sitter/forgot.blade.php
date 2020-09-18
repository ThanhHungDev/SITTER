@section('title', 'Fogot Password')
@extends('_LAYOUT.index')
@section('content')
<div class="container-forgot">
    <div class="wrapper-forgot">
        <div class="forgot-header">
            <span class="text-medium">ようこそ家政婦さん・ベビーシッタードットコムへ</span>
            <br/>
            <span class="text-none">もっと頼って、ともに育む会社へ</span>
        </div>
        <img class="backround-forgot" src="{{ asset('') }}image/login.jpg">
        <div class="form-main">
            <form action="{{ Route('SITTER_POST_FORGOT') }}" method="POST" class="form-register">
                @csrf
                <div class="form-header">
                    <span>パスワード再発行</span>
                </div>
                <div class="form-body">
                    {{-- mail --}}
                    @if (count($errors) > 0)
                        <div class="alert-danger">
                            @foreach ($errors->all() as $error)
                                <p>{{ $error }}</p>
                            @endforeach
                        </div>
                    @endif
                    <div class="form-row">
                        <div class="group-control form-validate">
                            <input type="text" class="form-control" name='email' placeholder="メールアドレス" value="{{ old('email') }}"/>
                            <div class="form-error">
                                @error('email')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>
                    </div>
                    <div class="form-action">
                        <button type="submit" class="btn-login">
                            送信する
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

@section('scripts')
    <script type="text/javascript" src="{{ asset('js/library/jquery.validate.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/forgot.min.js') }}"></script>    
@endsection
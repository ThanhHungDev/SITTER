@section('title', 'Login')
@extends('_LAYOUT.index')
@section('content')
<div class="container-login">
    
    <div class="wrapper-login">
        <div class="login-header">
            <span class="text-medium">ようこそ〇〇〇〇〇〇〇〇へ</span>
            <br/>
            <span class="text-none">もっと頼って、ともに育む社会へ</span>
        </div>
        <img class="backround-login" src="{{ asset('') }}image/login.jpg">
        <div class="form-main">
            <form action="{{ Route('SITTER_POST_LOGIN') }}" method="POST" class="form-register">
                @csrf
                <div class="form-header">
                    <span>利用者ログイン</span>
                </div>
                <div class="form-body">
                    
                    {{-- mail --}}
                    <div class="form-row">
                        <div class="group-control form-validate">
                            <input type="text" class="form-control" name='email' placeholder="メールアドレス" value="{{ old('email') }}"/>
                            <div class="form-error h-25">
                                @error('email')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>
                    </div>
                    {{-- password --}}
                    <div class="form-row">
                        <div class="group-control form-validate">
                            <input type="password" class="form-control" name='password' placeholder="パスワード" value="{{ old('password') }}"/>
                            <div class="form-error">
                                @error('password')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                                @error('errorlogin')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                                @error('detect')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>
                    </div>
                    {{--Check save password --}}
                    <div class="group-row">
                        <input type="checkbox" class="check-save-password" id="cbt-save-password" name="save-password" {{ old('save-password') ? 'checked': '' }}/>
                        <label for="cbt-save-password">パスワードを保存する</label>
                    </div>
                    <div class="form-action">
                        <input type="hidden" name="detect" id="inp-detect">
                        <a href="{{ Route('SITTER_FORGOT') }}" class="forgot-password">パスワードを忘れたら ></a>
                        <button type="submit" class="btn-login">
                            ログイン
                        </button>
                        <a href="{{ Route('SITTER_REGISTER') }}" class="register-new">新規登録はこちら ></a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

@section('scripts')
    <script type="text/javascript" src="{{ asset('js/library/jquery.validate.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/detect.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/login.min.js') }}"></script>    
@endsection
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Login </title>
    <link rel="icon" href="http://sitters.jp/favicon.ico" type="image/png">
    <link rel="stylesheet" href="{{ asset('css/app.css?'.config('constant.VERSION_CSS'))}}">
</head>
<body>
    <div class="main-wrapper">
        <div class="main-wrapper-header">
            @include ("admin._LAYOUT.partial.header")
        </div>
        <div class="container-login admin">
            <div class="wrapper-login">
                <div class="login-header">
                    <span class="text-medium">ようこそ家政婦さん・ベビーシッタードットコムへ</span>
                    <br/>
                    <span class="text-none">もっと頼って、ともに育む社会へ</span>
                </div>
                <img class="backround-login" src="{{ asset('') }}image/login.jpg">
                <div class="form-main">
                    <form action="{{ Route('ADMIN_POST_LOGIN') }}" method="POST" class="form-register">
                        @csrf
                        <div class="form-header">
                            <span>管理者ログイン</span>
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
                                {{-- <a href="{{ Route('EMPLOYER_FORGOT') }}" class="forgot-password">パスワードを忘れたら ></a> --}}
                                <button type="submit" class="btn-login">
                                    ログイン
                                </button>
                                {{-- <a href="{{ Route('EMPLOYER_REGISTER') }}" class="register-new">新規登録はこちら ></a> --}}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="main-wrapper-footer">
            @include ('admin._LAYOUT.partial.footer')
        </div>
    </div>

    <script type="text/javascript" src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/app.min.js' . Config::get('app.version')) }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/jquery.validate.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/detect.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/login.min.js') }}"></script>
</body>
</html>

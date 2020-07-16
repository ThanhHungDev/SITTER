@section('title', 'Renew Password')
@extends('_LAYOUT.index')
@section('content')
<div class="container-renew">
    <div class="wrapper-renew">
        <div class="renew-header">
            <span class="text-medium">ようこそ〇〇〇〇〇〇〇〇へ</span>
            <br/>
            <span class="text-none">もっと頼って、ともに育む社会へ</span>
        </div>
        <img class="backround-renew" src="{{ asset('') }}image/login.jpg">
        <div class="form-main">
            <form action="{{ Route('EMPLOYER_POST_RENEW_PASSWORD') }}" method="POST" class="form-register">
                @csrf
                <div class="form-header">
                    <span>パスワード再発行</span>
                </div>
                <div class="form-body">
                    {{-- password --}}
                    <div class="form-row">
                        <div class="group-control form-validate">
                            <input type="password" class="form-control" id="password" name='password' placeholder="パスワード" value="{{ old('password') }}"/>
                            <input type="hidden" name="code" value="{{$code}}">
                            <div class="form-error">
                                @error('password')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>
                    </div> 
                    <div class="form-row">
                        <div class="group-control form-validate">
                            <input type="password" class="form-control" name='confirm_password' placeholder="確認のためもう一度入れてください" value="{{ old('confirm_password') }}"/>
                            <div class="form-error">
                                @error('confirm_password')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>
                    </div>
                    <div class="form-action">
                        <button type="submit" class="btn-login">
                            受け入れる
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
<div class="container-1 header_container header-top-page">
    @if(Auth::check() && Auth::user()->role_id == config('constant.ROLE.SITTER'))
        @php $home_route = route('SITTER_MYPAGE') @endphp
    @elseif(Auth::check() && Auth::user()->role_id == config('constant.ROLE.EMPLOYER'))
        @php $home_route = route('EMPLOYER_MYPAGE') @endphp
    @else
        @php $home_route = '/' @endphp
    @endif
    <div class="head">
        <div class="nav-logo">
            <h1 class="site-title">登録無料、ベビーシッターをお探しなら</h1>
            <a href="{{ $home_route }}">
                <img alt="logo" class="link-img" src="{{ asset('') }}image/logo.png">
            </a>
        </div>
        <div class="nav-link">
            <div class="site-description">
                <span>お気軽にお問い合わせください</span>
                <span>お問い合わせフォームにて24時間受付中</span>
            </div>
            <a href="{{route('VIEW_CONTACT_PAGE')}}">
                <div class="nav-button-link contact">
                    <span class="nav-text">お問い合わせ</span>
                </div>
            </a>
            @if(Auth::check() && Auth::user()->role_id == config('constant.ROLE.SITTER'))
                <a href="{{ route('SITTER_LOGOUT') }}">
                    <div class="nav-button-link login">
                        <span class="nav-text">ログアウト</span>
                    </div>
                </a>
            @elseif(Auth::check() && Auth::user()->role_id == config('constant.ROLE.EMPLOYER'))
                <a href="{{ route('EMPLOYER_LOGOUT') }}">
                    <div class="nav-button-link login">
                        <span class="nav-text">ログアウト</span>
                    </div>
                </a>
            @else
                <a href="{{route('EMPLOYER_LOGIN')}}">
                    <div class="nav-button-link login">
                        <span class="nav-text">ログイン</span>
                    </div>
                </a>
                <a href="{{route('EMPLOYER_REGISTER')}}">
                    <div class="nav-button-link register">
                        <span class="nav-text">新規登録</span>
                    </div>
                </a>
            @endif
        </div>
    </div>
    <div class="menu">
        <div class="menu-container">
            <a href="{{ $home_route }}">
                <span class="menu-text">ホーム</span>
            </a>
            <a href="{{route('advance-search')}}">
                <span class="menu-text">ベビーシッターを探す</span>
            </a>
            <a href="/#guide">
                <span class="menu-text">ご利用の流れ</span>
            </a>
            <a href="/#faq">
                <span class="menu-text">よくあるご質問</span>
            </a>

            @if(Auth::guest() || (Auth::check() && Auth::user()->role_id == config('constant.ROLE.ADMIN')))
                <a href="{{route('SITTER_LOGIN')}}">
                    <span class="menu-text">ベビーシッターログイン</span>
                </a>
             @endif

            <a href="https://www.trust-growth.co.jp" target="_blank">
                <span class="menu-text">運営会社</span>
            </a>
        </div>
    </div>

    <a class="icon-mobile" id="icon-mobile-bars">
        <i class="fal fa-bars"></i>
    </a>
    <div class="menu-mobile" style="display:none">
        <div class="menu-container">
            <a href="/">
                <span class="menu-text">ホーム</span>
            </a>
            <a href="{{route('advance-search')}}">
                <span class="menu-text">ベビーシッターを探す</span>
            </a>
            <a href="/#guide">
                <span class="menu-text">ご利用の流れ</span>
            </a>
            <a href="/#faq">
                <span class="menu-text">よくあるご質問</span>
            </a>

            @if(Auth::guest() || (Auth::check() && Auth::user()->role_id == config('constant.ROLE.ADMIN')))
                <a href="{{route('SITTER_LOGIN')}}">
                    <span class="menu-text">ベビーシッターログイン</span>
                </a>
             @endif

            <a href="https://www.trust-growth.co.jp" target="_blank">
                <span class="menu-text">運営会社</span>
            </a>
        </div>
    </div>
</div>

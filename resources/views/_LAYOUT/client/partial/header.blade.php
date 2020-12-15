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
            <img onclick="openNav()" alt="menu" class="icon-menu" src="{{ asset('/image/top-page/icon-menu.png')}}">
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

    <div id="mySidenav" class="sidenav">
        <div class="aside">
            <div class="menu-head">
                <img alt="logo" class="logo" src="{{ asset('') }}image/logo.png">
                <img alt="close" class="closebtn" onclick="closeNav()" src="{{ asset('/image/top-page/close.png')}}">
            </div>
            <div class="menu-link">
                <a href="{{ $home_route }}" class="{{ Request::path() == '/' ? 'menu-drawer-active' : '' }}">
                    <span class="menu-text">ホーム</span>
                </a> 
                <a href="{{route('advance-search')}}" class="{{ Request::path() == 'advance-search' ? 'menu-drawer-active' : '' }}">
                    <span class="menu-text">ベビーシッターを探す</span>
                </a>
                <a href="/#guide" onclick="handleMenuAction(this)">
                    <span class="menu-text">ご利用の流れ</span>
                </a>
                <a href="/#faq" onclick="handleMenuAction(this)">
                    <span class="menu-text">よくあるご質問</span>
                </a>
                @if(Auth::guest() || (Auth::check() && Auth::user()->role_id == config('constant.ROLE.ADMIN')))
                    <a href="{{route('SITTER_LOGIN')}}" class="{{ Request::path() == 'sitter/login' ? 'menu-drawer-active' : '' }}">
                        <span class="menu-text">ベビーシッターログイン</span>
                    </a>
                @endif
            </div>

            <div class="btn-action">
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

            <div class="menu-link">
                <a href="https://www.trust-growth.co.jp" target="_blank">
                    <span>運営会社</span>
                </a>
                <a href="{{route('SITEPOLICY')}}">
                    <span>利用規約</span>
                </a>
                <a href="#emp-privacy" rel="modal:open" class="text-info">
                    <span>プライバシーポリシー</span>
                </a>
                <a href="{{route('TOKUTEISHO')}}">
                    <span>特定商取引法に基づく表記</span>
                </a>
            </div>

            <div class="info-section">
                <span class="copyright">Copyright ©家政婦さんベビーシッタードットコム</span>
                <span class="copyright">All Rights Reserved.</span>
            </div>
        </div>
        <div class="transparent"></div>
    </div>
</div>

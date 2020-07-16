<div class="container-1 header_container header-top-page">
    <div class="nav-logo">
        <a href="/">
            <img alt="logo" class="link-img" src="{{ asset('') }}image/logo.png">
        </a>
        <h1 class="site-name">サイト名が入ります</h1>
    </div>
    <div class="nav-link">
        @guest
            <a href="{{route('SITTER_LOGIN')}}">
                <div class="nav-button-link username">
                    <img class="icon-img username" src="{{ asset('') }}image/icons/icon-next-username.png">
                    <span class="nav-text">シッター<br/>ログイン</span>
                    <span class="nav-text mobile">シッターログイン</span>
                </div>
            </a>
        @endguest
        <a href="{{route('advance-search')}}">
            <div class="nav-button-link username">
                <img class="icon-img adv" src="{{ asset('') }}image/icons/icon-advance-search.png">
                <span class="nav-text">シッター<br/>を探す</span>
                <span class="nav-text mobile">シッターを探す</span>
            </div>
        </a>
        <a href="/#guide">
            <div class="nav-button-link flow">
                <img class="icon-img flow" src="{{ asset('') }}image/icons/icon-next-flow.png">
                <span class="nav-text">ご利用の<br/>流れ</span>
                <span class="nav-text mobile">ご利用の流れ</span>
            </div>
        </a>
        <a href="/#faq">
            <div class="nav-button-link faq">
                <img class="icon-img faq" src="{{ asset('') }}image/icons/icon-next-faq.png">
                <span class="nav-text">よくある<br/>ご質問</span>
                <span class="nav-text mobile">ご利用の流れ</span>
            </div>
        </a>
            {{-- <div class="div-avatar">
                @php $avatar_url = Auth::user()->avatar @endphp
                <div class="nav-button-link">
                    <div class="div-avatar-wrap" id="client-avatar">
                        <img class="avatar-header" id="js-avatar-header" src="{{ asset($avatar_url) }}">
                        <i class="fa fa-caret-down"></i>

                        <div class="dropdown-content">
                            @if(Auth::user()->role_id == config('constant.ROLE.SITTER'))
                                <a href="{{ route('SITTER_LOGOUT') }}">Logout</a>
                            @else
                                <a href="{{ route('EMPLOYER_LOGOUT') }}">Logout</a>
                            @endif
                        </div>
                    </div>

                </div>
            </div> --}}
        @if(Auth::check() && Auth::user()->role_id == config('constant.ROLE.SITTER'))
            <a href="{{ route('SITTER_LOGOUT') }}">
                <div class="nav-button-link login">
                    <span class="nav-text">ログアウト</span>
                    <img class="icon-img" src="{{ asset('') }}image/icons/icon-next-circle.png">
                </div>
            </a>
        @elseif(Auth::check() && Auth::user()->role_id == config('constant.ROLE.EMPLOYER'))
            <a href="{{ route('EMPLOYER_LOGOUT') }}">
                <div class="nav-button-link login">
                    <span class="nav-text">ログアウト</span>
                    <img class="icon-img" src="{{ asset('') }}image/icons/icon-next-circle.png">
                </div>
            </a>
        @else
            <a href="{{route('EMPLOYER_LOGIN')}}">
                <div class="nav-button-link login">
                    <span class="nav-text">ログイン</span>
                    <img class="icon-img" src="{{ asset('') }}image/icons/icon-next-circle.png">
                </div>
            </a>
            <a href="{{route('EMPLOYER_REGISTER')}}">
                <div class="nav-button-link register">
                    <span class="nav-text">新規登録</span>
                    <img class="icon-img" src="{{ asset('') }}image/icons/icon-next-circle.png">
                </div>
            </a>
        @endif
    </div>
    <a class="icon-mobile" id="icon-mobile-bars">
        <i class="fal fa-bars"></i>
    </a>
    <div class="menu-mobile" style="display:none">
        <div class="nav-link">
            @guest
                <a href="{{route('SITTER_LOGIN')}}">
                    <div class="nav-button-link username">
                        <img class="icon-img username" src="{{ asset('') }}image/icons/icon-next-username.png">
                        <span class="nav-text">シッター<br/>ログイン</span>
                        <span class="nav-text mobile">シッターログイン</span>
                    </div>
                </a>
            @endguest
            <a href="{{route('advance-search')}}">
                <div class="nav-button-link username">
                    <img class="icon-img adv" src="{{ asset('') }}image/icons/icon-advance-search.png">
                    <span class="nav-text">シッター<br/>を探す</span>
                    <span class="nav-text mobile">シッターを探す</span>
                </div>
            </a>
            <a href="/#guide">
                <div class="nav-button-link flow">
                    <img class="icon-img flow" src="{{ asset('') }}image/icons/icon-next-flow.png">
                    <span class="nav-text">ご利用の<br/>流れ</span>
                    <span class="nav-text mobile">ご利用の流れ</span>
                </div>
            </a>
            <a href="/#faq">
                <div class="nav-button-link faq">
                    <img class="icon-img faq" src="{{ asset('') }}image/icons/icon-next-faq.png">
                    <span class="nav-text">よくある<br/>ご質問</span>
                    <span class="nav-text mobile">ご利用の流れ</span>
                </div>
            </a>
            @if(Auth::check() && Auth::user()->role_id == config('constant.ROLE.SITTER'))
                <a href="{{route('SITTER_LOGOUT')}}">
                    <div class="nav-button-link login">
                        <span class="nav-text">ログアウト</span>
                        <img class="icon-img" src="{{ asset('') }}image/icons/icon-next-circle.png">
                        <span class="nav-text mobile">ログアウト</span>
                    </div>
                </a>
            @elseif(Auth::check() && Auth::user()->role_id == config('constant.ROLE.EMPLOYER'))
                <a href="{{route('EMPLOYER_LOGOUT')}}">
                    <div class="nav-button-link login">
                        <span class="nav-text">ログアウト</span>
                        <img class="icon-img" src="{{ asset('') }}image/icons/icon-next-circle.png">
                        <span class="nav-text mobile">ログアウト</span>
                    </div>
                </a>
            @else
                <a href="{{route('EMPLOYER_LOGIN')}}">
                    <div class="nav-button-link login">
                        <span class="nav-text">ログイン</span>
                        <img class="icon-img" src="{{ asset('') }}image/icons/icon-next-circle.png">
                        <span class="nav-text mobile">ログイン</span>
                    </div>
                </a>
                <a href="{{route('EMPLOYER_REGISTER')}}">
                    <div class="nav-button-link register">
                        <span class="nav-text">新規登録</span>
                        <img class="icon-img" src="{{ asset('') }}image/icons/icon-next-circle.png">
                        <span class="nav-text mobile">新規登録</span>
                    </div>
                </a>
            @endif
        </div>
    </div>
</div>

<div class="container-1 footer_container header-top-page">
    <div class="container_body">
        <div class="footer-logo">
            <a  href="/">
                <img alt="logo" class="link-img" src="{{ asset('') }}image/logo.png">
            </a>
            {{-- <p class="site-name">サイト名が入ります</p> --}}
        </div>
        <div class="footer-link">
            <ul>
                <li>
                    <a href="https://www.trust-growth.co.jp" target="_blank">>運営会社</a>
                </li>
                <li>
                    <a href="{{route('SITEPOLICY')}}">>利用規約</a>
                </li>
                <li>
                    {{-- <a href="{{route('PRIVACYSITEPOLICY')}}">プライバシーポリシー</a> --}}
                    <a href="#emp-privacy" rel="modal:open" class="text-info">>プライバシーポリシー</a>
                </li>
                <li>
                    <a href="{{route('TOKUTEISHO')}}">>特定商取引法に基づく表記</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="copyright">
        <span class="desktop">Copyright ©家政婦さんベビーシッタードットコム All Rights Reserved.</span>
        <span class="mobile">Copyright ©家政婦さんベビーシッタードットコム<br/>All Rights Reserved.</span>
    </div>
</div>


<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title> @yield('title') </title>
    <meta name="robots" content="index, follow" />
    {{-- <meta name="robots" content="noindex" />
    <meta name="googlebot" content="noindex" /> --}}

    {{-- <meta http-equiv="content-language" content="jp" /> --}}
    <meta property="og:title" content="@yield('title')" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{{ asset('/') }}" />
    <meta property="og:image" content="@yield('image_seo')" />
    <meta property="og:description" content="@yield('description')" />
    <meta name="description" content="@yield('description')">
    <meta name="keywords" content="@yield('keywords')">

    <link rel="icon" href="{{ asset('favicon.ico')}}" type="image/png">
    <link rel="stylesheet" href="{{ asset('css/app.css?'.config('constant.VERSION_CSS'))}}">
    <link rel="stylesheet" href="{{ asset('css/library/jquery.timepicker.css?'.config('constant.VERSION_CSS'))}}">
    @yield('stylesheets')
    <script>
        const SYSTEM_BASE_URL      = "{{ asset('') }}";
        const SYSTEM_REAL_TIME_URL = "{{ config('app.realtime_url') }}";

        const SYSTEM_CHAT_EMPLOYER = "{{ route('EMPLOYER_CHAT') }}";

        const CONFIG_EVENT            = {
            CONNECTTION              : 'connection',
            DISCONNECT               : 'disconnect',
            SEND_MESSAGE             : 'send-message',
            RESPONSE_MESSAGE         : 'response-message',
            JOIN_CHANNEL             : "join-channel",
            SEND_TYPING              : "send-typing",
            RESPONSE_TYPING          : 'response-typing',
            SEND_PEER                : "SEND_PEER",
            RESPONSE_PEER            : "RESPONSE_PEER",
            REQUEST_GET_PEER         : "REQUEST_GET_PEER",
            RESPONSE_GET_PEER        : "RESPONSE_GET_PEER",
            USER_ONLINE              : "USER_ONLINE",
            USER_ONLINE_NOTI         : "USER_ONLINE_NOTI",
            USER_OFFLINE_NOTI        : "USER_OFFLINE_NOTI",
            DUPLICATION_TAB          : "DUPLICATION_TAB",
            READ_MESSAGE_ALL         : "READ_MESSAGE_ALL",
            READ_MESSAGE_ALL_RESPONSE: "READ_MESSAGE_ALL_RESPONSE",
            USER_GET_BOOKING            : "USER_GET_BOOKING",
            RESPONSE_USER_GET_BOOKING   : "RESPONSE_USER_GET_BOOKING",
            USER_CHANGE_BOOKING         : "USER_CHANGE_BOOKING",
            RESPONSE_USER_CHANGE_BOOKING: "RESPONSE_USER_CHANGE_BOOKING",
            RESPONSE_USER_CHANGE_BOOKING_ERROR: "RESPONSE_USER_CHANGE_BOOKING_ERROR"
        };

        const ID_VIEW_SITTER    = "{{ $ID_VIEW_SITTER?? null }}";
        const ID_VIEW_USER_CHAT = "{{ $ID_VIEW_USER_CHAT ?? null }}";

        const ROUTE_VIEW_SITTER              = "{{ Route('VIEW_SITTER', [ 'id' => null ]) }}";
        const ROUTE_VIEW_EMPLOYER            = "{{ Route('VIEW_EMPLOYER', [ 'id' => null ]) }}";
        const LIMIT_RECORD_REVIEW            = 3;
        const ROUTE_LOAD_REVIEWS             = "{{ Route('AJAX_LOAD_REVIEWS') }}";
        const ROUTE_EMPLOYER_REGISTER_STRIPE = "{{ Route('EMPLOYER_EDIT_CARD') }}";
    </script>
</head>
<body>
    <noscript>
        You need to enable JavaScript to run this app.
    </noscript>
    <div class="main-wrapper">
        <div class="main-wrapper-header">
            @include ("_LAYOUT.client.partial.header")
        </div>
        <div class="main-wrapper-body-content">
            @yield('content')
        </div>
        <div class="main-wrapper-footer">
            @include ('_LAYOUT.client.partial.footer')
        </div>
    </div>
    @include('modals.employers.privacy')
    <input id="scroll-btn" onclick="scrollToTop()" type="button" title="Go to top"/>
    <script type="text/javascript" src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/modal.jquery.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/jquery.timepicker.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/app.min.js' . Config::get('app.version')) }}"></script>

    @yield('scripts')
    <script>
        $('#icon-mobile-bars').click(function(){
            event.preventDefault();
            $('.menu-mobile').slideToggle('slow');
        });

        $(window).scroll(function() {
            if ($(this).scrollTop() > 70) {
                $('#scroll-btn').show();
            } else {
                $('#scroll-btn').hide();
            }
        });

        function scrollToTop()
        {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
        // for Menu mobile
        function openNav() {
            document.getElementById("mySidenav").style.width = "100vw";
        }

        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }
        function handleMenuAction(e){
           closeNav();
            $(".menu-drawer-active").removeClass();
            e.classList.add("menu-drawer-active");
        }
    </script>
</body>
</html>

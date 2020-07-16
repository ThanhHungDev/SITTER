
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title> @yield('title') </title>
    <link rel="icon" href="http://sitters.jp/favicon.ico" type="image/png">
    <link rel="stylesheet" href="{{ asset('css/app.css')}}">
    <script >
        const SYSTEM_BASE_URL      = "{{ asset('') }}"
        const SYSTEM_CHAT_EMPLOYER = "{{ route('EMPLOYER_CHAT') }}"

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
            READ_MESSAGE_ALL_RESPONSE: "READ_MESSAGE_ALL_RESPONSE"
        }
    </script>
    @yield('stylesheets-admin')
    <script>
        const SYSTEM_REAL_TIME_URL = "{{ config('app.realtime_url') }}"
        const SYSTEM_ROLE_ADMIN    = "{{ config('constant.ROLE.ADMIN') }}"
        const SYSTEM_ROLE_SITTER   = "{{ config('constant.ROLE.SITTER') }}"
        const SYSTEM_ROLE_EMPLOYER = "{{ config('constant.ROLE.EMPLOYER') }}"
        const SYSTEM_IS_PUBLIC     = "公開中";
        const SYSTEM_IS_PRIVATE    = "非公開";
        const LIMIT_RECORD = 10;
        const REFRESH = "{{$refresh}}";
    </script>
</head>
<body>
    <div class="main-wrapper">
        <div class="main-wrapper-header">
            @include ("admin._LAYOUT.partial.header")
        </div>
        <div class="main-wrapper-body-content admin">
            <div class="left-side-menu">
                @include ("admin._LAYOUT.partial.menu_left")
            </div>
            <div class="right-side-admin">
                @yield('content-admin')
            </div>
        </div>
        <div class="main-wrapper-footer">
            @include ('admin._LAYOUT.partial.footer')
        </div>
    </div>

    <script type="text/javascript" src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/app.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/admin_base.min.js') }}"></script>
    @yield('scripts-admin')
</body>
</html>
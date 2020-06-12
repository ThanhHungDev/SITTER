
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> @yield('title') </title>
    <link rel="stylesheet" href="{{ asset('css/app.css')}}">
    @yield('stylesheets')
    <script>
        const SYSTEM_BASE_URL = "{{ asset('') }}";
        const SYSTEM_REAL_TIME_URL = "{{ config('app.url') . ':' . config('realtime.port') }}";

        const CONFIG_EVENT            = {
            CONNECTTION     : 'connection',
            DISCONNECT      : 'disconnect',
            SEND_MESSAGE    : 'send-message',
            RESPONSE_MESSAGE: 'response-message',
            JOIN_CHANNEL    : "join-channel",
            SEND_TYPING     : "send-typing",
            RESPONSE_TYPING : 'response-typing',
        }
    </script>
</head>
<body>
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
    @yield('scripts')
</body>
</html>
<!DOCTYPE html>

<html>

<head>

    <title>【〇〇〇〇〇〇〇〇〇〇】レビュー投稿</title>

</head>

<body>
    <h2>{{ $dataSendMail['full_name'] }}様</h2>
    <p>
        Please click here to register account payment!
    </p>
    <p>
        リンクURL：<a href="{{$dataSendMail['route']}}">url</a>
    </p>
    <p>メールアドレス：○○○○＠○○○○○○</p>
    <br/>
    @include('emails.footer')
</body>

</html>
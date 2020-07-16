<!DOCTYPE html>

<html>

<head>

    <title>Sitter forgot confirm</title>

</head>

<body>

    {{ $dataSendMail['name'] }} 様<br/><br/>
    〇〇〇〇〇〇〇〇〇〇のご利用ありがとうございます。<br/>
    {{ \Carbon\Carbon::now() }} にパスワード変更のリクエストがありました。<br/>
    以下のリンクにアクセスしてパスワードを変更してください。<br/>
    <a href="{{route('SITTER_RENEW_PASSWORD').'?code='.$dataSendMail['verify_token']}}">パスワード変更</a><br/>
    ※本メールは会員登録時に登録されたメールアドレスに自動送信されております。<br/>
    もし、本メールに心当たりがない場合は、速やかに破棄してください。<br/><br/>

    **footer block**<br/>
    ここにフッターが入りますがまだ未定です！<br/>
    **footer block**<br/>

</body>

</html>
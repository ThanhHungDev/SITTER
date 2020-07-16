<!DOCTYPE html>

<html>

<head>

    <title>【〇〇〇〇〇〇〇〇〇〇】利用者登録ありがとうございます</title>

</head>

<body>
    <h5>{{ $dataSendMail['name'] }}様</h5>
    <p>
        〇〇〇〇〇〇〇〇〇〇のご利用ありがとうございます。
    </p>
    <p>
        {{$dataSendMail['exp_date']}} にパスワード変更のリクエストがありました。
    </p>
    <p>
        以下のリンクにアクセスしてパスワードを変更してください。
    </p>
    <a href="{{route('EMPLOYER_RENEW_PASSWORD').'?code='.$dataSendMail['verify_token']}}">パスワード変更</a>
    <p>
        ※本メールは会員登録時に登録されたメールアドレスに自動送信されております。
        もし、本メールに心当たりがない場合は、速やかに破棄してください。
    </p>
    <p>
        ここにフッターが入りますがまだ未定です！
    </p>

</body>

</html>
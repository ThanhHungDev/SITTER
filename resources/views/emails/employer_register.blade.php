<!DOCTYPE html>

<html>

<head>

    <title>【〇〇〇〇〇〇〇〇〇〇】利用者登録ありがとうございます</title>

</head>

<body>
    <h5>{{ $dataSendMail['name'] }}様</h5>
    <p>
        〇〇〇〇〇〇〇〇〇〇にご登録ありがとうございます。
        メールアドレスの確認のため、以下のリンクにアクセスしてください。
    </p>
    <a href="{{route('EMPLOYER_REGISTER_PARENT').'?token_verify='.$dataSendMail['verify_token']}}">メールアドレス確認</a>
    <p>
        ※本メールは会員登録時に登録されたメールアドレスに自動送信されております。
        もし、本メールに心当たりがない場合は、速やかに破棄してください。
    </p>
    <p>
        ここにフッターが入りますがまだ未定です！
    </p>
</body>

</html>
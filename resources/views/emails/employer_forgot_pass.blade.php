<!DOCTYPE html>

<html>

<head>

    <title>【〇〇〇〇〇〇〇〇〇〇】利用者登録ありがとうございます</title>

</head>

<body>
    <h2>{{ $dataSendMail['name'] }}様</h2>
    <p>
        いつも家政婦さん・ベビーシッタードットコムをご利用いただきまして、誠にありがとうございます。
    </p>
    <p>
        下記リンクにアクセスし、新しいパスワードを入力してください。
    </p>
    <p>
        リンクURL：<a href="{{route('EMPLOYER_RENEW_PASSWORD').'?code='.$dataSendMail['verify_token']}}">{{route('EMPLOYER_RENEW_PASSWORD').'?code='.$dataSendMail['verify_token']}}</a>
    </p>
    <p>
        ※本メールに心当たりのない方は、本メールを破棄していただきますようお願いいたします。
    </p>
    <p>
        ご不明点等は、下記メールアドレスよりお気軽にお問い合わせくださいませ。
    </p>
    <p>メールアドレス：info@kaseifu-babysitter.com</p>
    <br/>
    @include('emails.footer')
</body>

</html>
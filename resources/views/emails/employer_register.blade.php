<!DOCTYPE html>

<html>

<head>

    {{-- <title>【〇〇〇〇〇〇〇〇〇〇】利用者登録ありがとうございます</title> --}}

</head>

<body>
    <h2>{{ $dataSendMail['name'] }}様</h2>
    <p>
        この度は家政婦さん・ベビーシッタードットコムにご登録いただきまして、誠にありがとうございます。
        下記リンクにアクセスいただき、本登録を完了させてください。
    </p>
    
    <p>
        ※本登録が完了していないとサイトをご利用いただくことはできません。
    </p>
    <p>リンクURL：<a href="{{route('EMPLOYER_REGISTER_PARENT').'?token_verify='.$dataSendMail['verify_token']}}">{{route('EMPLOYER_REGISTER_PARENT').'?token_verify='.$dataSendMail['verify_token']}}</a></p>
    <p>
        ※本メールに心当たりのない方は、本メールを破棄していただきますようお願いいたします。
    </p>
    <p>
        ご不明点等は、下記メールアドレスよりお気軽にお問い合わせくださいませ。
    </p>
    <p>
        メールアドレス：info@kaseifu-babysitter.com
    </p>
    <br/><br/>
    @include('emails.footer')
</body>

</html>
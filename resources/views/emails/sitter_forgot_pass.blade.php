<!DOCTYPE html>

<html>

<head>

    <title>Sitter forgot confirm</title>

</head>

<body>
    {{ $dataSendMail['name'] }} 様<br/>
    いつも家政婦さん・ベビーシッタードットコムをご利用いただきまして、誠にありがとうございます。<br/><br/>

    下記リンクにアクセスし、新しいパスワードを入力してください。<br/>
    リンクURL：<a href="{{ $url }}">{{ $url }}</a>（パスワード再発行の画面のURL）<br/><br/><br/>


    ※本メールに心当たりのない方は、本メールを破棄していただきますようお願いいたします。<br/><br/>

    ご不明点等は、下記メールアドレスよりお気軽にお問い合わせくださいませ。<br/>
    メールアドレス：info@kaseifu-babysitter.com
    <br/><br/>
    @include('emails.footer')
</body>

</html>
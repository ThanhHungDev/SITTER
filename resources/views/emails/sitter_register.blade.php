<!DOCTYPE html>

<html>

<head>

    <title>Sitter register confirm</title>

</head>

<body>
    {{ $dataSendMail['name'] }}様<br/>
    この度は家政婦さん・ベビーシッタードットコムにご登録いただきまして、誠にありがとうございます。<br/>
    下記リンクにアクセスいただき、仮登録を完了させてください。<br/>
    リンクURL：<a href="{{ $url }}">{{ $url }}</a>（登録画面のURL）<br/><br/>

    ※本メールに心当たりのない方は、本メールを破棄していただきますようお願いいたします。<br/><br/>

    ご不明点等は、下記メールアドレスよりお気軽にお問い合わせくださいませ。<br/>
    メールアドレス：info@kaseifu-babysitter.com
    <br/><br/>
    @include('emails.footer')
</body>

</html>
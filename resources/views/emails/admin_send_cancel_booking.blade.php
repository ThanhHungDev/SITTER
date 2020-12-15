<!DOCTYPE html>

<html>

<head>
    <title>Cancel Booking</title>
</head>

<body>
    {{ $dataSendMail['full_name'] }}様<br/>
    {{ $dataSendMail['message'] }}<br/>
    ご不明点等は、下記メールアドレスよりお気軽にお問い合わせくださいませ。<br/>
    メールアドレス：info@kaseifu-babysitter.com
    <br/><br/>
    @include('emails.footer')
</body>

</html>
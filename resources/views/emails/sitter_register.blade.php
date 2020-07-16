<!DOCTYPE html>

<html>

<head>

    <title>Sitter register confirm</title>

</head>

<body>
    
    {{ $dataSendMail['name'] }}様<br/>
    〇〇〇〇〇〇〇〇〇〇にご登録ありがとうございます。<br/>
    メールアドレスの確認のため、以下のリンクにアクセスしてください。<br/><br/>
    <a href="{{route('SITTER_REGISTER_NEXT_STEP').'?token_verify='.$dataSendMail['token_verify']}}">メールアドレス確認</a><br/><br/>
    ※本メールは会員登録時に登録されたメールアドレスに自動送信されております。<br/>
    もし、本メールに心当たりがない場合は、速やかに破棄してください。<br/><br/>

    **footer block**<br/>
    ここにフッターが入りますがまだ未定です！<br/>
    **footer block**<br/>
</body>

</html>
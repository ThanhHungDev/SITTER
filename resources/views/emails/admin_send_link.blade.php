<!DOCTYPE html>

<html>

<head>

    <title>【〇〇〇〇〇〇〇〇〇〇】レビュー投稿</title>

</head>

<body>
    <h2>{{ $dataSendMail['full_name'] }}様</h2>
    <p>
        このベビーシッターの評価、感想を入力してください。みんなの役に立つ情報になります。
    </p>
    <p>
        リンクURL：<a href="{{route('EMPLOYER_REVIEW').'?token='.$dataSendMail['token']. '&sitter='.$dataSendMail['sitter_id']}}">url</a>
    </p>
    <p>メールアドレス：info@kaseifu-babysitter.com</p>
    <br/>
    @include('emails.footer')
</body>

</html>
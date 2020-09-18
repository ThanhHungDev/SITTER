<!DOCTYPE html>

<html>

<head>


</head>

<body>

    You have got an email from : {{ $dataSendMail['name']  }} <br><br>

    User details: <br><br>

    Name: {{ $dataSendMail['name'] }} <br>
    Email: {{ $dataSendMail['email'] }} <br>
    Subject: {{ $dataSendMail['subject'] }} <br>
    Message: {{ $dataSendMail['content'] }} <br><br>

    Thanks

</body>

</html>

<!DOCTYPE html>

<html>

<head>


</head>

<body>

    {{-- $dataSendMail['date_working'] = isset($params['date_working']) ? $params['date_working'] : [];
    $dataSendMail['numofweek'] = $params['numofweek'];
    $dataSendMail['numofday'] =  $params['numofday'];
    $dataSendMail['skills'] = isset($params['skills']) ? $params['skills'] : [];
    $dataSendMail['other_require'] = $params['other_require'];

    $dataSendMail['info_name'] = $params['info_name'];
    $dataSendMail['info_addr1'] = $params['info_addr1'];
    $dataSendMail['info_addr2'] = $params['info_addr2'];

    $dataSendMail['info_child_number'] = $params['info_child_number'];
    for($cnt_child = 0; $cnt_child < $dataSendMail['info_child_number']; $cnt_child++) {
        $dataSendMail['child_info_opt1_'.$cnt_child] = is_null($params['child_info_opt1_'.$cnt_child])? '': $params['child_info_opt1_'.$cnt_child];
        $dataSendMail['child_info_opt2_'.$cnt_child] = is_null($params['child_info_opt2_'.$cnt_child])? '': $params['child_info_opt2_'.$cnt_child];
    }

    $dataSendMail['info_tel'] = $params['info_tel'];
    $dataSendMail['info_mail'] = $params['info_mail'];

    $dataSendMail['info_expect_time'] = $params['info_expect_time'];
    if($dataSendMail['info_expect_time'] == 'その他'){
        $dataSendMail['info_expect_time_note'] = $params['info_expect_time_note'];
    }else{
        $dataSendMail['info_expect_time_note'] = '';
    } --}}

    You have got an email from : {{ $dataSendMail['info_mail']  }} <br/><br/>

    <u><b>依頼内容:</b></u> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<b>+就業希望曜⽇:</b><br/>
            @foreach($dataSendMail['date_working'] as $value)
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                -{{$value}} <br/>
            @endforeach
        &nbsp;&nbsp;&nbsp;&nbsp;<b>+就業⽇数:</b><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            -Week: {{ $dataSendMail['numofweek'] }} <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            -Day: {{ $dataSendMail['numofday'] }} <br>
        &nbsp;&nbsp;&nbsp;&nbsp;<b>+サポートの項目:</b><br/>
            @foreach($dataSendMail['skills'] as $value)
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                -{{$value}} <br/>
            @endforeach
        &nbsp;&nbsp;&nbsp;&nbsp;<b>+その他ご希望などがありました、ご⼊⼒ください:</b> {{ $dataSendMail['other_require'] }}<br/><br/>

    <u><b>ご利⽤者様情報:</b></u> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<b>+⽒名:</b> {{ $dataSendMail['info_name'] }}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<b>+お所:</b><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            -{{ $dataSendMail['info_addr1'] }} <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            -{{ $dataSendMail['info_addr2'] }} <br>
        &nbsp;&nbsp;&nbsp;&nbsp;<b>+お⼦さんの情報:</b> {{ $dataSendMail['info_child_number'] }}<br/>
            @for($cnt_child = 0; $cnt_child < $dataSendMail['info_child_number']; $cnt_child++)
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    -{{$cnt_child + 1}}人目のお子様:<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    --{{ $dataSendMail['child_info_opt1_'.$cnt_child] = is_null($dataSendMail['child_info_opt1_'.$cnt_child])? '': $dataSendMail['child_info_opt1_'.$cnt_child]}}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    --{{$dataSendMail['child_info_opt2_'.$cnt_child] = is_null($dataSendMail['child_info_opt2_'.$cnt_child])? '': $dataSendMail['child_info_opt2_'.$cnt_child]}}
                    <br/>
            @endfor
        &nbsp;&nbsp;&nbsp;&nbsp;<b>+TEL:</b> {{ $dataSendMail['info_tel'] }}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<b>+メール:</b> {{ $dataSendMail['info_mail'] }}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<b>+希望時期:</b> {{ $dataSendMail['info_expect_time'] }}<br/>
            @if($dataSendMail['info_expect_time'] == 'その他')
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                -その他: {{$dataSendMail['info_expect_time_note']}}
            @endif
    Regards,
</body>

</html>

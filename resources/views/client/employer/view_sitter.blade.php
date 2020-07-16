@section('title', 'Sitter | ' . $information->first_name . " " .$information->last_name)
@section('keywords', 'Sitter | '. $information->first_name . " " .$information->last_name. ", " . $information->phone . ", " . implode( ", ", $sitter_skills))
@section('description', $service_introduce)

@isset($galary[0])
@section('image_seo', $galary[0]['url'])
@endisset

@extends('_LAYOUT.index')

@section('stylesheets')
    <link rel="stylesheet" href="{{ asset('css/library/jquery-ui.min.css')}}">
    <link rel="stylesheet" href="{{ asset('css/library/slick.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/library/slick-theme.css') }}">
@endsection

@section('content')
<div class="employer-common">
    <div class="max-width-1080 employer">
        <div class="content-top">
            {{-- <div class="top-title">
                <div class="line"></div>
                <p>プロフィール公開中</p>
                <div class="line"></div>
            </div> --}}
        </div>
        <div class="employer-mypage">
            <div class="employer-content-left">
                <div>
                    <div class="head height-85">
                        <span class="fs-20">☆笑顔と個性を大切にサポートいたします☆ダンス・ストレッチ指導経験あり。</span>
                    </div>
                    <div class="slider-wrap">
                        <div class="slider" id="slider">
                            @foreach ($galary as $item)
                                <img src="{{ asset('/storage/uploads/avatars/'.$item['name']) }}"> 
                            @endforeach
                        </div>
                        <div class="slider-nav" id="slider-nav">
                            @foreach ($galary as $item)
                                <img src="{{ asset('/storage/uploads/avatars/thumbnail/'.$item['name']) }}"> 
                            @endforeach
                        </div>
                    </div>
                </div>
                <div>
                    <div class="head height-55">
                        <span class="fs-20">自己紹介</span>
                    </div>

                    <div class="employer-introduce">
                        <p class="pd-18 fs-15">
                            {!! isset($self_introduce)? nl2br2($self_introduce) : '' !!}
                        </span>
                    </div>
                </div>

                <div>
                    <div class="head height-55">
                        <span class="fs-20">サービス内容</span>
                    </div>

                    <div class="employer-content">
                        <p class="pd-18 fs-15">
                            {!! isset($service_introduce)? nl2br2($service_introduce) : '' !!}
                        </p>
                    </div>
                </div>

            </div>
            <div class="employer-content-right">
                <table class="table employer-info">
                    <tr>
                        <td class="width-100 fs-18" colspan="2">サポート基本情報</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="bt-1">
                            @php
                                $gender = $gender == config('constant.GENDER.MALE') ? '男性' : '女性' 
                            @endphp
                            <span>{{ $age }} 代 {{ $gender }}</span><br/>
                            <span>{{ $pref }} > {{ $city }}</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="width-50 bt-1">保育可能年齢</td>
                        <td class="bt-1">{{ config('constant.KID_AGE')[$kid_age_start] ?? ''.'～ '.config('constant.KID_AGE')[$kid_age_end] ?? '' }} </td>
                    </tr>
                    <tr>
                        <td class="bt-1">子育て経験</td>
                        <td class="bt-1">{{ $exp_parenting ? 'あり' : '無' }}</td>
                    </tr>
                    <tr>
                        <td class="width-50 bt-1">受入可能人数</td>
                        <td class="bt-1">{{ $kid_qty ?  $kid_qty .'人' : ''}}</td>
                    </tr>
                    <tr>
                        <td class="bt-1">シッター経験</td>
                        <td class="bt-1">{{ $exp_sitter? 'あり' : '無' }}</td>
                    </tr>
                    <tr>
                        <td class="bt-1">最低サポート時間目安</td>
                        <td class="bt-1">{{ config('constant.TIME_SUPORT')[$time_support] }}</td>
                    </tr>
                    <tr>
                        <td class="bt-1">
                            <span class="fs-15">ベビーシッター</span><br/>
                            <span class="fs-20">￥{{ moneyFormat($salary['salary_sitter']) }}　/1時間</span>
                        </td>
                        <td class="bt-1">
                            <span class="fs-15">家事代行</span><br/>
                            <span class="fs-20">￥{{ moneyFormat($salary['salary_sitter']) }}　/1時間</span>
                        </td>
                    </tr>
                </table>
                <div id="view-sitter-page">
                    <div class="d-none" id="data">{{ $schedules }}</div> 
                    <div id="draw-calendar" 
                    data-employer="{{ $employerId ?? null }}"
                    data-sitter="{{ $information->id ?? null }}"
                    data-refesh="{{ $refresh ?? null }}"
                    >
                    </div>
                    <input type="hidden" name="data-calendar" id="js-event-data">
                </div>
            </div>
        </div>

        <div class="employer-content-bottom">
            <div class="employer-support">
                <label class="fs-20">サポートの特徴</label>
                <ul>
                    
                    @foreach ($skills as $item)
                        @php
                            $isActive = in_array($item['id'], $skills_activity) ? 'active': ''
                        @endphp
                        <li class="{{ $isActive }}">
                           {{ $item['name'] }}
                        </li>
                    @endforeach
                </ul>
            </div>

            <div class="employer-form-filter">
                <div class="head height-60">
                    <span class="fs-26">他のベビーシッターを探す</span>
                </div>

                <div class="employer-filter">
                    <div class="form-row">
                        <form action="{{route('search-sitters')}}" class="form-seach-sitter">
                            <div class="input_section custom">
                                <div class="select_opt dpicker">
                                    <input name="wdate" class="date-picker-input date-picker-custom" type="text" id="slt_datepicker" placeholder="日付で探す"/>
                                </div>
                            </div>
                            <div class="input_section custom">
                                <select name="cage" class="select_opt" name="" id="">
                                    <option value="">子供の年齢</option>
                                    <option value="">0歳0ヶ月</option>
                                    <option value="">0歳1ヶ月~2ヶ月</option>
                                    <option value="">0歳3ヶ月~5ヶ月</option>
                                    <option value="">0歳6ヶ月~11ヶ月</option>
                                    <option value="">1歳</option>
                                    <option value="">2歳</option>
                                    <option value="">3歳~6歳</option>
                                    <option value="">7歳以上</option>
                                </select>
                            </div>
                            <div class="input_section custom">
                                <select name="wplace" class="select_opt" name="" id="">
                                    <option value="">地域を選択</option>
                                    @foreach ($jp_locations as $key => $value)
                                            <?php
                                                $area_label = "";
                                                switch ($key) {
                                                    case "KANTO":
                                                        $area_label = "関東";
                                                        break;
                                                    case "KINKI":
                                                        $area_label = "近畿";
                                                        break;
                                                    case "CHUBU":
                                                        $area_label = "中部";
                                                        break;
                                                    case "KYUSHU_OKINAWA":
                                                        $area_label = "九州・沖縄";
                                                        break;
                                                    case "HOKKAIDO_TOHOKU":
                                                        $area_label = "北海道・東北";
                                                        break;
                                                    case "CHUGOKU":
                                                        $area_label = "中国";
                                                        break;
                                                    case "SHIKOKU":
                                                        $area_label = "四国";
                                                        break;
                                                    default:
                                                        $area_label = "";
                                                }
                                                $numItems = count($value);
                                                $i = 0;
                                            ?>
                                            <optgroup label="{{$area_label}}">
                                                @foreach ($value as $k => $v)
                                                    <option value="{{$v}}">{{$v}}</option>
                                                @endforeach
                                            </optgroup>
                                        @endforeach
                                </select>
                            </div>
                            <div class="input_section custom">
                                <select name="wcond" class="select_opt" name="" id="">
                                    <option value="">条件を指定</option>
                                    <option value="">1000円</option>
                                    <option value="">1500円</option>
                                    <option value="">2000円</option>
                                    <option value="">2500円</option>
                                    <option value="">3000円</option>
                                </select>
                            </div>
                            <div class="input_section">
                                <input type="submit" class="btn-submit" value="探す">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('scripts')
    <script type="text/javascript" src="{{ asset('/js/library/slick.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/sitter-common.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/library/jquery-ui.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/library/datepicker-ja.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/library/jquery-ui.multidatespicker.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/detect.min.js') }}"></script>
    <script>
        $( function() {
            $( "#slt_datepicker" ).multiDatesPicker();
           
        } );
    </script>
@endsection
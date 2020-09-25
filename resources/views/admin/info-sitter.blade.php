@extends('admin._LAYOUT.view-infor')

@section('stylesheets-admin')
    <link rel="stylesheet" href="{{ asset('css/library/jquery-ui.min.css')}}">
    <link rel="stylesheet" href="{{ asset('css/library/slick.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/library/slick-theme.css') }}">
    <link href="{{ asset('css/library/rateit.css') }}" rel="stylesheet">
@endsection

@section('content')
<div class="employer-common" style="margin: auto;">
    <div class="max-width-1080 employer">
        <div class="content-top">
        </div>
        <div class="employer-mypage">
            <div class="employer-content-left">
                <div>
                    <div class="head height-85">
                        <span class="fs-20">{{ $title }}</span>
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
                        <td class="width-100 fs-24 header-title" colspan="2">サポート基本情報</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="bt-1">
                            @php
                                $gender = $gender == config('constant.GENDER.MALE') ? '男性' : '女性'
                            @endphp
                            <span>{{ $age }} 代 {{ $gender }}</span><br/>
                            <span class="text-green">{{ $pref }}</span><span> > {{ $city }}</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="width-50 bt-1">保育可能年齢</td>
                        <td class="bt-1">
                            {{ isset($kid_age_start) ? config('constant.KID_AGE')[$kid_age_start].'～' : ''  }}
                            {{ isset($kid_age_end) ? config('constant.KID_AGE')[$kid_age_end] : ''  }}
                        </td>
                    </tr>
                    <tr>
                        <td class="bt-1">子育て経験</td>
                    <td class="bt-1">{{ $exp_parenting ? 'あり' : '無' }} {{ $exp_kid_qty ? '／'.$exp_kid_qty.'人' : ''}}</td>
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
                            <span class="fs-20">￥{{ moneyFormat($salary['salary_house']) }}　/1時間</span>
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
            <div class="employer-review">
            <input type="hidden" name="sitter" value="{{ $ID_VIEW_SITTER ?? 0 }}">
                <div class="header-review">
                    <h3>ご利用者様のレビュー</h3>
                        @foreach ($rating as $rate)
                            @php
                                $avegate = calculatorRatingAvergate($rate->rate_total, $rate->total);
                            @endphp
                            @if($avegate > 0)
                                <span class="review-rate rateit" data-rateit-value="{{$avegate}}"  data-rateit-readonly="true"></span>
                                <span class="review-soccer">{{$avegate}}</span>
                            @endif
                        @endforeach
                </div>
                <div class="body-review">


                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('scripts-admin')
    <script type="text/javascript" src="{{ asset('/js/library/slick.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/view-sitter.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/library/jquery-ui.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/library/datepicker-ja.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/library/jquery-ui.multidatespicker.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/detect.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/library/japanese-holidays.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/calendar.min.js') }}"></script>

    <script type="text/javascript" src="{{ asset('js/library/jquery.rateit.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/review-load-sitter.min.js') }}"></script>
    <script>
        const SYSTEM_TEXT_SALARY_SITTER = "{{ $salary['salary_sitter'] }}"
        const SYSTEM_TEXT_SALARY_HOUSE = "{{ $salary['salary_house'] }}"
        const ROUTE_LOAD_REVIEWS  = "{{ Route('AJAX_LOAD_REVIEWS') }}"
        const LIMIT_RECORD_REVIEW = 3;
    </script>
@endsection

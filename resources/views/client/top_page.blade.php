
@section('title', 'Top Page')
@section('stylesheets')
    <link rel="stylesheet" href="{{ asset('css/library/jquery-ui.min.css')}}">
@endsection
@extends('_LAYOUT.index')
@section('content')
<div class="top-page">
    <section class="slider">
        <div class="slider-left">
            <img class="slider-img" src="{{ asset('') }}image/slider-left.jpg">
            <div class="slogan">
                <h2>安心して任せられる人を</h2>
                <h3>もっと頼って、ともに育む社会へ</h3>
            </div>
            <div class="searchbox">
                <div class="header">
                    <span>ベビーシッターを探そう</span>
                </div>
                <div class="body">
                    <form action="{{route('search-sitters')}}">
                        <div class="input_section custom">
                            <div class="select_opt dpicker">
                                <input name="wdate" class="date-picker-input date-picker-custom" autocomplete="off" type="text" id="slt_datepicker" placeholder="日付で探す"/>
                            </div>
                        </div>
                        <div class="input_section custom">
                            <select name="cage" class="select_opt" name="" id="">
                                <option value="">子供の年齢</option>
                                <option value="0mth">0歳0ヶ月</option>
                                <option value="1to2mth">0歳1ヶ月~2ヶ月</option>
                                <option value="3to5mth">0歳3ヶ月~5ヶ月</option>
                                <option value="6to11mth">0歳6ヶ月~11ヶ月</option>
                                <option value="1year">1歳</option>
                                <option value="2year">2歳</option>
                                <option value="3to6year">3歳~6歳</option>
                                <option value="gt7year">7歳以上</option>
                            </select>
                        </div>
                        <div class="input_section div-hidden">
                            <input type="hidden"/>
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
                                <option value="1">￥1,000~￥1,490</option>
                                <option value="2">￥1,500~￥1,990</option>
                                <option value="3">￥2,000以上</option>
                            </select>
                        </div>
                        <div class="input_section div-btn">
                            <input type="submit" class="btn-submit" value="探す">
                        </div>
                    </form>
                    <a href="{{route('EMPLOYER_REGISTER')}}" class="btn-register">
                        <span>新規登録する</span>
                    </a>
                    <div class="btn-link">
                        <a href="{{route('SITTER_REGISTER')}}">ベビーシッターとして働く ></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider-right">
            <img class="slider-img" src="{{ asset('') }}image/slider-right.jpg">
            <div class="slogan">
                <h2>安心して任せられる人を</h2>
                <h3>もっと頼って、ともに育む社会へ</h3>
            </div>
        </div>
    </section>
    <section class="employees">
        <div class="employees_container" id="load_sitters">

        </div>
    </section>
    <section class="register_intro">
        <div class="container_info">
            <img class="background-img" src="{{ asset('') }}image/background-image-register.jpg">
            <div class="div-cover">
                <div class="div-child left"></div>
                <div class="div-child right">
                    <div class="card-container">
                        <div class="title">
                            <span>
                                ベビーシッター依頼
                            </span>
                        </div>
                        <div class="desc">
                            <span>
                                ベビーシッターサービスをご利用いただくには会員登録が必要です。
                            </span>
                        </div>
                        <a class="btn-register orange" href="{{route('EMPLOYER_REGISTER')}}" type="button">
                            <span>無料会員登録</span>
                        </a>
                    </div>
                    <div class="card-container">
                        <div class="title">
                            <span>
                                働きたい方
                            </span>
                        </div>
                        <div class="desc">
                            <span>
                                ベビーシッターのお仕事をお探しの方は会員登録をしていただくことでサービスをご利用できます。
                            </span>
                        </div>
                        <a class="btn-register green" href="{{route('SITTER_REGISTER')}}" type="button">
                            <span>無料会員登録</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="guide" id="guide">
        <div class="guide_container">
            <div class="title_section">
                <span>ご利用の流れ</span>
            </div>
            <div class="items">
                    <div class="item">
                        <div class="item_container">
                            <div class="header">
                                <div class="header-left">
                                    STEP 1
                                </div>
                                <div class="header-right">
                                    ご登録
                                </div>
                            </div>
                            <div class="body-content">
                                <p>
                                    無料会員登録でプロフィールを
                                    ご記入ください。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item_container">
                            <div class="header">
                                <div class="header-left">
                                    STEP 2
                                </div>
                                <div class="header-right">
                                    シッターを探す
                                </div>
                            </div>
                            <div class="body-content">
                                <p>
                                    気になるシッターが見つかった
                                    ら、自己紹介などを参考にシッ
                                    ターを選びましょう。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item_container">
                            <div class="header">
                                <div class="header-left">
                                    STEP 3
                                </div>
                                <div class="header-right">
                                    シッター予約
                                </div>
                            </div>
                            <div class="body-content">
                                <p>
                                    条件の合うベビーシッターに、
                                    予約リクエストを送ります。<br/>
                                    予約確定を以って、正式に予約
                                    が成立します。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item_container">
                            <div class="header">
                                <div class="header-left">
                                    STEP 4
                                </div>
                                <div class="header-right">
                                    お支払い
                                </div>
                            </div>
                            <div class="body-content">
                                <p>
                                    運営よりお支払い詳細のメールが
                                    届きます。<br/>
                                    クレジットカード決済でお支払い
                                    をしてください。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item_container">
                            <div class="header">
                                <div class="header-left">
                                    STEP 5
                                </div>
                                <div class="header-right">
                                    サポート当日まで
                                </div>
                            </div>
                            <div class="body-content">
                                <p>
                                    サポート実施前に気になる点や
                                    伝えておきたいことがある場合
                                    は事前にメッセージ機能でシッ
                                    ターに確認しておきます。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item_container">
                            <div class="header">
                                <div class="header-left">
                                    STEP 6
                                </div>
                                <div class="header-right">
                                    お子様お預け
                                </div>
                            </div>
                            <div class="body-content">
                                <p>
                                    当日は安心してお子様をベビー
                                    シッターにお任せしましょう。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item_container">
                            <div class="header">
                                <div class="header-left">
                                    STEP 7
                                </div>
                                <div class="header-right">
                                    サポート終了
                                </div>
                            </div>
                            <div class="body-content">
                                <p>
                                    サポート完了後、ベビーシッター
                                    より完了報告が届きます。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item_container">
                            <div class="cover">
                                <a href="{{route('EMPLOYER_REGISTER')}}" class="draw-circle orange">
                                    <img class="icon-pen" src="{{ asset('') }}image/icons/icon-pen.png">
                                    <span>無料会員登録</span>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
    </section>
    <section class="faq" id="faq">
        <div class="faq_container">
            <div class="title_section">
                <span>よくあるご質問</span>
            </div>
            <div class="items">
                <div class="item">
                    <div class="item_container">
                        <div class="left-side">
                            <img class="icon-question" src="{{asset('image/icons')}}/question-icon.png" alt="question-icon.png">
                        </div>
                        <div class="right-side">
                            <p class="text">○○○○○○○○○○○○○○○○○○○○ですか？</p>
                        </div>
                    </div>
                    <div class="item_container">
                        <div class="left-side">&nbsp;</div>
                        <div class="right-side">
                            <p class="text">
                                ○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○です <br/>
                                ○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○です <br/>
                                ○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○です
                            </p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item_container">
                        <div class="left-side">
                            <img class="icon-question" src="{{asset('image/icons')}}/question-icon.png" alt="question-icon.png">
                        </div>
                        <div class="right-side">
                            <p class="text">○○○○○○○○○○○○○○○○○○○○ですか？</p>
                        </div>
                    </div>
                    <div class="item_container">
                        <div class="left-side">&nbsp;</div>
                        <div class="right-side">
                            <p class="text">
                                ○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○です <br/>
                                ○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○です <br/>
                                ○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○です
                            </p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item_container">
                        <div class="left-side">
                            <img class="icon-question" src="{{asset('image/icons')}}/question-icon.png" alt="question-icon.png">
                        </div>
                        <div class="right-side">
                            <p class="text">○○○○○○○○○○○○○○○○○○○○ですか？</p>
                        </div>
                    </div>
                    <div class="item_container">
                        <div class="left-side">&nbsp;</div>
                        <div class="right-side">
                            <p class="text">
                                ○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○です <br/>
                                ○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○です <br/>
                                ○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○です
                            </p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item_container">
                        <div class="left-side">
                            <img class="icon-question" src="{{asset('image/icons')}}/question-icon.png" alt="question-icon.png">
                        </div>
                        <div class="right-side">
                            <p class="text">○○○○○○○○○○○○○○○○○○○○ですか？</p>
                        </div>
                    </div>
                    <div class="item_container">
                        <div class="left-side">&nbsp;</div>
                        <div class="right-side">
                            <p class="text">
                                ○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○です <br/>
                                ○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○です <br/>
                                ○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○です
                            </p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item_container">
                        <div class="left-side">
                            <img class="icon-question" src="{{asset('image/icons')}}/question-icon.png" alt="question-icon.png">
                        </div>
                        <div class="right-side">
                            <p class="text">○○○○○○○○○○○○○○○○○○○○ですか？</p>
                        </div>
                    </div>
                    <div class="item_container">
                        <div class="left-side">&nbsp;</div>
                        <div class="right-side">
                            <p class="text">
                                ○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○です <br/>
                                ○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○です <br/>
                                ○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○です
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="register_section">
                <div class="card-container card-orange">
                    <div class="title">
                        <span>
                            ベビーシッター依頼
                        </span>
                    </div>
                    <div class="desc">
                        <span>
                            ベビーシッターサービスをご利用いただくには会員登録が必要です。
                        </span>
                    </div>
                    <a class="btn-register orange" href="{{route('EMPLOYER_REGISTER')}}" type="button">
                        <span>無料会員登録</span>
                    </a>
                </div>
                <div class="card-container card-green">
                    <div class="title">
                        <span>
                            働きたい方
                        </span>
                    </div>
                    <div class="desc">
                        <span>
                            ベビーシッターのお仕事をお探しの方は会員登録をしていただくことでサービスをご利用できます。
                        </span>
                    </div>
                    <a class="btn-register green" href="{{route('SITTER_REGISTER')}}" type="button">
                        <span>無料会員登録</span>
                    </a>
                </div>
            </div>
    </section>
</div>

@endsection

@section('scripts')
    {{-- script login if u have --}}
    <script type="text/javascript" src="{{ asset('js/library/jquery-ui.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/datepicker-ja.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/jquery-ui.multidatespicker.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/ajaxLoad.js') }}"></script>
    <script>
        $( function() {
            $( "#slt_datepicker" ).multiDatesPicker();
            $( "#slt_datepicker2" ).multiDatesPicker();
        } );
    </script>
@endsection

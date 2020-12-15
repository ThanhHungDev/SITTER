
@section('title', 'Top Page')
@section('stylesheets')
    <link rel="stylesheet" href="{{ asset('css/library/jquery-ui.min.css')}}">
@endsection
@extends('_LAYOUT.index')
@section('content')
<div class="top-page">

    <section class="slider">
        <div class="slider-container">
            <img class="babysitters-img" src="{{ asset('/image/top-page/slider-babysitter.png')}}" alt="babysitters">
            <img class="slogan1" src="{{ asset('/image/top-page/slogan1.png')}}" alt="slogan1">
            <img class="slogan2" src="{{ asset('/image/top-page/slogan2.png')}}" alt="slogan2">
            <img class="slogan-mobile" src="{{ asset('/image/top-page/slogan-mobile.png')}}" alt="slogan-mobile">
            <div class="searchbox">
                <img class="background-img" src="{{ asset('/image/top-page/searchbox.png')}}" alt="background-searchbox">
                <img class="title-img" src="{{ asset('/image/top-page/title-searchbox.png')}}" alt="title-searchbox">
                <div class="body">
                    <form action="{{route('search-sitters')}}">
                        <div class="input_section custom">
                            <div class="select_opt dpicker">
                                <input name="wdate" class="date-picker-input date-picker-custom" onfocus="blur()" autocomplete="off" type="text" id="slt_datepicker" placeholder="日付で探す"/>
                            </div>
                        </div>
                        <div class="input_section custom">
                            <select name="cage" class="select_opt">
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
                        <div class="input_section custom">
                            <select name="wplace" class="select_opt">
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
                            <select name="wcond" class="select_opt">
                                <option value="">条件を指定</option>
                                @foreach (config('constant.SALARY_FILTER_RANGE') as $k => $v)
                                    <option value="{{$k}}">{{$v}}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="input_section div-btn">
                            <input type="submit" class="btn-submit" value="探す">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="clouds"></div>
    </section>

    <section class="buttons-action">
        <div class="search-container-mobile">
            <h4>安心のサイト内チャットシステム！！</h4>
            <p>
                お手伝いさん探し～依頼完了までサイト内チャットで進められますので個人アドレスや連絡先を使用する必要がありません。
            </p>
            <div class="searchbox">
                <h3 class="title">ベビーシッター、家政婦を探す</h3>
                <div class="body">
                    <form action="{{route('search-sitters')}}">
                        <div class="input_section custom">
                            <div class="select_opt dpicker">
                                <input name="wdate" class="date-picker-input date-picker-custom" onfocus="blur()" autocomplete="off" type="text" id="slt_datepicker2" placeholder="日付で探す"/>
                            </div>
                        </div>
                        <div class="input_section custom">
                            <select name="cage" class="select_opt">
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
                        <div class="input_section custom">
                            <select name="wplace" class="select_opt">
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
                            <select name="wcond" class="select_opt">
                                <option value="">条件を指定</option>
                                @foreach (config('constant.SALARY_FILTER_RANGE') as $k => $v)
                                    <option value="{{$k}}">{{$v}}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="input_section div-btn">
                            <input type="submit" class="btn-submit" value="探す">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="buttons-container">
            <div class="btn-column yellow">
                <a href="">
                    <img class="button-img" src="{{ asset('/image/top-page/btn1.png')}}" alt="button-image">
                </a>
                <img class="button-img-shadow" src="{{ asset('/image/top-page/btn1-shadow.png')}}" alt="button-image-shadow">
            </div>
            <div class="btn-column red">
                <a href="{{route('EMPLOYER_REGISTER')}}">
                    <img class="button-img" src="{{ asset('/image/top-page/btn2-active.png')}}" alt="button-image">
                </a>
                <img class="button-img-shadow" src="{{ asset('/image/top-page/btn2-shadow.png')}}" alt="button-image-shadow">
            </div>
            <div class="btn-column blue">
                <a href="{{route('SITTER_REGISTER')}}">
                    <img class="button-img" src="{{ asset('/image/top-page/btn3-active.png')}}" alt="button-image">
                </a>
                <img class="button-img-shadow" src="{{ asset('/image/top-page/btn3-shadow.png')}}" alt="button-image-shadow">
            </div>
            <div class="btn-column green">
                <a href="">
                    <img class="button-img" src="{{ asset('/image/top-page/btn4.png')}}" alt="button-image">
                </a>
                <img class="button-img-shadow" src="{{ asset('/image/top-page/btn4-shadow.png')}}" alt="button-image-shadow">
            </div>
        </div>
    </section>

    <section class="employees">
        <div class="employees_container" id="load_sitters">
        </div>
    </section>

    <section class="info_inquiry">
        <div class="clouds2"></div>
        <div class="inquiry_container">
            <p class="title-txt">週4～5日・常勤など長期間をご希望・ご検討の方</p>
            <p class="content-txt">
                ・毎日利用したいので毎回の調整がめんどう・・・<br/>
                というご利用者様に向けたサービスとして、当社コーディネーターがご利用者様のご要望をお聞きして、ご納得がいくまで
                お手伝いさんをご紹介させて頂くサービスをご用意しております。お気軽にご利用ください！！
            </p>
            <a class="link" href="{{route('VIEW_INFO_INQUIRY')}}">ここをクリック！！</a>
        </div>
    </section>

    <section class="register_intro">
        <div class="container_info">
            <img class="register_bg_cover" src="{{ asset('/image/top-page/background-image-register-md.jpg')}}" alt="bg_cover">
            <div class="div-cover">
                <svg viewBox="0 0 1342 478"
                    xmlns="http://www.w3.org/2000/svg">
                    <image  x="28px" y="68px" width="480px" height="224px" href="{{ asset('/image/top-page/regis1_top.png')}}" />
                    <a class="btn-register" href="{{route('EMPLOYER_REGISTER')}}">
                        <image  x="28px" y="231px" width="414px" height="61px" href="{{ asset('/image/top-page/regis1_bot.png')}}" />
                    </a>
                    <image  x="798px" y="183px" width="514px" height="254px" href="{{ asset('/image/top-page/regis2_top.png')}}"/>
                    <a class="btn-register" href="{{route('SITTER_REGISTER')}}">
                        <image  x="798px" y="373px" width="514px" height="64px" href="{{ asset('/image/top-page/regis2_bot.png')}}"/>
                    </a>
                    <path  fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="4px" stroke-dasharray="16, 8" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
                    d="M671.000,2.000 C801.339,2.000 907.000,107.661 907.000,238.000 C907.000,368.339 801.339,474.000 671.000,474.000 C540.661,474.000 435.000,368.339 435.000,238.000 C435.000,107.661 540.661,2.000 671.000,2.000 Z"/>
                </svg>
                <div class="register_section">
                    <div class="card-container card-brown">
                        <div class="desc">
                            <span class="title">
                                お手伝いさんを依頼
                            </span>
                            <span>
                                ベビーシッターサービスをご利用いただくには会員登録が必要です。
                            </span>
                        </div>
                        <a class="btn-register" href="{{route('EMPLOYER_REGISTER')}}">
                            <span>無料会員登録</span>
                        </a>
                    </div>
                    <div class="card-container card-orange">
                        <div class="desc">
                            <span class="title">
                                働きたい方
                            </span>
                            <span>
                                ベビーシッターのお仕事をお探しの方は会員登録をしていただくことでサービスをご利用できます。
                            </span>
                        </div>
                        <a class="btn-register" href="{{route('SITTER_REGISTER')}}">
                            <span>無料会員登録</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="guide" id="guide">
        <div class="guide_container">
            <h3 class="title_section">
                ご利用の流れ
            </h3>
            <div class="items">
                    <div class="item">
                        <img class="arr1" src="{{ asset('/image/top-page/step1.png')}}" alt="step1">
                    </div>
                    <div class="item">
                        <img class="arr2" src="{{ asset('/image/top-page/step4.png')}}" alt="step2">
                    </div>
                    <div class="item">
                        <img class="arr3" src="{{ asset('/image/top-page/step2.png')}}" alt="step3">
                    </div>
                    <div class="item">
                        <img class="arr4" src="{{ asset('/image/top-page/step5.png')}}" alt="step4">
                    </div>
                    <div class="item">
                        <img class="arr5" src="{{ asset('/image/top-page/step3.png')}}" alt="step5">
                    </div>
                    <div class="item">
                        <img class="arr6" src="{{ asset('/image/top-page/step6.png')}}" alt="step6">
                    </div>
                    <div class="item itm7">
                        <img class="arr7" src="{{ asset('/image/top-page/step7.png')}}" alt="step7">
                    </div>
                    <div class="submit">
                        <a href="{{route('EMPLOYER_REGISTER')}}">
                            <img src="{{ asset('/image/top-page/join_button_active.png')}}" alt="submit">
                        </a>
                    </div>
            </div>
        </div>
    </section>

    <section class="faq" id="faq">
        <div class="faq_container">
            <h3 class="title_section">
                よくあるご質問
            </h3>
            <div class="faq_body">
                <div class="items">
                    <div class="item">
                        <div class="question">
                            <img src="{{ asset('/image/top-page/question-icon.png')}}" alt="question-icon">
                            <p><span>入会金や年会費はかかりますか？</span></p>
                        </div>
                        <div class="answer">
                            <p><span>かかりません。「家政婦さんベビーシッタードットコム」へお支払い頂く入会金、年会費はありません。</span></p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="question">
                            <img src="{{ asset('/image/top-page/question-icon.png')}}" alt="question-icon">
                            <p>ユーザー登録に必要なものは何でしょうか？</p>
                        </div>
                        <div class="answer">
                            <p>ご利用には会員登録が必要です。「家政婦さんベビーシッタードットコム」ホームページの「<a href="/employer/register" class="faq_link">無料会員登録</a>」をクリックしてください。</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="question">
                            <img src="{{ asset('/image/top-page/question-icon.png')}}" alt="question-icon">
                            <p>ベビーシッター登録に必要なものは何でしょうか？</p>
                        </div>
                        <div class="answer">
                            <p>
                                ご利用には会員登録が必要です。「家政婦さんベビーシッタードットコム」ホームページの「<a href="/sitter/register" class="faq_link">無料会員登録</a>」をクリックしてください。<br/>
                                    また登録の際、ご本人様の本人確認書類の「おもて面」と「うら面」の写真画像が必要となります。
                            </p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="question">
                            <img src="{{ asset('/image/top-page/question-icon.png')}}" alt="question-icon">
                            <p>ベビーシッターさんに依頼をしたいのですがどう探せばよいですか？</p>
                        </div>
                        <div class="answer">
                            <p>
                                <a href="/advance-search" class="faq_link">シッターを探す</a>ページで条件を入れてシッターさんを探せます。<br/>
                                    子供の年齢、保育地域、保育士の保有資格、時給、時間などあらゆる検索項目で絞り込むことができます。
                            </p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="question">
                            <img src="{{ asset('/image/top-page/question-icon.png')}}" alt="question-icon">
                            <p>ログインパスワードを忘れてしまいました。</p>
                        </div>
                        <div class="answer">
                            <p>
                                パスワードの再発行をすることができます。<br/>
                                ログイン画面の「パスワードを忘れたら」をクリックしてください。<br/>
                                ご指定のアドレスにパスワード再発行メールが届きますので、手順に沿って、パスワードの再発行を行ってください。
                            </p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="question">
                            <img src="{{ asset('/image/top-page/question-icon.png')}}" alt="question-icon">
                            <p>ベビーシッターの登録が完了したのにログインができません。</p>
                        </div>
                        <div class="answer">
                            <p>
                                ご登録内容、提出書類の審査が完了してからログインができるようになります。<br/>
                                審査にはお時間を頂戴することもござますので、審査終了のお知らせが来るまで今しばらくお待ちください。<br/>
                                また、〇日以上たっても審査終了の通知が届かない場合には、下記までお問い合わせください。<br/>
                                &lt;お問い合わせ先> <br/>
                                株式会社トラストグロース　<b>TEL：03-6911-3010</b>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="register_section">
                    <div class="card-container card-green">
                        <div class="desc">
                            <span class="title">
                                お手伝いさんを依頼
                            </span>
                            <span>
                                ベビーシッターサービスをご利用いただくには会員登録が必要です。
                            </span>
                        </div>
                        <a class="btn-register" href="{{route('EMPLOYER_REGISTER')}}">
                            <span>無料会員登録</span>
                        </a>
                    </div>
                    <div class="card-container card-blue">
                        <div class="desc">
                            <span class="title">
                                働きたい方
                            </span>
                            <span>
                                ベビーシッターのお仕事をお探しの方は会員登録をしていただくことでサービスをご利用できます。
                            </span>
                        </div>
                        <a class="btn-register" href="{{route('SITTER_REGISTER')}}">
                            <span>無料会員登録</span>
                        </a>
                    </div>
                </div>
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
            //for datepicker
            var dateToday = new Date();
            $( "#slt_datepicker" ).multiDatesPicker({
                beforeShow: function() {
                    setTimeout(function(){
                        $('.ui-datepicker').css('z-index', 999999);
                    }, 0);
                },
                minDate: dateToday,
                onSelect: function(selectedDate) {
                    var option = this.id == "from" ? "minDate" : "maxDate",
                        instance = $(this).data("datepicker"),
                        date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
                    dates.not(this).datepicker("option", option, date);
                }
            });
            $( "#slt_datepicker2" ).multiDatesPicker({
                beforeShow: function() {
                    setTimeout(function(){
                        $('.ui-datepicker').css('z-index', 999999);
                    }, 0);
                },
                minDate: dateToday,
                onSelect: function(selectedDate) {
                    var option = this.id == "from" ? "minDate" : "maxDate",
                        instance = $(this).data("datepicker"),
                        date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
                    dates.not(this).datepicker("option", option, date);
                }
            });
        } );
        // for FAQ
        $('.item .answer').each(function () {
            $(this).hide();
        });
        $('.item').on("click", function () {
            $('.answer', this).toggle(
                 function() {
                    var parent = $(this).parent().find(".question");
                    parent.toggleClass("active");
                }
            );
        });

    </script>
@endsection


@section('title', 'Top Page')
@section('stylesheets')
    <link rel="stylesheet" href="{{ asset('css/library/jquery-ui.min.css')}}">
@endsection
@extends('_LAYOUT.index')
@section('content')
<div class="top-page">
    <section class="slider">
        <div class="slider-container">
            <div class="slogan">
                <h2>安心して任せられる人を</h2>
                <h3>もっと頼って、ともに育む社会へ</h3>
            </div>
            <img class="slider-copy1" src="{{ asset('/image/slider-copy1.png')}}" alt="copy">
            <img class="slider-copy2" src="{{ asset('/image/slider-copy2.png')}}" alt="copy2">
            <img class="slider-copy3" src="{{ asset('/image/slider-copy3.png')}}" alt="copy3">
            <div class="searchbox">
                <div class="header">
                    <span>ベビーシッター、家政婦を探す</span>
                </div>
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
                        <div class="input_section div-hidden">
                            <input type="hidden"/>
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
                    <a href="{{route('EMPLOYER_REGISTER')}}" class="btn-register">
                        <span>新規登録する</span>
                    </a>
                    <div class="btn-link">
                        <a href="{{route('SITTER_REGISTER')}}">ベビーシッター、家政婦として働く ></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider-container-sp">
            <img class="slider-copy1" src="{{ asset('/image/slider-copy1.png')}}" alt="copy">
            <div class="bg-container">
                <div class="opacity"></div>
                <div class="searchbox">
                    <div class="header">
                        <span>ベビーシッター、家政婦を探す</span>
                    </div>
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
                            <div class="input_section div-hidden">
                                <input type="hidden"/>
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
                        <div class="btn-link advance-search">
                            <a href="{{route('advance-search')}}">詳細検索 ></a>
                        </div>
                        <a href="{{route('EMPLOYER_REGISTER')}}" class="btn-register">
                            <span>新規登録する</span>
                        </a>
                        <div class="btn-link">
                            <a href="{{route('SITTER_REGISTER')}}">ベビーシッター、家政婦として働く ></a>
                        </div>
                    </div>
                </div>
                <img class="slider-copy2" src="{{ asset('/image/slider-copy2-sp.png')}}" alt="copy2">
            </div>

        </div>

    </section>
    <section class="employees">
        <div class="employees_container" id="load_sitters">
        </div>
    </section>
    <section class="register_intro">
        <div class="container_info">
            <div class="div-cover">
                <div class="div-child">
                    <div class="card-container">
                        <div class="title">
                            <span>
                                お手伝いさんを依頼
                            </span>
                        </div>
                        <div class="desc">
                            <span>
                                ベビーシッターサービスをご利用いただくには会員登録が必要です。
                            </span>
                        </div>
                        <a class="btn-register orange" href="{{route('EMPLOYER_REGISTER')}}">
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
                        <a class="btn-register green" href="{{route('SITTER_REGISTER')}}">
                            <span>無料会員登録</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="guide" id="guide">
        <div class="accordion">ご利用の流れ</div>
        <div class="guide_container panel">
            <h3 class="title_section">
                ご利用の流れ
            </h3>
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
                                    お手伝いさん検索
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
                                    お手伝いさん予約
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
                                    <img alt="register icon" class="icon-pen" src="{{ asset('') }}image/icons/icon-pen.png">
                                    <span>無料会員登録</span>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </section>
    <section class="faq" id="faq">
        <div class="accordion faq">よくあるご質問</div>
        <div class="faq_container panel">
            <h3 class="title_section">
                よくあるご質問
            </h3>
            <div class="items">
                <div class="item">
                    <div class="item_container">
                        <div class="left-side">
                            <img class="icon-question" src="{{asset('image/icons')}}/question-icon.png" alt="question-icon.png">
                        </div>
                        <div class="right-side">
                            <p class="text question">入会金や年会費はかかりますか？</p>
                        </div>
                    </div>
                    <div class="item_container">
                        <div class="left-side">&nbsp;</div>
                        <div class="right-side">
                            <p class="text answer">
                                かかりません。「家政婦さんベビーシッタードットコム」へお支払い頂く入会金、年会費はありません。
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
                            <p class="text question">ユーザー登録に必要なものは何でしょうか？</p>
                        </div>
                    </div>
                    <div class="item_container">
                        <div class="left-side">&nbsp;</div>
                        <div class="right-side">
                            <p class="text answer">
                                ご利用には会員登録が必要です。「家政婦さんベビーシッタードットコム」ホームページの「<a href="/employer/register" class="faq_link">無料会員登録</a>」をクリックしてください。
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
                            <p class="text question">ベビーシッター登録に必要なものは何でしょうか？</p>
                        </div>
                    </div>
                    <div class="item_container">
                        <div class="left-side">&nbsp;</div>
                        <div class="right-side">
                            <p class="text answer">
                                ご利用には会員登録が必要です。「家政婦さんベビーシッタードットコム」ホームページの「<a href="/sitter/register" class="faq_link">無料会員登録</a>」をクリックしてください。<br/>
                                また登録の際、ご本人様の本人確認書類の「おもて面」と「うら面」の写真画像が必要となります。
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
                            <p class="text question">ベビーシッターさんに依頼をしたいのですがどう探せばよいですか？</p>
                        </div>
                    </div>
                    <div class="item_container">
                        <div class="left-side">&nbsp;</div>
                        <div class="right-side">
                            <p class="text answer">
                                <a href="/advance-search" class="faq_link">シッターを探す</a>ページで条件を入れてシッターさんを探せます。<br/>
                                子供の年齢、保育地域、保育士の保有資格、時給、時間などあらゆる検索項目で絞り込むことができます。
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
                            <p class="text question">ログインパスワードを忘れてしまいました。</p>
                        </div>
                    </div>
                    <div class="item_container">
                        <div class="left-side">&nbsp;</div>
                        <div class="right-side">
                            <p class="text answer">
                                パスワードの再発行をすることができます。<br/>
                                ログイン画面の「パスワードを忘れたら」をクリックしてください。<br/>
                                ご指定のアドレスにパスワード再発行メールが届きますので、手順に沿って、パスワードの再発行を行ってください。
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
                            <p class="text question">ベビーシッターの登録が完了したのにログインができません。</p>
                        </div>
                    </div>
                    <div class="item_container">
                        <div class="left-side">&nbsp;</div>
                        <div class="right-side">
                            <p class="text answer">
                                ご登録内容、提出書類の審査が完了してからログインができるようになります。<br/>
                                審査にはお時間を頂戴することもござますので、審査終了のお知らせが来るまで今しばらくお待ちください。<br/>
                                また、〇日以上たっても審査終了の通知が届かない場合には、下記までお問い合わせください。<br/>
                                &lt;お問い合わせ先> <br/>
                                株式会社トラストグロース　<b>TEL：03-6911-3010</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="register_section">
                <div class="card-container card-orange">
                    <div class="title">
                        <span>
                            お手伝いさんを依頼
                        </span>
                    </div>
                    <div class="desc">
                        <span>
                            ベビーシッターサービスをご利用いただくには会員登録が必要です。
                        </span>
                    </div>
                    <a class="btn-register orange" href="{{route('EMPLOYER_REGISTER')}}">
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
                    <a class="btn-register green" href="{{route('SITTER_REGISTER')}}">
                        <span>無料会員登録</span>
                    </a>
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
            var dateToday = new Date();
            $( "#slt_datepicker" ).multiDatesPicker({
                minDate: dateToday,
                onSelect: function(selectedDate) {
                    var option = this.id == "from" ? "minDate" : "maxDate",
                        instance = $(this).data("datepicker"),
                        date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
                    dates.not(this).datepicker("option", option, date);
                }
            });
            $( "#slt_datepicker2" ).multiDatesPicker({
                minDate: dateToday,
                onSelect: function(selectedDate) {
                    var option = this.id == "from" ? "minDate" : "maxDate",
                        instance = $(this).data("datepicker"),
                        date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
                    dates.not(this).datepicker("option", option, date);
                }
            });
        } );

        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
        }
    </script>
@endsection

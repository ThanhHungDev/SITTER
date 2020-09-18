
@section('title', 'Advance Search')
@section('stylesheets')
    <link rel="stylesheet" href="{{ asset('css/library/jquery-ui.min.css')}}">
@endsection
@extends('_LAYOUT.index')
@section('content')
<div class="advance-search-page">
    <?php
        function get_times( $default = '19:00', $interval = '+30 minutes' ) {

            $output = '';

            $current = strtotime( '00:00' );
            $end = strtotime( '23:59' );

            while( $current <= $end ) {
                $time = date( 'H:i', $current );
                $sel = ''; //( $time == $default ) ? ' selected' : '';

                $output .= "<option value=\"{$time}\"{$sel}>" . date( 'h:i A', $current ) .'</option>';
                $current = strtotime( $interval, $current );
            }
            return $output;
        }
    ?>
    <section class="slider">
        <img class="slider-img" alt="banner" src="{{ asset('') }}image/seach_banner.jpg">
        <div class="searchbox">
            <div class="header">
                <span>ベビーシッターを探す</span>
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
                        <select name="time_in" class="select_opt">
                            <option value="">--:--</option>
                            <?php echo get_times(); ?>
                        </select>
                    </div>
                    <div class="input_section custom">
                        <select name="time_out" class="select_opt">
                            <option value="">--:--</option>
                            <?php echo get_times(); ?>
                        </select>
                    </div>
                    <div class="input_section div-btn">
                        <input type="submit" class="btn-submit" value="探す">
                    </div>
                </form>
            </div>
        </div>
    </section>
    <form action="{{route('search-sitters')}}">
        <section class="area-search">
            <div class="area-search-container">
                <div class="title-section">
                    <span>地域から探す</span>
                </div>
                <div class="body-section">
                    @foreach ($jp_locations as $key => $value)
                        <div class="area">
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
                            <span class="label">{{$area_label}}&nbsp;&nbsp;:&nbsp;&nbsp;</span>
                            @foreach ($value as $k => $v)
                                <a href="{{route('search-sitters')}}?wplace={{$v}}" class="item">{{$v}}</a>
                                @if(++$i === $numItems)
                                @else
                                <span class="space">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                                @endif
                            @endforeach
                        </div>
                    @endforeach
                </div>
            </div>
            <div class="area-search-container detail-search">
                <div class="title-section">
                    <span>条件を指定して探す</span>
                </div>
                <div class="body-section">
                    <div class="input_section custom adv">
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
                    <div class="row-content">
                        <span class="title-row">日程</span>
                        <div class="date-row input-box">
                            <div class="input_section custom adv">
                                <div class="select_opt dpicker">
                                    <input name="wdate" class="date-picker-input date-picker-custom" onfocus="blur()" autocomplete="off" type="text" id="slt_datepicker2" placeholder="日付で探す"/>
                                </div>
                            </div>

                            <div class="input_section custom adv">
                                <select name="time_in" class="select_opt">
                                    <option value="">--:--</option>
                                    <?php echo get_times(); ?>
                                </select>
                            </div>
                            <div class="input_section custom adv">
                                <select name="time_out" class="select_opt">
                                    <option value="">--:--</option>
                                    <?php echo get_times(); ?>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="row-content cbx">
                        <span class="title-row">保育可能年齢</span>
                        <div class="date-row">
                            <label class="cbx_container">0歳0ヶ月
                                <input name="age_range[]" value="0mth" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">0歳1ヶ月~2ヶ月
                                <input name="age_range[]" value="1to2mth" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">0歳3ヶ月~5ヶ月
                                <input name="age_range[]" value="3to5mth" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">0歳6ヶ月~11ヶ月
                                <input name="age_range[]" value="6to11mth" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">1歳
                                <input name="age_range[]" value="1year" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">2歳
                                <input name="age_range[]" value="2year" type="checkbox">
                                <span name="age_range[]" class="checkmark"></span>
                            </label>
                            <label class="cbx_container">3歳~6歳
                                <input name="age_range[]" value="3to6year" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">7歳以上
                                <input name="age_range[]" value="gt7year" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>

                    <div class="row-content cbx">
                        <span class="title-row">受け入れ人数</span>
                        <div class="date-row">
                            <label class="cbx_container">1人
                                <input name="num_child[]" value="1" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">2人
                                <input name="num_child[]" value="2" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">3人以上
                                <input name="num_child[]" value="3" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>

                    <div class="row-content cbx">
                        <span class="title-row">時給</span>
                        <div class="date-row">
                            @foreach (config('constant.SALARY_FILTER_RANGE') as $k => $v)
                                <label class="cbx_container">{{$v}}
                                    <input name="cash[]" value="{{$k}}" type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            @endforeach
                        </div>
                    </div>

                    <div class="row-content cbx">
                        <span class="title-row">保有資格</span>
                        <div class="date-row">
                            <label class="cbx_container">保育士
                                <input name="exps[]" value="1" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">看護師
                                <input name="exps[]" value="2" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">幼稚園教論
                                <input name="exps[]" value="3" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">家庭的保育者
                                <input name="exps[]" value="4" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">子育て支援（地域保育コース）
                                <input name="exps[]" value="5" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="date-row">
                            <label class="cbx_container">ACSAベビーシッター養成研修＋現場研修修了者
                                <input name="exps[]" value="6" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">ACSA居宅訪問基礎研修修了者
                                <input name="exps[]" value="7" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">助産師
                                <input name="exps[]" value="8" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">産後ドゥーラ
                                <input name="exps[]" value="9" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="date-row">
                            <label class="cbx_container">ナーシングドゥーラ
                                <input name="exps[]" value="10" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>

                    <div class="row-content cbx">
                        <span class="title-row">特徴</span>
                        <div class="date-row">
                            <label class="cbx_container">送迎サポート
                                <input name="skills[]" value="1" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">簡単な料理（離乳食等の温めのみ）
                                <input name="skills[]" value="2" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">早期対応
                                <input name="skills[]" value="3" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">夜間対応
                                <input name="skills[]" value="4" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">子育て経験
                                <input name="skills[]" value="5" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">病児
                                <input name="skills[]" value="6" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">病後児
                                <input name="skills[]" value="7" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="date-row">
                            <label class="cbx_container">音楽レッスン
                                <input name="skills[]" value="8" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">スポーツレッスン
                                <input name="skills[]" value="9" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">定期予約
                                <input name="skills[]" value="10" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">簡単な家事
                                <input name="skills[]" value="11" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">英語対応
                                <input name="skills[]" value="12" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">お泊まり保育
                                <input name="skills[]" value="13" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">絵、工作レッスン
                                <input name="skills[]" value="14" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="date-row">
                            <label class="cbx_container">ペットのお世話
                                <input name="skills[]" value="15" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">障がい児
                                <input name="skills[]" value="16" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">お子様の撮影
                                <input name="skills[]" value="17" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">爪きり
                                <input name="skills[]" value="18" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">耳や鼻のお手入れ
                                <input name="skills[]" value="19" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">ベビーマッサージ
                                <input name="skills[]" value="20" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">お散歩
                                <input name="skills[]" value="21" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="date-row">
                            <label class="cbx_container">沐浴
                                <input name="skills[]" value="22" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">産前・産後サポート
                                <input name="skills[]" value="23" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">小学生サポート
                                <input name="skills[]" value="24" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <label class="cbx_container">中学生サポート
                                <input name="skills[]" value="25" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>

                    <div class="btn-section">
                        <button class="btn-search" type="submit">この条件で検索する</button>
                    </div>

                </div>
            </div>
        </section>
    </form>
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
                // beforeShow: function(input, inst) {
                //     $('#ui-datepicker-div').addClass('single-picker');
                // },
                minDate: dateToday,
                onSelect: function(selectedDate) {
                    var option = this.id == "from" ? "minDate" : "maxDate",
                        instance = $(this).data("datepicker"),
                        date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
                    //dates.not(this).datepicker("option", option, date);
                }
            });
        } );
    </script>
@endsection

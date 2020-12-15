
@section('title', 'Sitters List Page')
@section('stylesheets')
    <link rel="stylesheet" href="{{ asset('css/library/jquery-ui.min.css')}}">
@endsection
@extends('_LAYOUT.index')
@section('content')
<div class="search-result-page">
    <section class="search-box-wrapper">
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
                            <option value="0mth" {{($data_params['cage'] === '0mth')? 'selected': ''}}>0歳0ヶ月</option>
                            <option value="1to2mth" {{($data_params['cage'] === '1to2mth')? 'selected': ''}}>0歳1ヶ月~2ヶ月</option>
                            <option value="3to5mth" {{($data_params['cage'] === '3to5mth')? 'selected': ''}}>0歳3ヶ月~5ヶ月</option>
                            <option value="6to11mth" {{($data_params['cage'] === '6to11mth')? 'selected': ''}}>0歳6ヶ月~11ヶ月</option>
                            <option value="1year" {{($data_params['cage'] === '1year')? 'selected': ''}}>1歳</option>
                            <option value="2year" {{($data_params['cage'] === '2year')? 'selected': ''}}>2歳</option>
                            <option value="3to6year" {{($data_params['cage'] === '3to6year')? 'selected': ''}}>3歳~6歳</option>
                            <option value="gt7year" {{($data_params['cage'] === 'gt7year')? 'selected': ''}}>7歳以上</option>
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
                                            <option value="{{$v}}" {{($data_params['wplace'] === $v)? 'selected': ''}}>{{$v}}</option>
                                        @endforeach
                                    </optgroup>
                                @endforeach
                        </select>
                    </div>
                    <div class="input_section custom">
                        <select name="wcond" class="select_opt">
                            <option value="">条件を指定</option>
                            @foreach (config('constant.SALARY_FILTER_RANGE') as $k => $v)
                                <option {{($data_params['wcond'] == $k)? 'selected': ''}} value="{{$k}}">{{$v}}</option>
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
            </div>
        </div>
    </section>
    <section class="employees">
        <div class="employees_container">
            @isset($list_items)
                @if(count($list_items) > 0)
                    <div class="title_section">
                        <span>ベビーシッター検索結果</span>
                    </div>
                    <div class="items">
                        @foreach($list_items as $value)
                        <a href="{{ route('VIEW_SITTER', ['id'=>$value->id]) }}">
                            <div class="item">
                                <div class="top">
                                    <div class="transparent"><div class="triangle"></div></div>
                                    <div class="avartar-circle">
                                        <!-- <img alt="sitter" class="sitters-avatar" src="{{ asset('/image/employee.jpg')}}"/> -->
                                        @if($value->avatar != '')
                                            <img class="sitters-avatar" src="{{ asset($value->avatar) }}"/>
                                        @else
                                            <img class="sitters-avatar" src="{{ asset('image').'/'. ($value->gender == config('constant.GENDER.MALE') ? 'df_male.jpg' : 'df_female.jpg' )}}" />
                                        @endif
                                    </div>
                                </div>
                                <div class="bottom">
                                    <div class="text">
                                        <span class="name">{{$value->first_name}}&nbsp;{{$value->last_name}}</span>
                                        <span class="short_desc">{{$value->self_introduce}}</span>
                                    </div>
                                    <div class="price">
                                        <div class="rate">
                                            ￥{{number_format($value->salary, 0)}}
                                        </div>
                                        <div class="unit">
                                            / 1時間
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        @endforeach
                    </div>
                    <div class="emp_bottom">
                        <div class="paging">
                            <div>
                                {{ $list_items->links() }}
                            </div>
                        </div>
                        {{-- <div class="more_items">
                            <a href="">
                                一覧をみる >
                            </a>
                        </div> --}}
                    </div>
                @else
                        <h2>見つかりません</h2>
                @endif
            @endisset
            <div class="booking-search">
                <div class="title-booking">
                    <span>予約一覧</span>
                </div>
                <div class="content-booking" id="booking-list">

                </div>
            </div>
        </div>

        <div class="nav-bottom">
            <div class="nav-action">
                <div class="bottom-action">
                    <a href="{{ Route('TOP_PAGE')}} ">
                        <button class="btn btn-home">マイページ</button>
                    </a>
                    <a href="{{ Route('search-sitters')}} ">
                        <button class="btn btn-search">検索</button>
                    </a>
                    @if ($is_login)
                        <a href="{{ Route('EMPLOYER_MYPAGE')}} ">
                            <button class="btn btn-profile">プロフィール</button>
                        </a>
                        {{-- <button class="btn btn-register">登録する</button> --}}
                        <a href="{{ Route('EMPLOYER_CHAT') }}">
                            <button class="btn btn-chat"><img src="{{asset('image/icons/icon-message.png')}}" alt="" srcset=""> チャット
                            </button>
                        </a>
                    @endif
                </div>
            </div>
        </div>
    </section>
</div>
@endsection
<input type="hidden" id="dates_selected" value="<?php if(isset($_GET['wdate'])){echo $_GET['wdate'];}?>">
@section('scripts')
    {{-- script login if u have --}}
    <script type="text/javascript" src="{{ asset('js/library/jquery-ui.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/datepicker-ja.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/jquery-ui.multidatespicker.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/search_result.min.js') }}"></script>
    <script>
        $( function() {
            let datePicker_slt = $('#dates_selected').val();
            var dateToday = new Date();
            if(datePicker_slt != ''){
                let arr_dates = datePicker_slt.split(",");
                let arr_output = [];
                arr_dates.forEach(function(item) {
                    let date = new Date(item);
                    var datestring = date.getFullYear()  + "/" + (date.getMonth()+1) + "/" + date.getDate();
                    arr_output.push(datestring);
                });
                $( "#slt_datepicker" ).multiDatesPicker({
                    addDates: arr_output,
                    minDate: dateToday,
                    onSelect: function(selectedDate) {
                        var option = this.id == "from" ? "minDate" : "maxDate",
                            instance = $(this).data("datepicker"),
                            date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
                        dates.not(this).datepicker("option", option, date);
                    }
                });
            }
            else{
                $( "#slt_datepicker" ).multiDatesPicker({
                    minDate: dateToday,
                    onSelect: function(selectedDate) {
                        var option = this.id == "from" ? "minDate" : "maxDate",
                            instance = $(this).data("datepicker"),
                            date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
                        dates.not(this).datepicker("option", option, date);
                    }
                });
            }
        } );
        const URL_BOOKING_SITTER = "{{ route('AJAX_EMPLOYER_BOOKING_SITTER') }}";
        const IS_LOGIN = '{{ $is_login }}';
    </script>
@endsection

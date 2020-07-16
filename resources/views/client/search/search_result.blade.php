
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
                        <input name="wdate" class="date-picker-input date-picker-custom" autocomplete="off" type="text" id="slt_datepicker" placeholder="日付で探す"/>
                        </div>
                    </div>
                    <div class="input_section custom">
                        <select name="cage" class="select_opt" name="" id="">
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
                                            <option value="{{$v}}" {{($data_params['wplace'] === $v)? 'selected': ''}}>{{$v}}</option>
                                        @endforeach
                                    </optgroup>
                                @endforeach
                        </select>
                    </div>
                    <div class="input_section custom">
                        <select name="wcond" class="select_opt" name="" id="">
                            <option value="">条件を指定</option>
                            <option value="1" {{($data_params['wcond'] === '1')? 'selected': ''}}>￥1,000~￥1,490</option>
                            <option value="2" {{($data_params['wcond'] === '2')? 'selected': ''}}>￥1,500~￥1,990</option>
                            <option value="3" {{($data_params['wcond'] === '3')? 'selected': ''}}>￥2,000以上</option>
                        </select>
                    </div>
                    <div class="input_section div-btn">
                        <input type="submit" class="btn-submit" value="探す">
                    </div>
                </form>
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
                            <div class="item">
                                <div class="item_container">
                                    <div class="cover">
                                        <a href="{{ route('VIEW_SITTER', ['id'=>$value->id]) }}">
                                            @if($value->avatar != '')
                                                <img class="item-img" src="{{ asset($value->avatar) }}"/>
                                            @else
                                                <img class="item-img" src="{{ asset('image').'/'. ($value->gender == config('constant.GENDER.MALE') ? 'df_male.jpg' : 'df_female.jpg' )}}" alt=""/>
                                            @endif
                                            <div class="description">
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
                                        </a>
                                    </div>
                                </div>
                            </div>
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
    <script>
        $( function() {
            let datePicker_slt = $('#dates_selected').val();
            if(datePicker_slt != ''){
                let arr_dates = datePicker_slt.split(",");
                let arr_output = [];
                arr_dates.forEach(function(item) {
                    let date = new Date(item);
                    var datestring = date.getFullYear()  + "/" + (date.getMonth()+1) + "/" + date.getDate();
                    arr_output.push(datestring);
                });
                console.log(arr_output);

                $( "#slt_datepicker" ).multiDatesPicker({
                    addDates: arr_output
                });
            }
            else{
                $( "#slt_datepicker" ).multiDatesPicker();
            }
        } );
    </script>
@endsection

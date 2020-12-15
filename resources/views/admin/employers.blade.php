
@section('title', 'Sitters Admin')
@section('stylesheets-admin')
    <link rel="stylesheet" href="{{ asset('css/library/jquery-ui.min.css')}}">
    <link rel="stylesheet" href="{{ asset('css/library/jquery.toast.min.css') }}">
@endsection
@extends('admin._LAYOUT.index')

@section('content-admin')
<div class="container-admin">
    <div class="admin-hearder">
        <div class="hearder-search-container">
            <form action="{{route('ADMIN_EMPLOYERS')}}" method="get" class="f-row">
                <div class="search-select">
                    <select name="pref" class="pref search-control">
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
                                    <option @if(old('pref')==$v) selected @endif value="{{$v}}">{{$v}}</option>
                                @endforeach
                            </optgroup>
                        @endforeach
                    </select>
                </div>
                <div class="search-register-date">
                <input type="text" value="{{ old('date-reg') }}" name="date-reg" autocomplete="off" class="register-date search-control" placeholder="登録日を指定　例）2020/04/30">
                </div>
                <div class="search-user-name">
                    <input type="text" value="{{ old('name') }}" name="name" class="user-name search-control" placeholder="ユーザーを指定">
                </div>
                <div class="search-action">
                    <button type="submit" class="btn-search">
                        探す
                    </button>
                </div>
            </form>
        </div>
    </div>
    <div class="admin-body">
        <div class="body-hearder f-row">
            <div class="hearder-title">
                <span>検索結果 ({{$count}})</span>
            </div>
            <div class="pagination pagi-admin-style f-row">
                @if($employers->isNotEmpty())
                    {{ $employers->links('pagination.simple-default') }}
                @endif
            </div>
        </div>
        <div class="body-item f-col">
            @if($employers->isEmpty())
                <p>ありません</p>
            @endif

            @foreach ($employers as $item)
                <?php
                    $listImage = handelImageEmployer($item->url);
                ?>
                <div class="item-row f-row">
                    <div class="col-avatar f-row">
                        <div class="avatar-large">
                            <div class="large-img">
                                @if(!empty($item->avatar))
                                    <img src="{{asset($item->avatar)}}" alt="{{$item->avatar}}">
                                @else
                                    <img src="{{ asset('image').'/'. ($item->gender == config('constant.GENDER.MALE') ? 'df_male.jpg' : 'df_female.jpg' )}}" alt="">
                                @endif
                                
                            </div>
                        </div>
                        <div class="avatar-small f-col">
                            <div class="small-img">
                                <img src="{{asset('storage/uploads/employers/'.$listImage[config('constant.GALARY_TYPE.EMPLOYER_FILE_FRONT')])}}" alt="">
                            </div>
                            <div class="small-img">
                                <img src="{{asset('storage/uploads/employers/'.$listImage[config('constant.GALARY_TYPE.EMPLOYER_FILE_BACK')])}}" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-detail f-col">
                        <div class="detail-row">
                            <div class="col-lable">お名前</div>
                            <div class="col-value fz-18">{{$item->full_name}}</div>
                            <div class="col-lable">性別</div>
                            <div class="col-value">@if($item->gender == config('constant.GENDER.FEMALE')) 女性  @else 男性 @endif</div>
                        </div>
                        <div class="detail-row f-row">
                            <div class="col-lable">生年月日</div>
                        <div class="col-value">{{ date('Y年m月d日', strtotime($item->birth_date)) }}</div>
                            <div class="col-lable">ご年齢</div>
                            <div class="col-value">{{$item->age_year}}歳</div>
                        </div>
                        <div class="detail-row">
                            <div class="col-lable">住所</div>
                            <div class="col-value">〒{{$item->full_address}}　</div>
                        </div>
                        <div class="detail-row">
                            <div class="col-lable">電話番号</div>
                            <div class="col-value">{{$item->phone}}</div>
                        </div>
                        <div class="detail-row">
                            <div class="col-lable">メールアドレス</div>
                            <div class="col-value">{{$item->email}}</div>
                        </div>
                        <div class="detail-row">
                            <div class="col-lable">登録日</div>
                            <div class="col-value">{{ date('Y年m月d日', strtotime($item->created_at)) }}</div>
                        </div>
                        <div class="detail-action f-row">
                            {{-- <div class="action-activity fz-b-15">
                                <input type="checkbox" class="btn-toggle-activity" id="btn-toggle-activity-1">
                                <label  class="bl-toggle-activity" for="btn-toggle-activity-1">
                                    公開中 
                                </label>
                            </div> --}}
                            <div class="action-details">
                                {{-- <button type="button" data-action="{{route('ADMIN_AJAX_GET_FAMILY')}}" data-id-profile = "{{$item->id_profile}}" data-user-id = "{{ $item->user_id }}" class="btn-details get-detail fz-b-15">詳細を見る</button> --}}
                                <a href="{{route('INFO_EMPLOYER',['id'=>$item->user_id])}}" class="btn-details fz-b-15">詳細を見る</a>
                            </div>
                            <div class="action-delete">
                                <button class="btn-delete fz-b-15" data-id="{{$item->user_id}}">削除</button>
                            </div>
                            <div class="action-send-link">
                                <button class="btn-send-link fz-b-15 js-list-sitter" data-id="{{$item->user_id}}" data-email="{{$item->email}}">評価依頼</button>
                            </div>
                            @if ($item->admin_confirm != config('constant.ADMIN_CONFIRM.ACCEPT'))
                                <div class="content-approve">
                                    <div class="action-activity" data-id= '{{ $item->user_id }}' data-status = '{{ config('constant.ADMIN_CONFIRM.ACCEPT')}}'>
                                        <button onclick="approveProfileEmployer(this)" class="btn-activity fz-b-15">承認</button>
                                    </div>
                                    <div class="action-unactivity" data-id= '{{ $item->user_id }}' data-status = '{{ config('constant.ADMIN_CONFIRM.UNACCEPT')}}'>
                                        <button onclick="approveProfileEmployer(this)" class="btn-unactivity fz-b-15">非承認</button>
                                    </div>
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
        
    </div>
</div>
{{-- modal details  --}}
<div id="details-employer-modal" class="modal item-details-popup">
    <a class="popup-lose" rel="modal:close">
    </a>
    <div class="popup-body">
        <div class="parrent-info">
            <div class="row">
                <div class="col-md-4 d-flex align-content-between item">
                    <label class="color-label" for="">夫</label>
                    <p data-name="fa"></p>
                </div>
                <div class="col-md-4 d-flex align-content-between item">
                    <label class="color-label" for="">性別</label>
                    <p data-gender="fa"></p>
                </div>
                <div class="col-md-4 d-flex align-content-between item">
                    <label class="color-label" for="">ご年齢</label>
                    <p data-age="fa"></p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 d-flex align-content-between item">
                    <label class="color-label" for="">妻</label>
                    <p data-name="mom"></p>
                </div>
                <div class="col-md-4 d-flex align-content-between item">
                    <label class="color-label" for="">性別</label>
                    <p data-gender="mom"></p>
                </div>
                <div class="col-md-4 d-flex align-content-between item">
                    <label class="color-label" for="">ご年齢</label>
                    <p data-age="mom"></p>
                </div>
            </div>
        </div>
        <div class="child-info">
            
        </div>
        <div class="link-update">
            <button id="link-update" value="">ンクをコピーする</button>
        </div>
    </div>
</div>

{{-- modal find sitter  --}}
<div id="sitter-list-modal" class="modal sitter-list-popup">
    <a class="popup-lose" rel="modal:close">
    </a>
    <div class="modal-title">シッターリスト</div>
    <div class="popup-body">
        <div class="search-item">
            <input type="text" class="search-input" placeholder="検索">
            <button class="btn-search-item js-search-item">検索</button>
        </div>
        <div class="item-info" id="item-list-sitter">
            {{-- <div class="row">
                <div class="row-avatar">
                    <img src="" alt="" class="avatar">
                </div>
                <div class="row-info">
                    <p class="info-name">Hoang Minh</p>
                    <p class="info-mail">hoang@gmail.com</p>
                </div>
                <div class="row-action">
                    <button class="action-send-mail" data-empl-id="1" data-sitter-id="1">Send Mail</button>
                </div>
            </div> --}}
        </div>
        <div class="item-count" id="item-count"></div>
    </div>
</div>

{{-- modal-confirm --}}
@include('modals.modal-confirm', ['title'=> '削除を確認', 'content'=> '削除しますか','action' => 'deleteEmployer()', 'modal_id' =>'deleteEmployer'])
<input type="hidden" name="idDelete" value="">
<input type="hidden" name="actionDelEmp" value="{{route('ADMIN_AJAX_EMPLOYER_DELETE')}}">
{{-- end modal confirm  --}}

{{-- child default --}}
<section style="display: none" id = "child-default">
    <div class="row">
        <div class="col-md-4 d-flex align-content-between item">
            <label type="child-num" class="color-label" for=""></label>
            <p data-name="child"></p>
        </div>
        <div class="col-md-4 d-flex align-content-between item">
            <label class="color-label" for="">性別</label>
            <p data-gender="child"></p>
        </div>
        <div class="col-md-4 d-flex align-content-between item">
            <label class="color-label" for="">ご年齢</label>
            <p data-age="child"></p>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4 d-flex align-content-between item">
            <label class="color-label" for="">アレルギー </label>
            <p data-alegic="child"></p>
        </div>
        <div class="col-md-8 d-flex align-content-between item">
            <label class="color-label" for=""></label>
            <p data-alegic-note="child"></p>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4 d-flex align-content-between item">
            <label class="color-label" for="">持病、特別なケア </label>
            <p data-chronic="child"></p>
        </div>
        <div class="col-md-8 d-flex align-content-between item">
            <label class="color-label" for=""> </label>
            <p data-chronic-note="child"></p>
        </div>
    </div>
</section>
{{-- modal avatar  --}}
<div id="avatar-modal" class="modal avatar-popup">
    <a class="popup-lose" rel="modal:close">
    </a>
    <div class="popup-body f-col"> 
        <div class="content-avatar" id="content-avatar">
            
        </div>
    </div>
</div>
{{-- end child default --}}
@endsection


@section('scripts-admin')
    {{-- script login if u have --}}
    <script type="text/javascript" src="{{ asset('js/library/jquery-ui.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/datepicker-ja.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/jquery-ui.multidatespicker.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/admin_employer.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/jquery.toast.min.js') }}"></script>
    <script>
        $( function() {
            $( 'input[name="date-reg"]' ).datepicker({
                beforeShow: function(input, inst) {
                    $('#ui-datepicker-div').addClass('single-picker');
                }
            });
        });
        const SITTER = "{{config('constant.ROLE.SITTER')}}";
        const EMPLOYER_SEND_SITTER = "{{route('ADMIN_AJAX_EMPLOYER_SEND_SITTER')}}";
        const ADMIN_CONFIRM_ACCEPT = "{{config('constant.ADMIN_CONFIRM.ACCEPT')}}";
        const ADMIN_EMPLOYER_AJAX_ACCEPT = "{{ route('ADMIN_EMPLOYER_AJAX_ACCEPT') }}";
    </script>
@endsection
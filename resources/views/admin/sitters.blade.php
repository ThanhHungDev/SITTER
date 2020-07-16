
@section('title', 'Sitters Admin')
@section('stylesheets-admin')
    <link rel="stylesheet" href="{{ asset('css/library/jquery-ui.min.css')}}">
    <link rel="stylesheet" href="{{ asset('css/library/jquery.toast.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/library/slick.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/library/slick-theme.css') }}">
@endsection
@extends('admin._LAYOUT.index')
@section('content-admin')
<div class="container-admin">
    {{ csrf_field() }}
    <div class="admin-hearder">
        <div class="hearder-search-container">
            <form action="{{ route('ADMIN_SITTER') }}" method="get" class="f-row">
                <div class="search-select">
                    <select name="pref"class="pref search-control">
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
                                    <option value="{{$v}}" {{ $v == old('pref') ? 'selected' : '' }}>{{$v}}</option>
                                @endforeach
                            </optgroup>
                        @endforeach
                    </select>
                </div>
                <div class="search-register-date">
                    <input type="text" name="created_at" class="register-date search-control" id="slt_datepicker" placeholder="登録日を指定　例）2020/04/30" value="{{ old('created_at') }}">
                </div>
                <div class="search-user-name">
                    <input type="text" name="name" class="user-name search-control" placeholder="ユーザーを指定" value="{{ old('name') }}">
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
                <span>検索結果({{ count($sitter) }})</span>
            </div>
            <div class="pagination f-row">
                <div class="pagination pagi-admin-style f-row">
                    @if($sitter->isNotEmpty())
                        {{ $sitter->links('pagination.simple-default') }}
                    @endif
                </div>
            </div>
        </div>
        <div class="body-item f-col">
            @if (!empty($sitter))
                @foreach ($sitter as $item)
                    <div class="item-row f-row" id="item-row-{{ $item->user_id }}">
                        <div class="col-avatar f-row">
                            @php
                                $listImage = handelImageEmployer($item->url);
                            @endphp
                            <div class="avatar-large">
                                <div class="large-img">
                                    <img src="{{ asset($item->avatar) }}" alt="">
                                </div>
                            </div>
                            <div class="avatar-small f-col">
                                <div class="small-img">
                                    <img src="{{ asset($listImage[config('constant.GALARY_TYPE.SITTER_FILE_FRONT')]) }}" alt="">
                                </div>
                                <div class="small-img">
                                    <img src="{{ asset($listImage[config('constant.GALARY_TYPE.SITTER_FILE_BACK')]) }}" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="col-detail f-col">
                            <div class="detail-row">
                                <div class="col-lable">お名前</div>
                                <div class="col-value fz-18">{{ $item->full_name }}</div>
                                <div class="col-lable">性別</div>
                                <div class="col-value">{{ $item->gender == 2 ? '女性' : '男性'}}</div>
                            </div>
                            <div class="detail-row f-row">
                                <div class="col-lable">生年月日</div>
                                @php
                                    $date_text = (new \Carbon\Carbon($item->birth_date))->format('Y年m月d日')
                                @endphp
                                <div class="col-value">{{ $date_text }}　</div>
                                <div class="col-lable">ご年齢</div>
                                <div class="col-value">{{ $item->age_year }}歳</div>
                            </div>
                            <div class="detail-row">
                                <div class="col-lable">住所</div>
                                <div class="col-value">〒{{ $item->full_address }}　</div>
                            </div>
                            <div class="detail-row">
                                <div class="col-lable">電話番号</div>
                                <div class="col-value">{{ $item->phone }}</div>
                            </div>
                            <div class="detail-row">
                                <div class="col-lable">メールアドレス</div>
                                <div class="col-value">{{ $item->email }}</div>
                            </div>
                            <div class="detail-row">
                                <div class="col-lable">登録日</div>
                                @php
                                    $created_at = (new \Carbon\Carbon($item->created_at))->format('Y年m月d日')
                                @endphp
                                <div class="col-value">{{ $created_at }}</div>
                            </div>
                            <div class="detail-action f-row">
                                <div class="action-public fz-b-15">
                                    <input type="checkbox" class="btn-toggle-public js-public-sitter" {{ $item->publish ? 'checked' : '' }} id="btn-toggle-public-{{ $item->user_id }}"  data-url='{{ route('ADMIN_SITTER_AJAX_UPDATE_PUBLISH') }}' data-item='{{ $item->user_id }}'>
                                    <label  class="bl-toggle-public" for="btn-toggle-public-{{ $item->user_id }}">
                                        {{ $item->publish ? '公開中' : '非公開' }}
                                    </label>
                                </div>
                                <div class="action-details">
                                    <button class="btn-details js-detail-sitter fz-b-15"  data-url='{{ route('ADMIN_SITTER_AJAX_VIEW', $item->user_id) }}'>詳細を見る</button>
                                </div>
                                <div class="action-history-chat">
                                    <button class="btn-history-chat js-history-chat fz-b-15" data-url='{{ route('ADMIN_READ_MESSAGE', [$item->user_id, '']) }}' data-item='{{ $item->user_id }}'>チャット履歴</button>
                                </div>
                                <div class="action-delete">
                                    <button class="btn-delete fz-b-15 js-delete-sitter" data-url='{{ route('ADMIN_SITTER_AJAX_DELETE') }}' data-item='{{ $item->user_id }}'>削除</button>
                                </div>                                
                                @if ($item->admin_confirm < 1)
                                    <div class="f-row" id="action-confrim-{{ $item->user_id }}">
                                        <div class="action-activity">
                                            <button class="btn-activity fz-b-15 js-activity-sitter" data-url='{{ route('ADMIN_SITTER_AJAX_ACCEPT') }}' data-item='{{ $item->user_id }}' data-confirm = '{{ config('constant.ADMIN_CONFIRM.ACCEPT') }}'>承認</button>
                                        </div>
                                        <div class="action-unactivity">
                                            <button class="btn-unactivity fz-b-15 js-unactivity-sitter" data-url='{{ route('ADMIN_SITTER_AJAX_ACCEPT') }}' data-item='{{ $item->user_id }}' data-confirm = '{{ config('constant.ADMIN_CONFIRM.UNACCEPT') }}'>非承認</button>
                                        </div>
                                    </div>
                                @endif
                            </div>
                        </div>
                    </div>
                @endforeach
            @else
                <p>No data...</p>
            @endif
            
        </div>
        
    </div>
    {{-- modal details  --}}
    <div id="details-sitter-modal" class="modal item-details-popup">
        <a class="popup-lose" rel="modal:close">
        </a>
        <div class="popup-body">
            <div class="image-row f-row" id="image-qualifi">
                <div class="item-img">
                    資格証
                </div>
            </div>
            <div class="detail-row">
                <div class="row-item f-row">
                    <div class="col-lable">資格</div>
                    <div class="col-value text-first-55" id="experiences"></div>
                </div>
                <div class="row-item f-row">
                    <div class="col-lable">サポート</div>
                    <div class="col-value text-first-85" id="skills">
                    </div>
                </div>
            </div>
            <div class="contact-row">
                <div class="row-item f-row">
                    <div class="col-lable">緊急連絡先</div>
                    <div class="col-value" id="name">山田　太郎</div>
                </div>
                <div class="row-item f-row">
                    <div class="col-lable">緊急連絡先住所</div>
                    <div class="col-value" id="full-address"></div>
                </div>
                <div class="row-item f-row">
                    <div class="col-lable">緊急連絡先電話番号</div>
                    <div class="col-value" id="num-phone"></div>
                </div>
                <div class="row-item f-row">
                    <div class="col-lable">シッターとの関係</div>
                    <div class="col-value" id="relationship"></div>
                </div>
            </div>
        </div>
    </div>
    @include('modals.modal-confirm',['title'=> 'Confirm Delete', 'content'=> 'Are you delete it?','action' => 'deleteSitter()', 'modal_id' =>'deleteSitter'])
</div>
@endsection

@section('scripts-admin')
    <script type="text/javascript" src="{{ asset('js/library/jquery-ui.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/jquery.toast.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/datepicker-ja.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/jquery-ui.multidatespicker.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/modal.jquery.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/admin_sitter.min.js') }}"></script>
@endsection
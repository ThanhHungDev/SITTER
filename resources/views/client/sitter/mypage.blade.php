@section('title', 'Sitter Mypage')
@extends('_LAYOUT.index')

@section('stylesheets')
    <link href="{{ asset('css/library/slick.css') }}" rel="stylesheet">
    <link href="{{ asset('css/library/slick-theme.css') }}" rel="stylesheet">
    <link href="{{ asset('css/library/jquery.toast.min.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
@endsection

@section('content')
<div class="sitter-common">
    <div class="max-width-1080 sitter">
        <div class="content-top">
            <div class="sitter-top">
                <a class="btn btn-sitter-edit" href="{{ route('SITTER_EDIT') }}">編集する</a>
                {{-- <a class="btn btn-sitter-update">登録する</a> --}}
                <a class="btn btn-sitter-public" href="javascript:void(0)" id="btn-sitter-public">公開する</a>
                <a class="btn btn-sitter-message" href="{{ route('SITTER_CHAT') }}"><img src="{{ asset('image/icons/icon-message.png') }}">チャットする</a>
            </div>
            <div class="top-title">
                <div class="line"></div>
                <p>プロフィール公開中</p>
                <div class="line"></div>
            </div>
        </div>

        @include('client.sitter.partials.warnings_form')
        @include('client.sitter.partials.success_form')
        @include('client.sitter.partials.errors_form')

        <div class="sitter-mypage">
            <div class="sitter-content-left">
                <div>
                    <div class="head min-height-85">
                        <span class="fs-20-16">{{ $data['sitter']['title'] ?? '' }}</span>
                    </div>
                    <div class="slider-wrap">
                        <div class="slider" id="slider">
                            @if(!$data['galaries']->isEmpty())
                                @foreach ($data['galaries'] as $item)
                                    <img src="{{ asset('storage/uploads/avatars/'.$item['name']) }}">
                                @endforeach
                            @else
                                <img src="">
                            @endif
                        </div>
                        <div class="slider-nav" id="slider-nav">
                            @if(!$data['galaries']->isEmpty())
                                @foreach ($data['galaries'] as $item)
                                    <img src="{{ asset('storage/uploads/avatars/thumbnail/'.$item['name']) }}">
                                @endforeach
                            @endif
                        </div>
                    </div>
                </div>
                <div>
                    <div class="head height-55">
                        <span class="fs-20-16">自己紹介</span>
                    </div>

                    <div class="sitter-introduce">
                        <p class="pd-18 fs-15">
                            {!! isset($data['sitter']['self_introduce']) ? nl2br2($data['sitter']['self_introduce']) : '' !!}
                        </p>
                    </div>
                </div>

                <div>
                    <div class="head height-55">
                        <span class="fs-20-16">サービス内容</span>
                    </div>

                    <div class="sitter-content">
                        <p class="pd-18 fs-15">
                            {!! isset($data['sitter']['service_introduce']) ? nl2br2($data['sitter']['service_introduce']) : '' !!}
                        </p>
                    </div>
                </div>

            </div>
            <div class="sitter-content-right">
                <div class="balance">
                    <span class="fs-20">給料残額: <b>￥{{ moneyFormat($data['balance']) }}</b></span>
                    <a href="{{ route('SITTER_VIEW_BANK') }}">未入金残高を確認する</a>

                    <button class="btn-delete" id="btn-delete-stripe">削除</button>
                </div>
                <table class="table sitter-info">
                    <tr>
                        <td class="width-400 fs-24 txt-green" colspan="2">サポート基本情報</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="bt-1">
                        <span>{{ $data['sitter']['age'] ?? '' }}代{{ getTextGender($data['gender']) }}</span><br/>
                            <span class="txt-green">{{ $data['sitter']['pref'] ?? ''  }}</span><span> > {{ $data['sitter']['city'] ?? ''  }}</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="width-td-half bt-1">保育可能年齢</td>
                        <td class="bt-1">
                            {{ isset($data['sitter']['kid_age_start']) ? config('constant.KID_AGE')[$data['sitter']['kid_age_start']].'～' : ''  }}
                            {{ isset($data['sitter']['kid_age_end']) ? config('constant.KID_AGE')[$data['sitter']['kid_age_end']] : ''  }}
                        </td>
                    </tr>
                    <tr>
                        <td class="bt-1">子育て経験</td>
                        <td class="bt-1">
                            @if(isset($data['sitter']['exp_parenting']))
                                @if($data['sitter']['exp_parenting'])あり @else 無 @endif {{ isset($data['sitter']['exp_kid_qty']) ? '／'.$data['sitter']['exp_kid_qty'].'人' : '' }}
                            @else
                            @endif
                        </td>
                    </tr>
                    <tr>
                        <td class="width-td-half bt-1">受入可能人数</td>
                        <td class="bt-1">{{ isset($data['sitter']['kid_qty']) ? $data['sitter']['kid_qty'].'人' : '' }}</td>
                    </tr>
                    <tr>
                        <td class="bt-1">シッター経験</td>
                        <td class="bt-1">
                            @if(isset($data['sitter']['exp_sitter']))
                                @if(isset($data['sitter']['exp_sitter']))あり@else 無 @endif
                            @else
                            @endif
                        </td>
                    </tr>
                    <tr>
                        <td class="bt-1">最低サポート時間目安</td>
                        <td class="bt-1">
                            @if(isset($data['sitter']['time_support']))
                                {{ config('constant.TIME_SUPORT')[$data['sitter']['time_support']] ?? ''  }}
                            @endif
                        </td>
                    </tr>
                    <tr>
                        <td class="bt-1">
                            <span class="fs-15">ベビーシッター</span><br/>
                            <span class="fs-20">￥{{ isset($data['salarySitter']) ? moneyFormat($data['salarySitter']) : ''  }}　/1時間</span>
                        </td>
                        <td class="bt-1">
                            <span class="fs-15">家事代行</span><br/>
                            <span class="fs-20">￥{{ isset($data['salaryHouse']) ? moneyFormat($data['salaryHouse']) : ''  }}　/1時間</span>
                        </td>
                    </tr>
                </table>

                <div class="calendar-page mt-18" id="mypage-sitter">
                    <div class="d-none" id="data">{{ $data['jsonSchedules'] ?? ''  }}</div>
                {{-- <div class="d-none" id="data">{"2020":{"01":{"07":{"start":"09:00","finish":"14:00","overnight":0,"status":0,"type":",1,2,","class":"old"}},"05":{"31":{"start":"10:00","finish":"21:00","overnight":0,"status":0,"type":",1,","class":"event-over"},"01":{"start":"10:00","finish":"21:00","overnight":0,"status":0,"type":",1,","class":"old"}},"06":{"14":{"start":"10:00","finish":"18:00","overnight":0,"status":0,"type":",1,2,","class":"old"},"15":{"start":"10:00","finish":"16:00","overnight":0,"status":0,"type":",1,","class":"old"}},"07":{"12":{"start":"07:00","finish":"16:00","overnight":0,"status":0,"type":",1,2,","class":"old"},"02":{"start":"09:00","finish":"14:00","overnight":0,"status":0,"type":",1,2,","class":"old"},"05":{"start":"08:00","finish":"20:00","overnight":0,"status":0,"type":",1,2,","class":"old"}}}}</div> --}}
                    <input type="hidden" id="js-event-data" name="schedule">
                    <div id="draw-calendar"></div>
                </div>
            </div>
        </div>

        <div class="sitter-content-bottom">
            <div class="sitter-certifies">
                <div class="title">
                    <label class="fs-20">お持ちの資格・経験</label>
                </div>
                <div class="form-row">
                    @foreach($data['experiences'] as $experience)
                        <div class="cell">
                            <label class="checkbox" id="experience-check">
                                {{$experience->name}}
                                <input type="checkbox" class="experience-check" value={{$experience->id }} @if(in_array($experience->id, $data['experience_actives'])) checked @endif disabled>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    @endforeach
                </div>
                <div class="row">
                    <div>
                        @foreach($data['certifies'] as $certify )
                        <div class="col-12 col-sm-6 col-lg-3 grid-image" >
                            <div class="certify">
                                <img src="{{ asset('storage/uploads/sitters/thumbnail/'.$certify['name']) }}" />
                            </div>
                        </div>
                        @endforeach
                    </div>
                </div>
            </div>
            <div class="sitter-skills">
                <label class="fs-20">サポートの特徴</label>
                <ul>
                    @foreach($data['skills'] as $skill )
                        <li data-value={{ $skill->id }} @if(in_array($skill->id, $data['skill_actives'])) class="active" @endif>
                            {{ $skill->name }}
                        </li>
                    @endforeach
                </ul>
            </div>


        </div>

        <div class="list-booking-wrapper" id="list-booking">
        </div>

    </div>
    @include('modals.sitters.modal-confirm',['title'=> '削除を確認', 'content'=> '削除しますか','action' => 'deleteStripeAccount()', 'modal_id' =>'deleteStripeAccount'])
</div>
@endsection
@section('scripts')
    <script type="text/javascript"> 
        var APP_URL = {!! json_encode(url('/')) !!}
    </script>
    <script type="text/javascript" src="{{ asset('/js/library/slick.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/library/jquery.toast.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/sitter-common.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/library/japanese-holidays.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/calendar.min.js') }}"></script>
@endsection

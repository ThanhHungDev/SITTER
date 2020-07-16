@section('title', 'Sitter Edit Mypage')
@extends('_LAYOUT.index')

@section('stylesheets')
    <link href="{{ asset('css/library/slick.css') }}" rel="stylesheet">
    <link href="{{ asset('css/library/slick-theme.css') }}" rel="stylesheet">
    <link href="{{ asset('css/library/jquery.toast.min.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/library/bootstrap-clockpicker.min.css') }}">
@endsection

@section('content')
<div class="sitter-common">
    <div class="max-width-1080 sitter">
        <form action="{{ route('SITTER_POST_EDIT') }}" method="POST" id="sitter-edit-form">
            {{ csrf_field()}}
            <div class="content-top">
                <div class="sitter-top">
                    {{-- <button class="btn btn-sitter-edit">編集する</button> --}}
                    <button class="btn btn-sitter-update" id="btn-sitter-update" type="submit">登録する</button>
                    {{-- <button class="btn btn-sitter-public" id="btn-sitter-public">公開する</button> --}}
                    <a class="btn btn-sitter-message" href="{{ route('SITTER_CHAT') }}"><img src="{{ asset('image/icons/icon-message.png') }}">チャットする</a>
                </div>
                <div class="top-title">
                    <div class="line"></div>
                    <p>プロフィール公開中</p>
                    <div class="line"></div>
                </div>
            </div>

            @include('client.sitter.partials.errors_form')

            <div class="sitter-mypage">
                <div class="sitter-content-left">
                    <div>
                        <div class="head height-85">
                            <span class="fs-20">☆笑顔と個性を大切にサポートいたします☆ダンス・ストレッチ指導経験あり。</span>
                        </div>
                        <div class="slider-wrap">
                            <div class="slider" id="slider">
                                <img class="icon-upload" id="upload-avatar" src="{{ asset('image/icons/icon-upload.png') }}">
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
                            <span class="fs-20">自己紹介</span>
                        </div>
    
                        <div class="edit-sitter-introduce form-validate">
                            <textarea class="edit-pd-18" name="self_introduce">{{ $data['sitter']['self_introduce'] ?? '' }}</textarea>
                            <div class="form-error"></div>
                        </div>
                    </div>
    
                    <div>
                        <div class="head height-55">
                            <span class="fs-20">サービス内容</span>
                        </div>
    
                        <div class="edit-sitter-content form-validate">
                            <textarea class="edit-pd-18" name="service_introduce">{{ $data['sitter']['service_introduce'] ?? '' }}</textarea>
                            <div class="form-error"></div>
                        </div>
                    </div>
    
                </div>
                <div class="sitter-content-right">
                    <table class="table sitter-info">
                        <tr>
                            <td class="width-100 fs-18" colspan="2">サポート基本情報</td>
                        </tr>
                        <tr>
                            <td colspan="2" class="form-group bt-1">
                                <div class="form-row">
                                    <div class="col-6 select-blue mb-10 form-validate">
                                        @php $ageBak = $data['sitter']['age'] ?? '' @endphp
                                        <select class="form-control" name="age" id="age">
                                            <option value=""></option>
                                            {{ $age = 20 }}
                                            @foreach( range(1, 6) as $key => $value)
                                                <option value={{$age}} @if($ageBak == $age) selected @endif>{{$age}}</option>
                                                {{ $age = $age + 10 }}
                                            @endforeach
                                        </select>
                                        <div class="form-error"></div>
                                    </div>
                                    <div class="col-4 fs-16">
                                        代
                                    </div>
                                </div>
                                
                                <div class="form-row">
                                    <div class="col-6 select-blue form-validate">
                                        @php $pref = $data['sitter']['pref'] ?? '' @endphp
                                        <select class="form-control" name="pref" id="pref">
                                            <option value=""></option>
                                            @foreach(config('location.japan.pref') as $key => $value)
                                                <option value={{$key}} @if($pref == $key) selected @endif>{{$value}}</option>
                                            @endforeach
                                        </select>
                                        <div class="form-error"></div>
                                    </div>
    
                                    <div class="col-6 form-validate">
                                        <input class="form-control" type="text" name="city" value="{{ $data['sitter']['city'] ?? '' }}">
                                        <div class="form-error"></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        {{-- child age --}}
                        <tr>
                            <td class="bt-1">保育可能年齢</td>
                            <td class="bt-1">
                                <div class="form-validate">
                                    <div class="form-row">
                                        <div class="col-6 select-blue">
                                            @php $kid_age_start = $data['sitter']['kid_age_start'] ?? '' @endphp
                                            <select class="form-control" name="kid_age_start" id="kid_age_start">
                                                <option value=""></option>
                                                @foreach( config('constant.KID_AGE') as $key => $value)
                                                    <option value= {{$key}} @if($kid_age_start == $key) selected @endif>{{$value}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                        <div class="col-6 select-blue">
                                            @php $kid_age_end = $data['sitter']['kid_age_end'] ?? '' @endphp
                                            <select class="form-control" name="kid_age_end" id="kid_age_end">
                                                <option value=""></option>
                                                @foreach( config('constant.KID_AGE') as $key => $value)
                                                    <option value= {{$key}} @if($kid_age_end == $key) selected @endif>{{$value}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                        <input type="text" name="kid_age" id="kid_age" hidden>
                                    </div>
                                    <div class="form-error"></div>
                                </div>
                            </td>
                        </tr>

                        {{-- experience parenting --}}
                        <tr>
                            <td class="bt-1">子育て経験</td>
                            <td class="bt-1">
                                <div class="form-row">
                                    <div class="col-12 select-blue form-validate">
                                        @php 
                                            $exp_parenting = $data['sitter']['exp_parenting'] ?? 2
                                        @endphp

                                        <select class="form-control" name="exp_parenting" id="exp_parenting">
                                            <option value="" @if($exp_parenting == 2) selected @endif></option>
                                            <option value=1 @if($exp_parenting == 1) selected @endif>あり</option>
                                            <option value=0 @if($exp_parenting == 0) selected @endif>無</option>
                                        </select>
                                        <div class="form-error"></div>
                                    </div>
                                </div>
                            </td>
                        </tr>

                        {{-- child qty --}}
                        <tr>
                            <td class="bt-1">受入可能人数</td>
                            <td class="bt-1">
                                <div class="form-row">
                                    <div class="col-12 select-blue form-validate">
                                        @php $kid_qty = $data['sitter']['kid_qty'] ?? '' @endphp
                                        <select class="form-control @error('kid_qty') input-error @enderror" name="kid_qty" id="kid_qty" disabled>
                                            <option value=""></option>
                                            @foreach( range(1, 6) as $key => $value)
                                                <option value={{$key + 1}} @if($kid_qty == $key + 1) selected @endif>{{$value}}人</option>
                                            @endforeach
                                        </select>
                                        <div class="form-error"></div>
                                    </div>
                                </div>
                            </td>
                        </tr>

                        {{-- experience sitter --}}
                        <tr>
                            <td class="bt-1">シッター経験</td>
                            <td class="bt-1">
                                <div class="form-row">
                                    <div class="col-12 select-blue form-validate">
                                        @php 
                                            $exp_sitter = $data['sitter']['exp_sitter'] ?? 2
                                        @endphp
                                        <select class="form-control" name="exp_sitter">
                                            <option value="" @if($exp_sitter == 2) selected @endif></option>
                                            <option value=1 @if($exp_sitter == 1) selected @endif>あり</option>
                                            <option value=0 @if($exp_sitter == 0) selected @endif>無</option>
                                        </select>
                                        <div class="form-error"></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        {{-- time support --}}
                        <tr>
                            <td class="bt-1">最低サポート時間目安</td>
                            <td class="bt-1">
                                <div class="form-row">
                                    <div class="col-12 select-blue form-validate">
                                        @php $time_support = $data['sitter']['time_support'] ?? '' @endphp
                                        <select class="form-control" name="time_support" id="time_support">
                                            <option value=""></option>
                                            @foreach( config('constant.TIME_SUPORT') as $key => $value)
                                                <option value={{$key}} @if($time_support == $key) selected @endif>{{$value}}</option>
                                            @endforeach
                                        </select>
                                        <div class="form-error"></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        {{-- salary --}}
                        <tr>
                            <td colspan="2" class="bt-1">
                                <span class="fs-15">ベビーシッター</span><br/>
                                {{-- <span class="fs-20"> --}}
                                <div class="form-row">
                                    <div class="col-6 select-blue form-validate">
                                        <select class="form-control" name="salary_sitter">
                                            @php $salary_sitter = 1000 @endphp
                                            @php $salarySitter = $data['salarySitter'] ?? '' @endphp
                                            <option value=""></option>
                                            @foreach( range(0, 20) as $key => $value)
                                                <option value={{$salary_sitter}} @if($salarySitter == $salary_sitter) selected @endif>¥{{$salary_sitter}}</option>
                                                {{ $salary_sitter =  $salary_sitter + 100 }}
                                            @endforeach
                                        </select>
                                        <div class="form-error"></div>
                                    </div>
                                    <div class="col-6 fs-16">
                                        /1時間
                                    </div>
                                </div>
                                {{-- </span> --}}
                                <span class="fs-15">家事代行</span><br/>
                                <div class="form-row">
                                    <div class="col-6 select-blue form-validate">
                                        <select class="form-control" name="salary_house">
                                            @php $salary_house = 1000 @endphp
                                            @php $salaryHouse = $data['salaryHouse'] ?? '' @endphp
                                            <option value=""></option>
                                            @foreach( range(0, 20) as $key => $value)
                                                <option value={{$salary_house}} @if($salaryHouse == $salary_house) selected @endif>¥{{$salary_house}}</option>
                                                @php $salary_house =  $salary_house + 100 @endphp
                                            @endforeach
                                        </select>
                                        <div class="form-error"></div>
                                    </div>
                                    <div class="col-6 fs-16">
                                        /1時間
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
    
                    <div class="calendar-page mt-18 form-validate" id="sitter-mypage-edit">
                        <div class="d-none" id="data"></div>
                        <input type="text" id="js-event-data" name="schedule" hidden value={{ $data['jsonSchedules'] }}>
                        <div id="draw-calendar"></div>
                        <input type="text" id="check-time" name="check_time" hidden>
                        <div class="form-error"></div>
                    </div>
                </div>
            </div>
    
            <div class="sitter-content-bottom">
                <div class="sitter-skills form-validate" id="sitter-skills">
                    <label class="fs-20">サポートの特徴</label>
                    <ul>
                        @foreach($data['skills'] as $skill )
                            <li data-value={{ $skill->id }} @if(in_array($skill->id, $data['skill_actives'])) class="active" @endif>
                                {{ $skill->name }}
                            </li>
                        @endforeach
                    </ul>
                    <input type="text" name="skills" id="skills" hidden>
                    <div class="form-error"></div>
                </div>
            </div>
        </form>
        <div class="modal sitter-modal" tabindex="-1" role="dialog" id="modalShowAvatars">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <div style="height:0px;overflow:hidden">
                            <input type="file" id="avatars" name="avatars" onchange="readURL(this , 'showImage');" accept="image/*" />
                        </div>
                        <button onclick="chooseFile();">ファイルを選択してください</button>
                    </div>
                    <div class="modal-body">
                        <ul id="showImage" data-action="">
                            @if(!$data['galaries']->isEmpty())
                                @foreach($data['galaries'] as $item)
                                <li class="ui-state-default">
                                    <div class="wrapper-image-slide itemRemove">
                                        <img src="{{ asset('storage/uploads/avatars/thumbnail/'.$item['name']) }}" />
                                        <span class="js_remove_img" data-id-image="{{ $item->id }}">
                                            <i class="far fa-trash-alt"></i>
                                        </span>
                                    </div>
                                </li>
                                @endforeach
                            @endif
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('scripts')
    <script type="text/javascript">
        var APP_URL = {!! json_encode(url('/')) !!}
    </script>
    <script type="text/javascript" src="{{ asset('/js/library/slick.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/library/modal.jquery.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/library/jquery-ui.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/library/jquery.validate.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/library/jquery.toast.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/library/jquery-clockpicker.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/sitter-common.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/sitter-edit-mypage.min.js') }}"></script>
    <script src="{{ asset('js/calendar.min.js') }}"></script>
@endsection
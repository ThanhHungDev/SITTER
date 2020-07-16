@section('title', 'Edit Profile')
@extends('_LAYOUT.index')

@section('stylesheets')
    <link href="{{ asset('css/library/slick.css') }}" rel="stylesheet">
    <link href="{{ asset('css/library/slick-theme.css') }}" rel="stylesheet">
@endsection

@section('content')
<div class="employer">
    <div class="max-width-1080 emp-mypage">
        <form action="{{route('EMPLOYER_POST_EDIT_PROFILE')}}" method="post" class="editMypage">
            @csrf

            {{-- nav link --}}
            <div class="nav-mypage nav-top">
                <a href="#">
                    <button class="btn btn-register">登録する</button>
                </a>
                <a href="{{ Route('EMPLOYER_CHAT') }}">
                    <button type="button" class="btn btn-chat"><img src="{{asset('image/icons/icon-message.png')}}" alt="" srcset=""> チャットする</button>
                </a>
            </div>
            {{-- end nav link --}}

            <div class="body-mypage">
                <div class="row wapper-mypage">
                    {{-- avatar content --}}
                    <div class="col-md-4 col-xs-12 left-mypage">
                        <div class="em-wapper-image">
                            <div class="em-avatar boder-img">
                                @if($profile['avatar'] != '')
                                    <img type="avatar" src="{{ asset($profile['avatar']) }}" alt="{{handelGetAvatarName($profile['avatar'])}}">
                                @else
                                    <img type="avatar" class="image" src="{{ asset('image').'/'. ($profile['gender'] == config('constant.GENDER.MALE') ? 'df_male.jpg' : 'df_female.jpg' )}}" alt="">
                                @endif
                                <img src="{{ asset('image/icons/icon-upload.png') }}" class="upload-icon" alt="upload avatar">
                                <div data-status="@if(!empty($profile['avatar'])){{'active'}}@endif" class="delete_avatar">
                                    <i class="far fa-trash-alt"></i>
                                </div>
                            </div>
                            <div class="em-identity-card boder-img">
                                @foreach ($galaries as $item_galaries)
                                    <img src="{{ asset($item_galaries->path.$item_galaries->name) }}" alt="{{$item_galaries->url}}">
                                @endforeach
                            </div>
                            <input type="file" accept="image/*" onchange="uploadAvatar(this);" name="avatar" style = "display:none" id="">
                        </div>
                        <div class="em-note">
                            <p>身分証は公開されません</p>
                        </div>
                    </div>
                    {{-- avatar content --}}

                    {{-- infor family --}}
                    <div class="col-md-8 col-xs-12 right-mypage em-wapper-edit">
                        <div class="em-wapper-info">
                            {{-- error msg --}}
                            @if($errors->any())
                                <div class="alert alert-danger mt-md-3">
                                    <span class="d-fex justify-content-center">
                                        <i class="fas fa-exclamation-triangle"></i> Errors!
                                    </span>
                                </div>
                            @endif
                            {{-- end error msg --}}

                            {{-- nickname --}}
                            <div class="em-title-info">
                                ニックネーム
                            </div>
                            <div class="em-content-info">
                                <input type="text" name="nick_name" value="{{ old('nick_name', @$profile['nick_name']) }}">
                            </div>
                            {{-- end nickname --}}

                            {{-- address --}}
                            <div class="em-title-info">
                                お住まい
                            </div>
                            <div class="em-content-info">
                                <div class="em-row clear-both">
                                    <div class="col-md-6 form-validate">
                                        <label class="label-color" for="">郵便番号</label>
                                        <input id="postCode" type="text" value="{{ old('post_code', @$profile['post_code'])  }}" name="post_code">
                                        <div class="form-error"></div>
                                    </div>
                                    <div class="col-md-6 form-validate">
                                        <label class="label-color" for="">都道府県</label>
                                        <input id="pref" type="text" value="{{ old('pref', @$profile['pref']) }}" name="pref">
                                        <div class="form-error"></div>
                                    </div>
                                </div>
                                <div class="em-row clear-both">
                                    <div class="col-md-6 form-validate">
                                        <label class="label-color" for="">市区町村と番地</label>
                                        <input id="town" type="text" value="{{ old('town', @$profile['town']) }}" name="town">
                                        <div class="form-error"></div>
                                    </div>
                                    <div class="col-md-6 form-validate">
                                        <label class="label-color" for="">建物名・部屋番号</label>
                                        <input type="text" value="{{ old('address', @$profile['address']) }}" name="address">
                                        <div class="form-error"></div>
                                    </div>
                                </div>
                            </div>
                            {{-- end address --}}

                            <div class="em-title-info">
                                家族構成・お子さま
                            </div>
                            <div class="em-content-info">
                                @foreach ($parent as $item)
                                    @if ($item['type'] == config('constant.TYPE_MEMBER_PARENT.FATHER'))
                                        {{-- father --}}
                                        <input type="hidden" name="id_fa" value="{{$item['id']}}">
                                        <div class="clear-both">
                                            {{-- name fugigana --}}
                                            <div class="item-inline col-md-12 em-row">
                                                <label class="label-color" for="">夫のお名前</label>
                                            </div>
                                            <div class="col-md-6">
                                                <div>姓</div>
                                                <div class="form-validate">
                                                    <input type="text" name="{{'first_name_fa'}}" value="{{ old('first_name_fa', $item['first_name']) }}">
                                                    <div class="form-error"></div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div>名</div>
                                                <div class="form-validate">
                                                    <input type="text" name="{{'last_name_fa'}}" value="{{ old('last_name_fa',$item['last_name']) }}">
                                                    <div class="form-error"></div>
                                                </div>
                                            </div>
                                            {{-- end fugigana name --}}

                                            {{-- katakana name --}}
                                            <div class="col-md-12 item-inline em-row">
                                                <label class="label-color" for="">フリガナ</label>
                                            </div>
                                            <div class="col-md-6">
                                                <div>セイ</div>
                                                <div class="form-validate">
                                                    <input type="text" name="{{'first_name_furigana_fa'}}" value="{{ old('first_name_furigana', $item['first_name_furigana'] ) }}">
                                                    <div class="form-error"></div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div>メイ</div>
                                                <div class="form-validate">
                                                    <input type="text" name="{{'last_name_furigana_fa'}}" value="{{ old('last_name_furigana', $item['last_name_furigana']) }}">
                                                    <div class="form-error"></div>
                                                </div>
                                            </div>
                                            {{-- end kata --}}

                                            {{-- birthday --}}
                                            <div class="col-md-12 em-row">
                                                <label class="label-color" for="">生年月日</label>
                                            </div>
                                            <div class="col-md-6 form-validate">
                                                <div class="input-date-content">
                                                    <select name="y_birth_fa"  class="year_select">
                                                        <option value=""></option>
                                                        <?php 
                                                            $ylast= date('Y')-90;
                                                            $ynow = date('Y');
                                                        ?>
                    
                                                        @for ($i = $ynow; $i >= $ylast; $i--)
                                                            <option @if(old('y_birth_fa', date('Y',strtotime($item['birth_date']))) == $i) selected @endif value="{{ $i }}">{{ $i }}</option>
                                                        @endfor
                                                    </select>
                                                    <span>年</span>
                                                    <select name="m_birth_fa"  class="month_select">
                                                        <option value=""></option>
                                                        @for ($i = 1; $i <= 12; $i++)
                                                            <option @if(old('m_birth_fa', date('m',strtotime($item['birth_date']))) == $i) selected @endif value="{{ $i }}">{{ $i }}</option>
                                                        @endfor
                                                    </select>
                                                    <span>月</span>
                                                    <select name="d_birth_fa"  class="day_select">
                                                        <option value=""></option>
                                                        @for ($i = 1; $i <= 31; $i++)
                                                            <option @if(old('d_birth_fa', date('d',strtotime($item['birth_date']))) == $i) selected @endif value="{{ $i }}">{{ $i }}</option>
                                                        @endfor
                                                    </select>
                                                    <span>日</span>
                                                </div>
                                                <div class="form-error"></div>
                                            </div>
                                            {{-- end birthday --}}
                                        </div>
                                        {{-- end father --}}
                                    @endif

                                    @if ($item['type'] == config('constant.TYPE_MEMBER_PARENT.MOM'))
                                        {{-- MOM --}}
                                        <input type="hidden" name="id_mom" value="{{$item['id']}}">

                                        <div class="clear-both">
                                            {{-- name fugigana --}}
                                            <div class="item-inline col-md-12 em-row">
                                                <label class="label-color" for="">妻のお名前</label>
                                            </div>
                                            <div class="col-md-6">
                                                <div>姓</div>
                                                <div class="form-validate">
                                                    <input type="text" name="{{'first_name_mom'}}" value="{{ old('first_name_mom' , $item['first_name']) }}">
                                                    <div class="form-error"></div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div>名</div>
                                                <div class="form-validate">
                                                    <input type="text" name="{{'last_name_mom'}}" value="{{ old('last_name_mom' ,$item['last_name']) }}">
                                                    <div class="form-error"></div>
                                                </div>
                                            </div>
                                            {{-- end name fugigana --}}

                                            {{-- katakana name --}}
                                            <div class="col-md-12 item-inline em-row">
                                                <label class="label-color" for="">フリガナ</label>
                                            </div>
                                            <div class="col-md-6">
                                                <div>セイ</div>
                                                <div class="form-validate">
                                                    <input type="text" name="{{'first_name_furigana_mom'}}" value="{{ old('first_name_furigana_mom', $item['first_name_furigana']) }}">
                                                    <div class="form-error"></div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div>メイ</div>
                                                <div class="form-validate">
                                                    <input type="text" name="{{'last_name_furigana_mom'}}" value="{{ old('last_name_furigana_mom' , $item['last_name_furigana']) }}">
                                                    <div class="form-error"></div>
                                                </div>
                                            </div>
                                            {{-- end kata --}}

                                            {{-- birthday --}}
                                            <div class="col-md-12 em-row">
                                                <label class="label-color" for="">生年月日</label>
                                            </div>
                                            <div class="col-md-6 form-validate">
                                                <div class="input-date-content">
                                                    <select name="y_birth_mom"  class="year_select">
                                                        <option value=""></option>
                                                        <?php 
                                                            $ylast= date('Y')-90;
                                                            $ynow = date('Y');
                                                        ?>
                                                        @for ($i = $ynow; $i >= $ylast; $i--)
                                                            <option @if(old('y_birth_mom', date('Y',strtotime($item['birth_date']))) == $i) selected @endif value="{{ $i }}">{{ $i }}</option>
                                                        @endfor
                                                    </select>
                                                    <span>年</span>
                                                    <select name="m_birth_mom"  class="month_select">
                                                        <option value=""></option>
                                                        @for ($i = 1; $i <= 12; $i++)
                                                            <option @if(old('m_birth_mom', date('m',strtotime($item['birth_date']))) == $i) selected @endif value="{{ $i }}">{{ $i }}</option>
                                                        @endfor
                                                    </select>
                                                    <span>月</span>
                                                    <select name="d_birth_mom"  class="day_select">
                                                        <option value=""></option>
                                                        @for ($i = 1; $i <= 31; $i++)
                                                            <option @if(old('d_birth_mom', date('d',strtotime($item['birth_date']))) == $i) selected @endif value="{{ $i }}">{{ $i }}</option>
                                                        @endfor
                                                    </select>
                                                    <span>日</span>
                                                </div>
                                                <div class="form-error"></div>
                                            </div>
                                            {{-- end birthday --}}
                                        </div>

                                        {{-- end father --}}
                                    @endif
                                @endforeach
                            </div>
                            <div class="em-content-info list-child">

                                <?php $numberChild = 0;?>

                                @if(!empty(old('child_number')))
                                    <?php  $child_item = old('child_number');?>

                                    @for ($i_tem = 0; $i_tem < $child_item; $i_tem++)
                                        {{-- child --}}
                                        <div class="contain-child-{{ isset($child[$i_tem]['id']) ? $child[$i_tem]['id'] : 0 }}">
                                            <div class="input-child-label">
                                                <span class="label_child_number">{{$i_tem+1}}</span>人目のお子様<span class="text-danger">※</span>

                                                {{-- button delete --}}
                                                <div class="child-delete" title="デリート" data-id="{{ isset($child[$i_tem]['id']) ? $child[$i_tem]['id'] : 0 }}"><i class="fas fa-times-circle"></i></div>
                                                {{-- end button delete --}}

                                            </div>
                                            <div class="clear-both">
                                                <div class="col-md-12 item-inline em-row">
                                                    <label class="label-color" for="">お子様のお名前</label>
                                                </div>
                                                {{-- name fugigana --}}
                                                <div class="col-md-6">
                                                    <div>姓</div>
                                                    <div class="form-validate">
                                                        <input type="text" name="{{'first_name_child_'.$i_tem}}" value="{{ old('first_name_child_'.($i_tem), @$child[$i_tem]['first_name']) }}">
                                                        <div class="form-error"></div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div>名</div>
                                                    <div  class="form-validate">
                                                        <input type="text" name="{{'last_name_child_'.$i_tem}}" value="{{ old('last_name_child_'.($i_tem), @$child[$i_tem]['last_name'] ) }}">
                                                        <div class="form-error"></div>
                                                    </div>
                                                </div>
                                                {{-- end name fugigana --}}

                                                {{-- name kata --}}
                                                <div class="col-md-12 item-inline em-row">
                                                    <label class="label-color" for="">フリガナ</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <div>セイ</div>
                                                    <div class="form-validate">
                                                        <input type="text" name="{{'first_name_furigana_child_'.$i_tem}}" value="{{ old('first_name_furigana_child_'.($i_tem), @$child[$i_tem]['first_name_furigana'] ) }}">
                                                        <div class="form-error"></div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div>メイ</div>
                                                    <div  class="form-validate">
                                                        <input type="text" name="{{'last_name_furigana_child_'.$i_tem}}" value="{{ old('first_name_furigana_child_'.($i_tem), @$child[$i_tem]['last_name_furigana']) }}">
                                                        <div class="form-error"></div>
                                                    </div>
                                                </div>
                                                {{-- end name katakana --}}

                                                {{-- birthday --}}
                                                <div class="col-md-12 em-row">
                                                    <label class="label-color" for="">生年月日</label>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="input-date-content form-validate">
                                                        <select name="{{'y_birth_child_'.$i_tem}}"  class="year_select">
                                                            <option value=""></option>
                                                            <?php
                                                                $ylast= date('Y')-90;
                                                                $ynow = date('Y');
                                                            ?>
                                                            @for ($i = $ynow; $i >= $ylast; $i--)
                                                                <option @if(old('y_birth_child_'.$i_tem, date('Y',strtotime(@$child[$i_tem]['birth_date']))) == $i) selected @endif value="{{ $i }}">{{ $i }}</option>
                                                            @endfor
                                                        </select>
                                                        <span>年</span>
                                                        <select name="{{ 'm_birth_child_'.$i_tem }}"  class="month_select">
                                                            <option value=""></option>
                                                            @for ($i = 1; $i <= 12; $i++)
                                                                <option @if(old( 'm_birth_child_'.$i_tem, date('m',strtotime(@$child[$i_tem]['birth_date']))) == $i) selected @endif value="{{ $i }}">{{ $i }}</option>
                                                            @endfor
                                                        </select>
                                                        <span>月</span>
                                                        <select name="{{ 'd_birth_child_'.$i_tem }}"  class="day_select">
                                                            <option value=""></option>
                                                            @for ($i = 1; $i <= 31; $i++)
                                                                <option @if(old('d_birth_child_'.$i_tem, date('d',strtotime(@$child[$i_tem]['birth_date']))) == $i) selected @endif value="{{ $i }}">{{ $i }}</option>
                                                            @endfor
                                                        </select>
                                                        <span>日</span>
                                                    </div>
                                                    <div class="form-error"></div>
                                                </div>
                                                {{-- end birthday --}}

                                                {{-- gender --}}
                                                <div class="col-md-12 em-row">
                                                    <label class="label-color" for="">性別</label>
                                                </div>
                                                <div class="form-validate ">
                                                    <div class="col-md-12 flex-box">
                                                        <input value="{{ config('constant.GENDER.FEMALE') }}" type="radio" @if(old('gender_child_'.$i_tem , @$child[$i_tem]['gender']) == config('constant.GENDER.FEMALE')) checked @endif name="{{ 'gender_child_'.$i_tem }}" > <label class="fw-normal" for="">女の子</label>

                                                        <input value="{{config('constant.GENDER.MALE')}}" @if(old('gender_child_'.$i_tem, @$child[$i_tem]['gender']) == config('constant.GENDER.MALE')) checked @endif type="radio" name="{{ 'gender_child_'.$i_tem }}" > <label class="fw-normal" for="">男の子</label>
                                                    </div>
                                                    <div class="form-error pl-3"></div>
                                                </div>
                                                {{-- end gender --}}

                                                {{-- allergic --}}
                                                <div class="col-md-12 flex-box item-inline">
                                                    <input type="checkbox" @if(old('allergic_'.($i_tem), @$child[$i_tem]['allergic']) == 1) checked @endif value="1" name="{{ 'allergic_'.($i_tem) }}" > <label for="">アレルギーの有無</label>
                                                </div>
                                                {{-- end allergic --}}

                                                {{-- chronic --}}
                                                <div class="col-md-12 flex-box item-inline">
                                                    <input type="checkbox" @if(old('chronic_'.($i_tem), @$child[$i_tem]['chronic']) == 1) checked @endif value="1" name="{{ 'chronic_'.($i_tem) }}" > <label for="">持病、特別なケアの有無</label>
                                                </div>
                                                {{-- end chronic --}}
                                                <input type="hidden" name="{{ 'child_id_'.($i_tem) }}" value="{{ isset($child[$i_tem]['id']) ? $child[$i_tem]['id'] : '' }}">
                                            </div>
                                        </div>
                                        {{-- end child --}}
                                    @endfor
                                @else
                                    @foreach ($child as $itemChild)
                                        {{-- child --}}
                                        <div class="contain-child-{{$itemChild['id']}}">
                                            <div class="input-child-label">
                                                <span class="label_child_number">{{$numberChild+1}}</span>人目のお子様<span class="text-danger">※</span>

                                                {{-- button delete item --}}
                                                <div class="child-delete" title="デリート" data-id="{{ $itemChild['id'] }}"><i class="fas fa-times-circle"></i></div>
                                                {{-- end button delete item --}}

                                            </div>
                                            <div class="clear-both">
                                                <div class="col-md-12 item-inline em-row">
                                                    <label class="label-color" for="">お子様のお名前</label>
                                                </div>
                                                {{-- name fugigana --}}
                                                <div class="col-md-6">
                                                    <div>姓</div>
                                                    <div class="form-validate">
                                                        <input type="text" name="{{'first_name_child_'.$numberChild}}" value="{{ $itemChild['first_name'] }}">
                                                        <div class="form-error"></div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div>名</div>
                                                    <div class="form-validate">
                                                        <input type="text" name="{{'last_name_child_'.$numberChild}}" value="{{ $itemChild['last_name'] }}">
                                                        <div class="form-error"></div>
                                                    </div>
                                                </div>
                                                {{-- end name fugigana --}}

                                                {{-- name katakana --}}
                                                <div class="col-md-12 item-inline em-row">
                                                    <label class="label-color" for="">フリガナ</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <div>セイ</div>
                                                    <div class="form-validate">
                                                        <input type="text" name="{{'first_name_furigana_child_'.$numberChild}}" value="{{ $itemChild['first_name_furigana'] }}">
                                                        <div class="form-error"></div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div>メイ</div>
                                                    <div class="form-validate">
                                                        <input type="text" name="{{'last_name_furigana_child_'.$numberChild}}" value="{{ $itemChild['last_name_furigana'] }}">
                                                        <div class="form-error"></div>
                                                    </div>
                                                </div>
                                                {{-- end name katakana --}}

                                                {{-- birthday --}}
                                                <div class="col-md-12 em-row">
                                                    <label class="label-color" for="">生年月日</label>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="input-date-content form-validate">
                                                        <select name="{{'y_birth_child_'.$numberChild}}"  class="year_select">
                                                            <option value=""></option>
                                                            <?php
                                                                $ylast= date('Y')-90;
                                                                $ynow = date('Y');
                                                            ?>
                                                            @for ($i = $ynow; $i >= $ylast; $i--)
                                                                <option @if(old('y_birth_child_'.$numberChild, date('Y',strtotime($itemChild['birth_date']))) == $i) selected @endif value="{{ $i }}">{{ $i }}</option>
                                                            @endfor
                                                        </select>
                                                        <span>年</span>
                                                        <select name="{{ 'm_birth_child_'.$numberChild }}"  class="month_select">
                                                            <option value=""></option>
                                                            @for ($i = 1; $i <= 12; $i++)
                                                                <option @if(old( 'm_birth_child_'.$numberChild, date('m',strtotime($itemChild['birth_date']))) == $i) selected @endif value="{{ $i }}">{{ $i }}</option>
                                                            @endfor
                                                        </select>
                                                        <span>月</span>
                                                        <select name="{{ 'd_birth_child_'.$numberChild }}"  class="day_select">
                                                            <option value=""></option>
                                                            @for ($i = 1; $i <= 31; $i++)
                                                                <option @if(old('d_birth_child_'.$numberChild, date('d',strtotime($itemChild['birth_date']))) == $i) selected @endif value="{{ $i }}">{{ $i }}</option>
                                                            @endfor
                                                        </select>
                                                        <span>日</span>
                                                    </div>
                                                    <div class="form-error"></div>
                                                </div>
                                                {{-- end birthday --}}

                                                {{-- gender --}}
                                                <div class="col-md-12 em-row">
                                                    <label class="label-color" for="">性別</label>
                                                </div>
                                                <div class="form-validate ">
                                                    <div class="col-md-12 flex-box">
                                                        <input value="{{ config('constant.GENDER.FEMALE') }}" type="radio" @if(old('gender_child_'.$numberChild , $itemChild['gender']) == config('constant.GENDER.FEMALE')) checked @endif name="{{ 'gender_child_'.$numberChild }}" > <label class="fw-normal" for="">女の子</label>

                                                        <input value="{{config('constant.GENDER.MALE')}}" @if(old('gender_child_'.$numberChild, $itemChild['gender']) == config('constant.GENDER.MALE')) checked @endif type="radio" name="{{ 'gender_child_'.$numberChild }}" > <label class="fw-normal" for="">男の子</label>
                                                    </div>
                                                    <div class="form-error pl-3"></div>
                                                </div>
                                                {{-- end gender --}}

                                                {{-- allergic --}}
                                                <div class="col-md-12 flex-box item-inline">
                                                    <input type="checkbox" @if(old('allergic_'.($numberChild), $itemChild['allergic']) == 1) checked @endif value="1" name="{{ 'allergic_'.($numberChild) }}" > <label for="">アレルギーの有無</label>
                                                </div>
                                                {{-- end allergic --}}

                                                {{-- chronic --}}
                                                <div class="col-md-12 flex-box item-inline">
                                                    <input type="checkbox" @if(old('chronic_'.($numberChild), $itemChild['chronic']) == 1) checked @endif value="1" name="{{ 'chronic_'.($numberChild) }}" > <label for="">持病、特別なケアの有無</label>
                                                </div>
                                                {{-- end chronic --}}

                                                <input type="hidden" name="{{ 'child_id_'.($numberChild) }}" value="{{$itemChild['id']}}">
                                            </div>
                                        </div>
                                        {{-- end child --}}
                                        <?php $numberChild++; ?>
                                    @endforeach
                                @endif

                                <input type="hidden" name="child_number" value="{{ old('child_number',count($child)) }}">
                                <input type="hidden" name="number_child_root" value="{{ $numberChild }}">
                                <input type="hidden" name="profile_id" value="{{ $profile['id'] }}">
                            </div>

                            <div class="em-add-child">
                                <button type="button" class="add-child">1人追加<i class="fas fa-user-plus"></i></button>
                            </div>
                            {{-- message --}}
                            <div class="em-title-info">
                                シッターさんへのメッセージ
                            </div>
                            <div class="em-content-info">
                                <textarea  name="note">{{ old('note',  @$profile['note']) }}</textarea>
                            </div>
                            {{-- end message --}}
                        </div>
                        <div class="em-note">
                            <p>上記情報がベビーシッターさんにお伝えされます</p>
                        </div>
                    </div>
                    {{-- end infor family --}}
                </div>
            </div>
            {{-- nav link --}}
            <div class="nav-mypage nav-bottom">
                <a href="#">
                    <button class="btn btn-register">登録する</button>
                </a>
                <a href="{{ Route('EMPLOYER_CHAT') }}">
                    <button type="button" class="btn btn-chat"><img src="{{asset('image/icons/icon-message.png')}}" alt="" srcset=""> チャットする</button>
                </a>
            </div>
            {{-- end nav link --}}
        </form>
    </div>
</div>

{{-- child default --}}
<div id="child-default" style="display: none;">
    <div class="contain-child-0" >
        <div class="input-child-label">
            <span class="label_child_number"></span>人目のお子様<span class="text-danger">※</span>
            <div class="child-delete" title="デリート" data-id=""><i class="fas fa-times-circle"></i></div>
        </div>
        <div class="clear-both">
            <div class="col-md-12 item-inline em-row">
                <label class="label-color" for="">お子様のお名前</label>
            </div>

            <div class="col-md-6">
                <div>姓</div>
                <div class="form-validate">
                    <input type="text" name="{{'first_name_child_0'}}" value="">
                    <div class="form-error"></div>
                </div>
            </div>
            <div class="col-md-6">
                <div>名</div>
                <div class="form-validate">
                    <input type="text" name="{{'last_name_child_0'}}" value="">
                    <div class="form-error"></div>
                </div>
            </div>
            <div class="col-md-12 item-inline em-row">
                <label class="label-color" for="">フリガナ</label>
            </div>
            <div class="col-md-6">
                <div>セイ</div>
                <div class="form-validate">
                    <input type="text" name="{{'first_name_furigana_child_0'}}" value="">
                    <div class="form-error"></div>
                </div>
            </div>
            <div class="col-md-6">
                <div>メイ</div>
                <div class="form-validate">
                    <input type="text" name="{{'last_name_furigana_child_0'}}" value="">
                    <div class="form-error"></div>
                </div>
            </div>
            <div class="col-md-12 em-row">
                <label class="label-color" for="">生年月日</label>
            </div>
            <div class="col-md-12">
                <div class="input-date-content form-validate">
                    <select name="{{'y_birth_child_0'}}"  class="year_select">
                        <option value=""></option>
                        <?php
                            $ylast= date('Y')-90;
                            $ynow = date('Y');
                        ?>
                        @for ($i = $ynow; $i >= $ylast; $i--)
                            <option value="{{ $i }}">{{ $i }}</option>
                        @endfor
                    </select>
                    <span>年</span>
                    <select name="{{ 'm_birth_child_0'}}"  class="month_select">
                        <option value=""></option>
                        @for ($i = 1; $i <= 12; $i++)
                            <option value="{{ $i }}">{{ $i }}</option>
                        @endfor
                    </select>
                    <span>月</span>
                    <select name="{{ 'd_birth_child_0'}}"  class="day_select">
                        <option value=""></option>
                        @for ($i = 1; $i <= 31; $i++)
                            <option value="{{ $i }}">{{ $i }}</option>
                        @endfor
                    </select>
                    <span>日</span>
                </div>
                <div class="form-error"></div>
            </div>
            <div class="col-md-12 em-row">
                <label class="label-color" for="">性別</label>
            </div>
            <div class="form-validate ">
                <div class="col-md-12 flex-box">
                    <input value="{{ config('constant.GENDER.FEMALE') }}" type="radio" name="{{ 'gender_child_0' }}" > <label class="fw-normal" for="">女の子</label>
                    <input value="{{config('constant.GENDER.MALE')}}" type="radio" name="{{ 'gender_child_0' }}" > <label class="fw-normal" for="">男の子</label>
                </div>
                <div class="form-error pl-3"></div>
            </div>

            <div class="col-md-12 flex-box item-inline">
                <input type="checkbox" value="1" name="{{ 'allergic_0' }}" > <label for="">アレルギーの有無</label>
            </div>
            <div class="col-md-12 flex-box item-inline">
                <input type="checkbox" value="1" name="{{ 'chronic_0' }}" > <label for="">持病、特別なケアの有無</label>
            </div>
        </div>
    </div>
</div>
{{-- end child default --}}

{{-- data hidden upload avatar --}}
<form action="{{route('AJAX_DELETE_MEMBER_FAMILY')}}" id="deleteChild" method="post"></form>
<form action="{{ route('AJAX_UPLOAD_AVATAR') }}" class="form-upload-avatar" method="post"></form>
<form action="{{ route('REMOVE_FILE') }}" class="form-delete-avatar" method="post"></form>
<input type="hidden" name="type_upload_file" value="{{config('constant.UPLOAD_FILE.AVATAR')}}">
<input type="hidden" name="link_image" value="{{ asset('') }}">
<input type="hidden" name="link_image_df" value="{{ asset('image').'/'. ($profile['gender'] == config('constant.GENDER.MALE') ? 'df_male.jpg' : 'df_female.jpg' )}}">

{{-- modal confirm --}}
<div id="confirm-form" class="modal">
    <div class="head-modal">
        確認
    </div>
    <div class="body-modal">
        消去してもよろしいですか
    </div>
    <div class="footer-modal">
        <button class="btn btn-accept">OK</button>
        <a  href="#close" rel="modal:close"><button class="btn btn-close">Close</button></a>
    </div>
</div>
{{-- end modal confirm --}}

@endsection

@section('scripts')
    <script type="text/javascript" src="{{ asset('/js/library/slick.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/jquery.validate.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/library/modal.jquery.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/jquery.jpostal.js') }}"></script>    
    <script type="text/javascript" src="{{ asset('/js/employer-edit.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/employer-upload-avatar.min.js') }}"></script>
@endsection
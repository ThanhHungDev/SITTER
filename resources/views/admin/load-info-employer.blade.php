<div class="employer">
    <div class="max-width-1080 emp-mypage">
        <div class="body-mypage ">
            <div class="wapper-mypage">
                <div class="left-mypage">
                    <div class="em-wapper-image">
                        <div class="em-avatar boder-img">
                            @if($profile['avatar'] != '')
                                <img type="avatar" src="{{ asset($profile['avatar']) }}" alt="{{handelGetAvatarName($profile['avatar'])}}">
                            @else
                                <img type="avatar" class="image" src="{{ asset('image').'/'. ($profile['gender'] == config('constant.GENDER.MALE') ? 'df_male.jpg' : 'df_female.jpg' )}}" alt="">
                            @endif
                            <img src="{{ asset('image/icons/icon-upload.png') }}" class="upload-icon" alt="upload avatar">
                            @php
                                $showDelete = '';
                                if(!empty($profile['avatar']) && ($profile['avatar'] != '/image/df_male.jpg' && $profile['avatar'] != '/image/df_female.jpg')){
                                    $showDelete = 'active';
                                }
                            @endphp
                            <div data-status="{{$showDelete}}" class="delete_avatar">
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
                <div class="right-mypage">
                    <div class="em-wapper-info">
                        {{-- nick name --}}
                        <div class="em-title-info">
                            ニックネーム
                        </div>
                        <div class="em-content-info">
                            <p>{{ $profile['nick_name'] ?? ''}}</p>
                        </div>

                        {{-- full address --}}
                        <div class="em-title-info">
                            お住まい
                        </div>
                        <div class="em-content-info">
                        <p>{{ $profile['pref'] ?? '' }} {{$profile['town'] ?? ''}}</p>
                        </div>

                        {{-- family info --}}
                        <div class="em-title-info">
                            家族構成・お子さま
                        </div>

                        <div class="em-content-info">
                            @foreach ($family as $item)

                                @if ($item['type'] == config('constant.TYPE_MEMBER_PARENT.CHILD'))
                                    {{-- child --}}
                                    <div class="clear-both">
                                        <div class="col-md-5 pl-0">
                                            <div class="clear-both item-inline">
                                                <div class="col-md-6 pl-0">
                                                    <label class="label-color" for="">お子様のお名前</label>
                                                </div>
                                                <div class="col-md-6 pl-0">
                                                    <p>{{ $item['name'] }}</p>
                                                    {{-- <p>非通知</p> --}}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 pl-0">
                                            <div class="clear-both item-inline">
                                                <div class="col-md-4 pl-0">
                                                    <label class="label-color" for="">ご年齢</label>
                                                </div>
                                                <div class="col-md-8 pl-0">
                                                    <p>{{ $item['age_year'] }}歳{{ $item['age_month'] }}ヶ月</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-2 pl-0">
                                            <div class="clear-both item-inline">
                                                <div class="col-md-6 pl-0">
                                                    <label class="label-color" for="">性別</label>
                                                </div>
                                                <div class="col-md-6 pl-0">
                                                    <p>{{ $item['gender'] == config('constant.GENDER.FEMALE') ? '女の子' : '男の子'}}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clear-both">
                                        <div class="col-md-2 pl-0 pr-0">
                                            <div class="clear-both item-inline">
                                                <div class="col-md-12 pl-0">
                                                    <label class="label-color" for="">アレルギー</label> <span> @if($item['allergic']) 有 @else 無 @endif</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="col-md-10">
                                            <div class="clear-both item-inline">
                                                <div class="col-md-12 pl-0">
                                                    <span>{{$item['allergic_note']}} </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clear-both">
                                        <div class="col-md-3 pl-0 pr-0">
                                            <div class="clear-both item-inline">
                                                <div class="col-md-12 pl-0">
                                                    <label class="label-color" for="">持病、特別なケア</label> 
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="col-md-9">
                                            <div class="clear-both item-inline">
                                                <div class="col-md-12 pl-0">
                                                    <span class="pr-3"> @if($item['chronic']) 有 @else 無 @endif</span>
                                                    <span>{{$item['chronic_note']}} </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {{-- <div class="col-md-7 pl-0">
                                        <label class="label-color" for="">持病、特別なケア</label> <span> @if($item['chronic']) 有 @else 無 @endif </span>
                                    </div> --}}
                                    {{-- end child --}}
                                @endif

                                @if ($item['type'] == config('constant.TYPE_MEMBER_PARENT.FATHER'))
                                    {{-- parent --}}
                                    <div class="clear-both">
                                        <div class="col-md-5 pl-0">
                                            <div class="clear-both item-inline">
                                                <div class="col-md-6 pl-0">
                                                    <label class="label-color" for="">夫のお名前</label>
                                                </div>
                                                <div class="col-md-6 pl-0">
                                                    <p>{{ $item['name'] }}</p>
                                                    {{-- <p>非通知</p> --}}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 pl-0">
                                            <div class="clear-both item-inline">
                                                <div class="col-md-4 pl-0">
                                                    <label class="label-color" for="">ご年齢</label>
                                                </div>
                                                <div class="col-md-8 pl-0">
                                                    <p>{{ $item['age_year'] }}歳</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3"></div>
                                    </div>
                                    {{-- end father --}}
                                @endif

                                @if ($item['type'] == config('constant.TYPE_MEMBER_PARENT.MOM'))
                                    {{-- parent --}}
                                    <div class="clear-both">
                                        <div class="col-md-5 pl-0">
                                            <div class="clear-both item-inline">
                                                <div class="col-md-6 pl-0">
                                                    <label class="label-color" for="">妻のお名前</label>
                                                </div>
                                                <div class="col-md-6 pl-0">
                                                    <p>{{ $item['name'] }}</p>
                                                    {{-- <p>非通知</p> --}}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 pl-0">
                                            <div class="clear-both item-inline">
                                                <div class="col-md-4 pl-0">
                                                    <label class="label-color" for="">ご年齢</label>
                                                </div>
                                                <div class="col-md-8 pl-0">
                                                    <p>{{ $item['age_year'] }}歳</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3"></div>
                                    </div>
                                    {{-- end father --}}
                                @endif
                            @endforeach
                        </div>

                        {{-- message --}}
                        <div class="em-title-info">
                            シッターさんへのメッセージ
                        </div>
                        <div class="em-content-info">
                        <p>{{ $profile['note'] ?? ''}}</p>
                        </div>
                        {{-- end message --}}
                    </div>
                    <div class="em-note">
                        <p>上記情報をベビーシッターさんにお伝えいたします</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{{-- data hidden upload avatar --}}
<input type="hidden" name="type_upload_file" value="{{config('constant.UPLOAD_FILE.AVATAR')}}">
<input type="hidden" name="link_image" value="{{ asset('') }}">
<input type="hidden" name="gender_hidden" value="{{$profile['gender']}}">
<input type="hidden" name="link_image_df" value="{{ asset('image').'/'. ($profile['gender'] == config('constant.GENDER.MALE') ? 'df_male.jpg' : 'df_female.jpg' )}}">

<script type="text/javascript" src="{{ asset('/js/library/slick.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('/js/employer-upload-avatar.min.js') }}"></script>

<script>
    $(document).ready(function () {
        $('.em-identity-card').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
        });  
    }) 
</script>
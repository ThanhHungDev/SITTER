@section('title', 'Sitter Register Page')
@extends('_LAYOUT.index')
@section('content')
<div class="sitter-common">
    <div class="max-width-780 sitter-register">
        @include('client.sitter.partials.errors_form')
        <form method="post" action="{{ route('SITTER_POST_REGISTER') }}" id="sitter-register">
            {{ csrf_field()}}
            <div class="div-title height-55 back-ground-green">
                <span class="fs-20 span-title">ご利用者様応募フォーム</span>
            </div>

            <div>
                <div class="page-introduce fs-14">
                    <span class="fs-19 font-weight-bold">必須</span><br/>
                    ・お子様が好きな方<br/>
                    ・心身ともに健康な18歳以上の方<br/>
                    ・喫煙者でない方<br/><br/>
                    <span class="fs-19 font-weight-bold">歓迎するスキル・経験</span><br/>
                    ・育児経験もしくは育児を手伝った経験・家庭教師でも大丈夫<br/>
                    ・各種資格保有者（保育士、看護師、チャイルドマインダー、産後ドゥーラ、教員など）は大歓迎です。<br/><br/>
                    <span class="fs-15"><span class="color-red">※</span>は必須項目です</span>
                </p>
            </div>

            <div class="div-form-group">
                <div class="div-title-form">
                    <span class="span-title">お名前 <span class="color-red">※</span></span>
                </div>
                <div class="div-content-form ">
                    <div class="form-row input-content">
                        <div class="col-sm-4 col-5 form-validate">
                            <input type="text" class="form-control @error('first_name') input-error @enderror" value="{{ old('first_name') }}" placeholder="山田" name="first_name">
                            <div class="form-error">
                                @error('first_name')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>
                        <div class="col-sm-4 col-5 ml-20 form-validate">
                            <input type="text" class="form-control @error('last_name') input-error @enderror" value="{{ old('last_name') }}" placeholder="太郎" name="last_name">
                            <div class="form-error">
                                @error('last_name')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="div-form-group">
                <div class="div-title-form">
                    <span class="span-title">フリガナ <span class="color-red">※</span></span>
                </div>
                <div class="div-content-form">
                    <div class="form-row input-content">
                        <div class="col-sm-4 col-5 form-validate">
                            <input type="text" class="form-control @error('first_name_furigana') input-error @enderror" value="{{ old('first_name_furigana') }}" placeholder="ヤマダ" name="first_name_furigana">
                            <div class="form-error">
                                @error('first_name_furigana')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>
                        <div class="col-sm-4 col-5 ml-20 form-validate">
                            <input type="text" class="form-control @error('last_name_furigana') input-error @enderror" value="{{ old('last_name_furigana') }}" placeholder="タロウ" name="last_name_furigana">
                            <div class="form-error">
                                @error('last_name_furigana')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="div-form-group">
                <div class="div-title-form">
                    <span class="span-title">生年月日 <span class="color-red">※</span></span>
                </div>
                <div class="div-content-form form-validate">
                    <div class="input-content">
                        <div class="form-row birth-date">
                            <div class="col-sm-2 col-5">
                                <select class="form-control @error('birth_year') input-error @enderror" value="{{ old('birth_year') }}" name='birth_year' id="sl-box-year">
                                    <option value=""></option>
                                    {{ $dateNow = date('Y') }}
                                    {{ $endDate = $dateNow -90 }}
                                    @for ($i = $dateNow; $i >= $endDate; $i--)
                                        <option value="{{$i}}" {{ $i == old('birth_year') ? 'selected' : '' }}>{{$i}}</option>
                                    @endfor
                                </select>
                            </div>
                            <span>年</span>
                            <div class="col-sm-1 col-2">
                                <select class="form-control @error('birth_month') input-error @enderror" value="{{ old('birth_month') }}" name='birth_month' id="sl-box-month">
                                    <option value=""></option>
    
                                    @for ($i = 1; $i <= 12; $i++)
                                        <option value="{{$i}}" {{ $i == old('birth_month') ? 'selected' : '' }}>{{$i}}</option>
                                    @endfor
                                </select>
                            </div>
                            <span>月</span>
                            <div class="col-sm-1 col-2">
                                <select class="form-control @error('birth_day') input-error @enderror" value="{{ old('birth_day') }}" name='birth_day' id="sl-box-day">
                                    <option value=""></option>
                                    @for ($i = 1; $i <= 31; $i++)
                                        <option value="{{$i}}" {{ $i == old('birth_day') ? 'selected' : '' }}>{{$i}}</option>
                                    @endfor
                                </select>
                            </div>
                            <span>日</span>
                        </div>
                        <div class="form-error">
                            @error('birth_year')
                                <label class="error">{{ $message }}</label>
                            @enderror
                            @error('birth_month')
                                <label class="error">{{ $message }}</label>
                            @enderror
                            @error('birth_day')
                                <label class="error">{{ $message }}</label>
                            @enderror
                            @error('date_of_birth')
                                <label class="error">{{ $message }}</label>
                            @enderror
                        </div>
                    </div>
                </div>
            </div>

            <div class="div-form-group">
                <div class="div-title-form">
                    <span class="span-title">性別 <span class="color-red">※</span></span>
                </div>
                <div class="div-content-form form-validate">
                    <div class="input-content">
                        <div class="form-row gender">
                            <div class="form-check-inline">
                                <label class="form-check-label">
                                <input type="radio" class="form-check-input custom-radio" name="gender" value="{{ config('constant.GENDER.FEMALE') }}" {{ config('constant.GENDER.FEMALE') == old('gender') && old('gender')!= '' ? 'checked' : ''}}>女性
                                </label>
                            </div>
                            <div class="form-check-inline">
                                <label class="form-check-label">
                                    <input type="radio" class="form-check-input custom-radio" name="gender" value="{{ config('constant.GENDER.MALE') }}" {{ config('constant.GENDER.MALE') == old('gender') && old('gender')!= '' ? 'checked' : ''}}>男性
                                </label>
                            </div>
                        </div>
                        <div class="form-error">
                            @error('gender')
                                <label class="error">{{ $message }}</label>
                            @enderror
                        </div>
                    </div>
                </div>
            </div>

            <div class="div-form-group">
                <div class="div-title-form">
                    <span class="span-title">郵便番号 <span class="color-red">※</span></span>
                </div>
                <div class="div-content-form form-validate">
                    <div class="form-row input-content">
                        <div class="col-sm-3 col-5">
                            <input type="text" class="form-control @error('post_code') input-error @enderror" value="{{ old('post_code') }}" placeholder="例）163-0713" name="post_code" id="inp-post-code">
                            <div class="form-error">
                                @error('post_code')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>
                        <div class="col-auto">
                            <input type="button" class="btn btn-post-code" value='住所検索' id="btn-post-code"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="div-form-group">
                <div class="div-title-form">
                    <span class="span-title">都道府県 <span class="color-red">※</span></span>
                </div>
                <div class="div-content-form form-validate">
                    <div class="form-row input-content">
                        <div class="col-sm-3 col-4 select-blue">
                            @php 
                                $prefs = config("location.japan.pref");
                            @endphp
                            <select class="form-control" name="pref" id="sl-box-pref">
                                {{-- <option value="" disabled selected class="d-none">東京都</option> --}}
                                <option value=""></option>
                                @foreach ($prefs as $item)
                                    <option value="{{ $item }}" {{ $item == old('pref') ? 'selected' : '' }}>{{ $item }}</option>
                                @endforeach
                            </select>
                            <div class="form-error">
                                @error('pref')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="div-form-group">
                <div class="div-title-form">
                    <span class="span-title">市区町村と番地 <span class="color-red">※</span></span>
                </div>
                <div class="div-content-form">
                    <div class="form-row input-content form-validate">
                        <div class="col-sm-8 col-12">
                            <input type="text" class="form-control @error('town') input-error @enderror" value="{{ old('town') }}" placeholder="新宿区西新宿2-7-1" name="town" id="inp-town">
                            <div class="form-error">
                                @error('town')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="div-form-group">
                <div class="div-title-form">
                    <span class="span-title">建物名・部屋番号</span>
                </div>
                <div class="div-content-form">
                    <div class="form-row input-content">
                        <div class="col-sm-8 col-12 form-validate">
                            <input type="text" class="form-control @error('address') input-error @enderror" value="{{ old('address') }}" placeholder="小田急第一生命ビル13階" name="address">
                            <span class="fs-14">建物名・部屋番号がある方は必ずご記入ください</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="div-form-group">
                <div class="div-title-form">
                    <span class="span-title">電話番号（携帯電話） <span class="color-red">※</span></span>
                </div>
                <div class="div-content-form">
                    <div class="form-row input-content form-validate">
                        <div class="col-sm-8 col-12">
                            <input type="text" class="form-control @error('phone') input-error @enderror" value="{{ old('phone') }}" placeholder="例）0369113010" name="phone">
                            <div class="form-error">
                                @error('phone')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="div-form-group">
                <div class="div-title-form">
                    <span class="span-title">メールアドレス <span class="color-red">※</span></span>
                </div>
                <div class="div-content-form">
                    <div class="form-row input-content form-validate">
                        <div class="col-sm-8 col-12">
                            <input type="text" class="form-control @error('email') input-error @enderror" value="{{ old('email') }}" placeholder="example@example.com" name="email">
                            <div class="form-error">
                                @error('email')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="div-form-group">
                <div class="div-title-form">
                    <span class="span-title">パスワード <span class="color-red">※</span></span>
                </div>
                <div class="div-content-form">
                    <div class="form-row input-content">
                        <div class="col-sm-8 col-12">
                            <div class="form-validate">
                                <input type="password" class="form-control @error('password') input-error @enderror" placeholder="パスワード（半角英数字8文字以上）" name="password" id="password">
                                <div class="form-error">
                                    @error('password')
                                        <div class="error-message">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-row input-content pt-0">
                        <div class="col-sm-8 col-12">
                            <div class="form-validate">
                                <input type="password" class="form-control @error('confirm_password') input-error @enderror" placeholder="確認のためもう一度入れてください" name="confirm_password">
                                <div class="form-error">
                                    @error('confirm_password')
                                        <div class="error-message">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="checkbox mt-50 form-validate">
                <label>
                    <input type="checkbox" value="" name="check_accept">
                    <a href="#" class="text-green">利用規約</a>と
                    <a href="#" class="text-green">プライバシーポリシー</a>に同意する
                    <span class="checkmark"></span>
                </label>
                <div class="form-error">
                    @error('check_accept')
                        <div class="error-message">{{ $message }}</div>
                    @enderror
                </div>
            </div>
            <div class="text-center mt-50 mb-50 ml-1">
                <button type="submit" class="btn btn-default btn-sitter-register">登録する</button>
            </div>
        </form>
    </div>
</div>
@endsection
@section('scripts')
    <script type="text/javascript" src="{{ asset('/js/library/jquery.validate.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/jquery.jpostal.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/sitter-register.min.js') }}"></script>
@endsection

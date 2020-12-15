@section('title', 'Register')
@extends('_LAYOUT.index')
@section('content')
<div class="container-register">
    <div class="wrapper-register wrapper-780">
        <div class="register-title">ご利用者様登録</div>
        <form action="{{ Route('EMPLOYER_POST_REGISTER') }}" method="POST" class="form-register">
            @csrf
            <div class="form-header">
                <span>
                    ようこそ家政婦さん・ベビーシッタードットコムへ<br/>会員登録してお気に入りのサポーターを見つけよう
                </span>
            </div>
            <div class="form-body">
                <p class="form-note"><span class="note-warring">※</span>は必須項目です</p>
                {{-- Name furigana --}}
                <div class="form-row">
                    <div class="row">
                        <label class="form-label">お名前<span class="note-warring">※</span></label>
                    </div>
                    <div class="row">
                        <div class="group-control form-validate">
                            <div class="w-240">
                                <input type="text" class="form-control" name='first_name_furigana' placeholder="山田" value="{{ old('first_name_furigana') }}"/>
                            </div>
                            <div class="form-error">
                                @error('first_name_furigana')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>                        
                        <div class="group-control form-validate p-left-30">
                            <div class="w-240">
                                <input type="text" class="form-control" name='last_name_furigana' placeholder="太郎" value="{{ old('last_name_furigana') }}"/>
                            </div>
                            <div class="form-error">
                                @error('last_name_furigana')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>                        
                    </div>
                </div>
                {{-- Name katarana --}}
                <div class="form-row">
                    <div class="row">
                        <label class="form-label">フリガナ<span class="note-warring">※</span></label>
                    </div>
                    <div class="row">
                        <div class="group-control form-validate">
                            <div class="w-240">
                                <input type="text" class="form-control" name='first_name' placeholder="ヤマダ" value="{{ old('first_name') }}"/>
                            </div>
                            <div class="form-error">
                                @error('first_name')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>                        
                        <div class="group-control form-validate p-left-30">
                            <div class="w-240">
                                <input type="text" class="form-control" name='last_name' placeholder="タロウ" value="{{ old('last_name') }}"/>
                            </div>
                            <div class="form-error">
                                @error('last_name')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>                        
                    </div>
                </div>
                {{-- birth-date --}}
                <div class="form-row">
                    <div class="row">
                        <label class="form-label">生年月日<span class="note-warring">※</span></label>
                    </div>
                    <div class="row">
                        <div class="group-control form-validate">
                            
                            <div class="group-row flex-row">
                                <div class="w-60">
                                    <select class="form-control" name='birth_year' id="sl-box-year">
                                        <option value=""></option>
                                        {{ $dateNow = date('Y') }}
                                        {{ $endDate = $dateNow -90 }}
                                        @for ($i = $dateNow; $i >= $endDate; $i--)
                                            <option value="{{$i}}" {{ $i == old('birth_year') ? 'selected' : '' }}>{{$i}}</option>
                                        @endfor
                                    </select>
                                </div>
                                <label class="label-cus lb-year">年</label>
                                <div class="w-40">
                                    <select class="form-control" name='birth_month' id="sl-box-month">
                                        <option value=""></option>

                                        @for ($i = 1; $i <= 12; $i++)
                                            <option value="{{$i}}" {{ $i == old('birth_month') ? 'selected' : '' }}>{{$i}}</option>
                                        @endfor
                                    </select>
                                </div>
                                <label class="label-cus lb-month">月</label>
                                <div class="w-40">
                                    <select class="form-control" name='birth_day' id="sl-box-day">
                                        <option value=""></option>
                                        @for ($i = 1; $i <= 31; $i++)
                                            <option value="{{$i}}" {{ $i == old('birth_day') ? 'selected' : '' }}>{{$i}}</option>
                                        @endfor
                                    </select>
                                </div>                                
                                <label class="label-cus lb-day">日</label>
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
                {{-- gender --}}
                <div class="form-row">
                    <div class="row">
                        <label class="form-label">性別<span class="note-warring">※</span></label>
                    </div>
                    <div class="row">
                        <div class="group-control form-validate flex-column">
                            <div class="group-row flex-row">
                                <input type="radio" class="form-control custom-radio" name='gender' id='gender-female' value="{{ config('constant.GENDER.FEMALE') }}" {{ config('constant.GENDER.FEMALE') == old('gender') && old('gender')!= '' ? 'checked' : '' }}/>
                                <label class="label-cus lb-gender" for="gender-female">女性</label>
                                <input type="radio" class="form-control custom-radio" name='gender' id='gender-male' value="{{ config('constant.GENDER.MALE') }}" {{ config('constant.GENDER.MALE') == old('gender') ? 'checked' : '' }}/>
                                <label class="label-cus lb-gender" for="gender-male">男性</label>
                            </div>
                            <div class="form-error">
                                @error('gender')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>                        
                    </div>
                </div>
                {{-- Post code --}}
                <div class="form-row">
                    <div class="row">
                        <label class="form-label">郵便番号<span class="note-warring">※</span></label>
                    </div>
                    <div class="row">
                        <div class="group-control form-validate">
                            <div class="group-row flex-row">
                                <div class="w-120">
                                    <input type="text" class="form-control" name='post_code' placeholder="例）1630713" value="{{ old('post_code') }}" id="inp-post-code"/>
                                </div>
                                <div class="form-action">
                                    @php
                                        $href = config('location.zipcode_url');
                                    @endphp
                                    <input type="button" class="btn btn-post-code" value='住所検索' id="btn-post-code" href= {{ $href }}/>
                                </div>
                            </div>
                            <div class="form-error">
                                @error('post_code')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>
                        
                    </div>
                </div>
                {{-- Pref --}}
                <div class="form-row">
                    <div class="row">
                        <label class="form-label">都道府県<span class="note-warring">※</span></label>
                    </div>
                    <div class="row">
                        <div class="group-control form-validate select-pref">
                            @php 
                            $prefs = config("location.japan.pref");
                            @endphp
                            <div class="w-120">
                                <select class="form-control" name='pref' id="sl-box-pref">
                                    <option value=""></option>
                                    @foreach ($prefs as $item)
                                        <option value="{{ $item }}" {{ $item == old('pref') ? 'selected' : '' }}>{{ $item }}</option>
                                    @endforeach
                                </select>
                            </div>
                            
                            
                            <div class="form-error">
                                @error('pref')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
                {{-- town --}}
                <div class="form-row">
                    <div class="row">
                        <label class="form-label">市区町村<span class="note-warring">※</span></label>
                    </div>
                    <div class="row">
                        <div class="group-control w-p100 form-validate">
                            <div class="w-510">
                                <input type="text" class="form-control" name='town' placeholder="市区町村" value="{{ old('town') }}" id="inp-town"/>
                            </div>
                            <div class="form-error">
                                @error('town')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
                {{-- address --}}
                <div class="form-row">
                    <div class="row">
                        <label class="form-label">番地以降(建物名・部屋番号など)</label>
                    </div>
                    <div class="row">
                        <div class="group-control w-p100">
                            <div class="w-510">
                                <input type="text" class="form-control" name='address' placeholder="番地以降(建物名・部屋番号など)" value="{{ old('address') }}" id="inp-address"/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <span>建物名・部屋番号がある方は必ずご記入ください</span>
                    </div>
                </div>
                {{-- phone --}}
                <div class="form-row">
                    <div class="row">
                        <label class="form-label">電話番号（携帯電話）<span class="note-warring">※</span></label>
                    </div>
                    <div class="row">
                        <div class="group-control w-p100 form-validate">
                            <div class="w-510">
                                <input type="text" class="form-control" name='phone' placeholder="例）0369113010" value="{{ old('phone') }}"/>
                            </div>
                            <div class="form-error">
                                @error('phone')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>                        
                    </div>
                </div>
                {{-- mail --}}
                <div class="form-row">
                    <div class="row">
                        <label class="form-label">メールアドレス<span class="note-warring">※</span></label>
                    </div>
                    <div class="row">
                        <div class="group-control w-p100 form-validate">
                            <div class="w-510">
                                <input type="text" class="form-control" name='email' placeholder="example@example.com" value="{{ old('email') }}"/>
                            </div>
                            <div class="form-error">
                                @error('email')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
                {{-- password --}}
                <div class="form-row">
                    <div class="row">
                        <label class="form-label">パスワード<span class="note-warring">※</span></label>
                    </div>
                    <div class="row">
                        <div class="group-control w-p100 flex-column">
                            <div class="form-validate">
                                <div class="w-510">
                                    <input type="password" class="form-control" name='password' id="password" placeholder="パスワード（半角英数字6文字以上）" />
                                </div>
                                <div class="form-error">
                                    @error('password')
                                        <label class="error">{{ $message }}</label>
                                    @enderror
                                </div>
                            </div>
                            <div class="form-validate p-top-20">
                                <div class="w-510">
                                    <input type="password" class="form-control" name='confirm_password' placeholder="確認のためもう一度入れてください" />
                                </div>
                                <div class="form-error">
                                    @error('confirm_password')
                                        <label class="error">{{ $message }}</label>
                                    @enderror
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {{--Check policy --}}
                <div class="form-policy">
                    <div class="group-control w-p100 form-validate">
                        <div class="group-row flex-row">
                            <input type="checkbox" class="check-policy" name='check_policy'/>
                            <a href="#emp-terms" rel="modal:open" class="text-info" >利用規約 </a>と 
                            <a href="#emp-privacy" rel="modal:open" class="text-info">プライバシーポリシー</a> に同意する
                        </div>
                        <div class="form-error"></div>
                    </div>
                </div>
                <div class="form-action action-register">
                    <button type="submit" class="btn btn-register">
                        登録する
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
@include('modals.employers.privacy')
@include('modals.employers.terms')
@endsection

@section('scripts')
    <script type="text/javascript" src="{{ asset('js/library/jquery.validate.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/jquery.jpostal.js') }}"></script>    
    <script type="text/javascript" src="{{ asset('js/employer-register.min.js') }}"></script>
@endsection
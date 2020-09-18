@section('title', 'Sitter Register Page')
@extends('_LAYOUT.index')
@section('content')
<div class="sitter-common">
    <div class="max-width-780 sitter-after-register">
        @include('client.sitter.partials.errors_form')
        <form action="{{ route('SITTER_POST_REGISTER_NEXT_STEP') }}" method="POST" enctype="multipart/form-data" id="sitter-register-parent">
            {{ csrf_field()}}

            <div class="div-title height-55 back-ground-green">
                <span class="fs-20 span-title">ベビーシッター応募フォーム</span>
            </div>

            <div class="height-55 require-title">
                <span class="fs-15"><span class="color-red">※</span>は必須項目です</span>
            </div>

            <div class="div-form-group">
                <div class="div-title-form">
                    <span class="span-title">本人確認書類のアップロード <span class="color-red">※</span></span>
                </div>
                <div class="sitter-upload-info plr-23">
                    <p>
                        ご提出いただいた書類は運営にて住所確認のため審査時のみに確認し、外部・及びシッターに開示されることはありませんのでご安心ください。<br/><br/>
                        ※以下より、お名前、住所、生年月日がご入力いただいた内容と一致するものをどれか1つ選択<br/>
                    </p>

                    <label>本人確認書類を選択</label>
                    <div class="form-group input-content form-validate">
                        <div class="row">
                            <div class="col-sm-5 col-12 select-type select-blue form-validate">
                                <select class="form-control @error('type_upload') input-error @enderror" name="type_upload" id="type_upload">
                                    <option value="">選択してください</option>
                                    @foreach(config('constant.SITTER_TYPE_UPLOAD') as $key => $value)
                                        <option @if(old('type_upload') == $key) selected @endif value={{$key}}>{{$value}}</option>
                                    @endforeach
                                </select>
                                <div class="form-error">
                                    @error('type_upload')
                                        <label class="error">{{ $message }}</label>
                                    @enderror
                                </div>
                            </div>
                        </div>
                    </div>

                    <label class="mt-1">選択した書類をアップロード</label>
                    <div class="row">
                        <div class="col-sm-9 col-12 upload-info" data-name="input_file_front">
                            <img class="icon-upload" src="{{ asset('image/icons/icon-upload.png') }}">
                            <span class="text-upload">オモテ</span>
                        </div>
                    </div>
                    <div class="form-validate min-height-20">
                        <input value="{{old('input_file_front')}}" data-type="upload" type="file" accept="image/*"  name="input_file_front" >
                        <div class="form-error">
                            @error('input_file_front')
                                <label class="error">{{ $message }}</label>
                            @enderror
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-9 col-12 upload-info" data-name="input_file_back">
                            <img class="icon-upload" src="{{ asset('image/icons/icon-upload.png') }}">
                            <span class="text-upload">ウラ</span>
                        </div>
                    </div>

                    <div class="form-validate min-height-20">
                        <input value="{{old('input_file_back')}}" data-type="upload" type="file" accept="image/*"  name="input_file_back" >
                        <div class="form-error">
                            @error('input_file_back')
                                <label class="error">{{ $message }}</label>
                            @enderror
                        </div>
                    </div>
                </div>
            </div>

            <div class="div-form-group">
                <div class="div-title-form">
                    <span class="span-title">お持ちの資格・経験 <span class="color-red">※</span></span>
                </div>
                {{-- {{dd(old('experiences'))}} --}}
                <div class="sitter-upload-info plr-23">
                    <div class="form-validate">
                        <div class="form-row">
                            @foreach($experiences as $experience)
                                <div class="cell">
                                    <label class="checkbox">
                                        {{$experience->name}}
                                        <input type="checkbox" value={{$experience->id }} @if(is_array(old('experiences')) && in_array($experience->id, old('experiences'))) checked @endif name="experiences[]">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            @endforeach
                        </div>

                        <div class="form-error">
                            @error('experiences')
                                <label class="error">{{ $message }}</label>
                            @enderror
                        </div>
                    </div>

                    <label class="mt-18">その他、保育に関連する資格をお持ちの場合は以下の資格名をご記入してください。</label>
                    <div class="row">
                        <textarea class="col-sm-9 col-12 upload-info" name="remark">{{old('remark')}}</textarea>
                    </div>

                    <label class="mt-18">選択した書類をアップロード</label>
                    <div class="row">
                        <div class="col-sm-9 col-12 upload-info" data-name="input_file_qualifi">
                            <img class="icon-upload" src="{{ asset('image/icons/icon-upload.png') }}">
                            <span class="text-upload">資格証</span>
                        </div>
                    </div>
                    <div class="form-validate">
                        <input value="{{old('input_file_qualifi')}}" data-type="upload" type="file" accept="image/*"  name="input_file_qualifi" >
                        <div class="form-error">
                            @error('input_file_qualifi')
                                <label class="error">{{ $message }}</label>
                            @enderror
                        </div>
                    </div>
                </div>
            </div>

            <div class="div-form-group">
                <div class="div-title-form">
                    <span class="span-title">あなた以外の緊急連絡先お名前 <span class="color-red">※</span></span>
                </div>
                <div class="div-content-form">
                    <div class="form-row input-content form-validate">
                        <div class="col-sm-9 col-12">
                            <span class="fs-14">緊急時に登録者ご本人様と連絡が取れない場合にお電話することがあります。</span>
                            <input type="text" name="contact_name" class="form-control @error('contact_name') input-error @enderror" value="{{ old('contact_name') }}" placeholder="例）山田　花子">
                            <div class="form-error">
                                @error('contact_name')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="div-form-group">
                <div class="div-title-form">
                    <span class="span-title">緊急連絡先住所 <span class="color-red">※</span></span>
                </div>
                <div class="div-content-form">
                    <div class="form-row input-content form-validate">
                        <div class="col-sm-9 col-12">
                            <input type="text" name="contact_address" class="form-control @error('contact_address') input-error @enderror" value="{{ old('contact_address') }}" placeholder="例）東京都新宿区西新宿2-7-1 小田急第一生命ビル13階">
                            <div class="form-error">
                                @error('contact_address')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="div-form-group">
                <div class="div-title-form">
                    <span class="span-title">緊急連絡先電話番号 <span class="color-red">※</span></span>
                </div>
                <div class="div-content-form">
                    <div class="form-row input-content form-validate">
                        <div class="col-sm-9 col-12">
                            <input type="text" name="contact_phone" id="contact-phone" class="form-control @error('contact_phone') input-error @enderror" value="{{ old('contact_phone') }}" placeholder="例）0369113011">
                            <div class="form-error">
                                @error('contact_phone')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="div-form-group">
                <div class="div-title-form">
                    <span class="span-title">あなたとの関係 <span class="color-red">※</span></span>
                </div>
                <div class="div-content-form">
                    <div class="form-row input-content form-validate">
                        <div class="col-sm-9 col-12">
                            <input type="text" name="contact_relationship" class="form-control @error('contact_relationship') input-error @enderror" value="{{ old('contact_relationship') }}" placeholder="例）母">
                            <div class="form-error">
                                @error('contact_relationship')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="div-form-group">
                <div class="div-title-form">
                    <span class="span-title">サポートの項目 <span class="color-red">※</span></span>
                </div>
                
                <div class="sitter-upload-info plr-23">
                    <div class="form-validate">
                        <div class="form-row">
                            @foreach($skills as $skill)
                                <div class="cell">
                                    <label class="checkbox">
                                        {{$skill->name}}
                                        <input type="checkbox" value={{$skill->id}} name="skills[]" @if(is_array(old('skills')) && in_array($skill->id, old('skills'))) checked @endif>
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            @endforeach
                        </div>
                        <div class="form-error">
                            @error('skills')
                                <label class="error">{{ $message }}</label>
                            @enderror
                        </div>
                    </div>
                </div>
            </div>

            <div class="checkbox mt-50 ml-1 form-validate">
                <label>
                    <input type="checkbox" name="check_accept">
                    <a href="#" class="text-green">利用規約</a>と<a href="#" class="text-green">プライバシーポリシー</a>に同意する
                    <span class="checkmark"></span>
                </label>
                <div class="form-error">
                    @error('check_accept')
                        <label class="error">{{ $message }}</label>
                    @enderror
                </div>
            </div>
            <input type="hidden" name="token_verify" value="{{ $_REQUEST['token_verify'] }}">
            <div class="text-center mt-50 mb-50">
                <button type="button" class="btn btn-default btn-sitter-back">戻る</button>
                <button type="submit" class="btn btn-default btn-sitter-register">登録する</button>
            </div>
        </form>
    </div>
</div>
@endsection
@section('scripts')
    <script type="text/javascript" src="{{ asset('js/library/jquery.validate.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/additional-methods.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/sitter-register-parent.min.js') }}"></script>
@endsection
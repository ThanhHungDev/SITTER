@section('title', 'Contact')
@extends('_LAYOUT.index')
@section('content')
<div class="container-register">
    <div class="wrapper-register wrapper-780">
        <div class="register-title">お問い合わせ</div>
        <form action="{{ Route('POST_CONTACT') }}" method="POST" class="form-contact">
            @csrf
            <div class="form-header">
                <span>
                    ようこそ<span style="color:#fc6536">家政婦さん・ベビーシッタードットコムへ</span>
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
                {{-- mail --}}
                <div class="form-row">
                    <div class="row">
                        <label class="form-label">メールアドレス<span class="note-warring">※</span></label>
                    </div>
                    <div class="row">
                        <div class="group-control w-p100 form-validate">
                            <div class="w-510">
                                <input type="text" class="form-control" name='email' placeholder="info@kaseifu-babysitter.com" value="{{ old('email') }}"/>
                            </div>
                            <div class="form-error">
                                @error('email')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
                {{-- subject --}}
                <div class="form-row">
                    <div class="row">
                        <label class="form-label">件名<span class="note-warring">※</span></label>
                    </div>
                    <div class="row">
                        <div class="group-control w-p100 form-validate">
                            <div class="w-510">
                                <input type="text" class="form-control" name='subject' placeholder="info@kaseifu-babysitter.com" value="{{ old('subject') }}"/>
                            </div>
                            <div class="form-error">
                                @error('subject')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
                {{-- content --}}
                <div class="form-row">
                    <div class="row">
                        <label class="form-label">メッセージ<span class="note-warring">※</span></label>
                    </div>
                    <div class="row">
                        <div class="group-control w-p100 form-validate">
                            <div class="w-510">
                                <textarea name="content" rows="8" class="form-control" placeholder="ここに質問をご記入ください"></textarea>
                            </div>
                            <div class="form-error">
                                @error('content')
                                    <label class="error">{{ $message }}</label>
                                @enderror
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
                        内容確認
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
    <script type="text/javascript" src="{{ asset('js/contact.min.js') }}"></script>
@endsection

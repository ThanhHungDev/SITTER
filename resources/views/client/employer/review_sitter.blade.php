@section('title', 'reiview sitter')
@extends('_LAYOUT.index')

@section('stylesheets')
    <link href="{{ asset('css/library/rateit.css') }}" rel="stylesheet">
@endsection

@section('content')
<div class="employer">
    <div class="max-width-1080 review-page">
        <div class="head-page">
            <span class="fs-20">レビュー投稿</span>
        </div>
        <div class="fs-15 mtb-20">このベビーシッターの評価、感想を入力してください。みんなの役に立つ情報になります。</div>
        <div class="wrap-page">
            <div class="left-page">
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
                    <td class="bt-1">{{ config('constant.TIME_SUPORT')[$data['sitter']['time_support']] ?? ''  }}</td>
                    </tr>
                    <tr>
                        <td class="bt-1">
                            <span class="fs-15">ベビーシッター</span><br/>
                            <span class="fs-20">￥{{ ($data['salarySitter']) ?? ''  }}　/1時間</span>
                        </td>
                        <td class="bt-1">
                            <span class="fs-15">家事代行</span><br/>
                            <span class="fs-20">￥{{ $data['salaryHouse'] ?? ''  }}　/1時間</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="right-page">
                @if (count($errors) > 0)
                    <div class="alert alert-danger alert-dismissible fade show mt-18" id="alert_message" role="alert">
                            <strong>入力に問題がありました。</strong><br><br>
                            <ul>
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                    </div>
                @endif

                <form action="{{ Route('EMPLOYER_POST_REVIEW') }}" method="POST" id="review-sitter">
                    @csrf
                    <div class="title-form">
                        <span class="span-title fs-18">評価<span class="color-red">※</span></span>
                    </div>
                    <div class="content-form form-validate">
                        <div class="fs-16">わるい　1　2　3　4 　5　よい</div>
                        <div class="rateit" id="rate-star" data-rateit-mode="font" data-rateit-resetable="false" data-rateit-ispreset="true" data-sitter="24"></div>
                        <div class="fs-16">☆マークを適切なところでクリックしてください。</div>
                        <input type="text" name="rate" id="rate" hidden/>
                        <div class="form-error"></div>
                    </div>
                    <div class="title-form">
                        <span class="span-title fs-18">本文<span class="color-red">※</span></span>
                    </div>
                    <div class="content-form form-validate">
                        <textarea id="comment" name="comment" rows="4" cols="100"></textarea>
                        <div class="form-error"></div>
                        <p class="color-red fs-16">
                            ※全角500文字以内<br/>
                            ※URL、HTMLタグ、メールアドレス、機種依存文字は投稿できません。<br/>
                            ※半角カタカナは、自動的に全角カタカナに変換して投稿されます。<br/>
                        </p>
                    </div>
                    <input type="hidden" name="sitter_id" id="sitterId" value="{{ $data['sitter']['user_id'] }}"/>
                    <input type="hidden" name="token" value="{{ $data['token'] }}"/>
                    <div class="submit-form">
                        <button class="btn-submit-review" type="submit">投稿内容確認</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

@endsection

@section('scripts')
    <script type="text/javascript" src="{{ asset('/js/library/jquery.validate.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/jquery.rateit.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/review_sitter.min.js') }}"></script>
@endsection
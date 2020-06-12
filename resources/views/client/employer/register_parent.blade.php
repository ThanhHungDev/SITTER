
@section('title', 'Register Parent Page')
@extends('_LAYOUT.index')
@section('content')
<div class="wapper-parent">
    <div class="head">
        <h3>ベビーシッター応募フォーム</h3>
    </div>
    <div class="note">
        <p>
          <span class="text-danger">※</span>は必須項目です
        </p>
    </div>
    <div class="wapper-form">
        <form action="" method="post">
            <div class="bg-form">
                <div class="input-group">
                    <div class="input-label">
                        本人確認書類のアップロード<span class="text-danger">※</span>
                    </div>
                    <div class="explain-content">
                        <p>ご提出いただいた書類は運営にて住所確認のため審査時のみに確認し、外部・及びシッターに開示されることはありませんのでご安心ください。</p>
                        <p>※以下より、お名前、住所、生年月日がご入力いただいた内容と一致するものをどれか1つ選択</p>
                    </div>
                    <div class="input-content">
                        <div class="input-sub-content">
                            <label   for="">本人確認書類を選択</label>
                            <br>
                            <select class="type_certificate" name="">
                                <option value="">選択してください</option>
                                <option value="">02</option>
                            </select>
                        </div>
                        <div class="input-sub-content">
                            <label for="">選択した書類をアップロード</label>
                            <div class="input_upload">
                                <span>表面を追加</span>
                            </div>
                            <div class="input_upload">
                                <span>表面を追加</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="input-group">
                    <div class="input-label">
                        家族構成<span class="text-danger">※</span>
                    </div>
                    <div class="input-content">
                        <!-- father -->
                        <div class="input-sub-content">
                            <label class="fw-600" for="">夫のお名前</label>
                            <div class="input-db-content">
                                <input placeholder="姓" type="text" name="" id="">
                                <input placeholder="名" type="text" name="" id="">
                            </div>
                        </div>
                        <div class="input-sub-content">
                            <label class="fw-600" for="">フリガナ</label>
                            <div class="input-db-content">
                                <input placeholder="セイ" type="text" name="" id="">
                                <input placeholder="メイ" type="text" name="" id="">
                            </div>
                        </div>
                        <div class="input-sub-content">
                            <label for="">生年月日</label>
                            <div class="input-date-content">
                                <select name="" id="" class="year_select">
                                    <option value=""></option>
                                    <option value="1">1</option>
                                </select>
                                <span>年</span>
                                <select name="" id="" class="month_select">
                                    <option value=""></option>
                                    <option value="1">1</option>
                                </select>
                                <span>月</span>
                                <select name="" id="" class="day_select">
                                    <option value=""></option>
                                    <option value="1">1</option>
                                </select>
                                <span>日</span>
                            </div>
                        </div>
                        <!-- end father -->
                        <!-- mother -->
                        <div class="input-sub-content">
                            <label for="">妻のお名前</label>
                            <div class="input-db-content">
                                <input placeholder="姓" type="text" name="" id="">
                                <input placeholder="名" type="text" name="" id="">
                            </div>
                        </div>
                        <div class="input-sub-content">
                            <label class="fw-600" for="">フリガナ</label>
                            <div class="input-db-content">
                                <input placeholder="セイ" type="text" name="" id="">
                                <input placeholder="メイ" type="text" name="" id="">
                            </div>
                        </div>
                        <div class="input-sub-content">
                            <label class="fw-600" for="">生年月日</label>
                            <div class="input-date-content">
                                <select name="" id="" class="year_select">
                                    <option value=""></option>
                                    <option value="1">1</option>
                                </select>
                                <span>年</span>
                                <select name="" id="" class="month_select">
                                    <option value=""></option>
                                    <option value="1">1</option>
                                </select>
                                <span>月</span>
                                <select name="" id="" class="day_select">
                                    <option value=""></option>
                                    <option value="1">1</option>
                                </select>
                                <span>日</span>
                            </div>
                        </div>
                        <!-- number chill -->
                        <div class="input-sub-content">
                            <label class="fw-600" for="">お子様</label>
                            <div class="input-db-content">
                                <select name="" id="" class="">
                                    <option value=""></option>
                                    <option value="1">1</option>
                                </select>
                            </div>
                        </div>
                        <!-- end number chill -->
                        <!-- end mother -->
                    </div>
                </div>
                <!-- chill info -->
                <div class="input-group">
                    <div class="input-label">
                        1人目のお子様<span class="text-danger">※</span>
                    </div>
                    <div class="input-content">
                        <div class="input-sub-content">
                            <label for="">お子様のお名前</label>
                            <div class="input-db-content">
                                <input placeholder="姓" type="text" name="" id="">
                                <input placeholder="名" type="text" name="" id="">
                            </div>
                        </div>
                        <div class="input-sub-content">
                            <label for="">フリガナ</label>
                            <div class="input-db-content">
                                <input placeholder="セイ" type="text" name="" id="">
                                <input placeholder="メイ" type="text" name="" id="">
                            </div>
                        </div>
                        <div class="input-sub-content">
                            <label for="">お子様の性別</label><br>
                            <input type="radio" name="" id=""> <label class="fw-normal" for="">女の子</label>
                            <input type="radio" name="" id=""> <label class="fw-normal" for="">男の子</label>
                        </div>
                        <div class="input-sub-content">
                            <label for="">お子様の生年月日</label>
                            <div class="input-date-content">
                                <select name="" id="" class="year_select">
                                    <option value=""></option>
                                    <option value="1">1</option>
                                </select>
                                <span>年</span>
                                <select name="" id="" class="month_select">
                                    <option value=""></option>
                                    <option value="1">1</option>
                                </select>
                                <span>月</span>
                                <select name="" id="" class="day_select">
                                    <option value=""></option>
                                    <option value="1">1</option>
                                </select>
                                <span>日</span>
                            </div>
                        </div>
                        <div class="input-sub-content">
                            <input type="checkbox" name="" id=""> <label for="">アレルギーの有無</label>
                        </div>
                        <div class="input-sub-content">
                            <input type="checkbox" name="" id=""> <label for="">持病、特別なケアの有無</label>
                        </div>
                    </div>
                </div>
                <!-- end chill info -->
                <!-- ニックネーム（サービス内で公開されます） -->
                <div class="input-group">
                    <div class="input-label">
                        ニックネーム（サービス内で公開されます）
                    </div>
                    <div class="input-content ">
                        <input class="w100p" placeholder="ニックネーム" type="text" name="" id="">
                    </div>
                </div>
                <!-- end ニックネーム（サービス内で公開されます） -->

                <!-- メッセージ（ベビーシッターへ送るメッセージです） -->
                <div class="input-group">
                    <div class="input-label">
                        メッセージ（ベビーシッターへ送るメッセージです）
                    </div>
                    <div class="input-content">
                        <textarea class="w100p" name="" placeholder="例）０歳の男の子と３歳の女の子が居まして簡単な家事もお願い
    します。" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <!-- end メッセージ（ベビーシッターへ送るメッセージです） -->
            </div>
            <div class="input-group pl-3">
                <input type="checkbox" name="" id=""> <span>利用規約</span>と<span>プライバシーポリシー</span>に同意する
            </div>
            <div class="list-action">
                <button class="btn">
                    戻る
                </button>
                <button class="btn">
                    内容確認へ
                </button>
            </div>
        </form>
    </div>
    
</div>
@endsection

@section('scripts')
    {{-- script login if u have --}}
@endsection
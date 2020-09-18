
@section('title', 'Site Policy Page')
@section('stylesheets')
    <link rel="stylesheet" href="{{ asset('css/library/jquery-ui.min.css')}}">
@endsection
@extends('_LAYOUT.index')
@section('content')
<div class="wapper-tokuteisho">
    <div class="row toku-header">
        <h2>特定商取引法に基づく表記</h2>
    </div>
    <div class="row toku-body">

        <div class="item-toku-head">
            <h4>運営業者</h4>
        </div>
        <div class="item-toku-content">
            <p>株式会社トラストグロース</p>
        </div>

        <div class="item-toku-head">
            <h4>運営統括責任者</h4>
        </div>
        <div class="item-toku-content">
            <p>代表取締役 長井 博</p>
        </div>

        <div class="item-toku-head">
            <h4>事業者所在地</h4>
        </div>
        <div class="item-toku-content">
            <p>〒163-0713</p>
            <p>東京都新宿区西新宿2-7-1小田急第一生命ビル13階</p>
        </div>

        <div class="item-toku-head">
            <h4>代表連絡先（電話番号）</h4>
        </div>
        <div class="item-toku-content">
            <p>03-6911-3010</p>
        </div>

        <div class="item-toku-head">
            <h4>代表連絡先（メールアドレス）</h4>
        </div>
        <div class="item-toku-content">
            <p>mail@trust-growth.co.jp</p>
        </div>

        <div class="item-toku-head">
            <h4>サイト名（屋号）</h4>
        </div>
        <div class="item-toku-content">
            <p>家政婦さん・ベビーシッター.com（カセイフ・ベビーシッタードットコム）</p>
        </div>

        <div class="item-toku-head">
            <h4>ベビーシッター/家政婦の業務代金以外に必要な料金</h4>
        </div>
        <div class="item-toku-content">
            <p>システム利用料(手数料)：ベビーシッター/家政婦の業務代金の20％</p>
            <p>交通費：ベビーシッター/家政婦の交通費全額（最短・最安値で算定いたします）</p>
        </div>

        <div class="item-toku-head">
            <h4>キャンセルについて</h4>
        </div>
        <div class="item-toku-content">
            <p>業務開始予定日時から、</p>
            <p>48時間以上前のとき：無料</p>
            <p>24時間～48時間以内のとき：お支払い予定額の50%</p>
            <p>2時間～24時間以内のとき：お支払い予定額の100%</p>
            <p>2時間未満：お支払い予定額の100% + 予定交通費</p>
            <p>※システム利用料(手数料)もキャンセル料に含まれます。</p>
        </div>

        <div class="item-toku-head">
            <h4>支払方法</h4>
        </div>
        <div class="item-toku-content">
            <p><b>クレジットカード決済</b></p>
            <div class="toku-list-card">
                <div class="tlc-box">
                    <div class="tlc-item">
                        <p>VISA</p>
                        <img src="{{asset('image/list-card/visa.jpg')}}" alt="" srcset="">
                    </div>
                </div>
                <div class="tlc-box">
                    <div class="tlc-item">
                        <p>MASTER</p>
                        <img src="{{asset('image/list-card/master.jpg')}}" alt="" srcset="">
                    </div>
                </div>
                <div class="tlc-box">
                    <div class="tlc-item">
                        <p>DINERS</p>
                        <img src="{{asset('image/list-card/diners.jpg')}}" alt="" srcset="">
                    </div>
                </div>
                <div class="tlc-box">
                    <div class="tlc-item">
                        <p>JCB</p>
                        <img src="{{asset('image/list-card/jcb.jpg')}}" alt="" srcset="">
                    </div>
                </div>
                <div class="tlc-box">
                    <div class="tlc-item">
                        <p>AMEX</p>
                        <img src="{{asset('image/list-card/ami.jpg')}}" alt="" srcset="">
                    </div>
                </div>
            </div>
        </div>
        {{-- <div class="toku-content-text">
            <p>『カード決済』 はクレジットカード決済代行のGMOイプシロン株式会社 の決済代行サービス を利用
                しております。</p>
            <p>ご注文後、イプシロン決済画面へ移動いたしますので決済を完了させてください。</p>
            <p>安心してお支払いをしていただくために、お客様の情報がイプシロンサイト経由で送信される際にはSSL
                (128bit)による暗号化通信で行い、クレジットカード情報は当サイトでは保有せず、同社で厳重に管理し
                ております。</p>
        </div> --}}

    </div>
</div>

@endsection

@section('scripts')
    {{-- script login if u have --}}
    <script type="text/javascript" src="{{ asset('js/library/jquery-ui.min.js') }}"></script>
@endsection
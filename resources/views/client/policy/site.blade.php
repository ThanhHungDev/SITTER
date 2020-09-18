
@section('title', 'Site Policy Page')
@section('stylesheets')
    <link rel="stylesheet" href="{{ asset('css/library/jquery-ui.min.css')}}">
@endsection
@extends('_LAYOUT.index')
@section('content')
<div class="wapper-policy">
    <div class="row policy-header">
        <h1>サイトポリシー</h1>
    </div>
    <div class="row privacy">
        <span>
            このウェブサイトは株式会社トラストグロースが運営しております。
        </span>
        <br>
        <span>
            このウェブサイトを利用される際には、以下の各事項をご了承くださいますようお願い申し上げます。
        </span>
        <br>
        <span>
            また、当社は、このウェブサイトのご利用条件を変更することがあります。
        </span>
        <br>
        <span>
            その際にはこの文章の改訂版を掲載することと致しますので、最新の内容をご確認いただきますよう、お願い申し上げます。
        </span>
    </div>
    <div class="policy-subheader">
        <div class="img-title"></div>
        <p class="title">著作権について</p>
        <span class="policy-line"></span>
    </div>
    <div class="privacy">
        <span>当社のホームページ上の一切のコンテンツ、著作物（文書、資料など）に係る著作権その他の権利は当社及び情報提供者に帰属します。</span>
        <br>
        <span>これらのコンテンツ、著作物は、日本の著作権法、条約及び他国の著作権法にいう著作権により保護されており、私的利用の範囲を超えて利用することはできません。</span>
        <br>
        <span>また、権利者の許可なく改変、複製、賃貸、貸与、販売、出版、送信、放送等、方法の如何を問わず第三者の利用に供することを固く禁じます。</span>
        <br>
        <span>但し、個々の著作物に個別の利用条件が付されている場合は、当該条件が優先されます。</span>
    </div>

    <div class="policy-subheader">
        <div class="img-title"></div>
        <p class="title">商標について</p>
        <span class="policy-line"></span>
    </div>
    <div class="privacy">
        <span>当社のウェブサイトに掲載している会社名、サービス名、製品名などはいずれも当社あるいは各企業、団体の商標または登録商標です。</span>
        <br>
        <span>当社のホームページでは説明の便宜上、その商品名、団体名などを記載する場合がありますが、それらの商標権の侵害を行なう意志や目的はありません。</span>
        <br>
    </div>

    <div class="policy-subheader">
        <div class="img-title"></div>
        <p class="title">免責事項</p>
        <span class="policy-line"></span>
    </div>
    <div class="privacy">
        <ol>
            <li>
                当社は、このウェブサイトに情報を掲載するにあたり、十分に検討・確認作業を行なっておりますが、その内容に関し、その正確性、有用性、確実性、安全性、特定目的に対する合目的性その他いかなる保障もするものではありません。
                <br>
                <span>コンテンツ等のご利用により、万一何らかの損害が発生したとしても、当社は一切責任を負いません。</span>

            </li>
            <li>
                当社は、ウェブサイトの構成、利用条件、URLおよびコンテンツ等を、予告なしに変更または中止し、あるいはウェブサイトの運営を予告なしに中断または中止することがあります。
                <br>
                <span>なお、当社は理由の如何に関わらず、これらの変更及びこのウェブサイトの運用の中断または中止によって生じるいかなる損害についても責任を負うものではありません。</span>
            </li>
            <li>
                このウェブサイトから、もしくはこのウェブサイトにリンクを張っている当社以外の第三者のウェブサイト（以下「リンクサイト」と称します）の内容は、それぞれ各社の責任で管理されるものであり、当社の管理下にあるものではありません。
                <br>
                <span>また、当社とリンクサイトとの間に提携などの特別な関係があるということを意味するものではありません。</span>
                <br>
                <span>当社は、リンクサイトの内容について、また、それらのご利用により生じたいかなる損害についても責任を負いません。</span>
            </li>
        </ol>
    </div>

    <div class="policy-subheader">
        <div class="img-title"></div>
        <p class="title">推奨環境</p>
        <span class="policy-line"></span>
    </div>
    {{-- <div class="privacy">
        <span>トラストグロースでは以下のOS、ブラウザ、プラグインが推奨動作環境となっております。</span>
        
        <span>これ以外の環境ですと適正に表示されない場合が有ります。</span>
    </div> --}}
    <div class="privacy">
        <strong>推奨OS</strong>
        <br>
        <span class="mr-left">Windows 7 / 8 / 10 / Mac OS / Android OS / iOS</span>
    </div>
    <div class="privacy">
        <strong>ブラウザ</strong>
        <br>
        <span class="mr-left">InternetExplorer 11（Windows10のみ）</span>
        <br>
        <span class="mr-left">Microsoft Edge</span>
        <br>
        <span class="mr-left">Google Chrome（Windows / Mac OS / Android OS / iOS）</span><br>
        <span class="mr-left">FireFox（Windows / Mac OS / Android OS / iOS）</span><br>
        <span class="mr-left">Safari（MacOS/iOS）</span>
    </div>
    <div class="privacy">
        <strong>ブラウザ設定</strong>
        <br>
        <span class="mr-left">JavaScript 有効許可</span>
        <br>
        <span class="mr-left">Cookie 受取許可</span>
    </div>
</div>

@endsection

@section('scripts')
    {{-- script login if u have --}}
    <script type="text/javascript" src="{{ asset('js/library/jquery-ui.min.js') }}"></script>
@endsection
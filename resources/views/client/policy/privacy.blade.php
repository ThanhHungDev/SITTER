
@section('title', 'Site Policy Page')
@section('stylesheets')
    <link rel="stylesheet" href="{{ asset('css/library/jquery-ui.min.css')}}">
@endsection
@extends('_LAYOUT.index')
@section('content')
<div class="wapper-policy">
    <div class="row policy-header">
        <h1>プライバシーポリシー</h1>
    </div>
    <div class="policy-subheader">
        <div class="img-title"></div>
        <p class="title">個人情報保護方針</p>
        <span class="policy-line"></span>
    </div>
    <div class="sitepolicy">
        <ol>
            <li>
                法令・規範の順守
                <br>
                <span>当社は個人情報保護に関して適用される法令、国が定める指針その他の規範を順守し、当社が保有する個人情報の保護に努めます。</span>
            </li>
            <li>
                個人情報の取得、利用、提供
                <br>
                <span>当社は、給食事業、介護施設斡旋事業、卸売事業、通信販売事業などを行う事業者として、個人情報の利用目的を明確に定め、その目的達成のために必要な範囲で、公正かつ適正な手段により適切な個人情報の取得、利用を行います。</span>
                <br>
            </li>
            <li>
                個人情報の管理
                <br>
                <span>当社が保有する個人情報の漏えい、滅失 又は き損等の防止に努め、厳正管理のもとで安全に蓄積、保管します。また、万一の発生時には速やかな是正措置を講じます。</span>
                <br>
            </li>
            <li>
                個人情報の外部委託
                <br>
                <span>個人情報の処理を外部に委託する場合には、漏えいや目的外利用を行わないように契約を義務付け、厳重な管理、指導を行います。</span>
            </li>
            <li>
                個人情報の開示・訂正・利用停止
                <br>
                <span>当社の保有する個人情報について、本人から開示・訂正・利用停止などの要求 および 問い合わせ 又は 苦情 および 相談があった場合には、適正に対応します。</span>
                <br>
            </li>
            <li>
                個人情報に対する社内体制
                <br>
                <span>個人情報保護のために社内体制を整備し継続的な改善を行います。</span>
            </li>

        </ol>

    </div>

    <div class="policy-subheader">
        <div class="img-title"></div>
        <p class="title">個人情報の取扱いについて</p>
        <span class="policy-line"></span>
    </div>
    <div class="privacy">
        <ol>
            <li>
                個人情報の利用目的
                <br>
                <span>株式会社トラストグロース（以下「当社」と言います）は、お客様個人を識別する基本情報として、お客様のお名前・ご住所・お電話番号・ 生年月日・メールアドレスなどの個人情報 および 当社とのお取引状況などの情報を以下の目的で利用いたします。</span>
                <ol class="ol-sub-2">
                    <li>当社および当社関係会社の商品の発送、カタログやＤＭの送付、関連するアフターサービス、 新商品、サービスなどの各種情報を提供させていただくため。</li>
                    <li>当社および当社関係会社の行う事業に関するアンケート調査、その他の関連するお得な情報 を提供させていただくため。</li>
                    <li>当社が適正と定めた企業のカタログやＤＭ、試供品などの送付のため。</li>
                    <li>当社 および 当社関係会社とのお取引に関する与信管理、回収管理、債権管理のため。</li>
                    <li>当社に委託された受注・出荷サービスなどを行うため。</li>
                    <li>お客様からのお問い合わせに対して回答を行うため。</li>
                    <li>上記1〜6以外の利用目的で使用する場合は個別に利用目的をお知らせします。</li>
                </ol>
            </li>
            <li>
                個人情報の提供
                <br>
                <span>当社および当社関係会社がお客様から取得させていただいた個人情報は、下記のいずれかに該当する場合を除き、第三者に提供、開示などをすることはありません。</span>
                <ol class="ol-sub-2">
                    <li>法令などに基づく場合。</li>
                    <li>お客様の事前の承認、同意を得た場合。</li>
                    <li>お客様および第三者の生命、身体、財産など公共の利益またはお客様の利益のため必要であると判断した場合。</li>
                    <li>当社および当社関係会社が合併、分社化、営業譲渡により事業が継承され個人情報を引き継ぐ場合。</li>
                </ol>
            </li>
            <li>
                個人情報の共同利用
                <br>
                <span>当社は、インターネット・電話・ハガキ・ＦＡＸなどでの各種申込みおよびウェブサイト・メールなどで取得した個人情報を当社関係会社と共同で利用させていただきます。</span>
                <ol class="ol-sub-2">
                    <li>共同利用するお客様の個人情報の項目および利用目的は「1.個人情報の利用目的」に準じます。</li>
                    <li>共同利用の範囲は当社関係会社です。</li>
                    <li>共同利用の責任者は当社です。</li>
                </ol>
            </li>
            <li>
                個人情報の委託
                <br>
                <span>
                    当社および当社関係会社がお客様から取得させていただいた個人情報は、個人情報の保護に関する契約を締結している業務委託会社に委託することがあります。
                    お客様に明示した利用目的の達成に必要な範囲で個人情報の取り扱いを委託する場合を除き委託をすることはありません。
                </span>
            </li>
            <li>
                個人情報の開示・訂正・利用停止
                <br>
                <ol class="ol-sub-2">
                    <li>
                        お客様ご本人、またはご本人が認めた代理人のお申し出により、保有しているお客様の個人情報を開示いたします。ただし、下記のいずれかに該当する場合は開示できません。
                        <br>
                        <span>(1)お客様および第三者の権利利益を害するおそれがある時。</span>
                        <br>
                        <span>(2)当社および当社関係会社の業務運営に著しい支障をきたすおそれのある時。</span>
                        <br>
                        <span>(3)他の法令に違反するおそれがある時、など。</span>
                    </li>
                    <li>お客様に開示した個人情報に誤りがあった場合は、速やかに訂正を行ないます。</li>
                    <li>お客様ご本人、またはご本人が認めた代理人より、個人情報の利用停止のお申し出があった場合は、当社および当社関係会社での利用を速やかに中止いたします。</li>
                    <li>お客様からの開示請求にあたり、手数料として別途実費を請求させていただく場合があります。</li>
                    <li>
                        お客様からの開示請求にあたり、ご本人を証明する公的な身分証明書（運転免許証、保険証、パスポート、住民票など）の写しが必要です。
                        <br>
                        <span>※個人情報に関するご相談・開示などの手続きについては、「７．お問い合わせ」までお問い合わせください。</span>
                    </li>
                </ol>
            </li>
            <li>
                その他
                <ol>
                    <li>
                        Cookieについて<br>
                        <span>お客様が本サイトをご利用する過程で、サイト運営のためにお客様の「Cookie情報」を取得する場合があります。</span>
                        <br>
                        <span>
                            「Cookie情報」とは、お客様が当社のウェブサイトを再度訪問されたときなどに、より便利にご利用いただくため
                            （お気に入りリストの情報を保管する機能などを提供）、お客様がご使用のコンピュータを識別するデータのことです。
                        </span>
                        <br>
                        <span>
                            お客様がご使用になるインターネット閲覧ソフト（ブラウザ）の設定を変更することにより、Cookie拒否するように設定することもできますが、
                            その場合当社ウェブサイト、またはウェブサイトにおけるサービスを正常にご利用頂けない場合がございますので、予めご了承ください。
                        </span>
                    </li>
                    <li>
                        Webビーコンについて<br>
                        <span>当社のウェブサイトには、Webビーコン（「クリアGIF」と呼ばれることもあります。）を使用しているページがあります。</span>
                        <br>
                        <span>Webビーコンとは、特定のページに何回のアクセスが行われたかを知るための技術のことです。</span>
                        <br>
                        <span>当社はウェブサイトの利用状況に関する統計をとり、ウェブページをはじめ、製品やサービスをより良いものに改善することを目的としてWebビーコンを使用しています。</span>
                        <br>
                        <span>Webビーコンを用いて取得された情報には、個人を特定するような情報は一切含まれておりません。</span>
                    </li>
                    <li>
                        SSLについて<br>
                        <span>SSLとは、情報を暗号化することで、データの盗聴や改ざんを防止して送受信する機能のことです。</span>
                        <br>
                        <span>当社ウェブサイトでは、会員登録やアンケート回答の際など個人情報が送受信されるページにおいて、SSLによる暗号化通信を使用し、お客様の個人情報が外部の第三者に通信傍受できないよう対策を行っています。</span>
                        <ul class="ul-sub-2">
                            <li>お客様の個人情報はお客様ご自身の意志で提供いただくようお願いいたします。ただし、ご提供いただけない情報がある場合、商品の発送、カタログやDMの送付などのサービスがご利用いただけない場合があります。</li>
                            <li>ご注文、お問い合わせの電話対応品質向上、正確な内容把握のため、お客様との通話を録音させていただく場合があります。</li>
                        </ul>
                    </li>
                    <li>
                        スカウトサービスについて<br>
                        <span>フォームより登録を行うと、スカウトサービスの利用が開始されます。</span>
                    </li>
                </ol>
            </li>
            <li>
                お問い合わせ
                <br>
                <span>お客さまから提供いただいた個人情報に関して、照会・訂正または削除をご希望される場合、および当社のプライバシーポリシーに関するお問い合わせは、下記担当までお願い致します。</span>
            </li>
        </ol>
    </div>
</div>

@endsection

@section('scripts')
    {{-- script login if u have --}}
    <script type="text/javascript" src="{{ asset('js/library/jquery-ui.min.js') }}"></script>
@endsection
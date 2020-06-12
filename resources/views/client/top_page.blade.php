
@section('title', 'Top Page')
@extends('_LAYOUT.index')
@section('content')
<div class="top-page">
    <section class="slider">   
        <div class="slider-left">
            <img class="slider-img" src="{{ asset('image/slider-left.jpg') }}">
            <div class="searchbox">
                <div class="header">
                    <span>ベビーシッターを探そう</span>
                </div>
                <div class="body">
                    <form action="">
                        <div class="input_section">
                            <select class="select_opt" name="" id="">
                                <option value="">日付で探す</option>
                            </select>
                            <select class="select_opt" name="" id="">
                                <option value="">日付で探す</option>
                            </select>
                        </div>
                        <div class="input_section">
                            <select class="select_opt" name="" id="">
                                <option value="">地域を選択</option>
                            </select>
                            <select class="select_opt" name="" id="">
                                <option value="">条件を指定</option>
                            </select>
                            <input type="submit" class="btn-submit" value="探す">
                        </div>
                    </form>
                    <a href="/" class="btn-register">
                        <span>新規登録する</span>
                    </a>
                    <div class="btn-link">
                        <a href="/">ベビーシッターとして働く ></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider-right">
            <img class="slider-img" src="{{ asset('image/slider-right.jpg') }}">
        </div>
    </section>
    <section class="employees">
        <div class="employees_container">
            <div class="title_section">
                <span>ベビーシッターをお願いする</span>
            </div>
            <div class="items">
                @foreach (range(1, 8) as $i)
                    <div class="item">
                        <div class="item_container">
                            <div class="cover">
                                <a href="">
                                    <img class="item-img" src="{{ asset('image/employee.jpg') }}">
                                    <div class="description">
                                        <div class="text">
                                            <span class="name">東京都新宿区</span>
                                            <span class="short_desc">保育歴15年/育児経験有！お子様の...</span>
                                        </div>
                                        <div class="price">
                                            <div class="rate">
                                                ￥1,600
                                            </div>
                                            <div class="unit">
                                                /1時間
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
            <div class="emp_bottom">
                <div class="paging">
                    <div>
                        1｜2｜3｜次へ
                    </div>
                </div>
                <div class="more_items">
                    <a href="">
                        一覧をみる >
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="register_intro">
        <div class="container_info">
            <img class="background-img" src="{{ asset('image/background-image-register.jpg') }}">
            <div class="div-cover">
                <div class="div-child"></div>
                <div class="div-child">
                    <div class="card-container">
                        <div class="title">
                            <span>
                                ベビーシッター依頼
                            </span>
                        </div>
                        <div class="desc">
                            <span>
                                ベビーシッターサービスをご利用いただくには会員登録が必要です。
                            </span>
                        </div>
                        <a class="btn-register orange" href="/" type="button">
                            <span>無料会員登録</span>
                        </a>
                    </div>
                    <div class="card-container">
                        <div class="title">
                            <span>
                                働きたい方
                            </span>
                        </div>
                        <div class="desc">
                            <span>
                                ベビーシッターのお仕事をお探しの方は会員登録をしていただくことでサービスをご利用できます。
                            </span>
                        </div>
                        <a class="btn-register green" href="/" type="button">
                            <span>無料会員登録</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="guide">
        <div class="guide_container">
            <div class="title_section">
                <span>ご利用の流れ</span>
            </div>
            <div class="items">
                    <div class="item">
                        <div class="item_container">
                            <div class="header">
                                <div class="header-left">
                                    STEP <br/> 1
                                </div>
                                <div class="header-right">
                                    ご登録
                                </div>
                            </div>
                            <div class="body-content">
                                <p>
                                    無料会員登録でプロフィールを
                                    ご記入ください。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item_container">
                            <div class="header">
                                <div class="header-left">
                                    STEP <br/> 2
                                </div>
                                <div class="header-right">
                                    シッターを探す
                                </div>
                            </div>
                            <div class="body-content">
                                <p>
                                    気になるシッターが見つかった
                                    ら、自己紹介などを参考にシッ
                                    ターを選びましょう。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item_container">
                            <div class="header">
                                <div class="header-left">
                                    STEP <br/> 3
                                </div>
                                <div class="header-right">
                                    シッター予約
                                </div>
                            </div>
                            <div class="body-content">
                                <p>
                                    条件の合うベビーシッターに、
                                    予約リクエストを送ります。<br/>
                                    予約確定を以って、正式に予約
                                    が成立します。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item_container">
                            <div class="header">
                                <div class="header-left">
                                    STEP <br/> 4
                                </div>
                                <div class="header-right">
                                    お支払い
                                </div>
                            </div>
                            <div class="body-content">
                                <p>
                                    運営よりお支払い詳細のメールが
                                    届きます。<br/>
                                    クレジットカード決済でお支払い
                                    をしてください。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item_container">
                            <div class="header">
                                <div class="header-left">
                                    STEP <br/> 5
                                </div>
                                <div class="header-right">
                                    サポート当日まで
                                </div>
                            </div>
                            <div class="body-content">
                                <p>
                                    サポート実施前に気になる点や
                                    伝えておきたいことがある場合
                                    は事前にメッセージ機能でシッ
                                    ターに確認しておきます。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item_container">
                            <div class="header">
                                <div class="header-left">
                                    STEP <br/> 6
                                </div>
                                <div class="header-right">
                                    お子様お預け
                                </div>
                            </div>
                            <div class="body-content">
                                <p>
                                    当日は安心してお子様をベビー
                                    シッターにお任せしましょう。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item_container">
                            <div class="header">
                                <div class="header-left">
                                    STEP <br/> 7
                                </div>
                                <div class="header-right">
                                    サポート終了
                                </div>
                            </div>
                            <div class="body-content">
                                <p>
                                    サポート完了後、ベビーシッター
                                    より完了報告が届きます。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item_container">
                            <div class="cover">
                                <a href="/" class="draw-circle yellow">
                                    <img class="icon-book" src="{{ asset('image/icons/icon-book.png') }}">
                                    <span>詳しくみる</span>
                                </a>
                                <a href="/" class="draw-circle orange">
                                    <img class="icon-pen" src="{{ asset('image/icons/icon-pen.png') }}">
                                    <span>新規登録</span>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
    </section>
</div>

@endsection

@section('scripts')
    <script type="text/javascript" src="{{ asset('/js/jquery.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/app.min.js') }}"></script>
@endsection
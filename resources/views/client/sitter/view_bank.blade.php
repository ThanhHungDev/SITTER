@section('title', 'Sitter Register Page')
@extends('_LAYOUT.index')

@section('content')
<div class="sitter-common">
    <div class="max-width-780 sitter-register">
        <div class="div-title height-55 back-ground-green">
            <span class="fs-20 span-title">残高</span>
        </div>
        <div class="div-form-group">
            <div class="div-title-form">
                <span class="span-title">給料残額</span>
            </div>
            <div class="div-content-form">
                <div class="input-content">
                    <span>￥ {{ moneyFormat($balance) }}</span><br/>
                    <span>次回の入金は{{ $py_sche }}に行われる予定です。</span>
                </div>
            </div>
        </div>
        <div class="div-title height-55 back-ground-green">
            <span class="fs-20 span-title">ストライプ認証ステータス</span>
        </div>
        <div class="div-form-group">
            <div class="div-title-form">
                <?php 
                    $text = "無効";
                    $class = "fa-ban";
                    if($stripe_acc_stt) { 
                        $text = "認証済み";
                        $class = "fa-check-circle";
                    }
                ?>
                <span class="span-title"><i class="fas {{ $class }}"></i>{{ $text }}</span>
            </div>
        </div>
        <div class="div-title height-55 back-ground-green">
            <span class="fs-20 span-title">登録<a href="{{ route('SITTER_EDIT_BANK') }}"class="bank-edit" ><i class="bank-fa-edit fas fa-edit">編集</i></a></span>
        </div>
        <div class="div-form-group">
            <div class="div-title-form">
                <span class="span-title">口座番号</span>
            </div>
            <div class="div-content-form">
                <div class="input-content">
                    <span>{{ $bankAccount->account_number ?? '' }}</span>
                </div>
            </div>
        </div>

        <div class="div-form-group">
            <div class="div-title-form">
                <span class="span-title">口座名義</span>
            </div>
            <div class="div-content-form">
                <div class="input-content">
                    <span>{{ $bankAccount->account_holder_name ?? '' }}</span>
                </div>
            </div>
        </div>

        <div class="div-form-group">
            <div class="div-title-form">
                <span class="span-title"> 銀行名</span>
            </div>
            <div class="div-content-form">
                <div class="input-content">
                    <span>{{ $bankAccount->bank_name ?? '' }}</span>
                </div>
            </div>
        </div>

        <div class="div-form-group">
            <div class="div-title-form">
                <span class="span-title">支店名</span>
            </div>
            <div class="div-content-form">
                <div class="input-content">
                    <span>{{ $bankAccount->branch_name ?? '' }}</span>
                </div>
            </div>
        </div>
        <!-- <div class="div-title height-55 back-ground-green">
            <span class="fs-20 span-title">最近の入金</span>
        </div>
        <div class="list_withdraw">
            <table class="">
                <thead>
                    <tr>
                        <th>金額</th>
                        <th>銀行口座 / デビットカード</th>
                        <th>説明</th>
                        <th>日付</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div> -->
    </div>
</div>
@endsection
@section('scripts')
    <script type="text/javascript">
        STRIPE_PUBLIC_KEY = "{{ config('app.STRIPE_PUBLIC_KEY') }}";
        API_SITTER_URL = "{{ url('/api/sitter') }}";
    </script>
    <script src="https://js.stripe.com/v3/"></script>
@endsection

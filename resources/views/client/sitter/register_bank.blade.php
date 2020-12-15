@section('title', 'Sitter Register Bank')
@extends('_LAYOUT.index')

@section('stylesheets')
    <link href="{{ asset('css/library/select2.min.css') }}" rel="stylesheet">
@endsection

@section('content')
<div class="sitter-common">
    <div class="max-width-780 sitter-register">
        @include('client.sitter.partials.errors_form')
        <form method="post" action="{{ route('SITTER_POST_REGISTER_BANK') }}" id="bank-account-form">
            {{ csrf_field()}}
            <div class="div-title height-55 back-ground-green">
                <span class="fs-20 span-title">銀行口座を登録する</span>
            </div>
            <button id="stripe_test_bank" type="button">use stripe test bank</button>
            <div class="div-form-group">
                <div class="div-title-form">
                    <span class="span-title">口座番号<span class="color-red">※</span></span>
                </div>
                <div class="div-content-form">
                    <div class="form-row input-content">
                        <div class="col-sm-8 col-12">
                            <div class="form-validate">
                                <input type="text" class="form-control" id="account-number" name="account_number" value="" placeholder="">
                                <div class="form-error">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="div-form-group">
                <div class="div-title-form">
                    <span class="span-title">口座名義 (カタカナ)<span class="color-red">※</span></span>
                </div>
                <div class="div-content-form">
                    <div class="form-row input-content">
                        <div class="col-sm-8 col-12">
                            <div class="form-validate">
                                <input type="text" class="form-control" id="account-holder-name" name="account_holder_name" value="" placeholder="">
                                <div class="form-error">
        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="div-form-group">
                <div class="div-title-form">
                    <span class="span-title"> 銀行名<span class="color-red">※</span></span>
                </div>
                <div class="div-content-form">
                    <div class="form-row input-content">
                        <div class="col-sm-8 col-12">
                            <div class="form-validate">
                                <select class="form-control" id="js-bank-code" name="bank_code">
                                </select>
                                <div class="form-error">
        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="div-form-group">
                <div class="div-title-form">
                    <span class="span-title">支店名<span class="color-red">※</span></span>
                </div>
                <div class="div-content-form">
                    <div class="form-row input-content">
                        <div class="col-sm-8 col-12">
                            <div class="form-validate">
                                <select class="form-control" id="js-branch-code" disabled name="branch_code">
                                </select>
                                <div class="form-error">
        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <input type="hidden" name="routing_number" id="routing-number" />
            <input type="hidden" name="bank_name" id="bank-name" />
            <input type="hidden" name="branch_name" id="branch-name" />
            <input type="hidden" name="token_verify" value="{{ $_REQUEST['token_verify'] }}"/>

            <div class="text-center mt-50 mb-50 ml-1">
                <button type="submit" class="btn btn-default btn-sitter-register">登録する</button>
            </div>
            <div class="outcome">
                <div class="error"></div>
            </div>
        </form>
    </div>
</div>
@endsection
@section('scripts')
    <script type="text/javascript">
        STRIPE_PUBLIC_KEY = "{{ config('app.STRIPE_PUBLIC_KEY') }}";
        API_SITTER_URL = "{{ url('/api/sitter') }}";
    </script>
    <script src="https://js.stripe.com/v3/"></script>
    <script type="text/javascript" src="{{ asset('js/library/select2/select2.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/library/jquery.validate.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/wanakana.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/sitter-register-bank.min.js') }}"></script>
@endsection

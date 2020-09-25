@section('title', 'Payment detail')
@extends('_LAYOUT.index')
@section('content')
<div class="container-card">

    <div class="wapper-card">
        <div class="payment-detail">
            <div class="left-payment">
                <h2>クレジットカード登録</h2>
            </div>
            <div class="right-payment">

            </div>
        </div>
        <div class="form-row">
            <div class="cell  form-collect-card">
                <label class="debitCard" for="card-element">
                    <h2>クレジットカード</h2>
                </label>
                <div class="list-image-card">
                    <img src="{{asset('image/list-card/visa.jpg')}}" alt="" srcset="">
                    <img src="{{asset('image/list-card/master.jpg')}}" alt="" srcset="">
                    <img src="{{asset('image/list-card/diners.jpg')}}" alt="" srcset="">
                    <img src="{{asset('image/list-card/jcb.jpg')}}" alt="" srcset="">
                    <img src="{{asset('image/list-card/ami.jpg')}}" alt="" srcset="">
                </div>
                <form action="{{route('EMPLOYER_POST_COLLECT_CARD')}}" method="post" id="form-collect-card">
                    @csrf
                    <div class="fieldset">
                        <div id="input-card-number" class="field empty"></div>
                        <div id="input-card-expiry" class="field empty third-width"></div>
                        <div id="input-card-cvc" class="field empty third-width"></div>
                        <div id="input-zip" class="field empty third-width"></div>
                    </div>
                    {{-- <span class="message"></span></div> --}}
                    {{-- <div class="error" role="alert">
                        <span class="message"></span>
                    </div> --}}
                    <!-- Used to display form errors -->
                    <div id="card-errors" role="alert"></div>
                    <input type="hidden" value="{{ $token }}" name="user-token">
                    <button type="submit" class="submit" value="Send">登録する</button>
                    
                </form>
                <div class="success"></div>
            </div>
            
        </div>
    </div>
    
@endsection

@section('scripts')
    <script>
        STRIPE_PUBLIC_KEY = "{{config('app.STRIPE_PUBLIC_KEY')}}";
    </script>
    <script src="https://js.stripe.com/v3/"></script>
    <script type="text/javascript" src="{{ asset('/js/stripe_index.min.js') }}"></script>
@endsection
@section('title', 'Comfirm')
@extends('_LAYOUT.index')
@section('content')
<div class="container-comfirm-employer">
    <div class="employer-comfirm wrapper-780">
        <div class="comfirm-title">{{ $title }}</div>
        <div class="content-comfirm">
            <div class="comfirm-text">
                <span>
                    {!! $message !!}
                </span>
            </div>
        </div>
    </div>
</div>
@endsection
@section('scripts')
@endsection

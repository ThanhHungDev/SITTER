
@section('title', 'Top Page')
@section('stylesheets')
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
@endsection
@extends('_LAYOUT.index')
@section('content')
<div class="calendar-page">
    <div class="d-none" id="data">{"2020":{"01":{"07":{"start":"09:00","finish":"14:00","overnight":0,"status":0,"type":",1,2,","class":"old"}},"05":{"31":{"start":"10:00","finish":"21:00","overnight":0,"status":0,"type":",1,","class":"event-over"},"01":{"start":"10:00","finish":"21:00","overnight":0,"status":0,"type":",1,","class":"old"}},"06":{"14":{"start":"10:00","finish":"18:00","overnight":0,"status":0,"type":",1,2,","class":"old"},"15":{"start":"10:00","finish":"16:00","overnight":0,"status":0,"type":",1,","class":"old"}},"07":{"12":{"start":"07:00","finish":"16:00","overnight":0,"status":0,"type":",1,2,","class":"old"},"02":{"start":"09:00","finish":"14:00","overnight":0,"status":0,"type":",1,2,","class":"old"},"05":{"start":"08:00","finish":"20:00","overnight":0,"status":0,"type":",1,2,","class":"old"}}}}</div>
    <input type="hidden" id="js-event-data">
    <div id="draw-calendar"></div>
</div>

@endsection

@section('scripts')
    {{-- script login if u have --}}
    <script src="{{ asset('js/calendar.min.js') }}"></script>
@endsection
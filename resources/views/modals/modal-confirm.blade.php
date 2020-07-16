{{-- modal confirm --}}
<div id="{{ @$modal_id }}" class="modal my-modal-confirm">
    <div class="head-modal">
        {{@$title}}
    </div>
    <div class="body-modal">
        {{@$content}}
    </div>
    <div class="footer-modal">
        <button onclick="{{@$action}}" class="btn btn-accept">はい</button>
        <a  href="#close" rel="modal:close"><button class="btn btn-close">いいえ</button></a>
    </div>
</div>
{{-- end modal confirm --}}
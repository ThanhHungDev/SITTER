
@section('title', 'Sitters Admin')
@extends('admin._LAYOUT.index')

@section('content-admin')
<div class="container-admin-chat">
    <div class="c-header">
        <div class="c-title">
            <h2>検索結果(<span name="total-record">0</span>)</h2>
        </div>
        <div class="c-pagination">
            <span onclick="prevPage()" data-type="prev" data-page="">〈 </span>
            <span onclick="nextPage()" data-type="next" data-page=""> 〉</span>
            <input type="hidden" data-type="current" value="1">
        </div>
    </div>
    <div class="c-body">
        <table class="c-table">
            <thead>
                <tr>
                    <th class="mw-250 td-truncate">シッター名</th>
                    <th class="mw-250 td-truncate">ユーザー名</th>
                    <th class="mw-250 td-truncate">最終送信日時</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    </div>
    <div class="c-footer">
        <div class="c-title">
            <h2></h2>
        </div>
        <div class="c-pagination">
            <span onclick="prevPage()" data-type="prev" data-page="">〈 </span>
            <span onclick="nextPage()" data-type="next" data-page=""> 〉</span>
            <input type="hidden" data-type="current" value="1">
        </div>
    </div>
</div>

{{-- default item --}}
<div class="tr-default" id="tr-default" style="display: none">
    <table>
        <tr>
            <td class="td-truncate" data-type="name-sitter"></td>
            <td class="td-truncate" data-type="name-emp"></td>
            <td class="td-truncate" data-type="last-mess"></td>
            <td class="list-unread" >
                <a href="" data-type="link" ><button class="history-btn">ログ表示<span class="mess-unread" data-type="unread"></span></button></a>
            </td>
            <td>
                <div class="action-public fz-b-15">
                    <input type="checkbox" data-id="" data-type="input-public" class="btn-toggle-public js-public-sitter" >
                    <label onclick="toggleChanel(this)" class="bl-toggle-public" data-id="" for="" data-type="label-public">
                    </label>
                </div>
            </td>
        </tr>
    </table>
    
</div>

<input type="hidden" value="" name="total-record">
{{-- end default item --}}
@endsection

@section('scripts-admin')
    {{-- script login if u have --}}
    <script type="text/javascript" src="{{ asset('js/library/jquery-ui.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/jquery.toast.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/admin_chat.min.js') }}"></script>
@endsection
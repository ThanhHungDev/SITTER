
@section('title', 'Sitters Admin')
@section('stylesheets-admin')
    <link rel="stylesheet" href="{{ asset('css/library/jquery-ui.min.css')}}">
    <link rel="stylesheet" href="{{ asset('css/library/jquery.toast.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/library/slick.css') }}">
    <link rel="stylesheet" href="{{ asset('css/library/slick-theme.css') }}">
    <link rel="stylesheet" href="{{ asset('css/library/rateit.css') }}">
@endsection
@extends('admin._LAYOUT.index')

@section('content-admin')
    @csrf
    <div class="container-review">
        <div class="list-review">
            <table>
                <thead>
                    <tr>
                        <td class="id" width="5%">ID</td>
                        <td class="name_employer" width="20%">利用者</td>
                        {{-- <td class="name_sitter">シッター</td> --}}
                        <td class="rate" width="10%"></td>
                        <td class="comment">コメント</td> 
                        <td class="action_cancel text-center" width="10%">キャンセル</td> 
                    </tr>
                </thead>
                <tbody>
                    {{-- @if($reviews->isEmpty())
                        <p>ありません</p>
                    @endif --}}
                    @foreach ($reviews as $item)
                    <tr>
                        @php
                            $dateCurrent = \Carbon\Carbon::parse($item->created_at)->format('yy/m/d');
                        @endphp
                        <td class="text-center">{{ $item->id }}</td>
                        <td class="text-center">
                            {{ $item->employer_fullname }}
                        </td>
                        <td  class="text-center">
                            <span class="rate rateit" data-rateit-value="{{$item->rate}}"  data-rateit-readonly="true"></span>
                        </td>
                        <td>
                            {{$item->comment}}
                        </td>
                        <td class="text-center"><button class="btn-delete-review " onclick="deleteReview(this)" data-id = "{{ $item->id }}">削除</button></td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        <div class="paging">
            @if ($reviews->hasPages())
                <ul class="pagination">
                    {{-- Previous Page Link --}}
                    <li><a href="{{ $reviews->previousPageUrl() }}" rel="prev">‹</a></li>

                    @if($reviews->currentPage() < 3)
                        @foreach(range(1, $reviews->lastPage()) as $i)
                            @if($i <= 5)
                                <li class='{{ $reviews->currentPage() == $i ? 'active' : '' }}'>
                                    <a href="{{ $reviews->url($i) }}">{{ $i }}</a>
                                </li>
                            @endif  
                        @endforeach
                    @endif
                    @if($reviews->currentPage() >= 3 && ($reviews->currentPage() + 2) < $reviews->lastPage())
                        <li>
                            <a href="{{ $reviews->url($reviews->currentPage()-2) }}">{{ $reviews->currentPage()-2 }}</a>
                        </li>
                        <li>
                            <a href="{{ $reviews->url($reviews->currentPage()-1) }}">
                                {{ $reviews->currentPage()-1 }}
                            </a>
                        </li>
                        <li class="active">
                            <a href="{{ $reviews->url($reviews->currentPage()) }}">
                                {{ $reviews->currentPage() }}
                            </a>
                        </li>
                        <li>
                            <a href="{{ $reviews->url($reviews->currentPage()+1) }}">
                                {{ $reviews->currentPage()+1 }}
                            </a>
                        </li>
                        <li>
                            <a href="{{ $reviews->url($reviews->currentPage()+2) }}">
                                {{ $reviews->currentPage()+2 }}
                            </a>
                        </li>
                    @endif
                    @if($reviews->currentPage() + 2 >= $reviews->lastPage() && $reviews->lastPage()-4 >= 0)
                        @foreach(range($reviews->lastPage()-4, $reviews->lastPage()) as $i)
                            <li class='{{ $reviews->currentPage() == $i ? 'active' : '' }}'><a href="{{ $reviews->url($i) }}">{{ $i }}</a></li>  
                        @endforeach
                    @endif

                    {{-- Next Page Link --}}
                    <li><a href="{{ $reviews->nextPageUrl() }}" rel="next">›</a></li>
                </ul>
            @endif
        </div>
        {{-- modal question cancel  --}}
        <div id="cancel-modal" class="modal cancel-popup">
            <a class="popup-lose" rel="modal:close"></a>
            <div class="title">
                <span>
                    アラート
                </span>
            </div>
            <div class="popup-body">
                <div class="message-content">
                    <span>
                        コメントをキャンセルしますか？
                    </span>
                </div>
            </div>
            <div class="action">
                <button class="action-accept">はい</button>
                <button class="action-cancel">いいえ</button>
            </div>
            <input type="hidden" class="data" name="data">
        </div>
        
    </div>
@endsection


@section('scripts-admin')
    <script>
        var URL_DELETE_REVIEW = "{{route('ADMIN_AJAX_DELETE_REVIEW')}}";
    </script>
    <script type="text/javascript" src="{{ asset('js/library/jquery-ui.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/jquery.toast.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/admin_list_reviews.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/jquery.rateit.min.js') }}"></script>
@endsection
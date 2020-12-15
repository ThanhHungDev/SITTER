
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
    <div class="container-booking">
        <div class="list-booking">
            <table>
                <thead>
                    <tr>
                        <td class="id">ID</td>
                        <td class="name_employer">利用者</td>
                        <td class="name_sitter">シッター</td>
                        <td class="time">勤務日時</td>
                        <td class="action_chat">チャット履歴</td> 
                        <td class="action_cancel">利用者キャンセル</td> 
                        <td class="action_cancel">シッターキャンセル</td> 
                    </tr>
                </thead>
                <tbody>
                    @foreach ($list_booking as $item)
                    <tr>
                        @php
                            $dateCurrent = \Carbon\Carbon::parse($item->work_date)->format('yy/m/d') . ' '. \Carbon\Carbon::parse($item->start)->format('H:i') . '～' . \Carbon\Carbon::parse($item->finish)->format('H:i');
                        @endphp
                        <td>{{ $item->id }}</td>
                        <td>
                            <a href="{{ route('AJAX_INFO_EMPLOYER', ['id'=>$item->employer_id]) }}" class="ajax-info-item" data-item="employer">{{ $item->employer_fullname }}</a>
                        </td>
                        <td>
                            <a href="{{ route('AJAX_INFO_SITTER', ['id'=>$item->sitter_id]) }}" class="ajax-info-item" data-item="sitter">{{ $item->sitter_fullname }}</a>
                        </td>
                        <td>
                            {{ $dateCurrent }} 
                        </td>
                        <td>
                            <a href="{{ route('ADMIN_READ_MESSAGE', ['id'=>$item->sitter_id, 'channel'=>$item->employer_id]) }}">チャットを見る</a>
                        </td>
                        <?php 
                            $url_cancel = false;
                            if ($item->sitter_accept && $item->employer_accept) {
                                $url_cancel = true;
                            }
                        ?>
                        <td>
                            @if ( $item->employer_accept )
                                @if ($url_cancel && \Carbon\Carbon::parse($item->work_date)->add(1, 'day') >= \Carbon\Carbon::today())
                                    <a href="{{ route('AJAX_BOOKING_CANCEL_ADMIN') }}" class="ajax-cancel-item" data-type="{{config('constant.PERSON_CANCEL.EMPLOYER')}}" data-order="{{ $item->order_id }}" data-id="{{ $item->id }}" data-employer-id="{{ $item->employer_id }}" data-sitter-id="{{ $item->sitter_id }}" data-date="{{ $dateCurrent }}">キャンセル実行</a>
                                @else 
                                    <span>キャンセル実行</span>
                                @endif                                
                            @else
                                <span>キャンセル</span>
                            @endif
                            
                        </td>
                        <td>
                            @if ( $item->sitter_accept )
                                @if ($url_cancel && \Carbon\Carbon::parse($item->work_date)->add(1, 'day') >= \Carbon\Carbon::today())
                                <a href="{{ route('AJAX_BOOKING_CANCEL_ADMIN') }}" class="ajax-cancel-item" data-type="{{config('constant.PERSON_CANCEL.SITTER')}}" data-order="{{ $item->order_id }}" data-id="{{ $item->id }}" data-employer-id="{{ $item->employer_id }}" data-sitter-id="{{ $item->sitter_id }}" data-date="{{ $dateCurrent }}">キャンセル実行</a>
                                @else 
                                    <span>キャンセル実行</span>
                                @endif 
                            @else
                                <span>キャンセル</span>
                            @endif
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        <div class="paging">
            @if ($list_booking->hasPages())
                <ul class="pagination">
                    {{-- Previous Page Link --}}
                    <li><a href="{{ $list_booking->previousPageUrl() }}" rel="prev">‹</a></li>

                    @if($list_booking->currentPage() < 3)
                        @foreach(range(1, $list_booking->lastPage()) as $i)
                            @if($i <= 5)
                                <li class='{{ $list_booking->currentPage() == $i ? 'active' : '' }}'>
                                    <a href="{{ $list_booking->url($i) }}">{{ $i }}</a>
                                </li>
                            @endif  
                        @endforeach
                    @endif
                    @if($list_booking->currentPage() >= 3 && ($list_booking->currentPage() + 2) < $list_booking->lastPage())
                        <li>
                            <a href="{{ $list_booking->url($list_booking->currentPage()-2) }}">{{ $list_booking->currentPage()-2 }}</a>
                        </li>
                        <li>
                            <a href="{{ $list_booking->url($list_booking->currentPage()-1) }}">
                                {{ $list_booking->currentPage()-1 }}
                            </a>
                        </li>
                        <li class="active">
                            <a href="{{ $list_booking->url($list_booking->currentPage()) }}">
                                {{ $list_booking->currentPage() }}
                            </a>
                        </li>
                        <li>
                            <a href="{{ $list_booking->url($list_booking->currentPage()+1) }}">
                                {{ $list_booking->currentPage()+1 }}
                            </a>
                        </li>
                        <li>
                            <a href="{{ $list_booking->url($list_booking->currentPage()+2) }}">
                                {{ $list_booking->currentPage()+2 }}
                            </a>
                        </li>
                    @endif
                    @if($list_booking->currentPage() + 2 >= $list_booking->lastPage() && $list_booking->lastPage()-4 >= 0)
                        @foreach(range($list_booking->lastPage()-4, $list_booking->lastPage()) as $i)
                            <li class='{{ $list_booking->currentPage() == $i ? 'active' : '' }}'><a href="{{ $list_booking->url($i) }}">{{ $i }}</a></li>  
                        @endforeach
                    @endif

                    {{-- Next Page Link --}}
                    <li><a href="{{ $list_booking->nextPageUrl() }}" rel="next">›</a></li>
                </ul>
            @endif
        </div>
        {{-- modal info  --}}
        <div id="info-item-modal" class="modal info-item-popup">
            <a class="popup-lose" rel="modal:close"></a>
            <div class="popup-body">
                <div id="info-content"></div>
            </div>
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
                        予約をキャンセルしますか？
                    </span>
                </div>
            </div>
            <div class="action">
                <button class="action-accept">はい</button>
                <button class="action-cancel">いいえ</button>
            </div>
        </div>
        <input type="hidden" class="url" name="url">
        <input type="hidden" class="data" name="data">
    </div>
@endsection


@section('scripts-admin')
    <script type="text/javascript" src="{{ asset('js/library/jquery-ui.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/jquery.toast.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/admin_list_booking.min.js') }}"></script>

    <script type="text/javascript" src="{{ asset('/js/calendar.min.js') }}"></script>
@endsection
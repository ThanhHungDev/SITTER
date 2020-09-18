@isset($list_items)
    @if(count($list_items) > 0)
        <div class="list-booking">
            <table>
                <thead>
                    <tr>
                        <td class="id">ID</td>
                        <td class="name">シッター</td>
                        <td class="time">勤務日時</td>
                        <td class="action">チャット履歴</td>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($list_items as $item)
                        @php
                            $currentDate = \Carbon\Carbon::parse($item->work_date)->add(1, 'day');
                            $dateNow = \Carbon\Carbon::now();
                            $urlChat = '';
                            if ($currentDate >= $dateNow) {
                                $urlChat = Route('EMPLOYER_CHAT', ['id'=> $item->sitter_id]);
                            }
                        @endphp
                        <tr>
                            <td>{{ $item->id }}</td>
                            <td>
                                <a href="{{ Route('VIEW_SITTER', $item->sitter_id) }}">{{ $item->first_name . $item->last_name }}</a>
                            </td>
                            <td>
                                {{ \Carbon\Carbon::parse($item->work_date)->format('yy/m/d') . ' '. \Carbon\Carbon::parse($item->start)->format('H:i') . '～' . \Carbon\Carbon::parse($item->finish)->format('H:i') }} 
                            </td>
                            <td>
                                @if ($urlChat != '')
                                    <a href="{{ $urlChat }}">チャットを見る</a>
                                @endif
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        <div class="paging">
            @if ($list_items->hasPages())
                <ul class="pagination">
                    {{-- Previous Page Link --}}
                    <li><a href="{{ $list_items->previousPageUrl() }}" rel="prev">‹</a></li>

                    @if($list_items->currentPage() < 3)
                        @foreach(range(1, $list_items->lastPage()) as $i)
                            @if($i <= 5)
                                <li class='{{ $list_items->currentPage() == $i ? 'active' : '' }}'>
                                    <a href="{{ $list_items->url($i) }}">{{ $i }}</a>
                                </li>
                            @endif  
                        @endforeach
                    @endif
                    @if($list_items->currentPage() >= 3 && ($list_items->currentPage() + 2) < $list_items->lastPage())
                        <li>
                            <a href="{{ $list_items->url($list_items->currentPage()-2) }}">{{ $list_items->currentPage()-2 }}</a>
                        </li>
                        <li>
                            <a href="{{ $list_items->url($list_items->currentPage()-1) }}">
                                {{ $list_items->currentPage()-1 }}
                            </a>
                        </li>
                        <li class="active">
                            <a href="{{ $list_items->url($list_items->currentPage()) }}">
                                {{ $list_items->currentPage() }}
                            </a>
                        </li>
                        <li>
                            <a href="{{ $list_items->url($list_items->currentPage()+1) }}">
                                {{ $list_items->currentPage()+1 }}
                            </a>
                        </li>
                        <li>
                            <a href="{{ $list_items->url($list_items->currentPage()+2) }}">
                                {{ $list_items->currentPage()+2 }}
                            </a>
                        </li>
                    @endif
                    @if($list_items->currentPage() + 2 >= $list_items->lastPage() && $list_items->lastPage()-4 >= 0)
                        @foreach(range($list_items->lastPage()-4, $list_items->lastPage()) as $i)
                            <li class='{{ $list_items->currentPage() == $i ? 'active' : '' }}'><a href="{{ $list_items->url($i) }}">{{ $i }}</a></li>  
                        @endforeach
                    @endif

                    {{-- Next Page Link --}}
                    <li><a href="{{ $list_items->nextPageUrl() }}" rel="next">›</a></li>
                </ul>
            @endif
        </div>
    @endif
@endisset
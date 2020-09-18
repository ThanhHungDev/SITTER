<label class="fs-20">予約一覧</label>
<table class="">
    <thead>
        <tr>
            <th>ID</th>
            <th>利用者</th>
            <th>勤務日時</th>
            <th>チャット履歴</th>
        </tr>
    </thead>
    <tbody>
    @if($data->isEmpty())
        <tr><td colspan="4">ありません</td></tr>
    @endif
    @foreach($data as $value)
        @foreach ($value['dateBookings'] as $k => $v)
            <tr>
                @if($k == 0)
                    <td class="tb-td-w-stt" rowspan="{{count($value['dateBookings'])}}">{{$value['id']}}</td>
                    <td class="tb-td-w-40" rowspan="{{count($value['dateBookings'])}}"><a href="{{route('VIEW_EMPLOYER', ['id' => $value['employer_id']])}}" target="_blank">{{$value['employer_name']}}</a></td>
                    <td class="tb-td-w-40">{{formatDate($v['work_date']).' '.formatTime($v['start']).'～'.formatTime($v['finish'])}}</td>
                    <td class="tb-td-w-15" rowspan="{{count($value['dateBookings'])}}"><a href="{{route('SITTER_CHAT', ['id' => $value['employer_id']])}}">チャットを見る</a></td>
                @else
                    <td class="tb-td-w-40">{{formatDate($v['work_date']).' '.formatTime($v['start']).'～'.formatTime($v['finish'])}}</td>
                @endif
            </tr>
        @endforeach
    @endforeach
    </tbody>
</table>
<div class="pagination-list-booking">
    {{ $data->links() }}
</div>

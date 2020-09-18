<div class="">
    @if($reviews->isEmpty())
        <p>ありません</p>
    @endif
    @foreach ($reviews as $item)
        <div class="item-review">
            <div class="avatar">
                <img src="{{asset($item->avatar)}}" alt="avatar">
            </div>
            <div class="rate-start">
                <span class="rate rateit" data-rateit-value="{{$item->rate}}"  data-rateit-readonly="true"></span>
                <span class="date-rate">{{ date('Y年m月d日',strtotime($item->created_at))}}</span>
            </div>
            <div class="rate-content rate-limit">
                {{$item->comment}}
            </div>
            <div class="rate-viewmore">
                <span>続きを見る</span>
            </div>
        </div>
    @endforeach
    
</div>
<div class="pagination-review">
    {{ $reviews->links() }}
</div>
<link href="{{ asset('css/library/rateit.css') }}" rel="stylesheet">
<script type="text/javascript" src="{{ asset('js/library/jquery.rateit.min.js') }}"></script>

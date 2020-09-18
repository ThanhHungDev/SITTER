@isset($list_items)
    @if(count($list_items) > 0)
        <h3 class="title_section">
            お手伝いをお願いする
        </h3>
        <div class="emp_bottom sp">
            <div class="paging">
                {{ $list_items->links() }}
            </div>
            <div class="more_items">
                <a href="{{route('search-sitters')}}">
                    ベビーシッター一覧をみる>
                </a>
            </div>
        </div>
        <div class="items" >
            @foreach($list_items as $value)
                <div class="item">
                    <div class="item_container">
                        <div class="cover">
                            <a href="{{ route('VIEW_SITTER', ['id'=>$value->id]) }}">
                                @if($value->avatar != '')
                                    <img alt="sitter" class="item-img" src="{{ asset($value->avatar) }}"/>
                                @else
                                    <img alt="sitter" class="item-img" src="{{ asset('image').'/'. ($value->gender == config('constant.GENDER.MALE') ? 'df_male.jpg' : 'df_female.jpg' )}}" />
                                @endif
                                <div class="description">
                                    <div class="text">
                                        <span class="name">{{$value->first_name}}&nbsp;{{$value->last_name}}</span>
                                        <span class="short_desc">{{$value->self_introduce}}</span>
                                    </div>
                                    <div class="price">
                                        <div class="rate">
                                            ￥{{number_format($value->salary, 0)}}
                                        </div>
                                        <div class="unit">
                                            / 1時間
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
        <div class="emp_bottom">
            <div class="paging">
                {{ $list_items->links() }}
            </div>
            <div class="more_items">
                <a href="{{route('search-sitters')}}">
                    ベビーシッター一覧をみる>
                </a>
            </div>
        </div>
    @endif
@endisset


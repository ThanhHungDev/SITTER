@section('title', 'Sitter Register Page')
@extends('_LAYOUT.index')
@section('content')
<div class="sitter-common">
    <div class="max-width-780 sitter-after-register">
        @include('client.sitter.partials.errors_form')
        <form action="{{ Route('POST_INFO_INQUIRY') }}" method="POST" class="form-info-inquiry">
            {{ csrf_field()}}
            <div id="step1">
                <div class="div-title height-55 back-ground-green">
                    <span class="fs-20 span-title">依頼内容</span>
                </div>
                <div class="div-form-group">
                    <div class="div-title-form">
                        <span class="span-title">就業希望曜⽇</span>
                    </div>
                    <div class="sitter-upload-info plr-23">
                        <div class="form-validate">
                            <div class="form-row">
                                <div class="cell">
                                    <label class="checkbox">
                                        不問
                                        <input type="checkbox" class="experience-check" value="不問" name="date_working[]" >
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div class="cell">
                                    <label class="checkbox">
                                        ⽉曜⽇
                                        <input type="checkbox" class="experience-check" value="⽉曜⽇" name="date_working[]" >
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div class="cell">
                                    <label class="checkbox">
                                        ⽕曜⽇
                                        <input type="checkbox" class="experience-check" value="⽕曜⽇" name="date_working[]" >
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div class="cell">
                                    <label class="checkbox">
                                        ⽔曜⽇
                                        <input type="checkbox" class="experience-check" value="⽔曜⽇" name="date_working[]" >
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div class="cell">
                                    <label class="checkbox">
                                        ⽊曜⽇
                                        <input type="checkbox" class="experience-check" value="⽊曜⽇" name="date_working[]" >
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div class="cell">
                                    <label class="checkbox">
                                        ⾦曜⽇
                                        <input type="checkbox" class="experience-check" value="⾦曜⽇" name="date_working[]" >
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div class="cell">
                                    <label class="checkbox">
                                        ⼟曜⽇
                                        <input type="checkbox" class="experience-check" value="⼟曜⽇" name="date_working[]" >
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div class="cell">
                                    <label class="checkbox">
                                        ⽇曜⽇
                                        <input type="checkbox" class="experience-check" value="⽇曜⽇" name="date_working[]" >
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div class="cell">
                                    <label class="checkbox">
                                        祝⽇
                                        <input type="checkbox" class="experience-check" value="祝⽇" name="date_working[]" >
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            {{-- <div class="form-error">
                                @error('xxxxxxxx')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div> --}}
                        </div>
                    </div>
                </div>
                <div class="div-form-group">
                    <div class="div-title-form">
                        <span class="span-title">就業⽇数</span>
                    </div>
                    <div class="sitter-upload-info plr-23">
                        <div class="form-validate">
                            <div class="form-row input-content">
                                <label class="inputlbl" style="display: flex;align-items:center;padding-left:10px;"><span>週</span></label>
                                <div class="col-sm-2 col-3 select-blue">
                                    <select class="form-control" name="numofweek">
                                        <option value=""></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                                <label class="inputlbl" style="display: flex;align-items:center">&nbsp;~&nbsp;</label>
                                <div class="col-sm-2 col-3 select-blue">
                                    <select class="form-control" name="numofday">
                                        <option value=""></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                    </select>
                                </div>
                                <label class="inputlbl" style="display: flex;align-items:center">⽇</label>
                            </div>
                            {{-- <div class="form-error">
                                @error('xxxxxxxxxx')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div> --}}
                        </div>
                    </div>
                </div>
                <div class="div-form-group">
                    <div class="div-title-form">
                        <span class="span-title">サポートの項目 {{--<span class="color-red">※</span>--}}</span>
                    </div>
                    <div class="sitter-upload-info plr-23">
                        <div class="form-validate">
                            <div class="form-row">
                                @foreach($skills as $skill)
                                    <div class="cell">
                                        <label class="checkbox">
                                            {{$skill->name}}
                                            <input type="checkbox" value={{$skill->name}} name="skills[]">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                @endforeach
                            </div>
                            {{-- <div class="form-error">
                                @error('xxxxxxxxxxxx')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div> --}}
                        </div>
                    </div>
                </div>
                <div class="div-form-group">
                    <div class="div-title-form">
                        <span class="span-title">その他ご希望などがありました、ご⼊⼒ください</span>
                    </div>
                    <div class="sitter-upload-info plr-23">
                        <div class="form-validate">
                            <div class="form-row">
                                <textarea name="other_require" rows="5" class="form-control" style="height: auto" placeholder=""></textarea>
                            </div>
                            {{-- <div class="form-error">
                                @error('xxxxxxxx')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div> --}}
                        </div>
                    </div>
                </div>
                <div class="text-right mt-50 mb-50">
                    <button id="inquiry-next-step" type="button" class="btn btn-default btn-sitter-register">次へ</button>
                </div>
            </div>

            <div id="step2">
                <div class="div-title height-55 back-ground-green">
                    <span class="fs-20 span-title">ご利⽤者様情報</span>
                </div>
                <div class="div-form-group">
                    <div class="div-title-form">
                        <span class="span-title">⽒名</span>
                    </div>
                    <div class="div-content-form">
                        <div class="form-row input-content form-validate">
                            <div class="col-sm-6 col-9">
                                <input type="text" name="info_name" class="form-control" placeholder="">
                                {{-- <div class="form-error">
                                    @error('contact_relationship')
                                        <label class="error">{{ $message }}</label>
                                    @enderror
                                </div> --}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="div-form-group">
                    <div class="div-title-form">
                        <span class="span-title">お所</span>
                    </div>
                    <div class="sitter-upload-info plr-23">
                        <div class="form-validate">
                            <div class="form-row input-content">
                                <div class="col-sm-2 col-3 select-blue">
                                    @php
                                    $prefs = config("location.japan.pref");
                                    @endphp
                                    <select class="form-control" name="info_addr1">
                                        <option value=""></option>
                                        @foreach ($prefs as $item)
                                            <option value="{{ $item }}" {{ $item == old('pref') ? 'selected' : '' }}>{{ $item }}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="col-sm-2 col-3">
                                    <input type="text" name="info_addr2" class="form-control" placeholder="">
                                </div>
                            </div>
                            {{-- <div class="form-error">
                                @error('experiences')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div> --}}
                        </div>
                    </div>
                </div>
                <div class="div-form-group">
                    <div class="div-title-form">
                        <span class="span-title">お⼦さんの情報</span>
                    </div>
                    <div class="sitter-upload-info plr-23">
                        <div class="form-validate">
                            <div class="form-row input-content">
                                <label class="inputlbl" style="display: flex;align-items:center"><span>お子様</span></label>
                                <div class="col-sm-2 col-3 select-blue">
                                    <select name="info_child_number" class="form-control">
                                        @for($i = 1; $i <= 10; $i++)
                                            <option value="{{$i}}">{{$i}} 人</option>
                                        @endfor
                                    </select>
                                </div>
                            </div>
                            <div class="list-childs">
                                <div class="form-row input-content"  style="margin-top: 10px">
                                    <div style="width: 42px"></div>
                                    <div class="col-sm-2 col-3">
                                        <input type="text" name="child_info_opt1_0" class="form-control" placeholder="">
                                    </div>
                                    <div class="col-sm-2 col-3">
                                        <input type="text" name="child_info_opt2_0" class="form-control" placeholder="">
                                    </div>
                                    <div class="input-label" style="display: flex;align-items:center">
                                        <span class="number_child">1</span>人目のお子様
                                    </div>
                                </div>
                            </div>
                            <div class="childs-hidden" style="display: none;">
                                <div class="form-row input-content"  style="margin-top: 10px">
                                    <div style="width: 42px"></div>
                                    <div class="col-sm-2 col-3">
                                        <input type="text" id="child_info_opt1" class="form-control" placeholder="">

                                    </div>
                                    <div class="col-sm-2 col-3">
                                        <input type="text" id="child_info_opt2" class="form-control" placeholder="">
                                    </div>
                                    <div class="input-label" style="display: flex;align-items:center">
                                        <span class="number_child">0</span>人目のお子様
                                    </div>
                                </div>
                            </div>
                            {{-- <div class="form-error">
                                @error('experiences')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div> --}}
                        </div>
                    </div>
                </div>
                <div class="div-form-group">
                    <div class="div-title-form">
                        <span class="span-title">TEL</span>
                    </div>
                    <div class="div-content-form">
                        <div class="form-row input-content form-validate">
                            <div class="col-sm-6 col-9">
                                <input type="text" name="info_tel" class="form-control" placeholder="">
                                {{-- <div class="form-error">
                                    @error('contact_relationship')
                                        <label class="error">{{ $message }}</label>
                                    @enderror
                                </div> --}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="div-form-group">
                    <div class="div-title-form">
                        <span class="span-title">メール<span class="text-danger" style="color: red">※</span></span>
                    </div>
                    <div class="div-content-form">
                        <div class="form-row input-content form-validate">
                            <div class="col-sm-6 col-9">
                                <input type="text" name="info_mail" class="form-control" placeholder="">
                                <div class="form-error">
                                    {{-- @error('contact_relationship')
                                        <label class="error">{{ $message }}</label>
                                    @enderror --}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="div-form-group">
                    <div class="div-title-form">
                        <span class="span-title">希望時期</span>
                    </div>
                    <div class="sitter-upload-info plr-23">
                        <div class="form-validate">
                            <div class="form-row">
                                <div class="cell">
                                    <input type="radio" name="info_expect_time" value="即⽇" checked> <label class="fw-normal" for="">即⽇</label>
                                </div>
                                <div class="cell">
                                    <input type="radio" name="info_expect_time" value="1カ⽉後"> <label class="fw-normal" for="">1カ⽉後</label>
                                </div>

                            </div>
                            <div class="form-row">
                                <div class="cell">
                                    <input type="radio" name="info_expect_time" value="その他"> <label class="fw-normal" for="">その他</label>
                                </div>
                            </div>
                            <div class="form-row">
                                <textarea name="info_expect_time_note" rows="5" class="form-control" style="height: auto" placeholder=""></textarea>
                            </div>
                            {{-- <div class="form-error">
                                @error('experiences')
                                    <label class="error">{{ $message }}</label>
                                @enderror
                            </div> --}}
                        </div>
                    </div>
                </div>
                <div class="text-right mt-50 mb-50">
                    <button id="inquiry-prev-step" type="button" class="btn btn-default btn-sitter-register" style="background-color: lightgray">バック</button>
                    <button type="submit" class="btn btn-default btn-sitter-register">依頼する</button>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection
@section('scripts')
    <script type="text/javascript" src="{{ asset('js/library/jquery.validate.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/contact.min.js') }}"></script>
    <script>
        $(function() {
            // FOR CHANGE STEP 1 AND STEP 2
            $( "#step2" ).hide();
            $( "#inquiry-next-step" ).click(function() {
                $( "#step1" ).hide();
                $( "#step2" ).show();
            });
            $( "#inquiry-prev-step" ).click(function() {
                $( "#step1" ).show();
                $( "#step2" ).hide();
            });

            $('select[name="info_child_number"]').change(function () {
                let html = '';
                let numberChildSelected = $(this).val();
                $('.number_child').text(numberChildSelected);
                if(numberChildSelected != ''){
                    $('.list-childs').html('');
                    let numBox = parseInt(numberChildSelected);

                    for (let index = 0; index < numBox; index++) {
                        $('.childs-hidden').find('.number_child').text(index + 1);
                        $('.childs-hidden').find('#child_info_opt1').attr('name', 'child_info_opt1_' + index);
                        $('.childs-hidden').find('#child_info_opt2').attr('name', 'child_info_opt2_' + index);

                        let itemHtmlChild = '';
                        itemHtmlChild = $('.childs-hidden').html();

                        $('.list-childs').append(itemHtmlChild);

                        $('.childs-hidden').find('#child_info_opt1').removeAttr('name');
                        $('.childs-hidden').find('#child_info_opt2').removeAttr('name');
                      }
                }
            });

            $('[name="info_expect_time_note"]').prop('disabled', true);
            $('[name="info_expect_time_note"]').css('background-color', 'rgb(229,229,229)');
            $('[name="info_expect_time"]').change(function () {
                let optVal = $(this).val();
                if(optVal == 'その他'){
                    $('[name="info_expect_time_note"]').prop('disabled', false);
                    $('[name="info_expect_time_note"]').css('background-color', 'white');
                }else{
                    $('[name="info_expect_time_note"]').prop('disabled', true);
                    $('[name="info_expect_time_note"]').css('background-color', 'rgb(229,229,229)');
                }
            });
        });
    </script>
@endsection

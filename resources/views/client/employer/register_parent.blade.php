
@section('title', 'Register Parent Page')
@extends('_LAYOUT.index')
@section('content')
<div class="wapper-parent">
    <div class="head">
        <h3>ベビーシッター応募フォーム</h3>
    </div>
    <div class="note">
        <p>
          <span class="text-danger">※</span>は必須項目です
        </p>
    </div>
    <div class="wapper-form">
        <form class="register_parent_form" action="{{route('EMPLOYER_POST_REGISTER_PARENT')}}" method="post" enctype="multipart/form-data">
            @csrf
            @if($errors->any())
                <div class="alert alert-danger mt-md-3">
                    <span class="d-fex justify-content-center">
                        <i class="fas fa-exclamation-triangle"></i> Errors!
                    </span>
                
                </div>
            @endif
            <div class="bg-form">
                <div class="input-group">
                    <div class="input-label">
                        本人確認書類のアップロード<span class="text-danger">※</span>
                    </div>
                    <div class="explain-content">
                        <p>ご提出いただいた書類は運営にて住所確認のため審査時のみに確認し、外部・及びシッターに開示されることはありませんのでご安心ください。</p>
                        <p>※以下より、お名前、住所、生年月日がご入力いただいた内容と一致するものをどれか1つ選択</p>
                    </div>
                    <div class="input-content">

                        <!-- type certificate -->
                        <div class="input-sub-content form-validate">
                            <label   for="">本人確認書類を選択</label>
                            <br>
                            <select class="type_certificate" name="type_upload">
                                <option value="">選択してください</option>
                                {{@old('type_upload')}};
                                @foreach ($TYPE_UPLOAD as $key => $value)
                                    <option @if(old('type_upload') == $value) selected @endif value="{{$value}}">{{$key}}</option>
                                @endforeach
                            </select>
                            @if($errors->has('type_upload'))
                                <br>
                                <div class="text-errors">{{ $errors->first('type_upload') }}</div>
                            @endif
                            <div class="form-error"></div>
                        </div>
                        <!-- end certificate -->
                        <!-- image certificate -->
                        <div class="input-sub-content">
                            <label for="">選択した書類をアップロード</label>

                            <p class="validate-image text-danger"></p>
                            <div class="upload-file" data-name= "input_file_front">
                                <span>表面を追加</span>
                            </div>
                            <div class="form-validate">
                                <input value="{{old('input_file_front')}}" data-type="upload" type="file" accept=""  name="input_file_front" >
                                <div class="form-error"></div>
                            </div>
                            
                            @if($errors->has('input_file_front'))
                                <div class="text-errors">{{ $errors->first('input_file_front') }}</div>
                            @endif

                            <div class="upload-file" data-name= "input_file_back">
                                <span>表面を追加</span>
                            </div>
                            @if($errors->has('input_file_back'))
                                <div class="text-errors">{{ $errors->first('input_file_back') }}</div>
                            @endif
                            <div class="form-validate">
                                <input value="{{old('input_file_back')}}" data-type="upload" type="file" accept=""  name="input_file_back" >
                                <div class="form-error"></div>
                            </div>
                            
                        </div>
                        <!-- end image certificate -->
                    </div>
                </div>
                <div class="input-group">
                    <div class="input-label">
                        家族構成<span class="text-danger">※</span>
                    </div>
                    <div class="input-content">
                        <!-- father -->

                        <div class="input-sub-content">
                            <!-- name -->
                            <label class="fw-600" for="">夫のお名前</label>
                            <div class="input-db-content">
                                <div class="form-validate">
                                    <input placeholder="姓" value="{{old('first_name_fa')}}" type="text" name="first_name_fa" >
                                    <div class="form-error"></div>
                                </div>
                                <div class="form-validate">
                                    <input placeholder="名" value="{{old('last_name_fa')}}" type="text" name="last_name_fa" >
                                    <div class="form-error"></div>
                                </div>
                            </div>
                            <!-- error name -->
                            <div class="input-db-content">
                                @if($errors->has('first_name_fa'))
                                    <div class="text-errors">{{ $errors->first('first_name_fa') }}</div>
                                @endif
                                @if($errors->has('last_name_fa'))
                                    <div class="text-errors">{{ $errors->first('last_name_fa') }}</div>
                                @endif
                            </div>
                        </div>

                        <div class="input-sub-content">
                            <!-- name kata -->
                            <label class="fw-600" for="">フリガナ</label>
                            <div class="input-db-content">
                                <div class="form-validate">
                                    <input placeholder="セイ" value="{{old('first_name_furigana_fa')}}" type="text" name="first_name_furigana_fa" >
                                    <div class="form-error"></div>
                                </div>
                                <div class="form-validate">
                                    <input placeholder="メイ" value="{{old('last_name_furigana_fa')}}" type="text" name="last_name_furigana_fa" >
                                    <div class="form-error"></div>
                                </div>
                            </div>
                            <!-- error name kata -->
                            <div class="input-db-content">
                                @if($errors->has('first_name_furigana_fa'))
                                    <div class="text-errors">{{ $errors->first('first_name_furigana_fa') }}</div>
                                @endif
                                @if($errors->has('last_name_furigana_fa'))
                                    <div class="text-errors">{{ $errors->first('last_name_furigana_fa') }}</div>
                                @endif
                            </div>
                        </div>

                        <div class="input-sub-content form-validate">
                            <!-- birthday -->
                            <label for="">生年月日</label>
                            <div class="input-date-content">
                                <select name="y_birth_fa"  class="year_select">
                                    <option value=""></option>
                                    {{ $ylast= date('Y')-90 }}
                                    {{ $ynow = date('Y') }}

                                    @for ($i = $ynow; $i >= $ylast; $i--)
                                        <option @if(old('y_birth_fa') == $i) selected @endif value="{{ $i }}">{{ $i }}</option>
                                    @endfor
                                </select>
                                <span>年</span>
                                <select name="m_birth_fa"  class="month_select">
                                    <option value=""></option>
                                    @for ($i = 1; $i <= 12; $i++)
                                        <option @if(old('m_birth_fa') == $i) selected @endif value="{{ $i }}">{{ $i }}</option>
                                    @endfor
                                </select>
                                <span>月</span>
                                <select name="d_birth_fa"  class="day_select">
                                    <option value=""></option>
                                    @for ($i = 1; $i <= 31; $i++)
                                        <option @if(old('d_birth_fa') == $i) selected @endif value="{{ $i }}">{{ $i }}</option>
                                    @endfor
                                </select>
                                <span>日</span>
                            </div>
                            <!-- error birthday -->
                            <div class="form-error"></div>
                            <div class="input-db-content">
                                @if($errors->has('y_birth_fa'))
                                    <div class="text-errors">{{ $errors->first('y_birth_fa') }}</div>
                                @endif
                                @if($errors->has('m_birth_fa'))
                                    <div class="text-errors">{{ $errors->first('m_birth_fa') }}</div>
                                @endif
                                @if($errors->has('d_birth_fa'))
                                    <div class="text-errors">{{ $errors->first('d_birth_fa') }}</div>
                                @endif
                            </div>
                        </div>

                        <!-- end father -->

                        <!-- mother -->
                        <div class="input-sub-content ">
                            <!-- name -->
                            <label for="">妻のお名前</label>
                            <div class="input-db-content">
                                <div class="form-validate">
                                    <input placeholder="姓" value="{{old('first_name_mom')}}" type="text" name="first_name_mom" >
                                    <div class="form-error"></div>
                                </div>
                                <div class="form-validate">
                                    <input placeholder="名" value="{{old('last_name_mom')}}" type="text" name="last_name_mom" >
                                    <div class="form-error"></div>
                                </div>
                            </div>
                            <!-- error name -->
                            <div class="input-db-content">
                                @if($errors->has('first_name_mom'))
                                    <div class="text-errors">{{ $errors->first('first_name_mom') }}</div>
                                @endif
                                @if($errors->has('last_name_mom'))
                                    <div class="text-errors">{{ $errors->first('last_name_mom') }}</div>
                                @endif
                            </div>
                        </div>

                        <div class="input-sub-content">
                            <!-- name kata -->
                            <label class="fw-600" for="">フリガナ</label>
                            <div class="input-db-content">
                                <div class="form-validate">
                                    <input placeholder="セイ" value="{{old('first_name_furigana_mom')}}" type="text" name="first_name_furigana_mom" >
                                    <div class="form-error"></div>
                                </div>
                                <div class="form-validate">
                                    <input placeholder="メイ" value="{{old('last_name_furigana_mom')}}" type="text" name="last_name_furigana_mom" >
                                    <div class="form-error"></div>
                                </div>
                            </div>
                            <!-- error name kata -->
                            <div class="input-db-content">
                                @if($errors->has('first_name_furigana_mom'))
                                    <div class="text-errors">{{ $errors->first('first_name_furigana_mom') }}</div>
                                @endif
                                @if($errors->has('last_name_furigana_mom'))
                                    <div class="text-errors">{{ $errors->first('last_name_furigana_mom') }}</div>
                                @endif
                            </div>
                        </div>

                        <div class="input-sub-content form-validate">
                            <!-- birthday -->
                            <label class="fw-600" for="">生年月日</label>
                            <div class="input-date-content">
                                <select name="y_birth_mom"  class="year_select">
                                    <option value=""></option>
                                    {{ $last= date('Y')-90 }}
                                    {{ $now = date('Y') }}

                                    @for ($i = $now; $i >= $last; $i--)
                                        <option @if(old('y_birth_mom') == $i) selected @endif value="{{ $i }}">{{ $i }}</option>
                                    @endfor
                                </select>
                                <span>年</span>
                                <select name="m_birth_mom"  class="month_select">
                                    <option value=""></option>
                                    @for ($i = 1; $i <= 12; $i++)
                                        <option @if(old('m_birth_mom') == $i) selected @endif value="{{ $i }}">{{ $i }}</option>
                                    @endfor
                                </select>
                                <span>月</span>
                                <select name="d_birth_mom"  class="day_select">
                                    <option value=""></option>
                                    @for ($i = 1; $i <= 31; $i++)
                                        <option @if(old('d_birth_mom') == $i) selected @endif value="{{ $i }}">{{ $i }}</option>
                                    @endfor
                                </select>
                                <span>日</span>
                            </div>
                            <!-- error birthday -->
                            <div class="form-error"></div>
                            @if($errors->has('y_birth_mom'))
                                <div class="text-errors">{{ $errors->first('y_birth_mom') }}</div>
                            @endif
                            @if($errors->has('m_birth_mom'))
                                <div class="text-errors">{{ $errors->first('m_birth_mom') }}</div>
                            @endif
                            @if($errors->has('d_birth_mom'))
                                <div class="text-errors">{{ $errors->first('d_birth_mom') }}</div>
                            @endif
                        </div>

                        <!-- number child -->
                        <div class="input-sub-content">
                            <label class="fw-600" for="">お子様</label>
                            <div class="input-db-content">
                                <select name="child_number"
                                class="select_person">
                                    @for($i = 1; $i <= 10; $i++)
                                        <option @if(old('child_number') == $i) selected @endif value="{{$i}}">{{$i}} 人</option>
                                    @endfor
                                </select>
                            </div>
                        </div>
                        <!-- end number child -->
                        <!-- end mother -->
                    </div>
                </div>
                
                <!-- childs info -->
                <div class="list-childs">
                    @if(!empty(old('child_number')))
                    <?php 
                        $child_number = old('child_number');
                    ?>
                        @for($i = 1; $i <= $child_number; $i++)
                            <div class="input-group child-item">

                                <div class="input-label">
                                    <span class="number_child">{{$i}}</span>人目のお子様<span class="text-danger">※</span>
                                </div>

                                <div class="input-content">
                                    <!-- name -->
                                    <div class="input-sub-content">
                                        <label for="">お子様のお名前</label>
                                        <div class="input-db-content">
                                            <div class="form-validate">
                                                <input placeholder="姓" value="{{ old('first_name_child_'.($i-1)) }}" type="text" name='first_name_child_{{($i-1)}}'>
                                                <div class="form-error"></div>
                                            </div>
                                            <div class="form-validate">
                                                <input placeholder="名" value="{{ old('last_name_child_'.($i-1)) }}" type="text" name="last_name_child_{{($i-1)}}"  >
                                                <div class="form-error"></div>
                                            </div>
                                        </div>

                                        <div class="input-db-content">
                                            @if($errors->has('first_name_child_'.($i-1)))
                                                <div class="text-errors">{{ $errors->first('first_name_child_'.($i-1)) }}</div>
                                            @endif
                                            @if($errors->has('last_name_child_'.($i-1)))
                                                <div class="text-errors">{{ $errors->first('last_name_child_'.($i-1)) }}</div>
                                            @endif
                                        </div>
                                    </div>
                                    <!-- name kata -->
                                    <div class="input-sub-content">
                                        <label for="">フリガナ</label>
                                        <div class="input-db-content">
                                            <div class="form-validate">
                                                <input placeholder="セイ" value="{{ old('first_name_furigana_child_'.($i-1)) }}" type="text" name="first_name_furigana_child_{{($i-1)}}" >
                                                <div class="form-error"></div>
                                            </div>
                                            <div class="form-validate">
                                                <input placeholder="メイ" value="{{ old('last_name_furigana_child_'.($i-1)) }}" type="text" name="last_name_furigana_child_{{($i-1)}}" >
                                                <div class="form-error"></div>
                                            </div>
                                        </div>
                                        <div class="input-db-content">
                                            @if($errors->has('first_name_furigana_child_'.($i-1)))
                                                <div class="text-errors">{{ $errors->first('first_name_furigana_child_'.($i-1)) }}</div>
                                            @endif
                                            @if($errors->has('last_name_furigana_child_'.($i-1)))
                                                <div class="text-errors">{{ $errors->first('last_name_furigana_child_'.($i-1)) }}</div>
                                            @endif
                                        </div>
                                    </div>
                                    <!-- gender -->
                                    <div class="input-sub-content form-validate">
                                        <label for="">お子様の性別</label>
                                        <div class="input-display-flex ">
                                            <input value="{{config('constant.GENDER.FEMALE')}}" type="radio" @if(old('gender_child_'.($i-1)) == config('constant.GENDER.FEMALE')) checked @endif name="{{ 'gender_child_'.($i-1) }}" > <label class="fw-normal" for="">女の子</label>
                                            <input value="{{config('constant.GENDER.MALE')}}" @if(old('gender_child_'.($i-1)) == config('constant.GENDER.MALE')) checked @endif type="radio" name="{{ 'gender_child_'.($i-1) }}" > <label class="fw-normal" for="">男の子</label>
                                        </div>
                                        <div class="form-error"></div>
                                        @if($errors->has('gender_child_'.($i-1)))
                                            <div class="text-errors">{{ $errors->first('gender_child_'.($i-1)) }}</div>
                                        @endif
                                    </div>
                                    <!-- birth -->
                                    <div class="input-sub-content form-validate">
                                        <label for="">お子様の生年月日</label>
                                        <div class="input-date-content">
                                            <select name="y_birth_child_{{($i-1)}}"  class="year_select">
                                                <option value=""></option>
                                                {{ $last= date('Y')-90 }}
                                                {{ $now = date('Y') }}

                                                @for ($j = $now; $j >= $last; $j--)
                                                    <option @if(old('y_birth_child_'.($i-1)) == $j) selected @endif value="{{ $j }}">{{ $j }}</option>
                                                @endfor
                                                
                                            </select>
                                            <span>年</span>
                                            <select name="m_birth_child_{{($i-1)}}"  class="month_select">
                                                <option value=""></option>
                                                @for ($k = 1; $k <= 12; $k++)
                                                    <option @if(old('m_birth_child_'.($i-1)) == $k) selected @endif value="{{ $k }}">{{ $k }}</option>
                                                @endfor
                                            </select>
                                            <span>月</span>
                                            <select name="d_birth_child_{{($i-1)}}"  class="day_select">
                                                <option value=""></option>
                                                @for ($l = 1; $l <= 31; $l++)
                                                    <option @if(old('d_birth_child_'.($i-1)) == $l) selected @endif value="{{ $l }}">{{ $l }}</option>
                                                @endfor
                                            </select>
                                            <span>日</span>
                                        </div>
                                        <div class="form-error"></div>
                                        <!-- error birthday -->
                                        @if($errors->has('y_birth_child_'.($i-1)))
                                            <div class="text-errors">{{ $errors->first('y_birth_child_'.($i-1)) }}</div>
                                        @endif
                                        @if($errors->has('m_birth_child_'.($i-1)))
                                            <div class="text-errors">{{ $errors->first('m_birth_child_'.($i-1)) }}</div>
                                        @endif
                                        @if($errors->has('d_birth_child_'.($i-1)))
                                            <div class="text-errors">{{ $errors->first('d_birth_child_'.($i-1)) }}</div>
                                        @endif
                                    </div>
                                    <!-- di ứng -->
                                    <div class="input-sub-content form-validate">
                                        <div class="input-display-flex">
                                            <input type="checkbox" @if(old('allergic_'.($i-1)) == 1) checked @endif value="1" name="{{ 'allergic_'.($i-1) }}" > <label for="">アレルギーの有無</label>
                                        </div>
                                        <div class="form-error"></div>
                                        @if($errors->has('allergic_'.($i-1)))
                                            <div class="text-errors">{{ $errors->first('allergic_'.($i-1)) }}</div>
                                        @endif
                                    </div>
                                    <!-- bệnh mãn tính -->
                                    <div class="input-sub-content form-validate">
                                        <div class="input-display-flex">
                                            <input type="checkbox" @if(old('chronic_'.($i-1)) == 1) checked @endif value="1" name="{{ 'chronic_'.($i-1) }}" > <label for="">持病、特別なケアの有無</label>
                                        </div>
                                        <div class="form-error"></div>
                                        @if($errors->has('chronic_'.($i-1)))
                                            <div class="text-errors">{{ $errors->first('chronic_'.($i-1)) }}</div>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        @endfor
                    @else
                        <div class="input-group child-item">

                            <div class="input-label">
                                <span class="number_child">1</span>人目のお子様<span class="text-danger">※</span>
                            </div>

                            <div class="input-content">
                                <!-- name -->
                                <div class="input-sub-content">
                                    <label for="">お子様のお名前</label>
                                    <div class="input-db-content">
                                        <div class="form-validate">
                                            <input placeholder="姓" type="text" name="first_name_child_0" data-ul = 0 >
                                            <div class="form-error"></div>
                                        </div>
                                        <div class="form-validate">
                                            <input placeholder="名" type="text" name="last_name_child_0" data-ul = 0 >
                                            <div class="form-error"></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="input-db-content">
                                    @if($errors->has('first_name_child_0'))
                                        <div class="text-errors">{{ $errors->first('first_name_child_0') }}</div>
                                    @endif
                                    @if($errors->has('last_name_child_0'))
                                        <div class="text-errors">{{ $errors->first('last_name_child_0') }}</div>
                                    @endif
                                </div>
                                <!-- name kata -->
                                <div class="input-sub-content">
                                    <label for="">フリガナ</label>
                                    <div class="input-db-content">
                                        <div class="form-validate">
                                            <input placeholder="セイ" type="text" data-ul = 0 name="first_name_furigana_child_0" >
                                            <div class="form-error"></div>
                                        </div>
                                        <div class="form-validate">
                                            <input placeholder="メイ" type="text" data-ul = 0 name="last_name_furigana_child_0" >
                                            <div class="form-error"></div>
                                        </div>
                                    </div>
                                    <div class="input-db-content">
                                        @if($errors->has('first_name_furigana_child_0'))
                                            <div class="text-errors">{{ $errors->first('first_name_furigana_child_0') }}</div>
                                        @endif
                                        @if($errors->has('last_name_furigana_child_0'))
                                            <div class="text-errors">{{ $errors->first('last_name_furigana_child_0') }}</div>
                                        @endif
                                    </div>
                                </div>
                                <!-- gender -->
                                <div class="input-sub-content form-validate">
                                    <label for="">お子様の性別</label>
                                    <div class="input-display-flex">
                                        <input value="{{config('constant.GENDER.FEMALE')}}" type="radio" name="gender_child_0" > <label class="fw-normal" for="">女の子</label>
                                        <input value="{{config('constant.GENDER.MALE')}}" type="radio" name="gender_child_0" > <label class="fw-normal" for="">男の子</label>
                                    </div>
                                    <div class="form-error"></div>
                                    @if($errors->has('gender_child_0'))
                                        <div class="text-errors">{{ $errors->first('gender_child_0') }}</div>
                                    @endif
                                </div>
                                <!-- birth -->
                                <div class="input-sub-content form-validate">
                                    <label for="">お子様の生年月日</label>
                                    <div class="input-date-content">
                                        <select name="y_birth_child_0" data-ul = 0 class="year_select">
                                            <option value=""></option>
                                            {{ $last= date('Y')-90 }}
                                            {{ $now = date('Y') }}

                                            @for ($j = $now; $j >= $last; $j--)
                                                <option @if(old('y_birth_child_0') == $j) selected @endif value="{{ $j }}">{{ $j }}</option>
                                            @endfor
                                            
                                        </select>
                                        <span>年</span>
                                        <select name="m_birth_child_0" data-ul = 0 class="month_select">
                                            <option value=""></option>
                                            @for ($k = 1; $k <= 12; $k++)
                                                <option @if(old('m_birth_child_0') == $k) selected @endif value="{{ $k }}">{{ $k }}</option>
                                            @endfor
                                        </select>
                                        <span>月</span>
                                        <select name="d_birth_child_0" data-ul = 0 class="day_select">
                                            <option value=""></option>
                                            @for ($l = 1; $l <= 31; $l++)
                                                <option @if(old('d_birth_child_0') == $l) selected @endif value="{{ $l }}">{{ $l }}</option>
                                            @endfor
                                        </select>
                                        <span>日</span>
                                    </div>
                                    <div class="form-error"></div>
                                    <!-- error birthday -->
                                    @if($errors->has('y_birth_child_0'))
                                        <div class="text-errors">{{ $errors->first('y_birth_child_0') }}</div>
                                    @endif
                                    @if($errors->has('m_birth_child_0'))
                                        <div class="text-errors">{{ $errors->first('m_birth_child_0') }}</div>
                                    @endif
                                    @if($errors->has('d_birth_child_0'))
                                        <div class="text-errors">{{ $errors->first('d_birth_child_0') }}</div>
                                    @endif
                                </div>
                                <!-- di ứng -->
                                <div class="input-sub-content form-validate">
                                    <div class="input-display-flex">
                                        <input value="1" type="checkbox" name="allergic_0" data-ul = 0 > <label for="">アレルギーの有無</label>
                                    </div>
                                    <div class="form-error"></div>
                                    @if($errors->has('allergic_0'))
                                        <div class="text-errors">{{ $errors->first('allergic_0') }}</div>
                                    @endif
                                </div>
                                <!-- bệnh mãn tính -->
                                <div class="input-sub-content form-validate">
                                    <div class="input-display-flex">
                                        <input value="1" type="checkbox" name="chronic_0" data-ul = 0 > <label for="">持病、特別なケアの有無</label>
                                    </div>
                                    <div class="form-error"></div>
                                    @if($errors->has('chronic_0'))
                                        <div class="text-errors">{{ $errors->first('chronic_0') }}</div>
                                    @endif
                                </div>
                            </div>
                        </div>
                    @endif
                    
                </div>
                <!-- end childs info -->

                <!-- nick name -->
                <div class="input-group">
                    <div class="input-label">
                        ニックネーム（サービス内で公開されます）
                    </div>
                    <div class="input-content form-validate">
                        <input class="w100p" placeholder="ニックネーム" value="{{old('nick_name')}}" type="text" name="nick_name" >
                        <div class="form-error"></div>
                    </div>
                    @if($errors->has('nick_name'))
                        <div class="text-errors">{{ $errors->first('nick_name') }}</div>
                    @endif
                </div>
                <!-- end nick_name -->

                <!-- note -->
                <!-- lời nhắn tới người giúp việc -->
                <div class="input-group">
                    <div class="input-label">
                        メッセージ（ベビーシッターへ送るメッセージです）
                    </div>
                    <div class="input-content">
                        <textarea class="w100p" name="note" placeholder="例）０歳の男の子と３歳の女の子が居まして簡単な家事もお願いします。"  cols="30" rows="10">{{old('note')}}</textarea>
                    </div>
                    @if($errors->has('note'))
                        <div class="text-errors">{{ $errors->first('note') }}</div>
                    @endif
                </div>
                <!-- end note -->
            </div>
            <div class="input-group pl-3 form-validate">
                <div class="input-display-flex term_private">
                    <input type="checkbox" @if(old('check_accept') == 1) checked @endif value=1 name="check_accept" > <a href="#emp-terms" rel="modal:open"><span class="color-green">利用規約</span></a>と<a href="#emp-privacy" rel="modal:open"><span class="color-green" >プライバシーポリシー</span></a>に同意する
                </div>
                <div class="form-error"></div>
            </div>
            <div class="list-action">
                {{-- <button type="button" class="btn btn-back">
                    戻る
                </button> --}}
                <button class="btn btn-register">
                    内容確認へ
                </button>
            </div>
            <input type="hidden" name="token_verify" value="{{@$token_verify}}">
        </form>
        <!-- content child default -->
        <div class="childs-hidden" style="display: none;">
            <div class="input-group child-item">
                
                <div class="input-label">
                    <span class="number_child">1</span>人目のお子様<span class="text-danger">※</span>
                </div>
                
                <div class="input-content">
                    <!-- name -->
                    <div class="input-sub-content">
                        <label for="">お子様のお名前</label>
                        <div class="input-db-content">
                            <div class="form-validate">
                                <input placeholder="姓" type="text" name="first_name_child_0" >
                                <div class="form-error"></div>
                            </div>
                            <div class="form-validate">
                                <input placeholder="名" type="text" name="last_name_child_0" >
                                <div class="form-error"></div>
                            </div>
                        </div>
                    </div>
                    <!-- name kata -->
                    <div class="input-sub-content">
                        <label for="">フリガナ</label>
                        <div class="input-db-content">
                            <div class="form-validate">
                                <input placeholder="セイ" type="text" name="first_name_furigana_child_0" >
                                <div class="form-error"></div>
                            </div>
                            <div class="form-validate">
                                <input placeholder="メイ" type="text" name="last_name_furigana_child_0" >
                                <div class="form-error"></div>
                            </div>
                        </div>
                    </div>
                    <!-- gender -->
                    <div class="input-sub-content form-validate">
                        <label for="">お子様の性別</label>
                        <div class="input-display-flex">
                            <input value="{{config('constant.GENDER.FEMALE')}}" type="radio" name="gender_child_0" > <label class="fw-normal" for="">女の子</label>
                            <input value="{{config('constant.GENDER.MALE')}}" type="radio" name="gender_child_0" > <label class="fw-normal" for="">男の子</label>
                        </div>
                        <div class="form-error"></div>
                    </div>
                    <!-- birth -->
                    <div class="input-sub-content form-validate">
                        <label for="">お子様の生年月日</label>
                        <div class="input-date-content">
                            <select name="y_birth_child_0"  class="year_select">
                                <option value=""></option>
                                <?php 
                                    $last= date('Y')-90;
                                    $now = date('Y');
                                ?>

                                @for ($i = $now; $i >= $last; $i--)
                                    <option value="{{ $i }}">{{ $i }}</option>
                                @endfor
                                
                            </select>
                            <span>年</span>
                            <select name="m_birth_child_0"  class="month_select">
                                <option value=""></option>
                                @for ($i = 1; $i <= 12; $i++)
                                    <option value="{{ $i }}">{{ $i }}</option>
                                @endfor
                            </select>
                            <span>月</span>
                            <select name="d_birth_child_0"  class="day_select">
                                <option value=""></option>
                                @for ($i = 1; $i <= 31; $i++)
                                    <option value="{{ $i }}">{{ $i }}</option>
                                @endfor
                            </select>
                            <span>日</span>
                        </div>
                        <div class="form-error"></div>
                    </div>
                    <!-- di ứng -->
                    <div class="input-sub-content form-validate">
                        <div class="input-display-flex">
                            <input type="checkbox" value="1" name="allergic_0" > <label for="">アレルギーの有無</label>
                        </div>
                        <div class="form-error"></div>
                    </div>
                    <!-- bệnh mãn tính -->
                    <div class="input-sub-content form-validate">
                        <div class="input-display-flex">
                            <input type="checkbox" value="1" name="chronic_0" > <label for="">持病、特別なケアの有無</label>
                        </div>
                        <div class="form-error"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end content child default -->
    </div>
    
</div>
@endsection
@include('modals.employers.privacy')
@include('modals.employers.terms')
@section('scripts')
    <script type="text/javascript" src="{{ asset('js/library/jquery.validate.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/register_parent.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/modal.jquery.min.js') }}"></script>
@endsection
$(document).ready(function () {
    let sitter_id = $('input[name="sitter"]').val();
    getReviewSitter('', sitter_id);
})
$(document).on('click', '.rate-viewmore', function(event){
    let elementParent = $(this).parent()
    let rateElement = $(elementParent).find('.rate-content')
    if(rateElement.hasClass('rate-limit')){
        $(rateElement).removeClass('rate-limit')
    } else {

        $(rateElement).addClass('rate-limit')
    }
})
$(document).on('click', '.pagination-review a', function(event){
    event.preventDefault();
    let sitter_id = $('input[name="sitter"]').val();
    var _page = $(this).attr('href').split('page=')[1];
    getReviewSitter(_page, sitter_id);
});

$('.send-review').click(function () {
    $('#employer-post-review').toggle();
    //show text
    if($(this).attr('data-active') == 0){
        $(this).text('キャンセル');
        $(this).attr('data-active','1');
    }else{
        $(this).text('レビューを書く');
        $(this).attr('data-active','0');
    }
    //call rating
    $('#rate-star').rateit({min: 1, max: 5, step: 1});
    $('#rate-star').bind('rated', function (e) {
        let rateValue = $(this).rateit('value');
        $('#rate').val(rateValue);
    });
    //validate rating
    let formValidate = $('#review-sitter');
    formValidate.validate({
        onfocusout: function (element) {
            $(element).valid();
        },
        invalidHandler: function () {
            $(this).find(".form-validate .error:first").focus();
        },
        ignore: false,
        rules: {
            comment: {
                required: {
                    depends: function () {
                        let valueText = $.trim($(this).val());
                        if (!valueText) {
                            $(this).val($.trim($(this).val()));
                            return true;
                        }
                        return false;
                    }
                }
            },
            rate: {
                checkRate: true
            }
        },
        messages: {
            comment: {
                required: 'この項目は必須です。',
            },
            rate: {
                checkRate: 'この項目は必須です。',
            }
        },
        errorPlacement: function (error, element) {
            var element = element.closest('.form-validate').find('.form-error');
            element.html('');
            error.appendTo(element);
        },
    });
})
jQuery.validator.addMethod('checkRate', function () {
    let rate = $('#rate').val();
    if (rate) return true;
    return false;
});



function getReviewSitter(_page = 1, id){
    // Ajax process
    $.ajax({
        method: "GET",
        url: ROUTE_LOAD_REVIEWS,
        data: {
            id: id,
            page: _page,
            limit: LIMIT_RECORD_REVIEW
        }
    })
    .done(function( odata ) {
        $('.body-review').html(odata);
    });
}
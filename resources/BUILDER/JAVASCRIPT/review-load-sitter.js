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
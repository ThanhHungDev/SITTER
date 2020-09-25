$(document).ready(function () {
    if (IS_LOGIN) {
        loadBookingList();
    }
})
$(document).on('click', '.pagination a', function(event){
    event.preventDefault();
    var _page = $(this).attr('href').split('page=')[1];
    if (IS_LOGIN) {
        loadBookingList(_page);
    }
});

function loadBookingList(_page = 1){
    $.ajax({
        method: "GET",
        url: URL_BOOKING_SITTER, 
        data: {
            page: _page 
        }
    })
    .done(function( data ) {
        $('#booking-list').html(data);
    });
}
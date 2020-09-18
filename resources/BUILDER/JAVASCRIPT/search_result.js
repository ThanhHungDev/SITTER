$(document).ready(function () {
    if (IS_LOGIN) {
        loadBookingList();
    }
}) 

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
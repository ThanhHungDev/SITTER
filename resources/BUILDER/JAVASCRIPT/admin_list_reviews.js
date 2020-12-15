function deleteReview(e) {
    let data = {
        'id': $(e).attr('data-id')
    }
    console.log(data);
    $('input.data').val(JSON.stringify(data))
    $('#cancel-modal').modal({
        closeClass: 'popup-lose',
        escapeClose: false,
        showClose: false
    });
}

function ajaxDeleteReviewByAdmin(data) {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url     : URL_DELETE_REVIEW,
        type    : 'post', 
        data    : data,
        success: function( rs ){
            if (rs.code == 200) {
                $.toast({
                    text: rs.messages,
                    showHideTransition: 'slide',
                    icon: 'Succes',
                    position: 'top-right',
                });
                setTimeout(function () {
                    location.reload();
                },2000)
            }else{
                $.toast({
                    text: rs.messages,
                    showHideTransition: 'slide',
                    icon: 'Warring',
                    position: 'top-right',
                });
            }     
        },
        error: function (err) {
            $.toast({
                text: "Error",
                showHideTransition: 'slide',
                icon: 'error',
                position: 'top-right',
            });
        }
    });
}

$('.action-cancel').click(function () {
    $.modal.close()
})
$('.action-accept').click(function () {
    let data = JSON.parse($('input.data').val())
    ajaxDeleteReviewByAdmin(data)
    $.modal.close()
})
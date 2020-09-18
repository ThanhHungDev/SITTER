function loadInfoItem(url, isEmp = false){
    // Ajax process
    $.ajax({
        method: "GET",
        url: url,
    })
    .done(function( odata ) {
        $('#info-content').html(odata);
        if (isEmp) {
            loadCalendarSitter()
        }
    });
}

$(document).on('click', '.ajax-info-item', function(event){
    event.preventDefault();
    let url = $(this).attr('href');
    $('#info-content').html('');
    $('#info-item-modal').modal({
        closeClass: 'popup-lose',
        escapeClose: false,
        showClose: false 
    });
    loadInfoItem(url, $(this).attr('data-item')=='employer'); 
});

function loadCalendarSitter() {
    var selector   = document.getElementById('draw-calendar'),
    inputEvent = document.getElementById("js-event-data")
    
    dataServer = document.getElementById("data").innerHTML;
    if (selector) {
        var instanceCalendar = new Calendar()
        instanceCalendar.setEventData(JSON.parse(dataServer))
        instanceCalendar.setElementDraw(selector)
        instanceCalendar.setInputEventData(inputEvent)
        instanceCalendar.setBeforeOpenModel(eventBeforeOpenModel__viewer)
        instanceCalendar.setAfterOpenModel(eventAfterOpenModel__viewer)
        instanceCalendar.setCreateModel(createModelCalendar__viewer)
        instanceCalendar.draw()
    }
}
$('.ajax-cancel-item').click(function (event) {
    event.preventDefault();
    let url = $(this).attr('href');
    let data = {
        'person_cancel': $(this).attr('data-type'),
        'id': $(this).attr('data-id'),
        'employer_id': $(this).attr('data-employer-id'),
        'sitter_id': $(this).attr('data-sitter-id'),
        'date': $(this).attr('data-date'),
        'order_id': $(this).attr('data-order')
    }
    $('input.url').val(url)
    $('input.data').val(JSON.stringify(data))
    $('#cancel-modal').modal({
        closeClass: 'popup-lose',
        escapeClose: false,
        showClose: false
    });
})

$('.action-cancel').click(function () {
    $.modal.close()
})
$('.action-accept').click(function () {
    let url = $('input.url').val()
    let data = JSON.parse($('input.data').val())
    ajaxCancelByAdmin(url, data)
    $.modal.close()
})
function ajaxCancelByAdmin(url, data) {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url     : url,
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
                text: "Can't cancel by admin",
                showHideTransition: 'slide',
                icon: 'error',
                position: 'top-right',
            });
        }
    });
}
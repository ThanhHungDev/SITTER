
$(document).ready(function () {
    $( "#slt_datepicker" ).multiDatesPicker({
        beforeShow: function(input, inst) {
            $('#ui-datepicker-div').addClass('single-picker');
        } 
    });
    //update publish
    $('.js-public-sitter').on('click', function () {
        let lbCheckBox = $('.bl-toggle-public[for=' + this.id +']')
        if (this.checked) {
            lbCheckBox.text('公開中')
        }else{
            lbCheckBox.text('非公開')
        }
        let action = $(this).attr('data-url')
        let data = {
            id : $(this).attr('data-item'),
            publish :  $(this).is(':checked') 
        }
        $(this).prop('disabled', true)
        ajaxUpdatePublish(action, data, this) 
    })
    //view details 
    $('.js-detail-sitter').on('click', function () {
        let action = $(this).attr('data-url')
        $(this).prop('disabled', true)
        ajaxGetDetailsSitter(action, this)      
    })
    //delete sitter
    $('.js-delete-sitter').on('click', function () {
        
        $('#deleteSitter').attr('data-item', $(this).attr('data-item'))
        $('#deleteSitter').attr('data-url', $(this).attr('data-url'))
        $('#deleteSitter').modal({
            escapeClose: false,
            showClose: false
        })    
    })
    //activity sitter
    $('.js-activity-sitter, .js-unactivity-sitter').on('click', function () {
        let action = $(this).attr('data-url') 
        let data = {
            id : $(this).attr('data-item'),
            admin_confirm : $(this).attr('data-confirm')
        }
        $(this).prop('disabled', true)
        ajaxConfirmSitter(action, data)
    })
    //view chat
    $('.js-history-chat').on('click', function () {
        let action = $(this).attr('data-url') 
        location.assign(action)
    })
    //copy clipboard
    $('#link-update').on('click', function () {
        let copyText = $(this).val()
        let temp = $('<input>') //create input 
        $(this).append(temp)
        temp.val(copyText).select() //select text
        document.execCommand("copy")
        temp.remove() //remove
        $.toast({
            // heading: 'Success!',
            text: 'コピーしました', 
            showHideTransition: 'slide',
            icon: 'success',
            position: 'top-right',
        });
    })
})

function ajaxGetDetailsSitter(action, emlemnt) {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url     : action,
        type    : 'get',
        async  : false,
        success: function( rs ){
            if (rs.code == 200) {
                setDataToDetail(rs.data)
                $('#details-sitter-modal').modal({
                    closeClass: 'popup-lose',
                    escapeClose: false,
                    showClose: false
                });
            }else{
                $.toast({
                    heading: 'Error!',
                    text: rs.messages,
                    showHideTransition: 'slide',
                    icon: 'Error',
                    position: 'top-right',
                });
            }     
            $(emlemnt).prop('disabled', false)
        },
        error: function (err) {
            $.toast({
                heading: 'Error!',
                text: "User has not updated information!",
                showHideTransition: 'slide',
                icon: 'error',
                position: 'top-right',
            });
            $(emlemnt).prop('disabled', false)
        }
        
    });
}

function setDataToDetail(data) {
    $('.link-update').css('display', 'none') 
    $('#link-update').val('')
    let imageQualifi = document.getElementById('image-qualifi')
    imageQualifi.innerHTML = ''
    data.galaries.forEach(item => {
        let url = item
        let elementImage = document.createElement('div')
        elementImage.classList.add('item-img')
        let img = document.createElement('img')
        img.setAttribute("src", url)
        elementImage.appendChild(img)
        imageQualifi.appendChild(elementImage)
    }); 
    $('#experiences').text(data.experiences.toString())
    $('#skills').text(data.skills.toString())
    $('#name').text(data.contact.contact_name)
    $('#full-address').text(data.contact.contact_address)
    $('#num-phone').text(data.contact.contact_phone)
    $('#relationship').text(data.contact.contact_relationship)
    if (data.admin_unaccept) {
        $('.link-update').css('display', 'block') 
        $('#link-update').val(data.url_update)
    }
}

function ajaxUpdatePublish(action, data, emlement) {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url     : action,
        data    : data, 
        type    : 'post',
        success: function( rs ){
            if (rs.code == 200) {
                $.toast({
                    heading: 'Success!',
                    text: rs.messages,
                    showHideTransition: 'slide',
                    icon: 'success',
                    position: 'top-right',
                });
            }else{
                $.toast({
                    heading: 'Error!',
                    text: rs.messages,
                    showHideTransition: 'slide',
                    icon: 'error',
                    position: 'top-right',
                });
            }
            $(emlement).prop('disabled', false)            
        },
        error: function (err) {
            $.toast({
                heading: 'Error!',
                text: "update fail!",
                showHideTransition: 'slide',
                icon: 'error',
                position: 'top-right',
            });
            $(emlement).prop('disabled', false)
        }
    });
}

function ajaxDeleteSitter(action, data) {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url     : action,
        data    : data, 
        type    : 'post',
        success: function( rs ){
            if (rs.code == 200) {
                $.toast({
                    heading: 'Success!',
                    text: rs.messages,
                    showHideTransition: 'slide',
                    icon: 'success',
                    position: 'top-right',
                });
                setTimeout(function () {
                    location.reload();
                },500)
            }else{
                $.toast({
                    heading: 'Error!',
                    text: rs.messages,
                    showHideTransition: 'slide',
                    icon: 'error',
                    position: 'top-right',
                });
            }            
        },
        error: function (err) {
            $.toast({
                heading: 'Error!',
                text: "Delete fail!",
                showHideTransition: 'slide',
                icon: 'error',
                position: 'top-right',
            });
        }
    });
}

function ajaxConfirmSitter(action, data) {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url     : action,
        data    : data, 
        type    : 'post',
        success: function( rs ){
            if (rs.code == 200) {
                if (data.admin_confirm == ADMIN_CONFIRM_ACCEPT ) {
                    deleteHTMLItemSitter('action-confrim-', rs.id)
                }
                
                $.toast({
                    heading: 'Success!',
                    text: rs.messages,
                    showHideTransition: 'slide',
                    icon: 'success',
                    position: 'top-right',
                });
            }else{
                $.toast({
                    heading: 'Error!',
                    text: rs.messages,
                    showHideTransition: 'slide',
                    icon: 'error',
                    position: 'top-right',
                });
            }  
            $(this).prop('disabled', false)          
        },
        error: function (err) {
            $.toast({
                heading: 'Error!',
                text: "Accept fail!",
                showHideTransition: 'slide',
                icon: 'error',
                position: 'top-right',
            });
            $(this).prop('disabled', false)     
        }
    });
}

function deleteHTMLItemSitter(path, id) {
    let item = document.getElementById(path + id)
    item.remove()
}

function deleteSitter() {
    let action = $('#deleteSitter').attr('data-url')
    let data = {
        id : $('#deleteSitter').attr('data-item')
    }
    ajaxDeleteSitter(action, data)
}
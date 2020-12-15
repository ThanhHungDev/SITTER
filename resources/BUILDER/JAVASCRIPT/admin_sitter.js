
$(document).ready(function () {
    $('.slider').show();
    $('.slider-nav').show();
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        // asNavFor: '.slider-nav',
        pauseOnHover: true,
        swipe: true,
        arrows: false,
    });
    $('.slider-nav').slick({
        asNavFor: '.slider',
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: false,
        focusOnSelect: true  
    });
    
      
    $('.slider').on('click', function () {
        let imgTag = $(this).find('img');
        let rowCurrent = $(this).slick('slickCurrentSlide');
        let modalSlider = $('#modal-slider');
        for (let index = 0; index < imgTag.length; index++) {
            let element = imgTag[index];
            let img = $('<img/>');
            img.attr('src', element.src);
            modalSlider.append(img);
        }
        $('#modal-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            pauseOnHover: true,
            swipe: true,
            autoplay: true,
            arrows: false,
        });
        $('#modal-slider-nav').slick({
            asNavFor: '#modal-slider',
            dots: true,
            infinite: true,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true,
            autoplay: true,
            focusOnSelect: true  
        });

        $('#modal-slider').slick('slickGoTo', rowCurrent, true);
        $('strong.current-item').text(rowCurrent + 1);
        $('strong.total-item').text(imgTag.length);
        $('#certifies-modal').modal({
            escapeClose: false,
            showClose: false
        });
    });

    $('#certifies-modal').on($.modal.CLOSE, function () {
        $('#modal-slider').slick('unslick');
        $('#modal-slider-nav').slick('unslick');
        $('#modal-slider').empty();
        $('#modal-slider-nav').empty();
    })

    $('#modal-slider').on('afterChange', function(event, slick, currentSlide){
        $('strong.current-item').text(currentSlide + 1);
    });

    $('.modal-prev-nav').on('click', function () {
        $('#modal-slider').slick('slickPrev');
    })
    
    $('.modal-next-nav').on('click', function () {
        $('#modal-slider').slick('slickNext');
    })

    $('.prev-nav').on('click', function () {
        let pageNav = $(this).parent();
        let currentWrap = pageNav.parent();
        let currentSlider = currentWrap.find('.slider');
        currentSlider.slick('slickPrev');
    })
    
    $('.next-nav').on('click', function () {
        let pageNav = $(this).parent();
        let currentWrap = pageNav.parent();
        let currentSlider = currentWrap.find('.slider');
        currentSlider.slick('slickNext');
    })

    $('.slider').on('afterChange', function(event, slick, currentSlide){
        let parentItem = $(this).parent();
        let currentItem = parentItem.find('strong.row-current-item');
        currentItem.text(currentSlide + 1);
    });

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
    $('.js-activity-sitter').on('click', function () {
        let action = $(this).attr('data-url') 
            let data = {
                id : $(this).attr('data-item'),
                admin_confirm : $(this).attr('data-confirm')
            }
            ajaxConfirmSitter(action, data, $(this))
    })
    $('.js-unactivity-sitter').on('click', function () {
        if ($(this).hasClass('js-unactivity-sitter')) {
            let action = $(this).attr('data-url') 
            let data = {
                id : $(this).attr('data-item'),
                admin_confirm : $(this).attr('data-confirm')
            }
            ajaxConfirmSitter(action, data, $(this))
        }
        if ($(this).hasClass('js-link-update')) {
            let copyText = $('.js-link-update').attr('data-url')
            let temp = $('<input>') //create input 
            $(this).append(temp)
            temp.val(copyText).select() //select text
            document.execCommand("copy")
            temp.remove() //remove
            $.toast({
                // heading: '成功しました',
                text: 'コピーしました', 
                showHideTransition: 'slide',
                icon: 'success',
                position: 'top-right',
            });
        }
    })
    //view chat
    $('.js-history-chat').on('click', function () {
        let action = $(this).attr('data-url') 
        location.assign(action)
    })
    //copy clipboard
    $('.js-link-update').on('click', function () {
        let copyText = $(this).attr('data-url')
        let temp = $('<input>') //create input 
        $(this).append(temp)
        temp.val(copyText).select() //select text
        document.execCommand("copy")
        temp.remove() //remove
        $.toast({
            // heading: '成功しました',
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
                    heading: 'エラー',
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
                heading: 'エラー',
                text: "更新に失敗しました",
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
                    heading: '成功しました',
                    text: rs.messages,
                    showHideTransition: 'slide',
                    icon: 'success',
                    position: 'top-right',
                });
            }else{
                $.toast({
                    heading: 'エラー',
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
                heading: 'エラー',
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
                    heading: '成功しました',
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
                    heading: 'エラー',
                    text: rs.messages,
                    showHideTransition: 'slide',
                    icon: 'error',
                    position: 'top-right',
                });
            }            
        },
        error: function (err) {
            $.toast({
                heading: 'エラー',
                text: "削除失敗",
                showHideTransition: 'slide',
                icon: 'error',
                position: 'top-right',
            });
        }
    });
}

function ajaxConfirmSitter(action, data, event) {
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
            if (rs.admin_accept == true) {
                if (data.admin_confirm == ADMIN_CONFIRM_ACCEPT ) {
                    deleteHTMLItemSitter('action-confrim-', rs.id)
                }
                if (data.admin_confirm != ADMIN_CONFIRM_ACCEPT) {
                    event.addClass('js-link-update');
                    event.attr('data-url', rs.url)
                    event.text('ンクをコピーする');
                    event.removeClass('js-unactivity-sitter');
                }                
                $.toast({
                    heading: '成功しました',
                    text: rs.messages,
                    showHideTransition: 'slide',
                    icon: 'success',
                    position: 'top-right',
                });
            }else{
                $.toast({
                    heading: 'エラー',
                    text: rs.messages,
                    showHideTransition: 'slide',
                    icon: 'error',
                    position: 'top-right',
                });
            }  
        },
        error: function (err) {
            $.toast({
                heading: 'エラー',
                text: "承認に失敗しました",
                showHideTransition: 'slide',
                icon: 'error',
                position: 'top-right',
            });
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

$('.small-img').on('click', function () {
    let img = $(this).find('img').clone();
    $('#content-avatar').append(img);
    $('#avatar-modal').modal({
        escapeClose: false,
        showClose: false
    });
});
$('#avatar-modal').on($.modal.CLOSE, function () {
    $('#content-avatar').empty();
})
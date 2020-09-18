var LIST_ITEM_SITTER = null;
var EMPL_ID = null;
var EMPL_EMAIl = null;
$(document).ready(function () {

    $('.get-detail').click(function () {
        let condition = {
            'action': $(this).attr('data-action'),
            'profileId': $(this).attr('data-id-profile'),
            'userId' : $(this).attr('data-user-id')
        }
        ajaxGetDetailsEmployer(condition);
    })

    $('.btn-delete').click(function (params) {
        let id = $(this).attr('data-id');
        $('input[name="idDelete"]').val(id);
        $('#deleteEmployer').modal({
            closeClass: 'popup-lose',
            escapeClose: false,
            showClose: false 
        });
    })
    $('.js-list-sitter').click(function () {
        EMPL_ID = $(this).attr('data-id')
        EMPL_EMAIl = $(this).attr('data-email')
        $('.search-input').val('')
        ajaxListSitterModel()
        $('#sitter-list-modal').modal({
            closeClass: 'popup-lose',
            escapeClose: false,
            showClose: false
        })
    })
    $('.js-search-item').click(function () {
        let strSearch = $('.search-input').val()
        if (strSearch.trim() != '') {
            searchSitter(strSearch)
        }else{
            setListSitter(LIST_ITEM_SITTER)
        }
    })

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
$(document).on('click', '.js-send-email', function () {
    let data = {
        user_id: $(this).attr('data-empl-id'),
        sitter_id: $(this).attr('data-sitter-id'),
        full_name: $(this).attr('data-full-name'),
        email: $(this).attr('data-mail'),
    }
    ajaxSendMailSitter(EMPLOYER_SEND_SITTER, data)
})
function deleteEmployer() {
    let id = $('input[name="idDelete"]').val();
    let action = $('input[name="actionDelEmp"]').val();
    ajaxDeleteEmployer(action, id)
}

function ajaxDeleteEmployer(action, id) {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url     : action,
        type: 'post',
        data : {
            id: id
        },
        dataType: 'json',
        success: function( rs ){
            if (rs.code == 200) {
                $.toast({
                    heading: 'Success!',
                    text: rs.messages,
                    showHideTransition: 'slide',
                    icon: 'success',
                    position: 'top-right',
                });
                location.reload();
            }else{
                $.toast({
                    heading: 'Error!',
                    text: rs.messages,
                    showHideTransition: 'slide',
                    icon: 'error',
                    position: 'top-right',
                });
            }            
        }
    });
}

function ajaxGetDetailsEmployer(input) {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url     : input.action,
        type: 'post',
        data : {
            id_profile: input.profileId,
            id_user : input.userId
        },
        dataType: 'json',
        success: function( res ){
            if (res.code = 200) {
                fillDataToModal(res.data);
                // console.log(res.dataToken);
                resendUpdateProfileEmp(res.dataToken);
                $('#details-employer-modal').modal({
                    closeClass: 'popup-lose',
                    escapeClose: false,
                    showClose: false
                });
            } else {
                $.toast({
                    heading: 'Warning!',
                    text: res.messages,
                    showHideTransition: 'slide',
                    icon: 'warning',
                    position: 'top-right',
                });
            }            
        }
    });
}

function resendUpdateProfileEmp(data) {
    $('.link-update').css('display', 'none')
    $('#link-update').val('')
    if (data.admin_unaccept) {
        $('.link-update').css('display', 'block') 
        $('#link-update').val(data.url_update)
    }
}
function fillDataToModal(data) {
    let count_child = 1;
    $('.child-info').html('');
    data.forEach(function (value, key){
        let type_str = '';
        switch (value.type) {
            case 1:
                type_str = 'fa';
                break;
            case 2:
                type_str = 'mom';
                break;
            case 3:
                type_str = 'child';
                break;
            default:
                break;
        }
        if(value.type != 3){
            $('p[data-name="'+type_str+'"]').text(value.first_name + '　' + value.last_name);
            $('p[data-gender="'+type_str+'"]').text((value.gender == 1) ? '男性' : '女性');
            $('p[data-age="'+type_str+'"]').text(value.age_year + '歳');
        }
        if(value.type == 3){ 
            let gender = (value.gender === 1) ? '男の子' : '女の子';
            let allergic = (value.allergic === true) ? '有' : '無';
            let chronic = (value.chronic  === true) ? '有' : '無';
            $('#child-default').find('label[type="child-num"]').text('お子様'+count_child);
            $('#child-default').find('p[data-name="child"]').html(value.first_name + '　' + value.last_name);
            $('#child-default').find('p[data-gender="child"]').html(gender);
            $('#child-default').find('p[data-age="child"]').html(value.age_year + '歳' + value.age_month + 'ヶ月');
            $('#child-default').find('p[data-alegic="child"]').html(allergic);
            $('#child-default').find('p[data-alegic-note="child"]').html(value.allergic_note);
            $('#child-default').find('p[data-chronic="child"]').html(chronic);
            $('#child-default').find('p[data-chronic-note="child"]').html(value.chronic_note);
            let content_child = $('#child-default').html();
            $('.child-info').append(content_child);
            count_child++;
        }
    });
}

function ajaxListSitterModel() {
    let url = SYSTEM_REAL_TIME_URL + '/api/' + EMPL_ID + '/friends';
    $.ajax({
        url     : url,
        type: 'get',
        dataType: 'json',
        success: function( res ){
            if (res.code = 200) {
                LIST_ITEM_SITTER = res.data
                setListSitter(LIST_ITEM_SITTER)
            }else{
                $.toast({
                    heading: 'Warning!',
                    text: res.messages,
                    showHideTransition: 'slide',
                    icon: 'warning',
                    position: 'top-right',  
                });
            }            
        }
    });
}

function setListSitter(data) {
    let itemList = document.getElementById("item-list-sitter")
    itemList.innerHTML = '';
    let count =0;
    for (let index = 0; index < data.length; index++) {
        let item = data[index];
        if (item.role_id != SITTER) {
            continue
        }
        let eRow = document.createElement('div')
        eRow.classList.add('row')
        //row-avatar
        let eRowAvarta = document.createElement('div')    
        eRowAvarta.classList.add('row-avatar')
        let img = document.createElement('img')
        img.setAttribute("src", item.avatar)
        eRowAvarta.appendChild(img)
        eRow.appendChild(eRowAvarta)
        //row-info
        let eRowInfo = document.createElement('div')
        eRowInfo.classList.add('row-info')
        let infoName = document.createElement('p')
        infoName.classList.add('info-name')
        infoName.innerHTML  = item.first_name + item.last_name
        eRowInfo.appendChild(infoName)
        let infoMail = document.createElement('p')
        infoMail.classList.add('info-mail')
        infoMail.innerHTML  = item.email
        eRowInfo.appendChild(infoMail)
        eRow.appendChild(eRowInfo)
        //row-action
        let eRowAction = document.createElement('div')
        eRowAction.classList.add('row-action')
        let btn = document.createElement('button')
        btn.classList.add('action-send-mail')
        btn.classList.add('js-send-email')
        btn.setAttribute("data-empl-id", EMPL_ID)
        btn.setAttribute("data-sitter-id", item.id)
        btn.setAttribute("data-full-name", item.first_name + item.last_name)
        btn.setAttribute("data-mail", EMPL_EMAIl)
        btn.innerHTML  = 'メール送信'
        eRowAction.appendChild(btn)
        eRow.appendChild(eRowAction) 

        itemList.appendChild(eRow)
        count ++;
    }
    let itemCount = document.getElementById("item-count")
    itemCount.innerHTML  = count + '人'
}

function searchSitter(strSearch) {
    if (LIST_ITEM_SITTER) {
        let arrSearch = []
        LIST_ITEM_SITTER.forEach(item => {
            if (item.first_name.indexOf(strSearch) > 0 || item.last_name.indexOf(strSearch) > 0) {
                arrSearch.push(item)
            }
        });
        setListSitter(arrSearch)
    }
}

function ajaxSendMailSitter(action, data) {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url     : action,
        type: 'post',
        data : data,
        dataType: 'json',
        success: function( res ){
            if (res.code == 200) {
                $.toast({
                    text: res.messages,
                    showHideTransition: 'slide',
                    icon: 'success',
                    position: 'top-right', 
                });
            }else{
                $.toast({
                    text: res.messages,
                    showHideTransition: 'slide', 
                    icon: 'warning',
                    position: 'top-right', 
                });
            }            
        },
        error: function (res) {
            
        }
    });
}

function approveProfileEmployer(e) {
    let elementButton = $(e).parent();
    let dataId = $(elementButton).attr('data-id');
    let dataStatus = $(elementButton).attr('data-status');
    let action = ADMIN_EMPLOYER_AJAX_ACCEPT;
    let data = {
        id : dataId,
        admin_confirm : dataStatus
    }
    $(this).prop('disabled', true)
    ajaxApproveProfileEmployer(action, data, e)
}

function ajaxApproveProfileEmployer(action, data, e) {
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
                    $(e).closest('.content-approve').remove();
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
            $(e).prop('disabled', false)          
        },
        error: function (err) {
            $.toast({
                heading: 'Error!',
                text: "Accept fail!",
                showHideTransition: 'slide',
                icon: 'error',
                position: 'top-right',
            });
            $(e).prop('disabled', false)     
        }
    });
}
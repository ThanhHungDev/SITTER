
$(document).ready(function () {

    $('.get-detail').click(function () {
        let action = $(this).attr('data-action');
        let id_profile = $(this).attr('data-id-profile');
        ajaxGetDetailsEmployer(action, id_profile);
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

function ajaxGetDetailsEmployer(action, id) {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url     : action,
        type: 'post',
        data : {
            id_profile: id
        },
        dataType: 'json',
        success: function( res ){
            if (res.code = 200) {
                fillDataToModal(res.data);
                $('#details-employer-modal').modal({
                    closeClass: 'popup-lose',
                    escapeClose: false,
                    showClose: false
                });
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
            $('#child-default').find('p[data-chronic="child"]').html(chronic);
            let content_child = $('#child-default').html();
            $('.child-info').append(content_child);
            count_child++;
        }
    });
}

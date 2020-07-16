
$(document).ready(function () {
    //get list channel
    getHistoryChat(REFRESH, 0, LIMIT_RECORD);
})

function getHistoryChat( refresh, offset, limit ) {
    let params = '/api/admin/information-channels?refresh=' + refresh + '&offset=' + offset + '&limit=' + limit;
    let url = SYSTEM_REAL_TIME_URL + params;
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(response => {
        if( response.code == 200 ){
            let result = handleDataChat(response.data);

            $('input[name="total-record"]').val(result.total);
            $('span[name="total-record"]').text(result.total);
            fillItemListHistoryChat(result.data, result.total, '.c-table tbody')
        }else {
            $('.c-table tbody').html('Error!');
        }
    })
    .catch(error => {
        return false
    })
}

function handleDataChat(data) {

    let total = 0;
    let listRecord = [];
    let res = {
        data:listRecord,
        total: 0
    };

    if(data.total){
        let totalArray = data.total;
            total      = totalArray[0].count;
    }

    if(data.channels){
        let channels = data.channels;
        channels.forEach(function (value, key){
            let item    = [];
            let message = value.message;
            let unread  = value.unread;
            let user    = value.user;
            let is_private  = value.backup;
            item['id']             = value.id;
            item['unread']         = unread.length;
            item['last_send_date'] = message[0] ? formatDate(message[0]['createdAt'], 'Y-m-d H:i:s') : '';
            item['is_private']     = is_private;
            if(data.users){
                data.users.forEach(function (v, k) {
                    if(user.includes(v.id.toString())){
                        if(v.role_id == SYSTEM_ROLE_SITTER){
                            item['name_sitter'] = v.first_name + '' + v.last_name ;
                            item['id_sitter']   = v.id;
                        }
                        if(v.role_id == SYSTEM_ROLE_EMPLOYER){
                            item['name_emp'] = v.first_name + '' + v.last_name ;
                            item['id_emp']   = v.id;
                        }
                    }
                })
            }
            item['link_chanel']    = 'message-reader/' + item['id_sitter'] + '/' + item['id'];
            listRecord.push(item);
        });
    }
    res.data  = listRecord;
    res.total = total;
    return res;
}

function fillItemListHistoryChat(data, total, element) {
    if(data){
        if(total <= 0){
            $(element).html('Nodata');
            return false;
        }
        $(element).html('');
        data.forEach(function (value, key) {
            appendItem(value, element);
        })
    }
}

function appendItem(params, element) {
    //reset 
    $('.tr-default').find('input[data-type="input-public"]').removeAttr('checked');
    $('.tr-default').find('span[data-type="unread"]').text(params['unread']).removeClass('d-none');
    //append
    $('.tr-default').find('td[data-type="name-sitter"]').text(params['name_sitter']);
    $('.tr-default').find('td[data-type="name-emp"]').text(params['name_emp']);
    $('.tr-default').find('td[data-type="last-mess"]').text(params['last_send_date']);
    if(params['unread'] == 0){
        $('.tr-default').find('span[data-type="unread"]').addClass('d-none');
    }
    $('.tr-default').find('input[data-type="input-public"]').attr('id',params['id']);
    $('.tr-default').find('label[data-type="label-public"]').attr('for',params['id']);
    $('.tr-default').find('label[data-type="label-public"]').attr('data-id',params['id']);
    $('.tr-default').find('label[data-type="label-public"]').text(SYSTEM_IS_PUBLIC);
    $('.tr-default').find('input[data-type="input-public"]').attr('checked',true);
    if(params['is_private'] === true){
        $('.tr-default').find('label[data-type="label-public"]').text(SYSTEM_IS_PRIVATE);
        $('.tr-default').find('input[data-type="input-public"]').removeAttr('checked');
    }
    $('.tr-default').find('a[data-type="link"]').attr('href',params['link_chanel']);
    let defaultItem = $('#tr-default table tbody').html();
    //render
    $(element).append(defaultItem);
}

//toggle chanel
function toggleChanel(e) {
    let id      = $(e).attr('data-id');
    $(e).attr('disabled', 'disabled');
    handelChanel(REFRESH, id);
}

function handelChanel(refresh, id) {
    let params = '/api/admin/toggle-channel'
    let dataFetch = { refresh: refresh, id: id  }
    let url = SYSTEM_REAL_TIME_URL + params;
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(dataFetch),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(response => {
        $('#'+id).removeAttr('disabled');
        $('label[for="'+id+'"]').removeAttr('disabled');
        if( response.code == 200 ){
           
            let labelElement = $('label[for="'+id+'"]');
            if(response.data.backup === true){
                labelElement.text(SYSTEM_IS_PRIVATE);
            }else{
                labelElement.text(SYSTEM_IS_PUBLIC);
            }
            
        }else {
            $.toast({
                heading: 'Error!',
                text: "Update status error!",
                showHideTransition: 'slide',
                icon: 'error',
                position: 'top-right',
            });
        }
    })
    .catch(error => {
        return false
    })
}

// pagination
function prevPage() {
    let total   = $('input[name="total-record"]').val();
    let page    = caculationPagination(total, LIMIT_RECORD, 'prev');
    let offset  = (page-1)*LIMIT_RECORD;
    getHistoryChat( REFRESH, offset, LIMIT_RECORD )
}

function nextPage() {
    let total   = $('input[name="total-record"]').val();
    let page    = caculationPagination(total, LIMIT_RECORD, 'next');
    let offset  = (page-1)*LIMIT_RECORD;
    getHistoryChat( REFRESH, offset, LIMIT_RECORD )
}

function caculationPagination(total, limit, type) {
    let totalPage        = Math.ceil(parseInt(total)/parseInt(limit));
    let currentPage      = $('input[data-type="current"]');
    let page_current_now = currentPage.val();
    let page             = 1;

    if(type == 'prev'){
        if(parseInt(page_current_now)-1 < 1){
            return page;
        }
        page = parseInt(page_current_now)-1;
        currentPage.val(page);
    }
    if(type == 'next'){
        if(totalPage <= page_current_now){
            page = parseInt(totalPage);
            currentPage.val(page);
            return page;
        }
        page = parseInt(page_current_now)+1;
        currentPage.val(page);
    }
    return page;
}

function formatDate(date, type) {
    let current_datetime = new Date(date)
    switch (type) {
        case 'Y-m-d H:i:s':
            return formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
        default:
            return formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate()
            break;
    }
}
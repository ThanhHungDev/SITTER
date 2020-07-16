
$(document).ready(function () {
    getUnreadMessage(REFRESH);
})

function getUnreadMessage( refresh ) {
    let params = '/api/admin/unread?refresh=' + refresh ;
    let url    = SYSTEM_REAL_TIME_URL + params;
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(response => {
        if( response.code == 200 ){
            console.log(response.code);
            fillUnreadMsg(response.data);
        }else {
            $('#msg-user-unread').text(0);
            $('#msg-admin-unread').text(0);
        }
    })
    .catch(error => {
        return false
    })
}

function fillUnreadMsg(data) {
    if(data){
        console.log(data);
        let numUnreadUser  = data.countUser.length;
        let numUnreadAdmin = data.countAdmin.length;
        if(numUnreadUser > 9){
            numUnreadUser = '9+';
        }
        if(numUnreadAdmin > 9){
            numUnreadAdmin = '9+';
        }
        $('#msg-user-unread').text(numUnreadUser);
        $('#msg-admin-unread').text(numUnreadAdmin);
    }
}
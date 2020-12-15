

import CONFIG from "../config"
// import Peer from "peerjs"
import { setterUser, setterChannels, addMessage, addMessageSendToMe, 
    setterSocket, addUserOnline, removeUserOnline, readAllMessageChannelActive,
    setterBookings, changeBooking } from "../action"
import config from "../config"


import $ from "jquery"


/// config global variable
var socket       = null,
    globalStream = null,
    EVENT        = CONFIG_EVENT
/// end setting variable

window.onclick = function (event) {
    if (event.target) {
        if (event.target.classList.contains('component-emoji')) {
            return;
        }
    }
    var emojis = document.getElementById("js-emojis");
    if (emojis) {
        emojis.classList.remove("show");
        setTimeout(function () {
            if (emojis.classList.contains("show-temp")) {
                emojis.classList.remove("show-temp");
                emojis.classList.add("show");
            }
        }, 100);
    }
};


export function getAccessTokenByRefesh( userId, refesh, detect, instanceComponent ) {
    
    
    var data       = { userId, refesh, detect: JSON.stringify(detect) },
        tokensUser = null
    fetch(CONFIG.SERVER.ASSET() + '/api/refesh', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(response => {
        if (response.code != 200) {
            throw new Error("ログインセッションが正しくありません。 再度ログインするか、管理者に連絡してください")
        }
        
        tokensUser = { 
            expire     : response.data.expire,
            period     : response.data.period,
            tokenAccess: response.data.tokenAccess,
            tokenRefesh: response.data.tokenRefesh
        }
        console.log("setime out  window.location.href = CONFIG.SERVER_PHP.URL")
        setTimeout(function(){
            location.reload()
        }, parseInt(response.data.expire) * 1000 )
        
        var userLogin = { ... response.data.user, tokens : tokensUser }
        localStorage.setItem('user', JSON.stringify(userLogin))
        instanceComponent.props.dispatch(setterUser(userLogin))
        return { auth: userLogin, detect }
    })
    .then( dataFetchChannel => {

        var data = { 
            userId: parseInt(userId),
            access: dataFetchChannel.auth.tokens.tokenAccess, 
            detect: JSON.stringify(dataFetchChannel.detect)
        }
        return fetchChannelMessage( data )
    })
    .then( dataChannel => {
        if( dataChannel ){
            instanceComponent.props.dispatch(setterChannels(dataChannel))
        }
    })
    .catch(error => {
        alert("ログインセッションが正しくありません。 再度ログインするか、管理者に連絡してください")
        return false
    })
}



export function socketInitialConnect(socketIOClient, instanceApp) {
    
    
    socket = socketIOClient(CONFIG.SERVER.ASSET())
    var ApplicationDom = document.getElementById("Application")
    socket.on('connect', function () {

        ApplicationDom && ApplicationDom.classList.remove("connect-socket-error")
        //// set config
        socketListenner(socket, instanceApp)
        instanceApp.props.dispatch(setterSocket(socket))
        console.log("socket connect")
    });
    socket.on('disconnect', function () {
        instanceApp.props.dispatch(setterSocket(null))
        ApplicationDom && ApplicationDom.classList.add("connect-socket-error")
        // window.location.replace(CONFIG.SERVER_PHP.URL)
    });
    socket.on('connect_error', function () {
        ApplicationDom && ApplicationDom.classList.add("connect-socket-error")
        window.location.replace(CONFIG.SERVER_PHP.URL)
    });
}

// //Caller
export function caller( channelInfor, user, client ){
    var id = document.getElementById("Application").getAttribute('data-peer' )
    
    openStream()
    .then(stream => {
        globalStream = stream
        playStream('id-peer-local', stream);
        /// fetch peerjs of user in channel
        return getPeerUserChannel( channelInfor, user, client )
    })
    .catch(function(error) {
        console.log("caller", error)
    })
}


export function sendMessageToChannel(message, style, attachment, channelId, access, detect, instanceComponent) {

    socket.emit(EVENT.SEND_MESSAGE, { message, style, attachment, channelId, access, detect: JSON.stringify(detect) })
    /// 
    instanceComponent.props.dispatch(addMessage({ type: true, read: true, content: message, style, attachment }))
    return false
}
export function sendTypingMessageToChannel(channelId, channelName, access ) {
    
    socket.emit(EVENT.SEND_TYPING, { channelId, channelName, access })
    return false
}



export function saveBlobToServer(file) {
    var SIZE_LIMIT = 5 * 1024 * 1024

    if( !file.size || file.size > SIZE_LIMIT ){
        handleErrorUploadFile()
    }
    
    let dataFile = file
    let form = new FormData()
    form.append('file', dataFile)
    form.append('user_id', 1)

    $.ajax({
        url        : CONFIG.SERVER_PHP.URL + '/api/upload',
        type       : 'post',
        enctype    : 'multipart/form-data',
        data       : form,
        cache      : false,
        contentType: false,
        processData: false,
        success: function( response ){
            
            if (response.code != 200) {
                handleErrorUploadFile()
            }
            var reWriteUrl = document.getElementById("js-image--block").getElementsByClassName("js-sign-url")
            if (reWriteUrl.length) {
                reWriteUrl[0].setAttribute("data-url", response.data.url)

                var typeFile = response.data.file_name,
                extentionType = null
                if( typeFile ){
                    extentionType = getTypeFile( typeFile )
                }
                if( !extentionType ){
                    reWriteUrl[0].remove()
                }else{
                    reWriteUrl[0].setAttribute("data-type", extentionType )
                    reWriteUrl[0].classList.remove("js-sign-url")
                }
            }
        },
        error: function(error){
            console.log(error)
            handleErrorUploadFile()
        }
    })
}
export function listenScrollMessage(e, messages, channelActive ) { 
               
    if(!messages || !messages.length){
        return false
    }
    var domScroll = document.getElementById("js-scroll-to-bottom")
    // console.log(domScroll.scrollHeight, domScroll.clientHeight + "listenScrollMessage")
    if ($(e).scrollTop() + 
        $(e).innerHeight() >=  
        $(e)[0].scrollHeight) { 
            document.getElementById("js-is-write-message").classList.add("follow-conversation")
            /// check message unread
            var existNoneRead = messages.some( function( message ){
                
                return !message.read && !message.type
            })

            if( existNoneRead ){
                // console.log(EVENT.READ_MESSAGE_ALL, "listenScrollMessage")
                var userLocal = JSON.parse(localStorage.getItem('user'))
                socket.emit(EVENT.READ_MESSAGE_ALL, { user : userLocal.id, channelId: channelActive.id, channelName: channelActive.channelName })
            }
    }else{
        document.getElementById("js-is-write-message").classList.remove("follow-conversation")
    } 
}
export function listenReadMessageNewUser( messages, channelActive ) { 
               
    if(!messages || !messages.length){
        return false
    }
    
    var existNoneRead = messages.some( function( message ){
            
        return !message.read && !message.type
    })

    if( existNoneRead ){
        // console.log(EVENT.READ_MESSAGE_ALL, "listenReadMessageNewUser")
        var userLocal = JSON.parse(localStorage.getItem('user'))
        socket.emit(EVENT.READ_MESSAGE_ALL, { user : userLocal.id, channelId: channelActive.id, channelName: channelActive.channelName })
    }
}


export function sendBookingUpdate(bookingUpdate) {
    socket.emit(EVENT.USER_CHANGE_BOOKING, bookingUpdate)
    return false
}

export function calculatorBill(booking, auth ) {

    /// phí sử dụng dịch vụ của sitter là 450 yên + ( 25% của tổng tiền lương )
    const FEE_DEFAULT_SITTER_MIN = 450
    const PERCENT_FEE_SITTER = 0.0025
    /// phí vat 10% 
    const PERCENT_VAT_DEFAULT = 0.1
    /// phí của employer 20% 
    const PERCENT_FEE_EMPLOYER = 0.2
    /// khi gửi lên stripe thì phí là 3.6%
    const PERCENT_FEE_STRIPE = 0.036

    var work_date = booking.work_date,
        start     = booking.start,
        finish    = booking.finish,
        salary    = booking.salary

    var differenceTime    = 0,
        price             = 0,
        myServFeeSitter   = 0,
        myServFeeEmployer = 0,
        stripeServFee     = 0,
        vat               = 0,
        total             = 0
    
    if( salary && work_date && start && finish ){
        var [ fHour, fMinute ] = finish.split(':'),
            [ sHour, sMinute ] = start.split(':')
        var dateTimeFinish     = (new Date(1,1,2020, fHour, fMinute, 0)).getTime(),
            dateTimeStart      = (new Date(1,1,2020, sHour, sMinute, 0)).getTime()

            differenceTime    = (dateTimeFinish - dateTimeStart)/ 1000 / 60 / 60
            price             = Math.floor(differenceTime * salary)
            myServFeeEmployer = Math.floor(price * PERCENT_FEE_EMPLOYER)
            myServFeeSitter   = Math.floor( price * PERCENT_FEE_SITTER ) + FEE_DEFAULT_SITTER_MIN
            vat               = Math.floor((price + myServFeeEmployer) * PERCENT_VAT_DEFAULT)
            stripeServFee     = Math.floor((price + myServFeeEmployer + vat) * PERCENT_FEE_STRIPE)
    }
    if( auth.role_id == config.ROLE_USER.sitter ){
        
        total = price - stripeServFee - myServFeeSitter
    }else if( auth.role_id == config.ROLE_USER.employer ){
        
        total = price + vat + myServFeeEmployer
    }
    return [ work_date, start, finish, salary, differenceTime, price, vat, myServFeeSitter, myServFeeEmployer, stripeServFee, total ]
}

export function calculatorFeeStripe(amount, currency) {
    var fees = { 
        USD: { Percent: 2.9, Fixed: 0.30 },
        GBP: { Percent: 2.4, Fixed: 0.20 },
        EUR: { Percent: 2.4, Fixed: 0.24 },
        CAD: { Percent: 2.9, Fixed: 0.30 },
        AUD: { Percent: 2.9, Fixed: 0.30 },
        NOK: { Percent: 2.9, Fixed: 2 },
        DKK: { Percent: 2.9, Fixed: 1.8 },
        SEK: { Percent: 2.9, Fixed: 1.8 },
        JPY: { Percent: 3.6, Fixed: 0 },
        MXN: { Percent: 3.6, Fixed: 3 }
    }
    var DEFAULT_PERCENT_STRIPE = 3.6;
    var _fee = _fee = { Percent: DEFAULT_PERCENT_STRIPE, Fixed: 0 }
    if(typeof feesStripe != 'undefined'){
        
        _fee = fees[currency];
    }
    
    var amount = parseFloat(amount);
    var total = (amount + parseFloat(_fee.Fixed)) / (1 - parseFloat(_fee.Percent) / 100);
    var fee = total - amount;

    return {
        amount: amount,
        fee: fee.toFixed(2),
        total: total.toFixed(2)
    }
}


//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
function handleErrorUploadFile(){
    var reWriteUrl = document.getElementById("js-image--block").getElementsByClassName("js-sign-url")
    if (reWriteUrl.length) {
        reWriteUrl[0].remove()
    }
}
function getTypeFile( filename ){
    var accept = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png|\.image)$/i
    if(accept.exec(filename)){ 
        return "img"
    }
    var accept = /(\.xls|\.xlsx|\.csv|\.pdf|\.doc|\.docx)$/i
    if(accept.exec(filename)){ 

        return "file"
    }
    return null
}
function validateFetchChannelMessage(data) {
    try {
        var { access } = data
        if ( !access ) {
            throw new Error("遮る")
        }
        return true
    } catch (error) {
        
        return false
    }
}

function fetchChannelMessage( data ) {
    
    var isValid = validateFetchChannelMessage(data)
    if (!isValid) {
        alert("エラーが発生しました。しばらくしてからもう一度お試しください1")
        return false
    }
    if( typeof ID_VIEW_USER_CHAT != 'undefined' && ID_VIEW_USER_CHAT ){
        
        data.userIdActiveChannel = ID_VIEW_USER_CHAT
    }

    var action = CONFIG.SERVER.ASSET() + '/api/channels'
    return fetch(action, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(response => {

        // console.log( response , action)
        if (response.code != 200) {
            
            throw new Error("エラーが発生しました。しばらくしてからもう一度お試しください2")
        }
        
        return response.data
    })
    .catch(error => {
        console.log(error, " have error ")
        return false
    })
}

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


// const peer = new Peer({ 
//     host: '127.0.0.1',
//     port: config.SERVER.PEER_PORT,
//     path: '/myapp'
// })

// peer.on('open', id => {
//     console.log("========================================================================")
//     console.log("====================" + id + "================")
//     document.getElementById("Application").setAttribute('data-peer', id )
//     console.log("========================================================================")
// })



// // //Callee
// peer.on('call', call => {
//     openStream()
//     .then(stream => {
//         call.answer(stream);
//         playStream('localStream', stream);
//         call.on('stream', remoteStream => playStream('remoteStream', remoteStream));
//     })
//     .catch(function(error) {
//         console.log("peer.on('call'")
//     })
// });

// $('#ulUser').on('click', 'li', function() {
//     const id = $(this).attr('id');
//     console.log(id);
//     openStream()
//     .then(stream => {
//         playStream('localStream', stream);
//         const call = peer.call(id, stream);
//         call.on('stream', remoteStream => playStream('remoteStream', remoteStream));
//     });
// });

// function openStream() {
//     const config = { audio: false, video: true };
//     return navigator.mediaDevices.getUserMedia(config);
// }

// function playStream(idVideoTag, stream) {
//     const video = document.getElementById(idVideoTag);
//     video.srcObject = stream;
//     video.play();
// }

// function getPeerUserChannel( channelInfor, user, client ){

//     var channelId = channelInfor.id,
//     access = user.tokens.tokenAccess
//     if( socket ){
//         socket.emit(EVENT.SEND_PEER, { channelId, access, ...client })
//     }
// }

// openStream()
// .then(stream => playStream('localStream', stream));



function socketListenner( socket, instanceApp ){

    socket.on(EVENT.USER_ONLINE_NOTI, data => {
        /// 
        instanceApp.props.dispatch(addUserOnline( data.user ))
    })
    
    socket.on(EVENT.USER_OFFLINE_NOTI, data => {
        /// 
        instanceApp.props.dispatch(removeUserOnline( data.user ))
    })

    socket.on(EVENT.RESPONSE_MESSAGE, data => {
        
        // console.log(EVENT.RESPONSE_MESSAGE, data)
        var { user, token, message, style, attachment, channel, detect } = data 
        var userLocal   = JSON.parse(localStorage.getItem('user')),
            detectLocal = localStorage.getItem('detect')

        if( 
            userLocal && 
            userLocal.id == user && 
            userLocal.tokens.tokenAccess == token &&
            detect == detectLocal
            ){
            return false
        }
        instanceApp.props.dispatch( addMessageSendToMe({ type: (userLocal.id == user), content: message, style, attachment, channel }) )
        return false
        
    })
    socket.on(EVENT.RESPONSE_TYPING, data => {

        var { token, channel } = data
        var userLocal   = JSON.parse(localStorage.getItem('user'))

        if( userLocal.tokens.tokenAccess == token ){
            return false
        }else{
            
            if(timeoutTyping){
                clearTimeout(timeoutTyping)
            }
            var domTyping = document.getElementById("js-typing")
            if(domTyping.getAttribute("channel") == channel)
            domTyping.classList.add("show")
            /// scroll bottom 
            // var inputMessage = document.getElementById("js-is-write-message")
            // if(inputMessage.classList.contains("follow-conversation")){
            //     document.getElementById('js-scroll-to-bottom').scrollTop  = document.getElementById('js-scroll-to-bottom').scrollHeight
            // }
            var timeoutTyping = setTimeout(function() {
                var domTyping = document.getElementById("js-typing")
                if(domTyping.getAttribute("channel") == channel)
                domTyping.classList.remove("show")
            }, 3000);
            return false
        }
    })
    
    socket.on(EVENT.DUPLICATION_TAB, data => {

        window.location.href = CONFIG.SERVER_PHP.URL
    })

    socket.on(EVENT.READ_MESSAGE_ALL_RESPONSE, data => {

        instanceApp.props.dispatch( readAllMessageChannelActive() )
    })

    socket.on(EVENT.RESPONSE_USER_GET_BOOKING, data => {

        var bookings = data.bookings
        // console.log(bookings, EVENT.RESPONSE_USER_GET_BOOKING)
        instanceApp.props.dispatch(setterBookings({ fetch: true, data: bookings }))
    })

    socket.on(EVENT.RESPONSE_USER_CHANGE_BOOKING, data => {
        
        // console.log( data, EVENT.RESPONSE_USER_CHANGE_BOOKING)

        var { user, token, message, style, attachment, channel } = data 
        var userLocal = JSON.parse(localStorage.getItem('user'))
        var messageData = { type: (userLocal.id == user), content: message, style, attachment, channel }
        instanceApp.props.dispatch( addMessageSendToMe(messageData) )
        
        var bookingUpdate = { ...data.booking, update: true }
        instanceApp.props.dispatch(changeBooking(bookingUpdate))
        $.modal.close();
        return false
    })

    socket.on(EVENT.RESPONSE_USER_CHANGE_BOOKING_ERROR, data => {

        $("#js-booking-error").find(".alert-danger").text(data.message)
        $("#js-booking-error").modal({
            escapeClose: false,
            clickClose: false,
            showClose: true
        });
        return false
    })
}
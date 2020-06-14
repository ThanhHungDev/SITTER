

import CONFIG from "../config"
import Peer from "peerjs"
import { setterUser, setterChannels, addMessage, addMessageSendToMe, setterSocket } from "../action"
import config from "../config"


/// config global variable
var socket       = null,
    globalStream = null,
    EVENT        = CONFIG_EVENT
/// end setting variable


export function getAccessTokenByRefesh( userId, refesh, detect, instanceComponent ) {
    console.log("getAccessTokenByRefesh")
    var data = { userId, refesh, ... detect}
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
            console.log(response, " lỗi không thể tạo access token")
            throw new Error("token refesh không đúng")
        }
        
        var tokensUser = { 
            expire: response.data.expire,
            period: response.data.period,
            tokenAccess: response.data.tokenAccess,
            tokenRefesh: response.data.tokenRefesh
        }
        var userLogin = { ... response.data.user, tokens : tokensUser }
        localStorage.setItem('user', JSON.stringify(userLogin))
        instanceComponent.props.dispatch(setterUser(userLogin))
        return { auth: userLogin, detect }
    })
    .then( dataFetchChannel => {

        var data = { access: dataFetchChannel.auth.tokens.tokenAccess, ...dataFetchChannel.detect }
        console.log(data, "fetchChannelMessage in getAccessTokenByRefesh")
        return fetchChannelMessage( data )
    })
    .then( dataChannel => {
        if( !dataChannel ){
            alert( "fetch channel có lỗi ")
            return false
        }
        instanceComponent.props.dispatch(setterChannels(dataChannel))
        return true
    })
    .catch(error => {
        alert(error.message)
        return false
    })
}


export function resfeshTokenIfExpire( auth, instanceChat ){
    console.log( auth, "auth in resfeshTokenIfExpire" )
    var diff = ((new Date).getTime() - new Date(auth.tokens.period).getTime()) / 1000
    if (diff >= auth.tokens.expire) {
        /// fetch new token
        var dataRefesh = { 
            userId: auth.id, 
            refesh: auth.tokens.tokenRefesh, 
            detect: this.props.client 
        }
        console.log(dataRefesh, "refesh token vì hết hạn refesh token vì hết hạn refesh token vì hết hạn refesh token vì hết hạn refesh token vì hết hạn refesh token vì hết hạn refesh token vì hết hạn refesh token vì hết hạn refesh token vì hết hạn ")
        resfeshTokenExpire(dataRefesh, instanceChat)
    }
}

export function socketInitialConnect(socketIOClient, instanceApp) {
    
    
    socket = socketIOClient(CONFIG.SERVER.ASSET())
    var ApplicationDom = document.getElementById("Application")
    socket.on('connect', function () {

        ApplicationDom && ApplicationDom.classList.remove("connect-socket-error")
        //// set config
        socketListenner(socket, instanceApp)
        instanceApp.props.dispatch(setterSocket(socket))
    });
    socket.on('disconnect', function () {
        instanceApp.props.dispatch(setterSocket(null))
        ApplicationDom && ApplicationDom.classList.add("connect-socket-error")
    });
    socket.on('connect_error', function () {
        ApplicationDom && ApplicationDom.classList.add("connect-socket-error")
    });
}

// //Caller
export function caller( channelInfor, user, client ){
    var id = document.getElementById("Application").getAttribute('data-peer' )
    console.log( id, channelInfor )
    openStream()
    .then(stream => {
        globalStream = stream
        playStream('id-peer-local', stream);
        /// fetch peerjs of user in channel
        return getPeerUserChannel( channelInfor, user, client )
    })
    .catch(function(error) {
        console.log("caller")
    })
}


//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
function validateRefeshToken(data) {
    try {
        var { userId, refesh, detect } = data,
            { browser, browserMajorVersion, browserVersion, os, osVersion } = detect
        if (!userId || !refesh || !browser || !browserMajorVersion || !browserVersion || !os || !osVersion) {
            throw new Error("遮る")
        }
        return true
    } catch (error) {
        /// nếu refesh không thành công thì crash ứng dụng
        alert( " refesh không thành công ")
        // localStorage.setItem('user', JSON.stringify(null))
        return false
    }
}
function resfeshTokenExpire(data, instanceComponent) {
    var { userId, refesh, detect } = data
    var isValid = validateRefeshToken(data)
    if (!isValid) {
        alert("アカウントの有効期限が切れています。もう一度ログインしてください")
        return false
    }
    var dataRefesh = { userId, refesh, ...detect }
    return fetch(CONFIG.SERVER.ASSET() + '/api/user/refesh', {
        method: 'POST',
        body: JSON.stringify(dataRefesh),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(response => {
        if (response.code != 200) {
            console.log( response, "refesh token mã trả về không pahir 200")
            throw new Error("アカウントの有効期限が切れています。もう一度ログインしてください")
        }
        /// save user to local storage
        var user        = JSON.parse(localStorage.getItem('user'))
            user.tokens = response.data
        localStorage.setItem('user', JSON.stringify(user))
        instanceComponent.props.dispatch(setterUser(user))
        /// fetch data channel
        var dataFetchChannel = { access: user.tokens.tokenAccess, ...detect }
        console.log(dataFetchChannel, "fetchChannelMessage in resfeshTokenExpire")
        return fetchChannelMessage( dataFetchChannel )
    })
    .then( dataChannel => {
        if( !dataChannel ){
            alert( "fetch channel có lỗi ")
            return false
        }
        instanceComponent.props.dispatch(setterChannels(dataChannel))
        return true
    })
    .catch(error => {
        console.log(error, " have error ")
        localStorage.setItem('user', JSON.stringify(null))
        alert("アカウントの有効期限が切れています。もう一度ログインしてください")
        return false
    })
}

function validateFetchChannelMessage(data) {
    try {
        var { access, browser, browserMajorVersion, browserVersion, os, osVersion } = data
        if (!access || !browser || !browserMajorVersion || !browserVersion || !os || !osVersion) {
            throw new Error("遮る")
        }
        return true
    } catch (error) {
        console.log(error, "validateFetchChannelMessage")
        return false
    }
}

function fetchChannelMessage( data ) {
    var isValid = validateFetchChannelMessage(data)
    if (!isValid) {
        alert("エラーが発生しました。しばらくしてからもう一度お試しください")
        return false
    }
    return fetch(CONFIG.SERVER.ASSET() + '/api/channels', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(response => {
        if (response.code != 200) {
            console.log(JSON.stringify(response.data), "data fetch channel có lỗi")
            throw new Error("エラーが発生しました。しばらくしてからもう一度お試しください")
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


const peer = new Peer({ 
    host: '127.0.0.1',
    port: config.SERVER.PEER_PORT,
    path: '/myapp'
})

peer.on('open', id => {
    console.log("========================================================================")
    console.log("====================" + id + "================")
    document.getElementById("Application").setAttribute('data-peer', id )
    console.log("========================================================================")
})



// //Callee
peer.on('call', call => {
    openStream()
    .then(stream => {
        call.answer(stream);
        playStream('localStream', stream);
        call.on('stream', remoteStream => playStream('remoteStream', remoteStream));
    })
    .catch(function(error) {
        console.log("peer.on('call'")
    })
});

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

function openStream() {
    const config = { audio: false, video: true };
    return navigator.mediaDevices.getUserMedia(config);
}

function playStream(idVideoTag, stream) {
    const video = document.getElementById(idVideoTag);
    video.srcObject = stream;
    video.play();
}

function getPeerUserChannel( channelInfor, user, client ){

    var channelId = channelInfor.id,
    access = user.tokens.tokenAccess
    if( socket ){
        socket.emit(EVENT.SEND_PEER, { channelId, access, ...client })
    }
}

// openStream()
// .then(stream => playStream('localStream', stream));



function socketListenner( socket, instanceApp ){
    var EVENT = CONFIG_EVENT

    socket.on(EVENT.REQUEST_GET_CHANEL, () => {
        console.log("đã vào " + EVENT.REQUEST_GET_CHANEL)
        
    });
    socket.on(EVENT.RESPONSE_MESSAGE, data => {
        console.log("đã vào " + EVENT.RESPONSE_MESSAGE, data)
        var { user, message, style, attachment, channel, detect } = data 
        if (typeof(Storage) !== 'undefined') {
            var userLocal = JSON.parse(localStorage.getItem('user'))
            if( userLocal && userLocal.id == user ){
                var { browser, browserMajorVersion, browserVersion, os, osVersion } = detect
                var clientServerSend = { browser, browserVersion, browserMajorVersion, os, osVersion }
                var { client } = instanceApp.props
                console.log(JSON.stringify(clientServerSend), JSON.stringify(client))
                if( JSON.stringify(clientServerSend) == JSON.stringify(client) ){
                    return false
                }
            }
            instanceApp.props.dispatch( addMessageSendToMe({ type: false, content: message, style, attachment, channel }) )
            return false
        } else {
            alert('このアプリケーションはこのブラウザをサポートしていません。アップグレードしてください')
        }
        
    })
    socket.on(EVENT.RESPONSE_TYPING, data => {
        console.log("vaof EVENT.RESPONSE_TYPING" + EVENT.RESPONSE_TYPING)
        var { user, channel } = data 
        if (typeof(Storage) !== 'undefined') {
            var userLocal = JSON.parse(localStorage.getItem('user'))
            if( userLocal && userLocal.id == user ){
                return false
            }else{
                console.log("cos theer show typing ")
                if(timeoutTyping){
                    clearTimeout(timeoutTyping)
                }
                var domTyping = document.getElementById("js-typing")
                if(domTyping.getAttribute("channel") == channel)
                domTyping.classList.add("show")
                /// scroll bottom 
                var inputMessage = document.getElementById("js-is-write-message")
                if(inputMessage.classList.contains("writing")){
                    document.getElementById('js-scroll-to-bottom').scrollTop  = document.getElementById('js-scroll-to-bottom').scrollHeight
                }
                var timeoutTyping = setTimeout(function() {
                    var domTyping = document.getElementById("js-typing")
                    if(domTyping.getAttribute("channel") == channel)
                    domTyping.classList.remove("show")
                }, 10000);
                return false
            }
        } else {
            alert('このアプリケーションはこのブラウザをサポートしていません。アップグレードしてください')
        }
        
    })
    socket.on(EVENT.RESPONSE_PEER, data => {
        console.log(data, "đã vào " + EVENT.RESPONSE_PEER)
        var peerid = { data }
        var call = peer.call(peerid, globalStream)
        call.on('stream', remoteStream => playStream('id-peer-remote', remoteStream))
    })
    socket.on(EVENT.REQUEST_GET_PEER, data => {
        console.log(data, "đã vào " + EVENT.REQUEST_GET_PEER)
        var peerid = document.getElementById("Application").setAttribute('data-peer'),
        detect = null
        /// get user
        if (typeof(Storage) !== 'undefined') {
            
            detect = JSON.parse(localStorage.getItem('detect'))
            user = JSON.parse(localStorage.getItem('user'))
            socket.emit(EVENT.RESPONSE_GET_PEER, { peerid, user, ...detect })
        }else{
            socket.emit(EVENT.RESPONSE_GET_PEER, null)
        }
    })
}
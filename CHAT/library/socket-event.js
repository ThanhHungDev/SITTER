var io,
CONFIG      = require("../config"),
mongoose    = require("mongoose"),
TokenAccess = require("../model/TokenAccess"),
Message     = require("../model/Message"),
Channel     = require("../model/Channel"),
EVENT       = CONFIG.EVENT
// listSocket = []

module.exports = function(_io) {
    io = _io
    socketConnecting()
};

function socketConnecting(){

    io.sockets.on( EVENT.CONNECTTION ,function(socket){ 

        console.log("have connect: " + socket.id + " " + CONFIG.EVENT.REQUEST_GET_CHANEL);
        // listSocket.push( socket.id )
        // /////////////////////////////////////////////////////
        try {
            disconnect(socket)
            sendMessageChat(socket)
            listenTyping(socket)
            listenUserOnline(socket)
            listenReadMesssage( socket )
        } catch (err) {
            console.log( err )
        }
        ////////////////////////////////////////////////////////
    })
}

function disconnect(socket){
    socket.on( EVENT.DISCONNECT, function () {
        var idUserDisconnect = 0
        // listSocket.splice( listSocket.indexOf(socket.id), 1 )
        console.log( EVENT.DISCONNECT + " đang set user không online")
        socket.leaveAll()
        /// 
        TokenAccess.findOne({ socket : socket.id }).
        then( token => {
            if( token ){
                token.online = false
                token.socket = ''
                token.peer = ''
                return token.save()
            }
            console.log("WARNING : not remove socket id disconnect " + socket.id, listSocket )
            return;
        })
        .then( token => {
            idUserDisconnect = token.user 
            /// user disconnect browser, need check user is online ? ( orther devide more ? )
            return TokenAccess.find({ user : idUserDisconnect, online : true })
        })
        .then( tokens => {
            if( tokens && tokens.length ){
                /// kiểm tra token còn sống không? nếu còn thì throw err khỏi emit
                /// nếu không còn sống thì vẫn emit user ngủm rồi và update về false 
                tokens.map( token_item => {
                    if( (new Date).getTime() - new Date(token_item.period).getTime() > 1000 * CONFIG.TimeExpireAccessToken ){
                        token_item.online = false
                        token_item.socket = ''
                        token_item.peer   = ''
                        token_item.save()
                    }else{
                        /// token còn sống và user online true 
                        throw new Error("ユーザーは何かのデバイスでオンラインです " + token_item.detect)
                    }
                })
            }
            return true
        })
        .then( () => {
             /// get all channel of user disconnect
            return Channel.find({ user : idUserDisconnect })
        })
        .then( channels => {
            
            return channels.map( channel => {
                
                var roomChannel = socket.adapter.rooms[channel.name]
                if (roomChannel && roomChannel.length) {
                    io.sockets.in(channel.name).emit(EVENT.USER_OFFLINE_NOTI, { user: idUserDisconnect });
                }
            })
        })
        .catch( err => {
            console.log("error disconnect" + err.message)
        })
    })
}


function sendMessageChat(socket){
    socket.on( EVENT.SEND_MESSAGE, data => {
        
        /// variable input
        var { message, style, attachment, channelId, access, browser, browserMajorVersion, 
            browserVersion, os, osVersion } = data,
        // { 'user-agent' : userAgent } = socket.request.headers,
        detectClient = { browser, browserMajorVersion, 
            browserVersion, os, osVersion } //userAgent

        /// check user auth
        var now = new Date
        var diffTime = now.getTime() - (CONFIG.TimeExpireAccessToken * 1000)
        // console.log( now )
        // console.log( diffTime )
        var gteDate = new Date( diffTime )
        // console.log( gteDate )
        var userIdSendMessage = null
        TokenAccess.findOne({ token : access, period: { $gte: gteDate }, detect: JSON.stringify({...detectClient }) })
        .then( tokenAccess => {
            if(!tokenAccess){
                console.log(access , "access send message to channel but not select show")
                throw new Error("トークンが失敗する")
            }
            //// auth có
            userIdSendMessage = tokenAccess.user
            return Channel.findOne({ _id: channelId, user: userIdSendMessage })
        })
        .then( channelResult => {
            console.log(channelId , "channel send message to channel but not select show", channelResult)
            if( !channelResult ){

                throw new Error("チャンネルがありません」")
            }
            saveMessage(userIdSendMessage, message, style, attachment, channelResult._id)
            console.log(" emit : " + EVENT.RESPONSE_MESSAGE + " / " + channelResult.name)
            io.in(channelResult.name).emit(EVENT.RESPONSE_MESSAGE, { user : parseInt(userIdSendMessage), token : access, message, style, attachment, channel: channelResult._id, detect: detectClient})
        })
        .catch( error => {
            console.log( error )
        })
    })
}

function listenTyping(socket){
    socket.on( EVENT.SEND_TYPING, data => {

        console.log(`${EVENT.SEND_TYPING} socket` + data)
        /// variable input
        var { channelId, access, browser, browserMajorVersion, 
            browserVersion, os, osVersion } = data,
        // { 'user-agent' : userAgent } = socket.request.headers,
        detectClient = { browser, browserMajorVersion, 
            browserVersion, os, osVersion } // userAgent

        /// check user auth
        var userIdSendMessage = null
        TokenAccess.findOne({ token : access, detect: JSON.stringify({...detectClient }) })
        .then( tokenAccess => {
            if(!tokenAccess){
                throw new Error("トークンが失敗する")
            }
            //// auth có
            userIdSendMessage = tokenAccess.user
            return Channel.findOne({ _id: channelId, user: userIdSendMessage })
        })
        .then( channelResult => {
            if( !channelResult ){
                throw new Error("チャンネルがありません」")
            }
            io.in(channelResult.name).emit(EVENT.RESPONSE_TYPING, { user : parseInt(userIdSendMessage), token : access, channel: channelResult._id })
        })
        .catch( error => {
            console.log( error )
        })
    })
}

function saveMessage(userId, message, style, attachment, channelId){
    var newMessage = new Message({
        user : userId,
        body: message,
        channel: channelId,
        style,
        attachment
    })
    if( userId.toString() == CONFIG.ID_ADMIN.toString() ){
        newMessage.readAdmin = true
    }
    return newMessage.save()
    .then(message => message )
    .catch( err => { console.log(err, "err save new"); return false })
}

function listenUserOnline( socket ){

    socket.on( EVENT.USER_ONLINE, data => {
        
        var { id, peer, access } = data
        console.log( "set 1 user đang online:  " + id + " " + EVENT.USER_ONLINE, access )
        /// update user online
        TokenAccess.findOne({ user : id, token: access })
        .then( token => {
            if( !token ){
                throw new Error("トークンが失敗する")
            }
            if(token.duplication){
                /// trong user online tự dưng có duplication 
                console.log("trong user online tự dưng có duplication ", token.socket)
                io.sockets.in(token.socket).emit(EVENT.DUPLICATION_TAB, { user: id })
                
            }
            token.online      = true
            token.socket      = socket.id
            token.peer        = peer
            token.duplication = false
            return token.save()
        })
        .then( userToken => {
            /// get all channel of user
            return Channel.find({ user : id })
        })
        .then( channels => {
            
            return channels.map( channel => {
                
                var roomChannel = socket.adapter.rooms[channel.name]
                if (roomChannel && roomChannel.length) {
                    io.sockets.in(channel.name).emit(EVENT.USER_ONLINE_NOTI, { user: id });
                }
                socket.join( channel.name )
            })
        })
        .catch(error => {
            console.log("none setting onl" + id + " " + peer + " " + error.message )
        })
    })
}

function listenReadMesssage( socket ){

    socket.on( EVENT.READ_MESSAGE_ALL, data => {
        
        console.log( data , EVENT.READ_MESSAGE_ALL)
        var { channelId, channelName , user } = data

        var objectUpdate = { read: true }
        if( user.toString() == CONFIG.ID_ADMIN.toString() ){

            objectUpdate = { read: true, readAdmin: true }
        }
        Message.updateMany( { channel: mongoose.Types.ObjectId(channelId) }, objectUpdate )
        .then( messages => {
            console.log( "update : ", messages)
        })
        .catch(err => {
            console.log( err.message )
        })
        io.in(channelName).emit(EVENT.READ_MESSAGE_ALL_RESPONSE, { message: "read all messge" })
    })
}
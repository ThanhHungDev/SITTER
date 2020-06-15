var Channel     = require("../model/Channel"),
    TokenAccess = require("../model/TokenAccess"),
    CONFIG      = require("../config"),
    Postgre     = require("../model/Postgre.js")

/// chưa sửa lại 
module.exports.findOneOrCreate = function( req, res ){

    /// laravel call to action
    var { localUserId, referenceUserId, refesh, browser, browserMajorVersion, 
        browserVersion, os, osVersion } = req.body,
        { 'user-agent': userAgent } = req.headers,
        detect                      = { browser, browserMajorVersion, browserVersion, 
                                            os, osVersion, userAgent },
        response = {}
    if(req.error){
        response = { code: 422, message: "入力エラーがありました", internal_message: "入力エラーがありました", 
        errors : [ req.error ] }
        return res.end(JSON.stringify(response))
    }
    
    /// find
    var channelNameTemp = null
    Postgre.TOKEN_REFESH.findOne({ where: { token: refesh, user_id: localUserId, detect: JSON.stringify(detect) } })
    .then( refeshData => {
        if( !refeshData ){
            throw new Error("token failure")
        }
        return getNameChanelByUserId( localUserId, referenceUserId )
    })
    .then( channelName => {
        channelNameTemp = channelName
        if(!channelName){
            throw new Error("không thể tạo channel name")
        }
        return Channel.findOne({ name: channelName })
    })
    .then( channel => {
        if( !channel ){
            /// new channel
            var newChannel = new Channel({
                name : channelNameTemp,
                user  : [ localUserId, referenceUserId]
            })
            return newChannel.save()
        }
        return channel;
    })
    .then( dataChannel => {
        response = { 
            code: 200, 
            message: "setting channel succcess", 
            internal_message: "setting channel succcess", 
            data : {
                name: dataChannel.name, 
                user: dataChannel.user
            }
        }
        return res.end(JSON.stringify(response))
    })
    .catch( error => {
        
        response = { 
            code: 500, 
            message: error.message, 
            internal_message: error.message
        }
        return res.end(JSON.stringify(response))
    })
}
/// chưa sửa lại 
module.exports.channels = function( req, res ){

    var { access, browser, browserMajorVersion, 
        browserVersion, os, osVersion } = req.body,
        { 'user-agent': userAgent } = req.headers,
        detect                      = { browser, browserMajorVersion, browserVersion, 
                                            os, osVersion, userAgent },
        response = {}
    if(req.error){
        response = { code: 422, message: "入力エラーがありました", internal_message: "入力エラーがありました", 
        errors : [ req.error ] }
        return res.end(JSON.stringify(response))
    }
    
    TokenAccess.findOne({ token: access })
    .then( token => {
        if( !token ){
            throw new Error("token không tồn tại")
        }
        var now = new Date
        var diffe = now.getTime() - new Date(token.period).getTime()
        if( diffe > 1000 * CONFIG.TimeExpireAccessToken ){
            console.log(diffe + " / " + 1000 * CONFIG.TimeExpireAccessToken + " / " + now + " / " + new Date(token.period) ,"token hết hạn")
            throw new Error("token hết hạn")
        }
        return Channel.channelsMessage( token.user )
    })
    .then( channels => {
        if( !channels ){
            throw new Error("không có channel")
        }
        response = { code: 200, message: "get channel succcess", internal_message: "get channel succcess", 
        data : channels }
        return res.end(JSON.stringify(response))
    })
    .catch( error => {
        console.log( { error, access, ...detect }, "oject không thể chứng thực fetch channel")
        response = { code: 500, message: error.message, 
            internal_message: error.message }
        return res.end(JSON.stringify(response))
    })
}


function getNameChanelByUserId( userId1, userId2 ){
    return Promise.all([
        Postgre.USER.findOne( { where: { id: userId1 } }), 
        Postgre.USER.findOne( { where: { id: userId2 } })
    ])
    .then( ([ user1, user2 ]) => {
        if( !user1 || !user2 ){
            throw new Error("không tìm thấy user getNameChanelByUserId")
        }
        var roles = [ 
            parseInt(CONFIG.CHANNEL.ROLE_USER.sitter), 
            parseInt(CONFIG.CHANNEL.ROLE_USER.employer),
            parseInt(CONFIG.CHANNEL.ROLE_USER.admin)
        ]
        var role_user1 = parseInt(user1.role_id),
            role_user2 = parseInt(user2.role_id)
            
        if( !roles.includes(role_user1) ){
            throw new Error("không tìm thấy user getNameChanelByUserId")
        }
        if( !roles.includes(role_user2) ){
            throw new Error("không tìm thấy user getNameChanelByUserId")
        }
        if( role_user1 == role_user2 ){
            throw new Error("không tìm thấy user getNameChanelByUserId")
        }
        var channelName = [ CONFIG.CHANNEL.SINGLE_PREFIX, null, null, null ]
        /// channel : 0 = prefix, 1 = sitter, 2 = employer, 3 = admin
        if( role_user1 == CONFIG.CHANNEL.ROLE_USER.sitter ){
            channelName[1] = user1.id
        }else if( role_user1 == CONFIG.CHANNEL.ROLE_USER.employer ){
            channelName[2] = user1.id
        }else if( role_user1 == CONFIG.CHANNEL.ROLE_USER.admin ){
            channelName[3] = user1.id
        }
        if( role_user2 == CONFIG.CHANNEL.ROLE_USER.sitter ){
            channelName[1] = user2.id
        }else if( role_user2 == CONFIG.CHANNEL.ROLE_USER.employer ){
            channelName[2] = user2.id
        }else if( role_user2 == CONFIG.CHANNEL.ROLE_USER.admin ){
            channelName[3] = user2.id
        }
        return channelName.join("-")
    })
    .catch( error => {
        return null
    })
}
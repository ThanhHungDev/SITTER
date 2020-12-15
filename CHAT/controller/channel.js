const Booking = require("../model/Booking");

var Channel     = require("../model/Channel"),
    TokenAccess = require("../model/TokenAccess"),
    Message     = require("../model/Message"),
    CONFIG      = require("../config"),
    Postgre     = require("../model/Postgre.js"),
    stripe      = require('stripe')(process.env.STRIPE_SECRET);

 
module.exports.findOneOrCreateChannel = function( req, res ){

    /// laravel call to action
    var { localUserId, referenceUserId, refesh, 
        message, date, type, salary, timeBegin, timeEnd } = req.body,
        response = {},
        conditionRefesh = { token: refesh, user_id: localUserId }
        
    if(req.error){
        response.code    = 422,
        response.message = response.internal_message = "入力エラーがありました"
        response.errors  = [ req.error ]
        return res.end(JSON.stringify(response))
    }
    
    Promise.all([
        Postgre.TOKEN_REFESH.findOne({ where: conditionRefesh }),
        getNameChanelByUserId( localUserId, referenceUserId ),
        Channel.findOne({ user: [localUserId, CONFIG.ID_ADMIN] })
    ])
    .then(([refeshData, channelName, channelAdmin ]) => {
        if( !refeshData ){
            throw new Error("トークンが失敗する")
        }
        if(!channelName){
            throw new Error("チャンネル名を作成できません")
        }
        if( !channelAdmin ){
            /// process async because channel admin can create
            getNameChanelByUserId( localUserId, CONFIG.ID_ADMIN )
            .then( channelAdminName  => {
                new Channel({
                    name: channelAdminName,
                    user: [ localUserId.toString(), CONFIG.ID_ADMIN.toString() ],
                    sort: 0
                }).save()
            })
        }
        return Promise.all([
            Channel.findOne({ name: channelName }),
            channelName
        ])
    })
    .then( ([channel, channelName]) => {

        if( !channel ){
            /// new channel
            return new Channel({
                name : channelName,
                user  : [ localUserId, referenceUserId]
            }).save()
        }
        if( channel.backup ){
            channel.backup = false
            
            return channel.save()
        }
        return channel
    })
    .then( channel => {
        if(message){
            message = {

                channel: channel._id,
                user: localUserId,
                body: message,
                read: false,
                style: ""
            }
            new Message(message).save()
        }
        return channel
    })

    .then(channel => {
        
        if( date ){
            return upsertBooking({ localUserId, referenceUserId, date, type, salary, timeBegin, timeEnd })
        }
        return channel
    })
    .then( result => {

        response.code    = 200,
        response.message = response.internal_message = "チャンネル成功の設定"
        return res.end(JSON.stringify(response))
    })
    .catch( error => {
        
        response.code    = 500,
        response.message = response.internal_message = error.message
        return res.end(JSON.stringify(response))
    })
}




module.exports.channels = async function( req, res ){

    var { userId, access, userIdActiveChannel } = req.body,
        response  = {}

        userId              = parseInt(userId) || 0
        userIdActiveChannel = parseInt(userIdActiveChannel) || 0

    if(req.error){
        response = { code: 422, message: "入力エラーがありました", internal_message: "入力エラーがありました", 
        errors : [ req.error ] }
        return res.end(JSON.stringify(response))
    }

    /// code use async - await
    try {
        var checkAuth  = TokenAccess.findOne({ token: access })
        var idsConnect = Channel.idFriendsbyUserId(userId)

        var [ token, idFriends ] = [await checkAuth, await idsConnect]
        if( !token ){
            throw new Error("トークンが失敗する")
        }
        if( !idFriends ){
            throw new Error("友達がいない")
        }
        
        if(!idFriends.length || !idFriends.includes((parseInt(CONFIG.ID_ADMIN) || 0 ))){
            console.log("===============================")
            console.log("add channel admin")
            var channelAdminName = await getNameChanelByUserId( parseInt(userId), CONFIG.ID_ADMIN )
            if(!channelAdminName){
                throw new Error('create channel admin fail')
            }
            var adminChannelObject = {
                name: channelAdminName,
                user: [ userId.toString(), CONFIG.ID_ADMIN.toString()],
                sort: 0
            }
            var channelAdmin = await Channel(adminChannelObject).save()
            idFriends.push(parseInt(CONFIG.ID_ADMIN))
        }
        var [ channels, friends, onlineFriends ] = await Promise.all([
            Channel.channelsMessageByUser( userId, false ),
            Channel.informationsFriendbyidFriends( idFriends ),
            TokenAccess.getUserOnlineByUserIds( idFriends ),
        ])

        var dataResult = []

        channels.map( (channel, index ) => {
            if(!channel){
                throw new Error("channel fail")
            }
            if(!channel.user){
                throw new Error("map func channels fail: " + channel._id, channel.channelName)
            }
            var activeChannel = friends[parseInt(channel.user)] 
                                ? (friends[parseInt(channel.user)].id == userIdActiveChannel)
                                : (index == 0)
            var online        = onlineFriends[parseInt(channel.user)]
            var json             = {
                _id        : channel._id,
                id         : channel._id,
                channelName: channel.channelName,
                message    : channel.message,
                user       : { ...friends[parseInt(channel.user)], online: online },
                isActive   : activeChannel
            }

            dataResult.push(json)
        })
        response = { 
            code            : 200,
            message         : "チャンネル成功",
            internal_message: "チャンネル成功",
            data            : dataResult,
            online          : onlineFriends,
            friends         : friends
        }
        return res.end(JSON.stringify(response))
        
        
    } catch (error) {
        console.log("channels error : " , error.message)
        response = { 
            code            : 500,
            message         : error.message,
            internal_message: error.message
        }
        return res.end(JSON.stringify(response))   
    }
}


module.exports.informationChannels = function( req, res ){

    var offset  = req.query.offset ? parseInt(req.query.offset) : 0,
        limit   = req.query.limit ? parseInt(req.query.limit) : 10,
        refresh = req.query.refresh ? req.query.refresh : null
    if( !refresh ){
        response = { 
            code: 302, 
            message: "入力エラーがありました", 
            internal_message: "入力エラーがありました"
        }
        return res.end(JSON.stringify(response))
    }
    var channelData          = null,
        totalChannelData     = null
    Promise.all([
        Postgre.TOKEN_REFESH.findOne({ where: { token: refresh } }),
        Channel.AdminGetTotalChannels(),
        Channel.AdminGetInformationChannels(limit, offset)
    ])
    .then( ([ admin, total, channels ]) => {
        if( !admin || admin.user_id != CONFIG.ID_ADMIN ){
            throw new Error("トークンが失敗する")
        }
        totalChannelData     = total
        channelData          = channels
        return Channel.AdminGetInformationUserInChannels(channels)
    })
    .then( users => {
        res.end(JSON.stringify({ code: 200, data : {  
            channels: channelData, 
            users: users, 
            total: totalChannelData
        }}))
    })
    .catch( error => {
        res.end(JSON.stringify({ code: 500, data: { error : error.message }}))
    })
}
module.exports.adminToggleChannel = function( req, res ){

    var { id, refresh } = req.body


    if( !id || !refresh ){
        response = { 
            code: 402, 
            message: "入力エラーがありました", 
            internal_message: "入力エラーがありました"
        }
        return res.end(JSON.stringify(response))
    }
    
    Postgre.TOKEN_REFESH.findOne({ where: { token: refresh } })
    .then( admin => {
        if( !admin || admin.user_id != CONFIG.ID_ADMIN ){
            throw new Error("トークンが失敗する")
        }
        return Channel.AdminToggleChannelId(id)
    })
    
    .then( result => {
        if( !result ){
            throw new Error("アクションは機能しません")
        }
        res.end(JSON.stringify({  code: 200, data: result }))
    })
    .catch( error => {
        res.end(JSON.stringify({  code: 500, error : error.message }))
    })
}
module.exports.adminUpdateChannel = function( req, res ){

    var idChannel = req.query.id ? req.query.id : "",
        refresh   = req.query.refresh ? req.query.refresh : null
    if( !idChannel || !refresh ){
        response = { 
            code: 402, 
            message: "入力エラーがありました", 
            internal_message: "入力エラーがありました"
        }
        return res.end(JSON.stringify(response))
    }
    
    Postgre.TOKEN_REFESH.findOne({ where: { token: refresh } })
    .then( admin => {
        if( !admin || admin.user_id != CONFIG.ID_ADMIN ){
            throw new Error("トークンが失敗する")
        }
        return Channel.updateMany({ backup: { $ne: true } }, { backup: false })
    })
    
    .then( result => {
        if( !result ){
            throw new Error("アクションは機能しません")
        }
        res.end(JSON.stringify({  result }))
    })
    .catch( error => {
        res.end(JSON.stringify({ error : error.message }))
    })
}

module.exports.readMessageChat = function( req, res ){

    var userId  = req.query.userId ? parseInt(req.query.userId) : 0,
        refresh = req.query.refresh ? req.query.refresh : null,
        channel = req.query.channel ? req.query.channel : null
        channelId = channel
    if( !userId || !refresh ){
        response = { 
            code: 402, 
            message: "入力エラーがありました", 
            internal_message: "入力エラーがありました"
        }
        return res.end(JSON.stringify(response))
    }


    Postgre.TOKEN_REFESH.findOne({ where: { token: refresh } })
    .then( admin => {
        if( !admin || admin.user_id != CONFIG.ID_ADMIN ){
            throw new Error("トークンが失敗する")
        }
        return Channel.idFriendsbyUserId(userId.toString())
    })
    .then( _idFriends => {
        return Promise.all([
            Channel.channelsMessageByUser( userId, undefined, [ CONFIG.ID_ADMIN ] ),
            Channel.informationsFriendbyidFriends( _idFriends ),
            Postgre.USER.findOne( { where: { id: userId } })
        ])
    })
    .then( ([ channels, friends, user ]) => {
        if( !channels ){
            throw new Error("チャンネルはありません")
        }
        if( !friends ){
            throw new Error("友達がいない")
        }
        var dataResult = []
        var hasActive = false
        channels.map( (channel, index ) => {

            var active = channelId ? channelId.toString() == channel._id.toString() : index == 0
            if( active ){
                hasActive = true
            }
            
            var json             = {}
                json._id         = channel._id
                json.id          = channel._id
                json.channelName = channel.channelName
                json.message     = channel.message
                json.isActive    = active
                json.user        = channel.user ? friends[parseInt(channel.user)] : null
            dataResult.push(json)
        })
        if( !hasActive && dataResult[0] ){
            dataResult[0].isActive    = true
        }
        response = { 
            code            : 200,
            message         : "チャンネル成功",
            internal_message: "チャンネル成功",
            data            : dataResult,
            user            : user
        }
        return res.end(JSON.stringify(response))
    })
    .catch( error => {
        console.log( "oject fetch channel fail")
        response = { code: 500, message: error.message, 
            internal_message: error.message }
        return res.end(JSON.stringify(response))
    })
}

module.exports.adminReadingChannel = function( req, res ){

    var { channel, refresh } = req.body

    if( !channel || !refresh ){
        response = { 
            code: 402, 
            message: "入力エラーがありました", 
            internal_message: "入力エラーがありました"
        }
        return res.end(JSON.stringify(response))
    }


    Postgre.TOKEN_REFESH.findOne({ where: { token: refresh } })
    .then( admin => {
        if( !admin || admin.user_id != CONFIG.ID_ADMIN ){
            throw new Error("トークンが失敗する")
        }
        return Message.updateMany({ channel, readAdmin: false }, { readAdmin: true })
    })
    .then( () => {
        
        response = { 
            code            : 200,
            message         : "チャンネル成功の読み取りメッセージを更新",
            internal_message: "チャンネル成功の読み取りメッセージを更新"
        }
        return res.end(JSON.stringify(response))
    })
    .catch( error => {
        console.log( "object fetch channel fail")
        response = { code: 500, message: error.message, 
            internal_message: error.message }
        return res.end(JSON.stringify(response))
    })
}

module.exports.adminGetUnreadMessage = function( req, res ){

    var refresh = req.query.refresh ? req.query.refresh : null
    if( !refresh ){
        response = { 
            code: 402, 
            message: "入力エラーがありました", 
            internal_message: "入力エラーがありました"
        }
        return res.end(JSON.stringify(response))
    }


    Postgre.TOKEN_REFESH.findOne({ where: { token: refresh } })
    .then( admin => {
        if( !admin || admin.user_id != CONFIG.ID_ADMIN ){
            throw new Error("トークンが失敗する")
        }
        return 
    })
    Promise.all([
        Message.AdminCountMessageAdminUnreadOfUser(),
        Message.AdminCountMessageAdminUnreadOfAdmin() 
    ])
    .then( ([ countUser, countAdmin ]) => {
        
        response = { 
            code            : 200,
            message         : "チャンネル成功の読み取りメッセージを更新",
            internal_message: "チャンネル成功の読み取りメッセージを更新",
            data: {
                countUser,
                countAdmin
            }
        }
        return res.end(JSON.stringify(response))
    })
    .catch( error => {
        console.log( "object fetch channel fail admin read message")
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
            
            throw new Error("チャンネル名の作成に失敗しました")
        }
        return renderNameChannelByUser( user1, user2 )
    })
    .catch( error => {
        return null
    })
}


function renderNameChannelByUser( user1, user2 ){
    var roles = [ 
        parseInt(CONFIG.CHANNEL.ROLE_USER.sitter), 
        parseInt(CONFIG.CHANNEL.ROLE_USER.employer),
        parseInt(CONFIG.CHANNEL.ROLE_USER.admin)
    ]
    
    var role_user1 = parseInt(user1.role_id),
        role_user2 = parseInt(user2.role_id)
    
    if( !roles.includes(role_user1) ){
        throw new Error("チャンネル名の作成に失敗しました")
    }
    if( !roles.includes(role_user2) ){
        throw new Error("チャンネル名の作成に失敗しました")
    }
    if( role_user1 == role_user2 ){
        throw new Error("チャンネル名の作成に失敗しました")
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
}




module.exports.information_friends = function( req, res ){

    var id = req.params.id ? req.params.id : null
    if( !id ){
        response = { 
            code: 402, 
            message: "入力エラーがありました", 
            internal_message: "入力エラーがありました"
        }
        return res.end(JSON.stringify(response))
    }
    return Channel.informationUserRelationUser(id)
    .then( channels => {
        
        response = { 
            code            : 200,
            message         : "チャンネル成功の読み取りメッセージを更新",
            internal_message: "チャンネル成功の読み取りメッセージを更新",
            data: channels
        }
        return res.end(JSON.stringify(response))
    })
    .catch( error => {
        console.log( "oject không thể fetch channel")
        response = { code: 500, message: error.message, 
            internal_message: error.message }
        return res.end(JSON.stringify(response))
    })
    
}

module.exports.createPaymentIntent = async function( req, res ){

    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1099,
        currency: 'jpy',
        // Verify your integration in this guide by including this parameter
        metadata: {integration_check: 'accept_a_payment'},
    });
    response = { 
        code: 200, 
        data: paymentIntent
    }
    return res.end(JSON.stringify(response))
}


module.exports.hiddenChannel = async function( req, res ){


    console.log("START HIDDEN CHANNEL CONTROLLER")

    var status = 200;
    
    if(req.error){
        response = { code: 422, message: "入力エラーがありました",
        errors : [ req.error ] }
        return res.end(JSON.stringify(response))
    }
    var { data }   = req.body,
        bookingIds = JSON.parse(data)

    /// lấy booking lên
    Postgre.BOOKING.findAll({ where: { id: bookingIds }}).then( bookings => {
        var usersChannel = bookings.map( booking => [ booking.sitter_id, booking.employer_id ])
        
        return Channel.findChannelByUsers(usersChannel)
    })
    .then(channels => {
        var channelIdsUpdate = channels.map(channel => {
            return channel._id
        })
        
        Message.updateMany({channel: { $in : channelIdsUpdate }}, { $set: { backup: true } }, (err, writeResult) => {
            console.log("đã update message", channelIdsUpdate)
        })
        var channelsUpdate = channels.map(_channel => {

            _channel.backup = true
            return _channel.save()
        })
        return Promise.all(channelsUpdate);
    })
    .then( updates => {
        
        response = { 
            code: 200, 
            bookingIds
        }
        return res.end(JSON.stringify(response)).status(status)
    })
    .catch( err => {
        response = { 
            code: 500, 
            data: bookingIds,
            error: err.message
        }
        return res.end(JSON.stringify(response)).status(status)
    })
}


//// function create booking from calendar
function upsertBooking(bookingInput ){

    var { localUserId, referenceUserId, date, type, salary, timeBegin, timeEnd } = bookingInput
    if( !date ){
        return null
    }

    Postgre.SCHEDULE.update(
        { status: CONFIG.SCHEDULE_STATUS.PICKED },
        { where: { work_date: [date], user_id: parseInt(referenceUserId) } }
    )
    return Postgre.BOOKING.upsert({
        employer_id    : localUserId,
        sitter_id      : referenceUserId,
        status         : CONFIG.BOOKING_STATUS.DEFAULT,
        sitter_accept  : CONFIG.BOOKING_STATUS.DEFAULT,
        employer_accept: CONFIG.BOOKING_STATUS.DEFAULT,
        cron_filter    : CONFIG.BOOKING_CRON_FILTER.DEFAULT
    }, {
        employer_id: localUserId,
        sitter_id  : referenceUserId,
        status     : CONFIG.BOOKING_STATUS.DEFAULT
    })
    .then( booking => {
        console.log(date, "date desert date boking")
        Postgre.DATE_BOOKING.desert({
            booking_id: booking.id,
            salary: salary,
            type: type,
            work_date: date,
            start: timeBegin,
            finish: timeEnd,
        }, {
            booking_id: booking.id
        })
        return true
    })
    .catch( err => {
        return false
    })
    
}
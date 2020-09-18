var io,
CONFIG      = require("../config"),
mongoose    = require("mongoose"),
TokenAccess = require("../model/TokenAccess"),
Message     = require("../model/Message"),
Channel     = require("../model/Channel"),
Postgre     = require("../model/Postgre.js"),
stripe      = require('stripe')(process.env.STRIPE_SECRET),
EVENT       = CONFIG.EVENT

var Op       = Postgre.Sequelize.Op;
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
            listenGetBooking( socket )
            listenChangeBooking( socket )
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

function listenGetBooking( socket ){

    socket.on( EVENT.USER_GET_BOOKING, data => {
        
        console.log( data , EVENT.USER_GET_BOOKING)

        
        return Postgre.BOOKING.findAll({ 
            where: { 
                [Op.or]: [
                    {
                        sitter_id: parseInt(data.id)
                    }, 
                    {
                        employer_id: parseInt(data.id)
                    }
                ]
            },
            // Add order conditions here....
            order: [
                ['sitter_id', 'ASC'],
                ['status', 'ASC'],
                ['created_at', 'DESC'],
            ],
            attributes : [
                Postgre.Sequelize.literal('DISTINCT ON("BOOKING"."sitter_id") *'),
                'id',
                'employer_id',
                'sitter_id',
                'status',
                'sitter_accept',
                'employer_accept',
                'created_at',
                'updated_at'
            ],
            include: [
                {model: Postgre.DATE_BOOKING }
            ]
        }, {raw: true}).then(bookings => {
            if(!bookings.length){
                throw Error('dont have booking')
            }

            var data = bookings.map(booking => {

                console.log(booking.DATE_BOOKING.toJSONFor())

                var start  = booking.DATE_BOOKING.start,
                    finish = booking.DATE_BOOKING.finish
                    start  = start.substring(0, start.length - 3)
                    finish = finish.substring(0, finish.length - 3)

                return { ...booking.DATE_BOOKING.toJSONFor(), ...booking.toJSONFor(), start, finish}
            })
            socket.emit(EVENT.RESPONSE_USER_GET_BOOKING, { bookings: data })
        })
        .catch( err => {
            console.log( err.message)
            socket.emit(EVENT.RESPONSE_USER_GET_BOOKING, { bookings: [] })
        })
    })
}

function listenChangeBooking( socket ){

    socket.on( EVENT.USER_CHANGE_BOOKING, data => {
        
        console.log( data , EVENT.USER_CHANGE_BOOKING)
        
        var { booking_id, status, sitter_accept, employer_accept, start, finish, work_date, tokenAccess, userId, channelName } = data

        var saccept = 0,
            eaccept = 0,
            isEdit  = 0

        var messageBody = "message default",
        channelId = null

        Promise.all([
            Channel.findOne({ name: channelName }),
            TokenAccess.findOne({ token: tokenAccess, user: userId+"" }),
            Postgre.BOOKING.findOne({ where: { id: booking_id } }),
            Postgre.DATE_BOOKING.findOne({ where: { booking_id } }),
            Postgre.USER.findOne({ where: { id: (parseInt(userId) || 0) } })
        ]).then(([ channel, tokenAccess, booking, date_booking, user ]) => {
            
            if(!channel){
                throw Error('channel not found')
            }
            if(!tokenAccess){
                throw Error('token not found')
            }
            if(!booking){
                throw Error('booking not found')
            }
            if( !user ){
                throw Error('user not found')
            }
            
            channelId = channel._id

            saccept = booking.sitter_accept
            eaccept = booking.employer_accept
            isEdit  = date_booking.start != start + ":00" || date_booking.finish != finish + ":00" || date_booking.work_date != work_date
            
            if(isEdit){
                if(sitter_accept){
                    saccept = 1
                    eaccept = 0
                }else{
                    saccept = 0
                    eaccept = 1
                }
            }else{
                if(sitter_accept) saccept = 1
                if(employer_accept) eaccept = 1
            }

            if( status ){
                saccept = 1
                eaccept = 1
                status  = 1
            }

            if( saccept ){
                messageBody = "シッターは仕事に受け入れられました \n " +
                                    "日：" + work_date + " \n " + 
                                    "開始時間：" + start + " \n " + 
                                    "終了時間：" + finish 
            }else  if( eaccept ){
                messageBody = "雇用主は求人リクエストを送信しました \n " +
                                    "日：" + work_date + " \n " + 
                                    "開始時間：" + start + " \n " + 
                                    "終了時間：" + finish 
            }else if( status ){
                messageBody = "雇用主はちょうど雇用を確認しました \n "
                                    "日：" + work_date + " \n " + 
                                    "開始時間：" + start + " \n " + 
                                    "終了時間：" + finish 
            }
            

            
            if(!status || !saccept || !eaccept){
                // none add payment
                var iterables = [
                    Postgre.DATE_BOOKING.update({start, finish, work_date}, { where: { booking_id } }),
                    Postgre.BOOKING.update({ status: status, sitter_accept: saccept, employer_accept: eaccept }, { where: { id: booking_id } }),
                    saveMessage(userId,messageBody, "", [], channel._id)
                ]
                return Promise.all(iterables)
            }
            
            return paymentEmployer(user, date_booking.toJSONFor()).then( payResult => {
                if(!payResult){
                    throw Error("支払いが失敗しました")
                }
                var iterables = [
                    Postgre.DATE_BOOKING.update({start, finish, work_date}, { where: { booking_id } }),
                    Postgre.BOOKING.update({ status: status, sitter_accept: saccept, employer_accept: eaccept }, { where: { id: booking_id } }),
                    saveMessage(userId,messageBody, "", [], channel._id)
                ]
                return Promise.all(iterables)
            })
        })
        .then(([update_date_booking, update_booking, message ]) => {

            var bookingUpdate = {
                booking_id, 
                status, 
                employer_accept: eaccept,
                sitter_accept  : saccept,
                start, 
                finish, 
                work_date
            }
            // socket.broadcast.to(channelName).emit(EVENT.RESPONSE_USER_CHANGE_BOOKING, bookingUpdate); 
            io.in(channelName).emit(EVENT.RESPONSE_USER_CHANGE_BOOKING, { user: parseInt(userId), token: tokenAccess, message: messageBody, style: "", attachment: [], channel: channelId, booking: bookingUpdate })
        })
        .catch( error => {
            console.log(error.message)
            socket.emit(EVENT.RESPONSE_USER_CHANGE_BOOKING_ERROR, { message : error.message , data: error })
        })
    })
}


function paymentEmployer(user, booking){
    
    var  [ differenceTime, price, vat, profit, stripeServFee ] = calculatorBill(booking)
    var order = {
        booking_id: booking.booking_id,
        salary    : booking.salary,
        diff_time : differenceTime,
        price     : price,
        vat       : vat,
        fee_stripe: stripeServFee,
        profit    : profit
    }
    var amount = (parseInt(order.price) || 0) + (parseInt(order.vat) || 0)
    var payIntent = {
        amount              : amount,
        currency            : 'jpy',
        payment_method_types: ['card'],
        customer            : user.stripe_account_id
    }


    return Promise.all([
        stripe.paymentIntents.create(payIntent),
        Postgre.ORDER.upsert(order, { booking_id: order.booking_id })
    ]).then( ([ paymentIntent, _order ]) => {
        var payment = {
            user_id       : user.id,
            order_id      : _order.id,
            stripe_payment: paymentIntent.id
        }
        return Postgre.PAYMENT.create(payment)
    })
    .catch( err => {
        var orderUpdate = { ...order, note: err.message, status: CONFIG.ORDER_STATUS.ERROR }
        Postgre.ORDER.upsert(orderUpdate, { booking_id: order.booking_id })
        return false
    })
}


function calculatorBill(booking ) {
    var start     = booking.start,
        finish    = booking.finish,
        salary    = booking.salary

    var differenceTime = 0,
        price          = 0,
        profit         = 0,
        stripeServFee  = 0,
        vat            = 0
    
    var [ fHour, fMinute ] = finish.split(':'),
        [ sHour, sMinute ] = start.split(':')
    var dateTimeFinish     = (new Date(1,1,2020, fHour, fMinute, 0)).getTime(),
        dateTimeStart      = (new Date(1,1,2020, sHour, sMinute, 0)).getTime()

    differenceTime = (dateTimeFinish - dateTimeStart)/ 1000 / 60 / 60
    price          = Math.floor(differenceTime * salary)
    profit         = Math.floor(price * 0.2)
    vat            = Math.floor((price + profit) * 0.1)
    stripeServFee  = Math.floor((price + profit + vat) * 0.036)

    return [ differenceTime, price, vat, profit, stripeServFee ] 
}
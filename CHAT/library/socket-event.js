var io,
CONFIG      = require("../config"),
mongoose    = require("mongoose"),
TokenAccess = require("../model/TokenAccess"),
Message     = require("../model/Message"),
Channel     = require("../model/Channel"),
Postgre     = require("../model/Postgre.js"),
stripe      = require('stripe')(process.env.STRIPE_SECRET),
EVENT       = CONFIG.EVENT

// var Op       = Postgre.Sequelize.Op;

module.exports = function(_io) {
    io = _io
    socketConnecting()
};

function socketConnecting(){

    io.sockets.on( EVENT.CONNECTTION ,function(socket){ 

        console.log("have connect: " + socket.id + " " + CONFIG.EVENT.REQUEST_GET_CHANEL);
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
    socket.on( EVENT.DISCONNECT, async function () {

        var idUserDisconnect = 0
        
        console.log( EVENT.DISCONNECT + " set user offline")
        socket.leaveAll()
        /// 
        TokenAccess.findOne({ socket : socket.id }).
        then( token => {
            if( !token ){
                throw new Error("WARNING : not remove socket id disconnect " + socket.id)
            }
            token.online = false
            token.socket = ''
            token.peer = ''
            return token.save()
        })
        .then( token => {
            idUserDisconnect = token.user 
            /// user disconnect browser, need check user is online ? ( orther devide more ? )
            return TokenAccess.find({ user: idUserDisconnect, online: true })
        })
        .then( tokens => {
            if( tokens && tokens.length ){
                /// check token period => emit user offline and update online to false 
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
            console.log("error disconnect " + err.message)
        })
    })
}


function sendMessageChat(socket){
    socket.on( EVENT.SEND_MESSAGE, async data => {
        
        /// variable input
        var { message, style, attachment, 
            channelId, access, detect } = data

        try {
            var [ tokenAccess, channelResult ] = await Promise.all([
                TokenAccess.findOne({ token : access, detect: detect }),
                Channel.findOne({ _id: channelId })
            ])

            if(!tokenAccess){

                throw new Error("トークンが失敗する")
            }

            if( !channelResult ){

                throw new Error("チャンネルがありません」")
            }
            
            
            console.log(" emit : " + EVENT.RESPONSE_MESSAGE + " / " + channelResult.name)
            var dataEmit = { 
                user: parseInt(tokenAccess.user), 
                token: access, 
                message, 
                style, 
                attachment, 
                channel: channelResult._id, 
                detect: detect
            }
            io.in(channelResult.name).emit(EVENT.RESPONSE_MESSAGE, dataEmit)
            return saveMessage(tokenAccess.user, message, style, attachment, channelResult._id)
        } catch (error) {
            console.log( error.message, "sendMessageChat" )
        }
    })
}

function listenTyping(socket){
    socket.on( EVENT.SEND_TYPING, data => {

        /// variable input
        var { channelId, channelName, access } = data

        console.log(`${EVENT.SEND_TYPING} socket access ${access}`, channelName )

        var dataEmit = {
            token : access, 
            channel: channelId
        }
        io.in(channelName).emit(EVENT.RESPONSE_TYPING, dataEmit )
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
    .catch( err => { console.log(err, "err save new"); return false })
}

function listenUserOnline( socket ){

    socket.on( EVENT.USER_ONLINE, async data => {
        
        var { id, peer, access } = data
        console.log( "set 1 user online:  " + id + " " + EVENT.USER_ONLINE, access )
        /// update user online
        try {
            var [ token, channels ] = await Promise.all([
                TokenAccess.findOne({ user : id, token: access }),
                Channel.find({ user : id })
            ])
            if( !token ){
                throw new Error("トークンが失敗する")
            }
            if(token.duplication){
                /// user online have duplication 
                console.log("user online have duplication ", token.socket)
                io.sockets.in(token.socket).emit(EVENT.DUPLICATION_TAB, { user: id })
                
            }
            token.online      = true
            token.socket      = socket.id
            token.peer        = peer
            token.duplication = false
            token = await token.save()

            return channels.map( channel => {
                
                var roomChannel = socket.adapter.rooms[channel.name]
                if (roomChannel && roomChannel.length) {
                    io.sockets.in(channel.name).emit(EVENT.USER_ONLINE_NOTI, { user: id });
                }
                socket.join( channel.name )
            })

        } catch (error) {
            console.log("none setting onl" + id + " " + peer + " " + error.message )
        }
    })
}

function listenReadMesssage( socket ){

    socket.on( EVENT.READ_MESSAGE_ALL, data => {
        
        var { channelId, channelName , user } = data
        console.log(`${EVENT.READ_MESSAGE_ALL} user ${user}`, channelName )

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

        var { type, id } = data
        var condition = {
            type, 
            id,
            modelDateBooking: Postgre.DATE_BOOKING,
            Sequelize: Postgre.Sequelize
        }

        return Postgre.BOOKING.getBookingsOfUsers(condition).then(bookings => {
            if(!bookings.length){
                throw Error('dont have booking')
            }

            var data = bookings.map(booking => {

                var start  = booking.DATE_BOOKING.start,
                    finish = booking.DATE_BOOKING.finish
                    start  = start.substring(0, start.length - 3)
                    finish = finish.substring(0, finish.length - 3)

                return { ...booking.DATE_BOOKING.toJSONFor(), ...booking.toJSONFor(), start, finish}
            })
            socket.emit(EVENT.RESPONSE_USER_GET_BOOKING, { bookings: data })
        })
        .catch( err => {
            
            socket.emit(EVENT.RESPONSE_USER_GET_BOOKING, { bookings: [] })
        })
    })
}

function listenChangeBooking( socket ){

    socket.on( EVENT.USER_CHANGE_BOOKING, async data => {
        
        console.log( data , EVENT.USER_CHANGE_BOOKING)
        
        var { 
            booking_id, 
            status, 
            sitter_accept, 
            employer_accept, 
            start, 
            finish, 
            work_date, 
            tokenAccess, 
            userId, 
            channelName 
        } = data


        var saccept = 0,
            eaccept = 0,
            isEdit  = 0

        try {
            
            var [ channel, tokenAccess, booking ] = await Promise.all([
                Channel.findOne({ name: channelName }), /// check channel chat
                TokenAccess.findOne({ token: tokenAccess, user: userId.toString() }), // check auth
                Postgre.BOOKING.getBookingByCondition({ booking_id, modelDateBooking: Postgre.DATE_BOOKING, modelUser: Postgre.USER })
            ])
            if(!channel){
                throw Error('channel not found')
            }
            if(!tokenAccess){
                throw Error('token not found')
            }
            if(!booking){
                throw Error('booking not found')
            }
            
            saccept = booking.sitter_accept
            eaccept = booking.employer_accept
            isEdit  = ( booking.DATE_BOOKING.start != start + ":00" || 
                        booking.DATE_BOOKING.finish != finish + ":00" || 
                        booking.DATE_BOOKING.work_date != work_date )
            
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

            
            if(eaccept){
                var nameReceive = booking.sitter.first_name + " " + booking.sitter.last_name
            }else{
                var nameReceive = booking.employer.first_name + " " + booking.employer.last_name
            }
            

            /// get message by condition
            var conditionCreateMessage = {
                sitter_accept: saccept, 
                employer_accept: eaccept,
                status: status,
                name: nameReceive,
                work_date,
                start,
                finish
            }
            var messageBody = createMessageBookingChat(conditionCreateMessage)

            if(status && saccept && eaccept){
                if( userId.toString() == booking.sitter.id.toString()){
                    var user = booking.sitter 
                }else {
                    var user = booking.employer
                }
                var date_booking = booking.DATE_BOOKING.toJSONFor()

                var payResult = await paymentEmployer(user, date_booking)
                if(!payResult){
                    throw Error("支払いが失敗しました")
                }
            }
            
            var iterables = [
                saveMessage(userId,messageBody, "", [], channel._id),
                Postgre.BOOKING.update({ status: status, sitter_accept: saccept, employer_accept: eaccept }, { where: { id: booking_id } }),
            ]
            if( isEdit ){
                iterables.push(
                    Postgre.DATE_BOOKING.update({start, finish, work_date}, { where: { booking_id } })
                )
            }
            var [ storeMessage, updateBooking, updateDateBooking ] = await Promise.all(iterables)

            var bookingUpdate = {
                booking_id, 
                status, 
                employer_accept: eaccept,
                sitter_accept  : saccept,
                start, 
                finish, 
                work_date
            }
            var dataEmit = { 
                user: parseInt(userId), 
                token: tokenAccess, 
                message: messageBody, 
                style: "", 
                attachment: [], 
                channel: channel._id, 
                booking: bookingUpdate 
            }
            io.in(channelName).emit(EVENT.RESPONSE_USER_CHANGE_BOOKING, dataEmit)
            
        } catch (error) {
            console.log(error.message)
            socket.emit(EVENT.RESPONSE_USER_CHANGE_BOOKING_ERROR, { message: error.message, data: error })
        }
    })
}

function createMessageBookingChat(condition){

    if( condition.sitter_accept ){

        return "["+ condition.name + "]さんに承認リクエストを送信しました。 \n " +
                "勤務日：" + condition.work_date + " \n " + 
                "開始時間：" + condition.start + " \n " + 
                "終了時間：" + condition.finish 
    }else if( condition.employer_accept || condition.status ){
        
        return "["+ condition.name + "]さんこんにちは！ \n " +
                "以下の日時で予約のリクエストがありました。 \n " +
                "勤務日：" + condition.work_date + " \n " + 
                "開始時間：" + condition.start + " \n " + 
                "終了時間：" + condition.finish 
    }
    return "○○○○ ○○○○"
}

async function paymentEmployer(user, booking){
    
    var  [ differenceTime, price, vat, 
        profitSit, profitEmp, stripeServFee ] = calculatorBill(booking)
    var order = {
        booking_id     : booking.booking_id,
        salary         : booking.salary,
        diff_time      : differenceTime,
        price          : price,
        vat            : vat,
        fee_stripe     : stripeServFee,
        profit_sitter  : profitSit,
        profit_employer: profitEmp
    }
    
    try {
        var paymentMethod = await stripe.paymentMethods.list({
        
            customer: user.stripe_account_id,
            type    : 'card',
        });
        /// create payment method
        var amount =    (parseInt(order.price) || 0) + 
                        (parseInt(order.vat) || 0) + 
                        (parseInt(order.profitEmployer) || 0)

        var paymentMethodData = paymentMethod.data[0]
        var payIntent = {
            
            payment_method_types: ['card'],
            amount              : amount,
            currency            : 'jpy',
            customer            : user.stripe_account_id,
            payment_method      : paymentMethodData.id,
            off_session         : true,
            confirm             : true,
        }

        var [ paymentIntent, _order ] = await Promise.all([
            stripe.paymentIntents.create(payIntent),
            Postgre.ORDER.upsert(order, { booking_id: order.booking_id })
        ])
        var payment = {
            user_id       : user.id,
            order_id      : _order.id,
            stripe_payment: paymentIntent.id,
        }
        return Postgre.PAYMENT.create(payment)

    } catch (error) {
        var orderUpdate = { ...order, note: error.message, status: CONFIG.ORDER_STATUS.ERROR }
        Postgre.ORDER.upsert(orderUpdate, { booking_id: order.booking_id })
        return false
    }
}


function calculatorBill(booking ) {


    /// phí sử dụng dịch vụ của sitter là 450 yên + ( 25% của tổng tiền lương )
    const FEE_DEFAULT_SITTER_MIN = 450
    const PERCENT_FEE_SITTER = 0.0025
    /// phí vat 10% 
    const PERCENT_VAT_DEFAULT = 0.1
    /// phí của employer 20% 
    const PERCENT_FEE_EMPLOYER = 0.2
    /// khi gửi lên stripe thì phí là 3.6%
    const PERCENT_FEE_STRIPE = 0.036

    var start     = booking.start,
        finish    = booking.finish,
        salary    = booking.salary

    var differenceTime = 0,
        price          = 0,
        profitSit      = 0,
        profitEmp      = 0,
        stripeServFee  = 0,
        vat            = 0
    
    var [ fHour, fMinute ] = finish.split(':'),
        [ sHour, sMinute ] = start.split(':')
    var dateTimeFinish     = (new Date(1,1,2020, fHour, fMinute, 0)).getTime(),
        dateTimeStart      = (new Date(1,1,2020, sHour, sMinute, 0)).getTime()

    differenceTime = (dateTimeFinish - dateTimeStart)/ 1000 / 60 / 60
    price          = Math.floor(differenceTime * salary)
    profitEmp      = Math.floor(price * PERCENT_FEE_EMPLOYER)
    profitSit      = Math.floor( price * PERCENT_FEE_SITTER ) + FEE_DEFAULT_SITTER_MIN
    vat            = Math.floor((price + profitEmp) * PERCENT_VAT_DEFAULT)
    stripeServFee  = Math.floor((price + profitEmp + vat) * PERCENT_FEE_STRIPE)

    return [ differenceTime, price, vat, profitSit, profitEmp, stripeServFee ] 
}
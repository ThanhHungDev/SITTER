var Channel     = require("../model/Channel"),
    TokenAccess = require("../model/TokenAccess"),
    crypto      = require('crypto'),
    mongoose    = require("mongoose"),
    CONFIG      = require("../config"),
    Postgre     = require("../model/Postgre.js")

module.exports.refesh = function( req, res ){

    var { userId, refesh, detect } = req.body,
        response                   = {}

    if(req.error){
        response = { code: 422, message: "入力エラーがありました", internal_message: "入力エラーがありました", 
        errors : [ req.error ] }
        return res.end(JSON.stringify(response))
    }

    var tokenRefesh = crypto.createHash('md5').update(
        JSON.stringify({ idUser: userId, detect, time: (new Date).getTime() })
    ).digest('hex')
    var tokenAccess = crypto.createHash('md5').update(
        JSON.stringify({ detect, time: (new Date).getTime() })
    ).digest('hex')

    /// kiểm tra token có trong db không
    /// lưu ý khi dùng postgree trong nodejs phải có where theo nguyên tắc của sequelize
    // console.log(userId, " userId không tìm thấy ")
    Postgre.TOKEN_REFESH.findOne({ where: { user_id: userId, token : refesh } }) ///, token : refesh <---- important
    .then( tokenData => {
        
        if(!tokenData){
            
            throw new Error("トークンが失敗する")
        }
        /// nếu có token thì tìm token access của user theo devide
        return TokenAccess.findOne({ user  : userId,  detect: detect })
    })
    .then( myTokenAccess => {
        if( myTokenAccess ){
            /// nếu có token theo devide thì xem token này có online true không? 
            if(myTokenAccess.online){

                /// lấy socket của token đã có đem emit về client đó cho client đó die
                var socket_duplication = myTokenAccess.socket
                console.log( "socket_duplication" , socket_duplication )
                myTokenAccess.duplication = true
            }
            myTokenAccess.token  = tokenAccess
            myTokenAccess.online = false
        }else{
            myTokenAccess = new TokenAccess({
                token : tokenAccess,
                user  : userId,
                online: false,
                detect: detect
            })
        }
        
        return myTokenAccess.save()
    })
    .then(tokenAccessCreate => {
        /// lấy dữ liệu user để start mới chat
        return Postgre.USER.findOne({ where: { id: userId } })
    })
    .then( userData => {
        if( !userData ){
            throw new Error("トークンが失敗する")
        }
        
        /// hoàn tất thì đổ dữ liệu ra
        response = { 
            code: 200, 
            message: "トークン成功を作成する", 
            internal_message: "トークン成功を作成する", 
            data : {
                tokenRefesh,
                tokenAccess,
                user  : userData.toJSONFor(),
                period: new Date,
                expire: CONFIG.TimeExpireAccessToken
            }
        }
        return res.end(JSON.stringify(response))
    })
    .catch( error => {
        response = { 
            code            : 500,
            message         : error.message,
            internal_message: error.message,
            errors          : [{ message : error.message } ]
        }
        return res.end(JSON.stringify(response))
    });
}




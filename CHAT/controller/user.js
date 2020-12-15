var Channel     = require("../model/Channel"),
    TokenAccess = require("../model/TokenAccess"),
    crypto      = require('crypto'),
    mongoose    = require("mongoose"),
    CONFIG      = require("../config"),
    Postgre     = require("../model/Postgre.js")

module.exports.refesh = async function( req, res ){

    var { userId, refesh, detect } = req.body,
        response                   = {}

    if(req.error){
        response = { code: 422, message: "入力エラーがありました", internal_message: "入力エラーがありました", 
        errors : [ req.error ] }
        return res.end(JSON.stringify(response))
    }

    try {
        // var tokenRefesh = crypto.createHash('md5').update(
        //     JSON.stringify({ idUser: userId, detect, time: (new Date).getTime() })
        // ).digest('hex')
        
        var tokenAccess = crypto.createHash('md5').update(
            JSON.stringify({ detect, time: (new Date).getTime() })
        ).digest('hex')
    
        /// check refesh in db and get access in mongodb
        var [ refeshToken, myTokenAccess ] = await Promise.all([
            Postgre.TOKEN_REFESH.findOne({ where: { user_id: userId, token : refesh} }), /// <---- important
            TokenAccess.findOne({ user  : userId,  detect: detect })
        ])
        if(!refeshToken){
                
            throw new Error("トークンが失敗する")
        }
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
        var [ tokenAccessStore, userData ] = await Promise.all([
            myTokenAccess.save(),
            Postgre.USER.findOne({ where: { id: userId } })
        ])
        
        if( !userData ){
            throw new Error("トークンが失敗する")
        }
        
        /// hoàn tất thì đổ dữ liệu ra
        response = { 
            code: 200, 
            message: "トークン成功を作成する", 
            internal_message: "トークン成功を作成する", 
            data : {
                tokenRefesh: refesh,
                tokenAccess,
                user  : userData.toJSONFor(),
                period: new Date,
                expire: CONFIG.TimeExpireAccessToken
            }
        }
        return res.end(JSON.stringify(response))
        
    } catch (error) {
        response = { 
            code            : 500,
            message         : error.message,
            internal_message: error.message,
            errors          : [{ message : error.message } ]
        }
        return res.end(JSON.stringify(response))
    }
}




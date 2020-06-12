var Channel     = require("../model/Channel"),
    TokenAccess = require("../model/TokenAccess"),
    crypto      = require('crypto'),
    mongoose    = require("mongoose"),
    CONFIG      = require("../config"),
    Postgre     = require("../model/Postgre.js")

module.exports.refesh = function( req, res ){

    var { userId, refesh, browser, browserMajorVersion, 
        browserVersion, os, osVersion } = req.body,
        { 'user-agent': userAgent } = req.headers,
        detect                      = { browser, browserMajorVersion, browserVersion, 
                                            os, osVersion, userAgent }
    var response = {}
    if(req.error){
        response = { code: 422, message: "入力エラーがありました", internal_message: "入力エラーがありました", 
        errors : [ req.error ] }
        return res.end(JSON.stringify(response))
    }

    var tokenRefesh = crypto.createHash('md5').update(
        JSON.stringify({ idUser: userId, ...detect, time: (new Date).getTime() })
    ).digest('hex')
    var tokenAccess = crypto.createHash('md5').update(
        JSON.stringify({ ... detect, time: (new Date).getTime() })
    ).digest('hex')

    /// kiểm tra token có trong db không
    /// lưu ý khi dùng postgree trong nodejs phải có where theo nguyên tắc của sequelize
    Postgre.TOKEN_REFESH.findOne({ where: { user_id: userId, token : refesh } })
    .then( tokenData => {
        if(!tokenData){
            throw new Error("token refesh không đúng")
        }
        /// nếu có token thì save mới token refesh
        /// sẽ không dùng token cũ
        tokenData.token = tokenRefesh 
        return tokenData.save()
    })
    .then( tokenRefeshUpdate => {
        /// sau khi upduate token refesh thì tạo mới 1 token access
        var newTokenAccess = new TokenAccess({
            token : tokenAccess,
            user  : userId,
            online: true,
            detect: JSON.stringify({ ...detect } )
        })
        return newTokenAccess.save()
    })
    .then(tokenAccessCreate => {
        /// lấy dữ liệu user để start mới chat
        return Postgre.USER.findOne({ where: { id: userId } })
    })
    .then( userData => {
        if( !userData ){
            throw new Error("token refesh không đúng")
        }
        /// hoàn tất thì đổ dữ liệu ra
        response = { 
            code: 200, 
            message: "refesh success", 
            internal_message: "tạo mới thành công 2 token", 
            data : {
                tokenRefesh, 
                tokenAccess, 
                user : userData.toJSONFor(),
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
            errors          : [{ message : error } ]
        }
        return res.end(JSON.stringify(response))
    });
}



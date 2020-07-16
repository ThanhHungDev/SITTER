var TokenAccess = require("../model/TokenAccess")

module.exports.removeAllTokenAccess = function( req, res ){

    TokenAccess.deleteMany({}, function(){
        res.send('remove all token')
    })
}

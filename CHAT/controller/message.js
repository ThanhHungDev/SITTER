var Message = require("../model/Message")

module.exports.removeAllMessage = function( req, res ){

    Message.deleteMany({}, function(){
        res.send('remove all Message')
    })
}

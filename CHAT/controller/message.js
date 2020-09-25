var Message = require("../model/Message")

module.exports.removeAllMessage = function( req, res ){

    Message.deleteMany({}, function(){
        res.send('remove all Message')
    })
}

module.exports.updateMessage = function( req, res ){

    return Message.find({ readAdmin: false }).then( data => {
        // Message.update({ readAdmin: false },{ $set: { read: true, readAdmin: true, backup: false }})
        var messagesUpdate = data.map( message => {
            message.read = true
            message.readAdmin = true
            message.backup = true
            return message.save()
        })
        Promise.all(messagesUpdate).then(update => {
            return res.send(data)
        })
    })
}
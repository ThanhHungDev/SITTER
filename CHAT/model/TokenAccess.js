

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    CONFIG   = require("../config")

const TokenAccessSchema = new Schema({
    
    token: {
        type: String,
        required: [ true, 'Token is required' ]
    },
    user: { 
        type   : String,
    },
    period: {
        type : Date
    },
    online: {
        type: Boolean
    },
    socket : {
        type: String
    },
    peer : {
        type: String
    },
    duplication : {
        type: Boolean
    },
    detect : { 
        type    : String
    },
    expireAt: {
        type: Date,
        default: Date.now,
        index: { expires: '100m' },
    },
})
TokenAccessSchema.pre('save', function (next) {
    
    this.period = new Date
    return next()
})



TokenAccessSchema.statics.getUserOnlineByUserIds = function( _userIds ){
    return this
    .find({ user : _userIds, online: true })
    .then( tokens => {
        var userOnline = []
        tokens.map( token => {
            if( (new Date).getTime() <= new Date(token.period).getTime() + (1000 * CONFIG.TimeExpireAccessToken)){
                if( !userOnline.includes(token.user) ){
                    
                    userOnline[token.user] = true
                }
            }
        })
        return userOnline
    })
}

module.exports = mongoose.model("token_access", TokenAccessSchema)

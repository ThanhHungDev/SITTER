

var mongoose = require('mongoose'),
    Schema = mongoose.Schema

const TokenAccessSchema = new Schema({
    
    token: {
        type: String,
        required: [ true, 'Token is required' ]
    },
    user: { 
        type   : String,
    },
    online : {
        type: Boolean
    },
    period: {
        type : Date
    },
    detect : { 
        type    : String
    }
})
TokenAccessSchema.pre('save', function (next) {
    
    this.period = new Date
    return next()
})

module.exports = mongoose.model("token_access", TokenAccessSchema)

const CONFIG = require('../config.js')

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema

const MessageSchema = new Schema(
    {
        channel : {
            type: Schema.Types.ObjectId,
            ref : 'channel'
        },
        user: { 
            type   : String,
        },
        body: {
            type: String,
            required: [ true, 'Body message is required' ]
        },
        read: {
            type: Boolean,
            default: false
        },
        readAdmin: {
            type: Boolean,
            default: false
        },
        style : {
            type: String
        },
        attachment: [
            { type: Object }
        ]
    }, {
        timestamps: true
    }
)
MessageSchema.statics.AdminCountMessageAdminUnreadOfUser = function(){
    
    return this
    .aggregate([
        { $match: { readAdmin: false } },
        {
            $lookup: {
                from: 'channels',
                let: { channelId: '$channel' },
                as: "channel",
                pipeline: [
                    { $match: { $expr: { $eq: ["$$channelId", "$_id"] }}},
                    { $match: { user: { $ne : CONFIG.ID_ADMIN.toString() } } },
                    { $limit : 100 },
                ]
            }
        },
        { $match: { "channel.0": { "$exists": true } } },
        {   
            $project: {
                id : true
            }
        },
        { $limit : 10 }
    ])
}

MessageSchema.statics.AdminCountMessageAdminUnreadOfAdmin = function(){
    
    return this
    .aggregate([
        { $match: { readAdmin: false } },
        {
            $lookup: {
                from: 'channels',
                let: { channelId: '$channel' },
                as: "channel",
                pipeline: [
                    { $match: { $expr: { $eq: ["$$channelId", "$_id"] }}},
                    { $match: { user: CONFIG.ID_ADMIN.toString() } },
                    { $limit : 100 },
                ]
            }
        },
        { $match: { "channel.0": { "$exists": true } } },
        {   
            $project: {
                id : true
            }
        },
        { $limit : 10 }
    ])
}


module.exports = mongoose.model("message", MessageSchema)



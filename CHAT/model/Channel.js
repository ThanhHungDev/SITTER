const CONFIG = require('../config.js');


var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    Postgre  = require("./Postgre.js"),
    Op       = Postgre.Sequelize.Op;

const ChannelSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Channel Name is required']
        },
        user: [
            {
                type: String
            }
        ],
        backup: {
            type   : Boolean,
            default: false /// channel xóa thì không xóa hẳn, thông thường là cột delete
        },
    }, {
    timestamps: true
})

ChannelSchema.statics.channelsMessageByUser = function( _userId, _backup, _idIgnore ){

    
    _userId = _userId.toString()
    var conditionChannel = { user: _userId }
    var conditionMessage = { backup: { $ne : true } }
    if( typeof _backup != "undefined" ){

        conditionChannel.backup = _backup
        
    }else{
        conditionMessage.backup = { $ne : null }
    }

    if( typeof _idIgnore == "undefined" ){
        _idIgnore = []
    }
    _idIgnore = _idIgnore.map( id => id.toString() )
    _idIgnore.push( _userId )

    return this
    .aggregate([
        { $match: conditionChannel },
        { $sort : { updatedAt : 1 } },
        { $limit : 100 },
        { $unwind: "$user" },
        { $match: { user: { $nin : _idIgnore }} },
        {
            $lookup: {
                from: 'messages',
                let: { channelId: '$_id' },
                as: "message",
                pipeline: [
                    { "$match": conditionMessage },
                    { "$match": { "$expr": { "$eq": ["$$channelId", "$channel"] }}},
                    { 
                        $project: { 
                            type: {
                                $cond: {
                                    if: { $eq: [ _userId, "$user" ] },
                                    then: true,
                                    else: false
                                }
                            }, 
                            content   : "$body",
                            read      : true,
                            readAdmin : true,
                            style     : true,
                            attachment: true,
                            channel   : true,
                            createdAt : true
                        }
                    },
                    { $limit : 1000 },
                ]
            }
        },
        { $sort: { "_id": -1 } },
        {   
            $project: {
                id : "$_id",
                channelName: "$name",
                user: true,
                message: true
            }
        },
        
    ])
}
ChannelSchema.statics.idFriendsbyUserId = function( _userId ){
    return this
    .aggregate([
        { $match: { user: _userId.toString() } },
        { $sort : { updatedAt : 1 } },
        { $limit : 100 },
        { $unwind: "$user" },
        { $match: { user: { $ne : _userId }} },
        { $project: { user: true } }
    ])
    .then( friends => {
        var idFriends = []
        friends.map( friend => {
            idFriends.push(parseInt(friend.user))
        })
        return idFriends
    })
}
ChannelSchema.statics.informationsFriendbyUserId = function( _userId ){
    return this
    .idFriendsbyUserId(_userId)
    .then( idFriends => {
        
        return Postgre.USER.findAll({ where: { id: { [Op.in]: idFriends } } })
    })
    .then( users => {
        
        var inforUsers = []
        users.map( user => {
            inforUsers[user.id] = user.toJSONFor()
        })
        return inforUsers
    })
}
ChannelSchema.statics.informationsFriendbyidFriends = function( idFriends ){

    return Postgre.USER.findAll({ where: { id: { [Op.in]: idFriends } } })
    .then( users => {
        
        var inforUsers = []
        
        users.map( user => {
            inforUsers[user.id] = user.toJSONFor()
        })
        return inforUsers
    })
}

ChannelSchema.statics.AdminGetInformationChannels = function( _limit, _offset ){
    
    return this
    .aggregate([
        { $match: { user: { $ne : CONFIG.ID_ADMIN.toString() } } },
        { $sort: { "_id": 1 } },
        { $skip: _offset },
        { $limit : _limit },
        {
            $lookup: {
                from: 'messages',
                let: { channelId: '$_id' },
                as: "message",
                pipeline: [
                    { $match: { "$expr": { "$eq": ["$$channelId", "$channel"] }}},
                    { 
                        $project: {
                            user      : true,
                            content   : "$body",
                            adminRead : true,
                            style     : true,
                            attachment: true,
                            createdAt : true
                        }
                    },
                    { $sort: { "_id": -1 } },
                    { $limit : 1 }
                ]
            }
        },
        {
            $lookup: {
                from: 'messages',
                let: { channelId: '$_id' },
                as: "unread",
                pipeline: [
                    { $match: { "$expr": { "$eq": ["$$channelId", "$channel"] }}},
                    { $sort: { "_id": -1 } },
                    { $match: { readAdmin : false }},
                    { 
                        $project: {
                            user      : true,
                            content   : "$body",
                            adminRead : true,
                            style     : true,
                            attachment: true,
                            createdAt : true
                        }
                    },
                ]
            }
        },
        {   
            $project: {
                id         : "$_id",
                channelName: "$name",
                user       : true,
                message    : true,
                backup     : true,
                unread     : true,
                total: true
            }
        },
        
    ])
}


ChannelSchema.statics.AdminGetTotalChannels = function(){
    
    return this
    .aggregate([
        { $match: { user: { $ne : CONFIG.ID_ADMIN.toString() } } },
        { $group: { _id: null, count: { $sum: 1 } } },
    ])
}

ChannelSchema.statics.AdminGetInformationUserInChannels = function( channels ){
    
    var idUsers = []
    for (let iChannel = 0; iChannel < channels.length; iChannel++) {
        const element = channels[iChannel];
        if(element && element.user ){
            idUsers = idUsers.concat(element.user)
        }
    }
    var ids = idUsers.map( id => parseInt(id))

    return Postgre.USER.findAll({ where: { id: { [Op.in]: ids } } })
}

ChannelSchema.statics.AdminToggleChannelId = function( id ){

    return this.findOne({ _id: id })
    .then( channel => {
        if( !channel ){
            throw new Error("không tìm thấy")
        }
        channel.backup = !channel.backup
        return channel.save()
    })
}
ChannelSchema.statics.adminGetMessageChat = function( _userId ){

    return this
    .aggregate([
        { $match: { user: _userId } },
        { $sort : { updatedAt : 1 } },
        { $limit : 100 },
        { $unwind: "$user" },
        { $match: { user: { $ne : _userId }} },
        {
            $lookup: {
                from: 'messages',
                let: { channelId: '$_id' },
                as: "message",
                pipeline: [
                    { "$match": { "$expr": { "$eq": ["$$channelId", "$channel"] }}},
                    { 
                        $project: { 
                            type: {
                                $cond: {
                                    if: { $eq: [ _userId, "$user" ] },
                                    then: true,
                                    else: false
                                }
                            }, 
                            content   : "$body",
                            read      : true,
                            style     : true,
                            attachment: true,
                            channel   : true
                        }
                    },
                    { $limit : 1000 },
                ]
            }
        },
        {   
            $project: {
                id : "$_id",
                channelName: "$name",
                user: true,
                message: true
            }
        }
    ])
}
ChannelSchema.statics.informationUserRelationUser = function( _userId ){
    
    _userId = _userId.toString()

    return this
    .idFriendsbyUserId(_userId)
    .then( idFriends => {
        
        return Postgre.USER.findAll({ where: { id: { [Op.in]: idFriends } } })
    })
}

ChannelSchema.statics.findChannelByUsers = function( users ){
    var objectOr = users.map( userBooking => {
        return { '$and': [ { user: userBooking[0].toString() },  { user: userBooking[1].toString() } ] }
    })

    return this.find({
        '$or': objectOr
    })
}

module.exports = mongoose.model("channel", ChannelSchema)


var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    Postgre  = require("./Postgre.js")

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
        ]
    }, {
    timestamps: true
})

ChannelSchema.statics.channelsMessage = function ( _userId ) {
    return this
    .aggregate([
        { 
            $match: { user: _userId }
        },
        { $sort : { updatedAt : 1 } },
        { $limit : 100 },
        {
            $lookup: {
                from: "messages",
                localField: "_id",
                foreignField: "channel",
                as: "message"
            }
        },
        { 
            $unwind: "$user"
        },
        { 
            $match: { user: { $ne : _userId }}
        },
        {   
            $project: {
                id : "$_id",
                channelName: "$name",
                user: true,
                "message.type": {
                    $cond: {
                        if: { $eq: [ _userId, "$message.user" ] },
                        then: true,
                        else: false
                    }
                },
                "message.content": true,
                "message.style": true,
                "message.attachment": true
            }
        }
        // {
        //     $lookup: {
        //         from: "user_accounts",
        //         localField: "user",
        //         foreignField: "_id",
        //         as: "user"
        //     }
        // },
    ])
    /// channel have field online
    // return { 
    //     name: userChat.name, avatar: userChat.avatar, 
    //     isOnline: true, isActive: channelActive, timeEndOnline: "2020-05-10 14:47:00", 
    //     message: channel.message }
    .then(lstChannel => {
        var lstUserChat = []
        lstChannel.map((channel, index) => {
            var userChat = channel.user
            // var channelActive = index == 0
            lstUserChat.push(parseInt(userChat))
        })
        var Op = Postgre.Sequelize.Op;
        return Postgre.USER.findAll(
            { 
                where: { 
                    id: { [Op.in]: lstUserChat } 
                }
            },
            // {
            //     attributes: [
            //         "id", "avatar", "first_name", "last_name",
            //         "email", "role_id", "first_name_furigana",
            //         "last_name_furigana", "birth_date", "gender",
            //         "created_at", "updated_at"
            //     ]
            // }
        )
        .then( users => {
            return { lstChannel, users }
        })
    })
    .then( data => {
        var channels = data.lstChannel
        var users = data.users
        channels.map((channel, index) => {
            var idUser = channel.user
            var userOfChannel = users.find(user => user.id == idUser)
            if( userOfChannel ){
                channel.user =  userOfChannel.toJSONFor()
            }
        })
        return channels
    })
    .catch( err => {
        console.log( err.message )
        return false
    })
}


module.exports = mongoose.model("channel", ChannelSchema)
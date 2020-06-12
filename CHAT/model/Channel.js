

var mongoose = require('mongoose'),
    Schema = mongoose.Schema

const ChannelSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Body message is required']
        },
        user: [
            {
                type: Schema.Types.ObjectId,
                ref : 'user_account'
            }
        ],
        online: {
            type : Date
        }
    }, {
    timestamps: true
})

module.exports = mongoose.model("channel", ChannelSchema)
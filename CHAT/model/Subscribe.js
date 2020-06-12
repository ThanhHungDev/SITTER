var mongoose = require("mongoose"),
    Schema   = mongoose.Schema
//// fomat 
// keys: {
//       p256dh: 'BG1uuOXabIuswPdgJI95UqCZ8T7Z5c6Kfk33Zm89R5v85OFIgOviY0oEY4_mDY5chwy_xl4fabeoMhy9ZS7gevs',
//       auth: 'ox77C03ckWhbujr1PMrHog'
//     }
const SubcribeSchema = new mongoose.Schema(
    {
        author: { 
            type   : mongoose.Schema.Types.ObjectId,
            ref    : 'user',
            default: null
        },
        endpoint : {
            type    : String,
            required: [true, "Endpoint can't be blank"],
        },
        keys: {
            type   : Object
        }
    },
    { 
        timestamps: true
    }
)

SubcribeSchema.methods.toJSONFor = function () {
    return {
        author  : this.author,
        endpoint: this.endpoint,
        keys    : this.keys
    }
}

module.exports = mongoose.model("subcriber", SubcribeSchema)

// if(typeof userDefault == undefined){
//   var userDefault = '[]'
// }
var conversations = null
import TYPE from "../action/type.js"

export default function (state = conversations, action) {
    switch (action.type) {
        
        case TYPE.CHANNEL_SET_ACTIVE:
            return state.map(item => {
                if (item.id === action.payload) {
                    return { ...item, isActive: true }
                }
                return { ...item, isActive: false }
            })
        
        case TYPE.CHANNEL_READ_MESSAGE : 
            return state.map( channel => {
                if(channel.isActive === true) {
                    var messages = channel.message
                        messages = messages.map( message => { return { ...message, readAdmin: true } })
                    return { ...channel, message : messages }
                }
                return channel
            })
        case TYPE.SETTER_CONVERSATION: 
            return action.payload

        case TYPE.FILTER_SORT_CONV: 

            var { ids, data } = action.payload
            console.log( action.payload )
            var conv          = []
            
            ids.map( (id, indexID )  => {
                
                if( id ){
                    var channelSort = data.find( channel =>channel.id == id )
                    if( channelSort ){
                        channelSort.isActive = false
                        conv.push( channelSort )
                    }
                }
            })
            if( conv[0] ){
                conv[0].isActive = true
            }
            return conv

        default:
            return state;
    }
}
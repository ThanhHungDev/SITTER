
// if(typeof userDefault == undefined){
//   var userDefault = '[]'
// }
var conversations = null
import TYPE from "../action/type.js"

export default function (state = conversations, action) {
    switch (action.type) {
        
        case TYPE.SETTER_CONVERSATION_BACKUP: 
            return action.payload

        default:
            return state
    }
}
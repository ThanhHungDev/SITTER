
// if(typeof userDefault == undefined){
//   var userDefault = '[]'
// }
var userChatDefault = [];
import TYPE from "../action/type.js";
import config from "../config"
export default function (state = userChatDefault, action) {
  switch (action.type) {
    case TYPE.CHANNEL.ADD_USER_ONLINE:
      return state.map( item => {
        if(item.user.id == action.payload) {
          return { ...item, user : { ... item.user, online : true } }
        }
        return { ...item }
      })
    case TYPE.CHANNEL.REMOVE_USER_ONLINE:
        return state.map( item => {
          if(item.user.id == action.payload) {
            return { ...item, user : { ... item.user, online : false } }
          }
          return { ...item }
        })

    case TYPE.CHAT.CHANGE_USER_CHAT_DEFAULT:
      return state.map( item => {
        if(item.id === action.payload) {
          return { ...item, isActive : true }
        }
        return { ...item, isActive : false }
      })
    case TYPE.CHANNEL.SETTER_CHANNEL:
      return action.payload
    case TYPE.CHANNEL.ADD_MESSAGE:
      return state.map( channel => {
        if(channel.isActive === true) {
          return { ...channel, message : [ ...channel.message, action.payload] }
        }
        return channel
      })
    case TYPE.CHANNEL.READ_ALL_MESSAGE_CHANNEL_ACTIVE:
      return state.map( channel => {
        if(channel.isActive === true) {
          var messages = channel.message
          messages = messages.map( message => { return { ...message, read: true } })
          return { ...channel, message : messages }
        }
        return channel
      })
    case TYPE.CHANNEL.ADD_MESSAGE_SEND_TO_ME:
      return state.map( channel => {
        if(channel.id === action.payload.channel) {
          return { ...channel, message : [ ...channel.message, action.payload] }
        }
        return channel
      })

    case TYPE.CHANNEL.SET_ACTIVE:
      var isChanged = false
      var newState = state.map( channel => {
        if( !isChanged && channel.channelName && channel.channelName.includes(action.payload.channelName)){
          isChanged = true
          return { ...channel, isActive : true }
        }
        return { ...channel, isActive : false }
      })
      if( isChanged ){
        return newState
      }
      return state
    default:
      return state;
  }
}
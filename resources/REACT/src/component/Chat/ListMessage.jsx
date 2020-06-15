import React, { Component } from "react"
import { connect } from "react-redux"
import HeadInfo from "./HeadInfo.jsx"
import MessageChat from "./MessageChat.jsx"
import InputSendChat from "./InputSendChat.jsx"
import MessageChatTyping from "./MessageChatTyping.jsx"
import "../../scss/chat/list-message.scss"

class ListMessage extends Component {

  componentDidMount(){
    document.getElementById('js-scroll-to-bottom').scrollTop  = document.getElementById('js-scroll-to-bottom').scrollHeight
    document.getElementById('js-scroll-to-bottom').addEventListener('scroll', (event) => {
      // handle the scroll event 
      var domIsWriting = document.getElementById("js-is-write-message")
      if(domIsWriting){
        domIsWriting.classList.remove("writing")
      }
    });
  }

  componentDidUpdate(){
    document.getElementById('js-scroll-to-bottom').scrollTop  = document.getElementById('js-scroll-to-bottom').scrollHeight
  }
  render() {
    
    console.log("render ListMessage")
    var { channels } = this.props
    var channelActiveChat = channels.find( channel => channel.isActive );

    if( channelActiveChat ){
      var { typing } = channelActiveChat
    }
    
    var messages = channelActiveChat && channelActiveChat.message;

    var { myinfo } = this.props
    return (
      <div className="component-list-message">
        <HeadInfo />
        <div className="wrapper-list-message" id="js-scroll-to-bottom">
          { messages && messages.map( 
            (message , key) => 
            <MessageChat 
              key={"message-chat" + key + channelActiveChat.id} 
              myinfo={myinfo} 
              message={message} 
              toUser={channelActiveChat} 
            /> 
          )}
          <MessageChatTyping toUser={channelActiveChat} />
        </div>
        <InputSendChat />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    channels: state.userChat
  }
}
export default connect(mapStateToProps)(ListMessage);

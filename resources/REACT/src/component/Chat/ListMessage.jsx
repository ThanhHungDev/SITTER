import React, { Component } from "react"
import { connect } from "react-redux"
import HeadInfo from "./HeadInfo.jsx"
import MessageChat from "./MessageChat.jsx"
import InputSendChat from "./InputSendChat.jsx"
import $ from "jquery"
import "../../scss/chat/list-message.scss"
import { listenScrollMessage } from "../../library/service.js"

class ListMessage extends Component {
    
    
    componentDidUpdate() {

        var { channels } = this.props
        var channelActiveChat = channels.find(channel => channel.isActive)

        var messages = channelActiveChat && channelActiveChat.message

        var lstMessage   = document.getElementById('js-scroll-to-bottom')
        if(lstMessage){
            
            $('#js-scroll-to-bottom').on('scroll', function(){
                listenScrollMessage(this, messages, channelActiveChat)
            })
        }
    }
    
    render() {

        var { channels } = this.props
        var channelActiveChat = channels.find(channel => channel.isActive);

        var messages = channelActiveChat && channelActiveChat.message;

        return (
            <div className="component-list-message">
                <HeadInfo />
                <div className="wrapper-list-message" id="js-scroll-to-bottom">
                    {messages && messages.map(
                        (message, key) =>
                            <MessageChat
                                key={"message-chat" + key + channelActiveChat.id}
                                message={message}
                                channelActiveChat={channelActiveChat}
                            />
                    )}
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

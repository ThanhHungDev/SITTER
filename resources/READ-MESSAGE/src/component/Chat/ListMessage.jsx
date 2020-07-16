import React, { Component } from "react"
import HeadInfo from "./HeadInfo.jsx"
import MessageChat from "./MessageChat.jsx"
import $ from "jquery"
import "../../scss/chat/list-message.scss"
import { listenScrollMessage } from "../../library/service.js"

class ListMessage extends Component {
    
    

    componentDidUpdate() {

        var { conversations } = this.props
        var channelActiveChat = conversations.find(channel => channel.isActive)

        var messages = channelActiveChat && channelActiveChat.message

        var lstMessage   = document.getElementById('js-scroll-to-bottom')
        if(lstMessage){
            
            $('#js-scroll-to-bottom').on('scroll', function(){
                listenScrollMessage(this, messages, channelActiveChat)
            })
        }
    }
    
    render() {

        var { conversations, auth } = this.props
        var channelActiveChat = conversations.find(channel => channel.isActive);

        var messages = channelActiveChat && channelActiveChat.message;

        return (
            <div className="component-list-message">
                <HeadInfo conversations={ conversations } />
                <div className="wrapper-list-message" id="js-scroll-to-bottom">
                    {messages && messages.map(
                        (message, key) =>
                            <MessageChat
                                key={"message-chat" + key + channelActiveChat.id}
                                auth={auth}
                                message={message}
                                channelActiveChat={channelActiveChat}
                            />
                    )}
                </div>
            </div>
        );
    }
}
export default ListMessage

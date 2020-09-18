import React, { Component } from "react"
class MessageChatTyping extends Component {
    render() {
        var { toUser } = this.props
        if (!toUser) {
            return null
        }
        var channelInfor = toUser;
        var userTyping = channelInfor.user
        var typeMessage = 'float-left ';
        return (
            <div id="js-typing" className="component-message-chat typing-chat-messsage" channel={toUser.id}>
                <div className={typeMessage + "chat-group"}>
                    
                    <div className="message-content typing-message">
                        
                        <div className="text">
                            <span className="typing-text">{userTyping.first_name && userTyping.last_name + " が入力しています "}</span>
                            <div className="ticontainer">
                                <div className="tiblock">
                                    <div className="tidot"></div>
                                    <div className="tidot"></div>
                                    <div className="tidot"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default MessageChatTyping;

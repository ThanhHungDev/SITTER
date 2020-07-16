import React, { Component } from "react"
import { connect } from "react-redux"
import TYPE from "../../action/type.js"
import CONFIG from "../../config"
class UserChat extends Component {

    changeActiveUser = ( e , id) => {

        e.props.dispatch({ type: TYPE.CHAT.CHANGE_USER_CHAT_DEFAULT, payload: id })
    }

    render() {
        var { channel }        = this.props,
            classActiveOnline  = channel.user.online ? ' active ' : '',
            classActiveMessage = channel.isActive ? ' active-message ' : ''

        var [lastItem] = channel.message.slice(-1)

        var munberNoneRead = channel.message.filter(message => !message.read && !message.type ).length

        return (
            <div className="component-user-chat-sidebar" >
                <div className={classActiveOnline + classActiveMessage + "user-chat"}
                    onClick={() => this.changeActiveUser(this, channel.id)} >
                    <figure className="state-avatar">
                        <img src={CONFIG.SERVER_PHP.URL + channel.user.avatar} alt="" />
                    </figure>
                    <div className="text-info">
                        <span className="name">{channel.user.first_name + " " + channel.user.last_name}</span>
                        { lastItem &&
                            <span className="last-message">{lastItem.content}</span>
                        }
                    </div>
                    { 
                        munberNoneRead ?
                        <i className="none-read-message">{munberNoneRead}</i> 
                        :
                        null
                    }
                </div>
            </div>
        );
    }
}
export default connect()(UserChat)
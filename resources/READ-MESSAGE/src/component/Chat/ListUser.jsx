import React, { Component } from "react"
import "../../scss/chat/list-user.scss"
import UserChat from "./UserChat.jsx"

class ListUser extends Component {

    render() {
        /// userChat được pass từ cha vào
        var { conversations } = this.props
        console.log(conversations)

        return (
            <div className="component-list-user">
                { 
                    conversations && 
                    conversations.map(
                        channel => 
                            <UserChat key={channel.id} channel={channel} />
                    ) 
                }
            </div>
        )
    }
}


export default ListUser;

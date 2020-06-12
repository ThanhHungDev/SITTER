import React, { Component } from "react"
import "../scss/chat/list-user.scss"
import UserChat from "./UserChat.jsx"

class ListUser extends Component {

    render() {
        /// userChat được pass từ cha vào
        var { usersChat } = this.props
        console.log("render list user")

        return (
            <div className="component-list-user">
                { usersChat && usersChat.map(user => <UserChat key={user.id} user={user} />) }
            </div>
        )
    }
}


export default ListUser;

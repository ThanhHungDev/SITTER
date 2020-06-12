import React, { Component } from "react";

// import SearchUser from "./SearchUser.jsx"
import ListUser from "./ListUser.jsx"
import "../scss/chat/sidebar.scss"

class SideBarChat extends Component {

    render() {
        console.log("render sidebar")
        var auth = { avatar: '', name: '' }
        var { user } = this.props
        if (user && user._id) {
            auth.avatar = user.avatar
            auth.name = user.name;
        }

        return (
            <div className="component-sidebar-chat">
                <div className="myinfo">
                    <div className="avatar">
                        <figure className="state-avatar active-online">
                            <img src={ myinfo.avatar } alt="" />
                        </figure>
                        <span className="name">{myinfo.name}</span>
                    </div>
                </div>
                <div className="list-user">
                    <ListUser usersChat={this.props.userChat} />
                </div>
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        user: state.users,
        client: state.client,
        userChat: state.userChat,
        socket: state.socket
    }
}
export default connect(mapStateToProps)(SideBarChat)

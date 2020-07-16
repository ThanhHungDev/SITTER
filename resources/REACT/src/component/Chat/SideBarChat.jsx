import React, { Component } from "react";
import { connect } from "react-redux"
// import SearchUser from "./SearchUser.jsx"
import ListUser from "./ListUser.jsx"
import "../../scss/chat/sidebar.scss"
import CONFIG from "../../config"

class SideBarChat extends Component {

    render() {
        console.log("render sidebar")
        var infor = { avatar: '', name: '' }
        var { auth } = this.props
        if (auth && auth.id) {
            infor.avatar = auth.avatar
            infor.name = auth.first_name + " " + auth.last_name 
        }

        return (
            <div className="component-sidebar-chat">
                <div className="myinfo">
                    <div className="avatar">
                        <figure className="state-avatar active-online">
                            <img src={ CONFIG.SERVER_PHP.URL + infor.avatar } alt="" />
                        </figure>
                        <span className="name">{infor.name}</span>
                    </div>
                </div>
                <div className="list-user">
                    <ListUser conversations={this.props.conversations} />
                </div>
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        auth: state.users,
        conversations: state.userChat
    }
}
export default connect(mapStateToProps)(SideBarChat)

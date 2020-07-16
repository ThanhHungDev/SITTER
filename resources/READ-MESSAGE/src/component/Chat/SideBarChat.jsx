import React, { Component } from "react"
// import SearchUser from "./SearchUser.jsx"
import ListUser from "./ListUser.jsx"
import "../../scss/chat/sidebar.scss"
import CONFIG from "../../config"
import Search from "./Search.jsx"

class SideBarChat extends Component {

    render() {

        console.log("render sidebar" )
        

        var infor = { avatar: '', name: '' }
        var { conversations, auth } = this.props
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
                    <Search />
                    {
                        conversations.length ? 
                        <ListUser conversations={conversations} />
                        : 
                        <div> 検索結果はありません </div>
                    }
                    
                </div>
            </div>
        );
    }
}
export default SideBarChat

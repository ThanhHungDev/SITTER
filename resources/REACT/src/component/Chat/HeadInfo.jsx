import React, { Component } from "react";
import { connect } from "react-redux"
import "../../scss/chat/head-info.scss"
import CONFIG from "../../config"
class HeadInfo extends Component {

	componentDidUpdate(){
		////set height component
        var sidebar = document.getElementsByClassName("component-sidebar-chat")
        if(sidebar.length){
            var messages = document.getElementsByClassName("component-list-message")
            if(messages.length){
                sidebar[0].style.height = messages[0].clientHeight + "px";  
            }
        }
	}
	
	render() {

		console.log("render head chat")
		var { channels } = this.props
		var channelActive = channels.find(channel => channel.isActive)

		if (!channelActive) {
			return null
		}
		var textOnline =  channelActive.user.online ? "オンライン" : "オフライン"

		

		return (
			<div className="component-head-info">

				<div className="user-active-chat">
					<figure className="state-avatar active-online">
						<img src={CONFIG.SERVER_PHP.URL + channelActive.user.avatar} alt="" />
					</figure>
					<div className="text-info">
						<span className="name">{channelActive.user.first_name + " " +channelActive.user.last_name}</span>
						<span className={(channelActive.user.online ? "active-now" : '') + " time-online"}>{textOnline}</span>
					</div>
				</div>
			</div>
		);
	}
}
let mapStateToProps = (state) => {
	return {
		channels: state.userChat,
		users   : state.users,
		user    : state.users,
		client  : state.client
	}
}
export default connect(mapStateToProps)(HeadInfo);
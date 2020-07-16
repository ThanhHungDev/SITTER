import React, { Component } from "react"
import "../../scss/chat/head-info.scss"
import CONFIG from "../../config"
class HeadInfo extends Component {

	render() {

		console.log("render head chat")
		var { conversations } = this.props
		var channelActive = conversations.find(channel => channel.isActive)

		if (!channelActive) {
			return null
		}

		return (
			<div className="component-head-info">

				<div className="user-active-chat">
					<figure className="state-avatar active-online">
						<img src={CONFIG.SERVER_PHP.URL + channelActive.user.avatar} alt="" />
					</figure>
					<div className="text-info">
						<span className="name">{channelActive.user.first_name + " " +channelActive.user.last_name}</span>
					</div>
				</div>
			</div>
		);
	}
}
export default HeadInfo
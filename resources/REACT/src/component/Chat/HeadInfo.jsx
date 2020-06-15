import React, { Component } from "react";
import { connect } from "react-redux"
import "../../scss/chat/head-info.scss"

class HeadInfo extends Component {

	renderTextEndTimeonline = time => {

		var endTime = new Date(time.replace(/-/g, "/"))
		var timeNow = new Date

		var diffTime = Math.abs(timeNow - endTime)
		diffTime = parseInt(diffTime)

		var diffTimeMinute = Math.round(diffTime / (1000 * 60))

		if (diffTimeMinute >= 60) {

			var diffTimeHour = Math.round(diffTimeMinute / 60)
			if ((diffTimeHour / 24) < 1) {
				return diffTimeHour + "時間前にアクティブ"
			}
			return Math.round(diffTimeHour / 24) + "日前にアクティブ"
		} else {
			return "アクティブ" + diffTimeMinute + "分前"
		}
	}

	handleCallerClick = event => {
		console.log("render lại head ìon")
		var { userChat } = this.props
		var userActiveChat = userChat.find(user => user.isActive)

		if (!userActiveChat) {
			alert("failling, you can f5 page")
			return null
		}

		caller(userActiveChat, this.props.user, this.props.client)
	}

	render() {

		console.log("render lại head ìon")
		var { channels } = this.props
		var channelActive = channels.find(channel => channel.isActive)

		if (!channelActive) {
			return null
		}

		var timeOnline = ''
		if ( channelActive.isOnline ){

			timeOnline = "オンライン"
		} else {

			timeOnline = 123; //this.renderTextEndTimeonline(channelActive.timeEndOnline)
		}


		return (
			<div className="component-head-info">

				<div className="user-active-chat">
					<figure className="state-avatar active-online">
						<img src={channelActive.avatar} alt="" />
					</figure>
					<div className="text-info">
						<span className="name">{channelActive.name}</span>
						<span className={(channelActive.isOnline ? "active-now" : '') + " time-online"}>{timeOnline}</span>
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
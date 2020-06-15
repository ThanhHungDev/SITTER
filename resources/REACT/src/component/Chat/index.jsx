import React, { Component } from "react";

// import SideBarChat from "./SideBarChat.jsx"
import ListMessage from "./ListMessage.jsx"
import { connect } from "react-redux"
import { changeChannelActive } from "../../action"
import { getAccessTokenByRefesh, resfeshTokenIfExpire, 
    fetchChannelMessage, createChannel } from "../../library/service.js"
import '../../scss/chat/chat.scss'
class Chat extends Component {

    constructor(props) {
        super(props)

    }

    componentDidMount() {
        console.log("chat page index componentDidMount")
        /// mỗi lần vào chat thì buộc phải có 1 refesh token. nếu không thì lỗi. 
        /// Dựa vào refesh token ta sẽ tạo ra 1 access token 
        /// song song việc fetch accesstoken thì lắng nghe trong socket nếu có 
        /// access token thì cho phép start chat
        var instanceChat     = this,
            TOKEN_REFESH_DOM = document.getElementById("TOKEN_REFESH"),
            { detect } = this.props

        if( TOKEN_REFESH_DOM ){
            /// fetch token access by token refesh 
            var refesh = TOKEN_REFESH_DOM.getAttribute('data-refesh'),
                userId = TOKEN_REFESH_DOM.getAttribute('data-user')
            if( userId && refesh ){

                getAccessTokenByRefesh( userId, refesh, detect, instanceChat )
            }
        }
        
    }
    componentDidUpdate() {
        console.log("chat page index componentDidUpdate")
    }

    // <button onClick={this.createChannelData}>click create channel</button>
    // createChannelData = event => {
    //     console.log(JSON.stringify(this.props.detect))
    //     createChannel( 2, 5, "00f004f5236799f14067e68633c9b2f5", this.props.detect)
    // }


    render() {
        console.log("render lại Chat")

        return (
            <div className="component-chat">
                <div className="bg-chat-temalate">
                    <div className="wrapper-page-chat">
                        {/* {/* <SideBarChat /> */}
                        <ListMessage />
                        
                    </div>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        detect       : state.client
    }
}
export default connect(mapStateToProps)(Chat)




// userChat: (3) [{
//     avatar: "/image/avatar-hero.jpg"
//     channelName: "consulting-web-design-5ed118a04fa75805b7e996fb"
//     id: "5ed118a04fa75805b7e996fd"
//     isActive: true
//     isOnline: true
//     message: (118) [
        
//         {type: true, content: "gfdgfdg", style: "", attachment: Array(0)}
//         {type: true, content: " 💝 ", style: "EMOJI", attachment: null}
//         {type: true, content: " 😄 ", style: "EMOJI", attachment: Array(0)}
//         {type: true, content: "event.png", style: "IMAGE", attachment: ["/uploads/1591540237064-image.png"] }
//         {…}, {…}, {…}, {…}, {…}, {…}]
//     name: "hùng đẹp trai"
//     timeEndOnline: "2020-05-10 14:47:00"
// }, {…}, {…}]
// users: {
//     avatar: "/image/avatar.jpg"
//     email: "jbtruongthanhhung@gmail.com"
//     name: "天沼澄子"
//     phones: [{…}]
//     tokens: {tokenRefesh: "cebbb0893682c378f4f4595d031d1e54", tokenAccess: "74222488d31e44d65dfa9053aa335073", period: "2020-06-13T02:31:15.597Z", expire: 60}
//     userType: "User"
//     _id: "5ed118a04fa75805b7e996fb"
// }
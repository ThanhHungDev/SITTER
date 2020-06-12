import React, { Component } from "react";

// import SideBarChat from "./SideBarChat.jsx"
// import ListMessage from "./ListMessage.jsx"
import { connect } from "react-redux"
import { changeChannelActive } from "../../action"
import { resfeshTokenExpire, fetchChannelMessage } from "../../library/helper.js"
import { getAccessTokenByRefesh, resfeshTokenIfExpire } from "../../library/service.js"
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
            { auth, detect } = this.props

        if( TOKEN_REFESH_DOM ){
            /// fetch token access by token refesh 
            var refesh = TOKEN_REFESH_DOM.getAttribute('data-refesh'),
                userId = TOKEN_REFESH_DOM.getAttribute('data-user')
            if( userId && refesh ){
                refesh = "df003646bbc474028967c8a59ff9164e"
                getAccessTokenByRefesh( userId, refesh, detect, instanceChat )
            }
        }
        /// khi có token access chúng ta cũng nên quan tâm access đó còn thời hạn sống không?
        if (auth) {
            resfeshTokenIfExpire( auth, instanceChat )
        }
    }
    componentDidUpdate() {
        console.log("chat page index componentDidUpdate")
        
        var { auth } = this.props,
            instanceChat = this

        if (auth) {
            resfeshTokenIfExpire( auth, instanceChat )
        }
        if ( !this.props.userChat.length ) {

            var dataFetchChannel = { access: user.tokens.tokenAccess, ...this.props.client }
            console.log(dataFetchChannel, " fetch channel ahihi ")
            fetchChannelMessage(dataFetchChannel, instance)
        }
    }


    render() {
        console.log("render lại Chat")

        return (
            <div className="component-chat">
                <div className="bg-chat-temalate">
                    <div className="wrapper-page-chat">
                        {/* <SideBarChat />
                        <ListMessage /> */}
                        hung chat
                    </div>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        auth    : state.users,
        detect  : state.client
    }
}
export default connect(mapStateToProps)(Chat)
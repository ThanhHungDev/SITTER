import React, { Component } from "react";

import SideBarChat from "./SideBarChat.jsx"
import ListMessage from "./ListMessage.jsx"
import '../../scss/chat/chat.scss'
import CONFIG from "../../config"
import { connect } from "react-redux"
import { setterUser, readAllCMessage, setterConversation, setterConversationBackup } from "../../action"

class Chat extends Component {

    
    componentDidMount() {
        /// fetch data with channel, id of url 
        //// .... 
        
        var TOKEN_REFESH_DOM = document.getElementById("TOKEN_REFESH")
        console.log(this.props, "vào đây r ")
        if( TOKEN_REFESH_DOM && !this.props.conversations ){
            /// fetch token access by token refesh 
            var refresh = TOKEN_REFESH_DOM.getAttribute('data-refesh'),
                userId  = TOKEN_REFESH_DOM.getAttribute('data-id'),
                channel = TOKEN_REFESH_DOM.getAttribute('data-channel')

            ///////////////////////////////////////////////////////
            // var name = 'id'
            // var url = window.location.href;
            // name = name.replace(/[\[\]]/g, '\\$&');
            // var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            //     results = regex.exec(url)
            // if (!results) userId = null
            // else if (!results[2]) userId = ''
            // else userId = decodeURIComponent(results[2].replace(/\+/g, ' '))

            // var name = 'refresh'
            // var url = window.location.href;
            // name = name.replace(/[\[\]]/g, '\\$&');
            // var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            //     results = regex.exec(url)
            // if (!results) userId = null
            // else if (!results[2]) refresh = ''
            // else refresh = decodeURIComponent(results[2].replace(/\+/g, ' '))

            // var name = 'channel'
            // var url = window.location.href;
            // name = name.replace(/[\[\]]/g, '\\$&');
            // var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            //     results = regex.exec(url)
            // if (!results) userId = null
            // else if (!results[2]) channel = ''
            // else channel = decodeURIComponent(results[2].replace(/\+/g, ' '))

            ////////////////////////////////////////////////////
            if( userId && refresh  ){

                

                var url    = new URL(CONFIG.SERVER.ASSET() + '/api/admin/read-message'),
                    params = { userId, refresh, channel }
                Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(response => {
                    
                    if (response.code != 200) {
                        throw new Error("token refesh không đúng")
                    }
                    this.props.dispatch(setterUser(response.user))
                    this.props.dispatch(setterConversation(response.data))
                    this.props.dispatch(setterConversationBackup(response.data))
                })
                .catch( error => {

                    alert( "エラーが発生しました。 後でもう一度やり直してください" )
                })
            }
        }
        
    }
    componentDidUpdate(){
        var TOKEN_REFESH_DOM = document.getElementById("TOKEN_REFESH")

        if( TOKEN_REFESH_DOM ){

            var refresh = TOKEN_REFESH_DOM.getAttribute('data-refesh')

            // var name = 'refresh'
            // var url = window.location.href;
            // name = name.replace(/[\[\]]/g, '\\$&');
            // var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            //     results = regex.exec(url)
            // if (!results) userId = null
            // else if (!results[2]) refresh = ''
            // else refresh = decodeURIComponent(results[2].replace(/\+/g, ' '))
        }
        if( this.props.conversations ){

            var { conversations } = this.props,
                channelActiveChat = conversations.find(channel => channel.isActive),
                messages          = channelActiveChat && channelActiveChat.message

            var existNoneRead = messages && messages.some( function( message ){
                
                return !message.readAdmin
            })
            
            
            if( existNoneRead ){
                
                var params = { channel: channelActiveChat.id, refresh }

                fetch(CONFIG.SERVER.ASSET() + '/api/admin/reading', {
                    method: 'PUT',
                    body: JSON.stringify(params),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(response => {
                    console.log(response)
                    if( response.code == 200 ){
                        this.props.dispatch(readAllCMessage())
                    }
                })
            }
        }
    }

    render() {
        console.log("render Chat")
        var { conversations, user } = this.props
        

        return (
            <div className="component-chat">
                <div className="bg-chat-temalate">
                    <div className="wrapper-page-chat">
                        {
                            conversations && user ? 
                            <div>
                                <SideBarChat conversations={ conversations } auth={ user } />
                                <ListMessage conversations={ conversations } auth={ user } />
                            </div>
                            : 
                            null
                        }
                        
                    </div>
                </div>
            </div>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        conversations: state.conversations,
        user         : state.user
    }
}
export default connect(mapStateToProps)(Chat)
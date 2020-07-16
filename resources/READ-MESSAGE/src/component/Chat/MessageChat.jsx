import React, { Component } from "react"
import '../../scss/chat/message-chat.scss'
import CONFIG from "../../config"
import { connect } from "react-redux"

class MessageChat extends Component {

    

    render() {
        var { auth, message, channelActiveChat } = this.props

        var myinfo = { avatar : '', name: '' }
        if( auth && auth.id ){
            myinfo.avatar = auth.avatar
            myinfo.name   = auth.first_name + " " + auth.last_name
        }

        if (!channelActiveChat) {
            return null
        }
        var userInfo = channelActiveChat.user

        if (!message.type) {
            var typeMessage = 'left-message ';
        } else {
            var typeMessage = 'right-message by-me ';
            userInfo = myinfo;
        }
        var { style } = message

        var TIME_DIE_FILE = 24 * 60 * 60 * 1000
        

        var time = new Date(message.createdAt)

        return (
            <div className="component-message-chat" >

                <div className={typeMessage + "chat-group"}>
                    <figure className="avatar">
                        <img src={CONFIG.SERVER_PHP.URL + userInfo.avatar} alt="" />
                    </figure>
                    <div className="message-content">
                        {
                            style == "IMAGE" &&
                            <div className={style} >
                                {
                                    message.attachment.map(( attachElement , index) => {
                                        if( attachElement.type == 'img' ){

                                            if( attachElement.time && attachElement.time - TIME_DIE_FILE < (new Date).getTime() ){
                                                return (
                                                    <div key={"wrapper-attachment" + index + attachElement.url } className="wrapper-attachment" >
                                                        <img src={CONFIG.SERVER_PHP.URL + attachElement.url } />
                                                        <a className="download-file-attachment" href={ CONFIG.SERVER_PHP.URL + attachElement.url } target="_blank" download>
                                                            <i className="hero-icon hero-cloud-download-outline"></i>
                                                        </a>
                                                    </div>
                                                )
                                            }
                                        }
                                        return (
                                            <div key={"wrapper-attachment" + index + CONFIG.SERVER_PHP.URL + "/image/folder.jpg" } className="wrapper-attachment">
                                                <img src={ CONFIG.SERVER_PHP.URL + "/image/folder.jpg" } />                                                
                                                <a className="download-file-attachment" href={ CONFIG.SERVER_PHP.URL + attachElement.url } target="_blank" download>
                                                    <i className="hero-icon hero-cloud-download-outline"></i>
                                                </a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                        <div className={style + " text"} >{message.content}</div>
                        {
                            message.createdAt ? 
                            <div className={style + " time-label"}>
                                { 
                                    time.getFullYear() 
                                    + "-" 
                                    + (time.getMonth() + 1) 
                                    + "-" 
                                    + time.getDate() 
                                    + " " 
                                    + time.getHours() 
                                    + ":" 
                                    + time.getMinutes() 
                                    + ":" 
                                    + time.getSeconds()
                                }
                            </div>
                            :
                            null
                        }
                        
                        <div className="read">
                            { 
                                !message.type && 
                                (
                                    !message.readAdmin ? 
                                    <i className='hero-icon hero-check-circle-outline'></i>
                                    : 
                                    <i className='hero-icon hero-check-circle'></i>
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default MessageChat
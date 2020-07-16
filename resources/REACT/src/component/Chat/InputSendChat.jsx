import React, { Component } from "react";
import { connect } from "react-redux";
import ListEmoji from "./ListEmoji.jsx";
import MessageChatTyping from "./MessageChatTyping.jsx"
import "../../scss/chat/input-send-chat.scss";
import config from "../../config/index.js"
import { sendMessageToChannel, saveBlobToServer, sendTypingMessageToChannel, 
    listenReadMessageNewUser 
} 
from "../../library/service.js"
import $ from "jquery"


class InputSendChat extends Component {
    constructor(props) {
        super(props);

        this.state = { sendChat: false }
        this.submitMessageChat = this.submitMessageChat.bind(this)
    }

    componentDidMount() {
        var sup = this;
        window.addEventListener(
            "paste",
            function (event) {
                // Handle the event
                sup.retrieveImageFromClipboardAsBlob(event)
            },
            false
        );
        
    }

    componentDidUpdate(){

        var { userChat } = this.props
        var channelActiveChat = userChat.find(channel => channel.isActive)

        var messages = channelActiveChat && channelActiveChat.message
        
        console.log("|input send chat componentDidUpdate")

        var domScroll = document.getElementById("js-scroll-to-bottom")
        var domWriter = document.getElementById("js-is-write-message")
        console.log(domScroll.scrollHeight, domScroll.clientHeight + "listenReadMessageNewUser")
        if( domWriter && domScroll && domScroll.scrollHeight == domScroll.clientHeight){
            listenReadMessageNewUser(messages, channelActiveChat)
        }else if(
            domScroll && 
            domWriter && 
            domWriter.classList.contains('follow-conversation')){
                
                document.getElementById('js-scroll-to-bottom').scrollTop = document.getElementById('js-scroll-to-bottom').scrollHeight
                if( $("#js-scroll-to-bottom img").length ){
                    $("#js-scroll-to-bottom img").one("load", function() {
                        document.getElementById('js-scroll-to-bottom').scrollTop = document.getElementById('js-scroll-to-bottom').scrollHeight
                    })
                }
            
        }
    }
    submitMessageChat = function (message, style, attachment) {
        console.log({ message, style, attachment })
        if (!message) {
            if (style == "IMAGE") {
                message = style
            } else {
                return false
            }
        }
        if (!style) {
            var emojiChat = config.EMOJIS.filter(emoji => emoji.symbol == message.trim())
            if (emojiChat.length) {
                style = "EMOJI"
            }
        }
        if (this.props.user) {
            
            /// là nếu token hết hạn thì phải refesh 
            // sau đó chưa dispacth ngay mà send chat đã. rồi dispatch 1 lần
            var { user } = this.props,
                instance = this,
                dataRefesh = false
            var diff = ((new Date).getTime() - new Date(user.tokens.period).getTime()) / 1000
            if (diff >= user.tokens.expire) {
                /// fetch new token
                dataRefesh = { userId: user.id, refesh: user.tokens.tokenRefesh, detect: this.props.client }
            }
            var messageSendToChannel = message
            var channelSend = this.props.userChat.find(channel => {
                return channel.isActive == true
            })
            var channelId = channelSend.id
            var tokenAccess = user.tokens.tokenAccess
            var detect = this.props.client
            sendMessageToChannel(messageSendToChannel, style, attachment, channelId, 
                tokenAccess, detect, instance, dataRefesh)
        }
    }

    handleSendEmojiSubmit = () => {
        var message = " 💝 "
        var style = "EMOJI"
        this.submitMessageChat(message, style, null)
    }
    handleSendMessageSubmit = () => {
        var style = ""
        var urlAttachment = []
        
        var imagesDom = document.getElementById("js-image--block")
        var images    = imagesDom.getElementsByClassName("remove-image")
        var message   = document.getElementById("js-input-chat").value
        
        if (images.length && !message) {
            message = 'IMAGE'
        }
        
        if (!message) {
            return false
        }
        document.getElementById("js-input-chat").value = ''

        if (images.length) {
            style = "IMAGE"
            
            urlAttachment = []
            for (let index_image_send = 0; index_image_send < images.length; index_image_send++) {
                if(!images[index_image_send].classList.contains('js-sign-url')){
                    urlAttachment.push(
                        {
                            url : images[index_image_send].getAttribute('data-url'),
                            type: images[index_image_send].getAttribute('data-type'),
                            time: (new Date).getTime()
                        }
                    )
                }
            }
        }
        document.getElementById("js-image--block").innerHTML = ''
        this.submitMessageChat(message, style, urlAttachment)
    }

    handleSendMessageDown = (event) => {

        if (event.keyCode == 13 && !event.shiftKey) {
            var style = ""
            var urlAttachment = []
            var imagesDom = document.getElementById("js-image--block")
            var images = imagesDom.getElementsByClassName("remove-image")
            if (images.length) {
                style = "IMAGE"
                urlAttachment = []
                for (let index_image_send = 0; index_image_send < images.length; index_image_send++) {
                    if(!images[index_image_send].classList.contains('js-sign-url')){
                        urlAttachment.push(
                            {
                                url : images[index_image_send].getAttribute('data-url'),
                                type: images[index_image_send].getAttribute('data-type'),
                                time: (new Date).getTime()
                            }
                        )
                    }
                }
            }
            document.getElementById("js-image--block").innerHTML = ''
            this.submitMessageChat(event.target.value, style, urlAttachment)
            this.setState({ sendChat: true });
            document.getElementById("js-input-chat").value = "";
            return false;
        }
        if (event.keyCode == 32) {
            var input = document.getElementById("js-input-chat")
            if (input) {
                var content = input.value;
                /// get word last
                var words = content.split(" ");
                var wordLastest = words[words.length - 1]
                //// check have sysbol 
                var emojisCall = config.EMOJIS.filter(item => item.sign == wordLastest)
                if (emojisCall.length) {
                    /// add icon 
                    var lastIndex = content.lastIndexOf(" ")
                    input.value = content.substring(0, lastIndex) + " " + emojisCall[0].symbol
                }
            }
        }
    };

    handleSendMessageUp = () => {
        if (this.state.sendChat) {
            this.setState({ sendChat: false });
            document.getElementById("js-input-chat").value = "";
        }
    }

    imageFileCallback = function (imgLoading) {
        // add it in editor
        imgLoading.width = 100;
        /// create wrapper img
        var wrapperImage = document.createElement("div");
        wrapperImage.className = "remove-image js-sign-url";
        wrapperImage.onclick = function () {
            this.remove();
        };
        wrapperImage.appendChild(imgLoading);
        document.getElementById("js-image--block").appendChild(wrapperImage);
    }
    retrieveImage = file => {

        console.log( file )
        var callback = this.imageFileCallback
        // Retrieve image on clipboard as blob
        saveBlobToServer(file)
        // Create an image
        var img = new Image();
        // Once the image loads, render the img on the canvas
        img.onload = function () {
            // Update dimensions of the canvas with the dimensions of the image
            callback(this);
        };
        // Crossbrowser support for URL
        var URLObj = window.URL || window.webkitURL;
        // Creates a DOMString containing a URL representing the object given in the parameter
        // namely the original Blob
        try {
            img.src = URLObj.createObjectURL(file);
        } catch (error) {
            console.log(error);
        }
    }
    retrieveFile = file => {

        var callback = this.imageFileCallback
        // Retrieve image on clipboard as blob
        saveBlobToServer(file)
        // Create an image
        var img = new Image();
        // Once the image loads, render the img on the canvas
        img.onload = function () {
            // Update dimensions of the canvas with the dimensions of the image
            callback(this);
        };
        // Crossbrowser support for URL
        var URLObj = window.URL || window.webkitURL;
        // Creates a DOMString containing a URL representing the object given in the parameter
        // namely the original Blob
        try {
            img.src = config.SERVER_PHP.URL + "/image/folder.jpg"
        } catch (error) {
            console.log(error);
        }
    }
    retrieveImageFromClipboardAsBlob = (pasteEvent) => {
        var callback = this.imageFileCallback
        if (!pasteEvent.clipboardData) {
            if (typeof callback == "function") {
                /// call calback function undefine
                callback(undefined);
            }
        }
        var items = pasteEvent.clipboardData.items;
        if (!items) {
            if (typeof callback == "function") {
                /// call calback function undefine
                callback(undefined);
            }
        }
        for (var i = 0; i < items.length; i++) {
            // Skip content if not image
            if (items[i].type.indexOf("image") == -1) continue;

            var file = items[i].getAsFile()
            this.retrieveImage( file )
        }
    }
    showListEmoji = (event) => {
        var emojis = document.getElementById("js-emojis");
        if (emojis) {
            emojis.classList.add("show-temp");
        }
    }
    handleSendChatClick = () => {

        //// send class is write message
        document.getElementById("js-is-write-message").classList.add("follow-conversation")

        ///send typing 
        var { user } = this.props
        var channelSend = this.props.userChat.find(channel => {
            return channel.isActive == true
        })
        var channelId = channelSend.id
        var tokenAccess = user.tokens.tokenAccess
        var detect = this.props.client

        sendTypingMessageToChannel( channelId, tokenAccess, detect )
    }
    chooseFile = () => {
        document.getElementById("image-file").click()
    }

    saveFile = () => {

        
        var file = document.getElementById("image-file").files[0] 
        var accept = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png|\.image)$/i
        if(accept.exec(file.name)){
            
            this.retrieveImage( file )
            return false
        }
        var accept = /(\.xls|\.xlsx|\.csv|\.pdf|\.doc|\.docx)$/i
        if(accept.exec(file.name)){ 

            this.retrieveFile( file )
            return false
        }
        alert("File extension not supported!")
    }
    

    render() {
        if (!this.props.user || !this.props.socket || !this.props.userChat.length) {
            return null
        }
        var { userChat } = this.props
        var channelActiveChat = userChat.find(channel => channel.isActive);

        return (
            <div id="js-is-write-message" className="component-input-send-chat follow-conversation">
                <MessageChatTyping toUser={channelActiveChat} />
                <div id="js-image--block" className="image-block"></div>
                <i
                    className="hero-icon hero-file-cloud-outline file"
                    onClick={ this.chooseFile }
                ></i>
                <input id="image-file" type="file" className="d-none" accept=".xls,.xlsx,.csv,image/*,.pdf,.doc,.docx" onChange={ this.saveFile } />
                <i
                    className="hero-icon hero-sticker-emoji emoticon"
                    onClick={this.showListEmoji}
                ></i>
                <textarea
                    id="js-input-chat"
                    onKeyDown={this.handleSendMessageDown}
                    onKeyUp={this.handleSendMessageUp}
                    onClick={this.handleSendChatClick}
                    placeholder="メッセージを書く..."
                ></textarea>
                <i className="hero-icon hero-send-outline send" onClick={this.handleSendMessageSubmit}></i>
                <i className="hero-icon hero-heart-multiple-outline react" onClick={this.handleSendEmojiSubmit}></i>
                <ListEmoji />
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        user    : state.users,
        client  : state.client,
        userChat: state.userChat,
        socket  : state.socket
    }
}
export default connect(mapStateToProps)(InputSendChat);

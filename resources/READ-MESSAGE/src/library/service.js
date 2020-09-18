
import $ from "jquery"

/// config global variable
var socket       = null,
    EVENT        = CONFIG_EVENT
/// end setting variable

export function listenScrollMessage(e, messages, channelActive ) { 
               
    if(!messages || !messages.length){
        return false
    }
    var domScroll = document.getElementById("js-scroll-to-bottom")
    console.log(domScroll.scrollHeight, domScroll.clientHeight + "listenScrollMessage")
    if ($(e).scrollTop() + 
        $(e).innerHeight() >=  
        $(e)[0].scrollHeight) { 
            /// check message unread
            var existNoneRead = messages.some( function( message ){
                
                return !message.readAdmin && !message.type
            })

            if( existNoneRead ){
                console.log(EVENT.READ_MESSAGE_ALL, "listenScrollMessage")
                var userLocal = JSON.parse(localStorage.getItem('user'))
                socket.emit(EVENT.READ_MESSAGE_ALL, { user : userLocal.id, channelId: channelActive.id, channelName: channelActive.channelName })
            }
    }
}


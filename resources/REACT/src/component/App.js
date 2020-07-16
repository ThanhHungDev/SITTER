import React, { Component } from "react"
import { connect } from 'react-redux'
import Chat from './Chat/index.jsx';
/// soccket 
import socketIOClient from "socket.io-client";
import { socketInitialConnect } from "../library/service.js"

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sendUserOnline : false
        }

        console.log(JSON.stringify(this.props.client))
        var instanceApp = this
        socketInitialConnect(socketIOClient, instanceApp)
    }

    componentDidUpdate() {
        var EVENT   = CONFIG_EVENT
        //var peerDom = document.getElementById("Application")
        if ( !this.state.sendUserOnline ) { // peerDom && peerDom.getAttribute('data-peer') &&
            if( this.props.auth && this.props.auth.fetched ){
                
                if (this.props.socket) {
                    
                    this.setState({ sendUserOnline: true }, function(){
                        this.props.socket.emit(EVENT.USER_ONLINE, { 
                            id    : this.props.auth.id,
                            peer  : "1234567890",
                            access: this.props.auth.tokens.tokenAccess
                        })
                    })
                }
            }
        }
    }
    render() {
        console.log("draw app")
        return (
            <div className="AppComponent" id="Application">
                <Chat />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        client: state.client,
        socket: state.socket,
        auth: state.users,
        userChat: state.userChat
    }
}
export default connect(mapStateToProps)(App);


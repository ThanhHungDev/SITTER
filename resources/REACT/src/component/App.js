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

        // console.log(JSON.stringify(this.props.client))
        var instanceApp = this
        socketInitialConnect(socketIOClient, instanceApp)
    }

    componentDidUpdate() {
        var EVENT   = CONFIG_EVENT
        
        if ( !this.state.sendUserOnline ) { 
            if( this.props.auth && this.props.auth.fetched ){
                
                if (this.props.socket) {
                    
                    this.setState({ sendUserOnline: true }, function(){
                        this.props.socket.emit(EVENT.USER_ONLINE, { 
                            id    : this.props.auth.id,
                            peer  : "1234567890",
                            access: this.props.auth.tokens.tokenAccess
                        })
                        this.props.socket.emit(EVENT.USER_GET_BOOKING, { id: this.props.auth.id, type: this.props.auth.role_id })
                    })
                }
            }
        }
    }
    render() {
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


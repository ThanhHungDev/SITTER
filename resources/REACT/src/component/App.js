import React, { Component } from "react"
import { connect } from 'react-redux'
import Chat from './Chat/index.jsx';
/// soccket 
import socketIOClient from "socket.io-client";
import { socketInitialConnect } from "../library/service.js"

class App extends Component {
  constructor(props) {
    super(props);
    var instanceApp = this
    socketInitialConnect(socketIOClient, instanceApp )
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
    client  : state.client
  }
}
export default connect (mapStateToProps)(App);


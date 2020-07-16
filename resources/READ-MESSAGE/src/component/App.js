import React, { Component } from "react"
import Chat from './Chat/index.jsx'

class App extends Component {
    
    render() {
        console.log("draw app")
        return (
            <div className="AppComponent" id="Application">
                <Chat />
            </div>
        );
    }
}

export default App


import React, { Component } from 'react'


const RoomContext = React.createContext();

 class RoomProvider extends Component {
    state={}
    render() {
        return (
            <RoomContext.Provider value={"halloh"} >
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}


const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext}
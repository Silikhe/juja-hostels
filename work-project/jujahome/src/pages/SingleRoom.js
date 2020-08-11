import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import  Burner from '../components/Burner'
import {RoomContext} from '../context'

export default class SingleRoom extends Component {
    constructor(props){
        super(props)
    //   console.log(this.props)
    this.state={
        slug:this.props.match.param.slug,
        defaultBcg
     }
    }

    static contextType = RoomContext


    // componentDidMount(){}
    render() {
        const {getRoom}  = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return  <div className="error">
                <h1>No such room could be found...</h1>
                <Link to ='/rooms' className='btn-primary'>
                    Back to rooms
                </Link>
            </div>
        }
        return (
            <div>
            Hello
            </div>
        )
    }
}

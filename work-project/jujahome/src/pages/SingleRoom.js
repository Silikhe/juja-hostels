import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import  Burner from '../components/Burner'
import {RoomContext} from '../context'

export default class SingleRoom extends Component {
    constructor(props){
        super(props)
      console.log(this.props)
    }
    componentDidMount(){}
    render() {
        return (
            <div>
            Hello
            </div>
        )
    }
}

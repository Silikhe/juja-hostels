import React, { Component } from 'react'
import Logo from './Logo/Logo'
import {FaAlignRight} from "react-icons/fa"
import {Link} from 'react-router-dom'


export default class Navbar extends Component {
    state={
        isOpen:false
    }

    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center"></div>
                <div className="nav-header"></div>
                <Link to="/">
                    <Logo className="nav-logo"/>
                </Link>
                <button type="button" className="nav-btn">
                    <FaAlignRight className="nav-icon"/>
                </button>
            </nav>
        )
    }
}

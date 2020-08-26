import React from 'react'
import "../../App.css"
import { Link } from 'react-router-dom'

export default function Logo() {
    return (
        <div className="logo">
            <Link to="/" className="nav-logo">
                  <h5>Hostels<span>.com</span></h5>
            </Link>
        </div>
    )
}

import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

export default function Logo() {
    return (
        <div className="logo">
            <Link to="/" className="nav-logo">
                  <span className="strokes">//</span> <span className="first">J</span><span className="second">HOSTELS</span>
            </Link>
        </div>
    )
}

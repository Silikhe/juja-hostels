import React from 'react'
import Hero from '../components/Hero'
import Burner from '../components/Burner'
import { Link } from 'react-router-dom'

export default function Rooms() {
    return (
        <Hero hero="roomsHero">
            <Burner title="Our Rooms" >
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </Burner>
        </Hero>
    )
}

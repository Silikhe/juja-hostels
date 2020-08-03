import React from 'react'
import Hero from '../components/Hero'
import Burner from '../components/Burner'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <Hero hero="defaultHero">
            <Burner title="Luxirous Rooms" subtitle="delux rooms starting at $122">
                <Link to="/rooms" className="btn-primary">
                    our rooms
                </Link>
            </Burner>
        </Hero>
    )
}

import React from 'react'
import Hero from '../components/Hero'
import Burner from '../components/Burner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

export default function Home() {
    return (
        <>
          <Hero hero="defaultHero">
                <Burner title="Furnished Rooms" subtitle="Fancy rooms starting at ksh 5000">
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                </Link>
                </Burner>
         </Hero>
         <Services/>
         <FeaturedRooms/>
        </>
    )
}

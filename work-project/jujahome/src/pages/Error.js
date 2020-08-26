import React from 'react'
import Hero from '../components/Hero'
import Burner from '../components/Burner'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <Hero hero="defaultHero">
            <Burner title="404" subtitle="Page Not Found">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </Burner>
        </Hero>

    )
}

import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Burner from '../components/Burner'
import { RoomContext } from '../context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        //   console.log(this.props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext


    // componentDidMount(){}
    render() {
        const { getRooms } = this.context;
        const room = getRooms(this.state.slug);
        // console.log(room)
        if (!room) {
            return (
                <div className="error">
                    <h1>No such room could be found...</h1>
                    <Link to='/rooms' className='btn-primary'>
                        Back to rooms
                </Link>
                </div>);
        }
        const { name,
            description,
            capacity,
            size,
            extras,
            breakfast,
            pets,
            images
        } = room
        return (
            <>
            <StyledHero img={images[0] || this.state.defaultBcg}>
                <Burner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">Back to rooms</Link>
                </Burner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {images.map((image, index) => {
                        return <img key={index} src={image} alt={name} />
                    })}
                </div>
            </section>
            </>
        )
    }
}

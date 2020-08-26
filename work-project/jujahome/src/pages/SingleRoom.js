import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import { Link } from 'react-router-dom'
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
            smoking,
            pets,
            images,
            price
        } = room
        const [firstImage, ...imgs] = images;
        return (
            <>
                <StyledHero img={firstImage || this.state.defaultBcg}>
                    <Burner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">Back to rooms</Link>
                    </Burner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {imgs.map((image, index) => {
                            return <img key={index} src={image} alt={name} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price : Ksh. {price}</h6>
                            <h6>size : {size}SQFT</h6>
                            <h6>
                                max capacity : {
                                    capacity > 1 ? `${capacity} people` : `${capacity} person`
                                }
                            </h6>
                            <h6>{
                                pets ? "Pets Allowed" : "No Pets Allowed"
                            }
                            </h6>
                            <h6>
                                {smoking && "free breakfast included"}
                            </h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>- {item}</li>
                        })}
                    </ul>
                </section>
             </>
        )
    }
}

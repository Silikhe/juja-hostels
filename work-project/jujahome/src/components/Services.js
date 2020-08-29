import React, { Component } from 'react'
import Title from './Title'
import { FaWifi, FaShuttleVan, FaBeer } from 'react-icons/fa'
// import {GiPadlock} from 'react-icons/go'
import { GiPadlock } from "react-icons/gi";


export default class Services extends Component {
    state = {
        services: [
            {
                icon: <GiPadlock />,
                title: "Security 24/7",
                info: "24 Hours security to safegourd your property, we value your safety."
            },
            {
                icon: <FaWifi />,
                title: "Wifi connectivity",
                info: "Our premises are equiped with inbuild wifi to easen your work and studies"
            },
            {
                icon: <FaShuttleVan />,
                title: "Transport and route",
                info: "We have good road and routes that connect to our premises for your confortability"
            },
            {
                icon: <FaBeer />,
                title: "Parties and Bash",
                info: "Parties are allowed without any interference. At your own cost"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title  title="services"/>
                <div className="services-center">
                    {this.state.services.map((item, index)=>{
                         return <article key={index} className="service">
                             <span>{item.icon}</span>
                             <h6>{item.title}</h6>
                             <p>{item.info}</p>
                         </article>
                    })}
                </div>
            </section>
        )
    }
}

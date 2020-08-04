import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'


export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Supamarket and shops",
                info: "Learn React by building a juja project. , Contentful headless CMS for data management, and Netlify to host the application."
            },
            {
                icon: <FaHiking />,
                title: "hiking",
                info: "Learn React by building a juja project. , Contentful headless CMS for data management, and Netlify to host the application."
            },
            {
                icon: <FaShuttleVan />,
                title: "Transport and route",
                info: "Learn React by building a juja project. , Contentful headless CMS for data management, and Netlify to host the application."
            },
            {
                icon: <FaBeer />,
                title: "drinks and party",
                info: "Learn React by building a juja project. , Contentful headless CMS for data management, and Netlify to host the application."
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

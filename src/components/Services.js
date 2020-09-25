import React, { useState } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from './Title';

const Services = () => {
    const [ services ] = useState([
        {
            icon: <FaCocktail />,
            title: "free cocktails",
            info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum."
        },
        {
            icon: <FaHiking />,
            title: "end less hiking",
            info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum."
        },
        {
            icon: <FaShuttleVan />,
            title: "free shuttle",
            info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum."
        },
        {
            icon: <FaBeer />,
            title: "free beer",
            info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum."
        }
    ])
    return (
        <section className="services">
            <Title title="services" />
            <div className="services-center">
                {
                    services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    } )
                }
            </div>
        </section>
    );
};

export default Services;
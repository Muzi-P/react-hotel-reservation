import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa"
export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free cocktails",
                info: "Id irure ipsum anim in mollit incididunt amet adipisicing sit aliquip laboris in esse. Magna Lorem culpa sit eu exercitation excepteur sit veniam consectetur ullamco aliqua consectetur. Id laboris cupidatat id esse anim ex ullamco officia sint officia."

            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Id irure ipsum anim in mollit incididunt amet adipisicing sit aliquip laboris in esse. Magna Lorem culpa sit eu exercitation excepteur sit veniam consectetur ullamco aliqua consectetur. Id laboris cupidatat id esse anim ex ullamco officia sint officia."

            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle ",
                info: "Id irure ipsum anim in mollit incididunt amet adipisicing sit aliquip laboris in esse. Magna Lorem culpa sit eu exercitation excepteur sit veniam consectetur ullamco aliqua consectetur. Id laboris cupidatat id esse anim ex ullamco officia sint officia."

            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: "Id irure ipsum anim in mollit incididunt amet adipisicing sit aliquip laboris in esse. Magna Lorem culpa sit eu exercitation excepteur sit veniam consectetur ullamco aliqua consectetur. Id laboris cupidatat id esse anim ex ullamco officia sint officia."

            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((service, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{service.icon}</span>
                                <h6>{service.title}</h6>
                                <p>{service.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}

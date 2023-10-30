import React from "react";
import Service from "./Service";

function Services() {
    const serviceList = [
        {
            name: 'Fullstack',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, facilis.',
            icon: 'icon-laptop'
        },
        {
            name: 'Backend',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, facilis.',
            icon: 'icon-pencil'
        },
        {
            name: 'Frontend',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, facilis.',
            icon: 'icon-camera'
        },
        {
            name: 'Soporte 24/7',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, facilis.',
            icon: 'icon-chat'
        }
    ]
    const services = serviceList.map(service =>
        <Service name={service.name} desc={service.desc} icon={service.icon} />
    )
    return (
        <section id="services" className="services-section section-padding bd-bottom" data-scroll-index="3">
            <div className="container">
                <div className="section-heading mb-40 text-center wow fadeInUp" data-wow-delay="200ms"
                    data-wow-duration="1000ms">
                    <h2>Exceptional Services</h2>
                </div>
                <div className="row g-4">
                    {services}
                </div>
            </div>
        </section>
    );
};

export default Services;
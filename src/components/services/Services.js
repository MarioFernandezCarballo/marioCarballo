import React from "react";
import Service from "./Service";

function Services() {
    const serviceList = [
        {
            name: 'Fullstack',
            desc: 'El pack completo. Solo explícame tu idea.',
            icon: 'icon-laptop'
        },
        {
            name: 'Backend',
            desc: 'Computación optimizada, soluciones rápidas y escalables.',
            icon: 'icon-pencil'
        },
        {
            name: 'Frontend',
            desc: 'Páginas responsivas e increíble experiencia de usuario.',
            icon: 'icon-camera'
        },
        {
            name: 'Tratamiento de datos',
            desc: 'La información como más te guste.',
            icon: 'icon-bargraph'
        },
        {
            name: 'Troubleshoot',
            desc: 'Cazando los problemas.',
            icon: 'icon-scope'
        },
        {
            name: 'Soporte 24/7',
            desc: 'Cuando lo necesites, lo que necesites.',
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
                    <h2>Servicios</h2>
                </div>
                <div className="row g-4">
                    {services}
                </div>
            </div>
        </section>
    );
};

export default Services;
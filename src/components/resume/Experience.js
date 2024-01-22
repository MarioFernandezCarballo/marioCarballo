import React from "react";
import Job from "./Job";

function Experience() {
    const jobList = [
        {
            dates: "Octubre 2023 - presente",
            name: "Desarrolador de Software",
            desc: "Soluciones Fullstack, para web o app móvil",
            link: "#"
        },
        {
            dates: "Enero 2017 - Junio 2023",
            name: "Ingeniero en el Centro Espacial Europeo",
            desc: "Ingeniero de Proyectos en soluciones industriales para el sector espacial con base en el Centro Espacial de Guayana en Kourou",
            link: "https://www.gtd.es"
        },
        {
            dates: "Mayo 2014 - Marzo 2016",
            name: "Ingeniero de automatización",
            desc: "Ingeniero de Automatización diseñando, programando e integrando soluciones industriales para clientes como REANULT, COMAU o KUKA.",
            link: "https://metrolec.es/"
        },
    ]

    const jobs = jobList.map(job =>
        <Job dates={job.dates} name={job.name} desc={job.desc} link={job.link}/>       
    )
    return (
        <div className="col-md-6 wow fadeInLeft mario-experience" data-wow-delay="200ms" data-wow-duration="1000ms">
            <div className="section-heading mb-40">
                <h2>Experiencia</h2>
            </div>
            <ul className="exp-list">
                {jobs}
            </ul>
        </div>
    )
}

export default Experience
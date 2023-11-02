import React from "react";
import Project from "./Project";

function Portfolio() {
    const projectList = [
        {
            field: 'Fullstack DataAnalysis',
            img: 'img/portfolio/ibericon.png',
            name: 'Liga Ibericon',
            desc: 'https://liga.ibericon.com'
        },
        {
            field: 'Fullstack DataAnalysis',
            img: 'img/portfolio/rlkt.png',
            name: 'Ranking Latam KT',
            desc: 'https://rankinglatamkt.com'
        },
        {
            field: 'Fullstack',
            img: 'img/portfolio/historias.png',
            name: 'De historias y voces',
            desc: 'https://podcast.mariocarballo.es'
        },
    ]

    const projects = projectList.map(project =>
        <Project field={project.field} img={project.img} name={project.name} desc={project.desc}/>
    )
    return (
        <section id="portfolio" className="portfolio-section section-padding bd-bottom" data-scroll-index="4">
            <div className="container">
                <div className="section-heading text-center mb-40 wow fadeInUp">
                    <h2>Portfolio</h2>
                </div>
                <div className="portfolio-wrapper">
                    <div className="row portfolio-items">
                        {projects}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;
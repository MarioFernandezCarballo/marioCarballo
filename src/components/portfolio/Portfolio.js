import React from "react";
import Project from "./Project";

function Portfolio() {

    return (
        <section id="portfolio" className="portfolio-section section-padding bd-bottom" data-scroll-index="4">
            <div className="container">
                <div className="section-heading text-center mb-40 wow fadeInUp">
                    <h2>Portfolio</h2>
                </div>
                <div className="portfolio-wrapper">
                    <div className="row portfolio-items">
                        <Project field="Fullstack DataAnalysis" img="img/portfolio/ibericon.png" name="Liga Ibericon" desc="https://liga.ibericon.com"/>
                        <Project field="Fullstack DataAnalysis" img="img/portfolio/rlkt.png" name="Ranking Latam KT" desc="https://rankinglatamkt.com"/>
                        <Project field="Fullstack" img="img/portfolio/historias.png" name="De historias y voces" desc="https://podcast.mariocarballo.es"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;
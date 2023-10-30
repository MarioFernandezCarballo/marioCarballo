import React from "react";
import Project from "./Project";

function Portfolio() {

    return (
        <section id="portfolio" className="portfolio-section section-padding bd-bottom" data-scroll-index="4">
            <div className="container">
                <div className="section-heading text-center mb-40 wow fadeInUp">
                    <h2>Excellence in Display</h2>
                </div>
                <div className="portfolio-wrapper">
                    <div className="row portfolio-items">
                        <Project field="photography" img="img/portfolio/1.jpg" name="Fotitos" desc="Photography"/>
                        <Project field="marketing" img="img/portfolio/2.jpg" name="Vendemos" desc="Branding"/>
                        <Project field="marketing photography" img="img/portfolio/3.jpg" name="Vendemos" desc="Branding"/>
                        <Project field="design marketing" img="img/portfolio/4.jpg" name="Diseño" desc="Branding"/>
                        <Project field="marketing" img="img/portfolio/5.jpg" name="Vendemos" desc="Branding"/>
                        <Project field="marketing" img="img/portfolio/6.jpg" name="Vendemos" desc="Branding"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;
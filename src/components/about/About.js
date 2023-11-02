import React from "react";

function About() {

  return (
    <section id="about" className="about-section section-padding bd-bottom" data-scroll-index="1">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-7 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
                    <div className="about-content">
                        <h2>Sobre mí</h2>
                        <p>Si buscas un Desarrollador de Software que pueda transformar tu visión en un producto digital funcional, 
                            fácil de usar y visualmente atractivo, estoy aquí para ayudarte a alcanzar tus objetivos. Trabajemos 
                            juntos para convertir tus ideas en realidad.</p>
                        <ul className="profile-info">
                            <li><span>Nombre</span> Mario Fernández</li>
                            <li><span>Email</span> mariofernandezcarballo@gmail.com</li>
                            <li><span>Website</span> mariocarballo.es</li>
                        </ul>
                        <a href='doc/cv.pdf' target='_blank' rel='noopener noreferrer' className="default-btn">Descarga mi CV <i className="ti-download"></i></a>
                    </div>
                </div>
                <div className="col-md-5 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1000ms">
                    <div className="about-bg">
                        <img src="img/about-bg.png" alt="img"/>
                        <div className="dots"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
import React from "react";

function About() {

  return (
    <section id="about" className="about-section section-padding bd-bottom" data-scroll-index="1">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-7 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
                    <div className="about-content">
                        <h2>Sobre mí</h2>
                        <p>¡Bienvenid@ a mi mundo digital! Soy mario Fernández, un apasionado y creativo 
                            desarrollador de software que se embarca en la emocionante travesía de convertir ideas en código. 
                            Con una mente inquisitiva y una habilidad innata para resolver problemas, estoy aquí para dar vida 
                            a tus proyectos digitales.</p>
                        <p>Durante cinco años trabajé en el Centro Espacial Europeo en Guayana Francesa, trabajando en proyecyos 
                            y tecnologías de vanguardia. Trabajar en el sector espacial ha perfeccionado mis habilidades para abordar 
                            problemas complejos y garantizar la calidad en cada fase del proceso de desarrollo, así como la precisión 
                            y la atención al detalle a la hora de abordar un proyecto.</p>
                        <p>Ahora, como desarrollador de software, combino mi experiencia en ingeniería industrial con mi pasión por 
                            la innovación digital. Mi enfoque es crear soluciones tecnológicas que impulsen la eficiencia y la excelencia.
                            Si buscas un Desarrollador de Software que pueda transformar tu visión en un producto digital funcional, 
                            fácil de usar y visualmente atractivo, estoy aquí para ayudarte a alcanzar tus objetivos. Trabajemos 
                            juntos para convertir tus ideas en realidad.</p>
                        <p>¡Conversemos! Puedes contactarme enviándome un correo electrónico a <a href="window.open('mailto:email@example.com')">mariofernandezcarballo@gmail.com</a>. 
                            Estoy emocionado de aplicar mis habilidades para ayudarte a alcanzar tus metas.
                            ¡Gracias por visitar mi espacio en la web! Estoy listo para enfrentar cualquier desafío y convertir 
                            tus ideas en una realidad digital extraordinaria. ¡Hablemos pronto!</p>
                        <a href='doc/cv.pdf' target='_blank' rel='noopener noreferrer' className="default-btn">Descarga mi CV <i className="ti-download"></i></a>
                        <a href='#' target='_blank' rel='noopener noreferrer' style={{marginLeft: '10px'}} className="default-btn"><i style={{marginLeft: 0}} className="ti-linkedin"></i></a>
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
import React from "react";
import Typewriter from "typewriter-effect";

function HeroSection() {
  return (
    <header className="hero-section d-flex align-items-center bd-bottom" 
            id='home'
            data-scroll-index="0"
            style={{backgroundImage:'url(img/banner/bg-1.png)'}}>
        <div id="particles-js"></div>
        <div className="container">
            <div className="hero-content text-center">
                <img src="img/logo-2.png" alt="man"/>
                <h1>Mario Fernández</h1>
                <h2>Soy {"\t"}
                    <span className="typed">
                        <Typewriter
                            options={{
                                strings: ["Desarrollador Backend.", "Freelance a tiempo completo.", "Desarrollador Full Stack."],
                                loop: true,
                                autoStart: true
                              }}
                        />
                    </span>
                </h2>
            </div>
            <ul className="hero-social">
                <li><a href="https://www.linkedin.com/in/mario-fern%C3%A1ndez-rodr%C3%ADguez-843b3a91/"><i className="ti-linkedin"></i></a></li>
                <li><a href="#"><i className="ti-twitter"></i></a></li>
                <li><a href="#"><i className="ti-instagram"></i></a></li>
                <li><a href="#"><i className="ti-linkedin"></i></a></li>
                <li><a href="#"><i className="ti-youtube"></i></a></li>
            </ul>
        </div>
    </header>
  );
};

export default HeroSection;
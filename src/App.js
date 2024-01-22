import React from "react";
import { useEffect } from "react";
import WOW from 'wowjs';
import SideBar from './components/sidebar/SideBar.js';
import HeroSection from './components/herosection/HeroSection.js';
import About from "./components/about/About.js";
import Resume from './components/resume/Resume.js';
import Services from "./components/services/Services.js";
import Portfolio from "./components/portfolio/Portfolio.js";
import Testimonial from "./components/testimonial/Testimonial.js";
//import Cta from "./components/cta/Cta.js";
import Contact from "./components/contact/Contact.js";
import Footer from "./components/footer/Footer.js";

import './App.css';

function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false
  }).init();
  }, []);
  
  return (
    <div className="app-class">
        <SideBar/>
        <div className="benja-side-content">
            <div className="logo">
                <h1><a href="index.html"><img src="img/logo-1.png" alt="logo"/></a></h1>
            </div>
            <HeroSection/>
            <About/>
            <Resume/>
            <Services/>
            <Portfolio/>
            <Testimonial/>
            {/*<Cta/>*/}
            {/*<Contact/>*/}
            <Footer/>
        </div>
    </div>
  );
};

export default App;

//Cuadro en columna con texto explicativo en el portfolio
//Botón flotante para arriba
//Reseñas hay que poner más de 2. 
//Quitar hipervínculos y poner en su lugar el nombre del citador
//Añadir quizás 



//De historias añadir UX es decir añadir mierdas. Más texto y los iconos en lugar de botones. Rellenar un poco más esa seccion con tres capítulos
//Añadir ... en de historias y luego en y de letras
//Lucirse fuerte en de historias
//Meter la opción de escuchar y leer
//Venderme más

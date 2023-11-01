import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Testimony from "./Testimony";

function Testimonial() {

    const options = {
        loop: true,
        center: false, //true
        items: 2, // 3
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2 // 3
            },
            1000: {
                items: 2 // 3
            }
        }
    };

    const testimonyList = [
        {
            client: 'Alejo Martín ',
            site: 'rankinglatamkt.com',
            review: 'Fue muy sencillo transmitir mis ideas y aún más que Mario las llevase a cabo. Destacar lo antento y profesional que siempre fue durante el tiempo que sacamos adelante la página web, pero también durante todos estos meses después: siempre disponible para atender la web, ampliarla y mejorarla. Sin duda lo recomiendo para proyectos de todo tipo.',
            img: 'img/client/rlkt.png'
        },
        {
            client: 'Rudy Pertu ',
            site: 'liga.ibericon.com',
            review: 'La primera pagina fue magnifica, con un acabado perfecto. Esta segunda vez, al tener que ampliar la pagina no dudamos en contar con él gracias a su excelente trabajo y calidad profesional. Es un profesional excelente siempre dispuesto a buscar ideas para mejorar tu pagina web.',
            img: 'img/client/ibericon.png'
        },
    ]
    const testimonial = testimonyList.map(testimony =>
        <Testimony client={testimony.name} site={testimony.site} review={testimony.review} img={testimony.img}/>
    )

    return (
        <section id="reviews" className="testimonial-section section-padding bd-bottom" data-scroll-index="5">
            <div className="container">
                <div className="section-heading mb-40 text-center wow fadeInUp" data-wow-delay="200ms"
                    data-wow-duration="1000ms">
                    <h2>Reseñas de clientes</h2>
                </div>
                <OwlCarousel id="testimonial-carousel" className="owl-carousel testimonial-carousel" {...options}>
                    {testimonial}
                </OwlCarousel>
            </div>
        </section>
    )
}

export default Testimonial
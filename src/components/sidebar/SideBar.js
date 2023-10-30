import React, {useState} from "react";
import './SideBar.css'

const SideBar = () => {

    // to change burger classes
    const [burger_class_first, setBurgerClassFirst] = useState("burger-bar-first unclicked")
    const [burger_class_middle, setBurgerClassMiddle] = useState("burger-bar-middle unclicked")
    const [burger_class_last, setBurgerClassLast] = useState("burger-bar-last unclicked")
    
    const [navbar_class, setNavbarClass] = useState("benja-fixed-sidebar benja-sidebar-left")

    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClassFirst("burger-bar-first clicked")
            setBurgerClassMiddle("burger-bar-middle clicked")
            setBurgerClassLast("burger-bar-last clicked")
            setNavbarClass("benja-fixed-sidebar benja-sidebar-left benja-fixed-sidebar-open")
        }
        else {
            setBurgerClassFirst("burger-bar-first unclicked")
            setBurgerClassMiddle("burger-bar-middle unclicked")
            setBurgerClassLast("burger-bar-last unclicked")
            setNavbarClass("benja-fixed-sidebar benja-sidebar-left")
        }
        setIsMenuClicked(!isMenuClicked)
    }
    const scrollToSection = (event) => {
        event.preventDefault();
        const target = document.querySelector(event.target.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return(
        <>
            <div className="burger-menu" onClick={updateMenu}>
                <div className={burger_class_first} ></div>
                <div className={burger_class_middle} ></div>
                <div className={burger_class_last} ></div>
            </div>
            <div className={navbar_class}>
                <div className="benja-header-container">
                    <div className="logo">
                        <h1><a href="index.html"><img src="img/logo-1.png" alt="logo"/></a></h1>
                    </div>
                    <div className="benja-burger-menu">
                        <div className="benja-line-menu benja-line-half benja-first-line"></div>
                        <div className="benja-line-menu"></div>
                        <div className="benja-line-menu benja-line-half benja-last-line"></div>
                    </div>
                    <nav className="benja-menu-fixed">
                        <ul>
                            <li><a onClick={scrollToSection} href="#home" data-scroll-nav="0">Inicio</a></li>
                            <li><a onClick={scrollToSection} href="#about" data-scroll-nav="1">Sobre Mí</a></li>
                            <li><a onClick={scrollToSection} href="#technologies" data-scroll-nav="2">Tecnologías</a></li>
                            <li><a onClick={scrollToSection} href="#services" data-scroll-nav="3">Servicios</a></li>
                            <li><a onClick={scrollToSection} href="#portfolio" data-scroll-nav="4">Portfolio</a></li>
                            <li><a onClick={scrollToSection} href="#reviews" data-scroll-nav="5">Reseñas</a></li>
                            <li><a onClick={scrollToSection} href="#contact" data-scroll-nav="6">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default SideBar
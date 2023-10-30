import React from "react";

function Footer() {
    return (
        <footer className="footer-section" style={{backgroundImage: "url(img/footer/bg.png)"}}>
            <div className="container">
                <div className="footer-top py-5">
                    <img src="img/logo-1.png" style={{height: "auto"}} alt="logo"/>
                    <div className="footer-social">
                        <a href="#"><i className="ti-facebook"></i></a>
                        <a href="#"><i className="ti-twitter"></i></a>
                        <a href="#"><i className="ti-instagram"></i></a>
                        <a href="#"><i className="ti-linkedin"></i></a>
                        <a href="#"><i className="ti-youtube"></i></a>
                    </div>
                </div>

                
            </div>
        </footer>
    )
}

export default Footer
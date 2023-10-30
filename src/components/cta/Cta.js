import React from "react";

function Cta() {
    return (
        <section className="cta-section section-padding bd-bottom" style={{backgroundImage:'url(img/cta/bg.png)'}}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 xs-padding">
                        <div className="cta-content">
                            <h3>Consulting Services Tailored to Your Needs</h3>
                        </div>
                    </div>
                    <div className="col-md-4 text-md-end">
                        <a href="#" className="default-btn">Hire Me Now!</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta
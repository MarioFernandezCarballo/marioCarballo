import React from "react";
import Skills from "./Skills";
import Experience from "./Experience";

function Resume() {
    return (
        <section id="technologies" className="resume-section section-padding bd-bottom" data-scroll-index="2">
            <div className="container">
                <div className="row">
                    <Skills />
                    <Experience />
                </div>
            </div>
        </section>
    );
};

export default Resume;
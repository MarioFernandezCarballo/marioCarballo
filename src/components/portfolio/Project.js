import React from "react";
import './Project.css'

function Project(props) {
    let field = props.field
    let img = props.img
    let name = props.name
    let desc = props.desc
    let project_class = "col-md-4 col-sm-6 padding-10 single-item design" + " " + field

    return (
        <div className={project_class}>
            <div className="portfolio-box">
                <img src={img} alt="img"/>
                <div className="portfolio-content">
                    <h3>
                        <a className="img-popup" href={img}>{name}<span>{desc}</span></a>
                    </h3>
                </div>
            </div>
        </div>
    )

}

export default Project
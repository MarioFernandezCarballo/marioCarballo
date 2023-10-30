import React from "react";

function Service(props) {
    let icon = props.icon
    let name = props.name
    let desc = props.desc

    return (
        <div className="col-md-4 col-sm-6  wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
            <div className="services-item">
                <i className={icon}></i>
                <h4>{name}</h4>
                <p>{desc}</p>
                <div className="dots"></div>
            </div>
        </div>
    )
}

export default Service
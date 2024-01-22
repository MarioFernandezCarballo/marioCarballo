import React from "react";

function Job(props) {
    let dates = props.dates
    let name = props.name
    let desc = props.desc
    let link = props.link

    return (
        <li>
            <div className="exp-date">
                <i className="ti-bookmark-alt"></i>
                <span>{dates}</span>
            </div>
            <div className="exp-content">
                <h4><span><a href={link} target='_blank'>{name}</a></span></h4>
                <p>{desc}</p>
            </div>
        </li>
    )
}

export default Job
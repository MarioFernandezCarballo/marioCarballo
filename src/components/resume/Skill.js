import React from "react";

function Skill(props) {
    let name = props.name
    let percentage = props.percentage
    return (
        <li className="skill-item">
            <h5>{name}</h5>
            <div className="progress">
                <div className="progress-bar wow slideInLeft" data-wow-delay="0ms"
                    data-wow-duration="2000ms" role="progressbar" style={{width: percentage + '%'}}>
                    <span>{percentage}</span>
                </div>
            </div>
        </li>
    )
}

export default Skill
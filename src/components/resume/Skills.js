import React from "react";
import Skill from "./Skill";

function Skills() {
    const skillList = [
        {
            name: 'Flask',
            percentage: '94'
        },
        {
            name: 'Django',
            percentage: '70'
        },
        {
            name: 'React.js',
            percentage: '75'
        },
        {
            name: 'SQL',
            percentage: '84'
        },
        {
            name: 'Vue.js',
            percentage: '53'
        },
        {
            name: 'Flutter',
            percentage: '62'
        },
    ]

    const skills = skillList.map(skill =>
            <Skill name={skill.name} percentage={skill.percentage} />
    )
    return (
        <div className="col-md-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1000ms">
            <div className="skill-wrap pr-lg-5">
                <div className="section-heading mb-40">
                    <h2>Tecnologías</h2>
                </div>
                <ul className="skill-items">
                    {skills}
                </ul>
            </div>
        </div>
    )
}

export default Skills
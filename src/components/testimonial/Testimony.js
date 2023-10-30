import React from "react";

function Testimony(props) {
    let img = props.img
    let client = props.client
    let review = props.review
    let site = props.site

    return (
        <div className="testimonial-item">
            <div className="testimonial-innter">
                <div className="testi-thumb"><img src={img} alt="img"/></div>
                <div className="testi-content">
                    <p>{review}</p>
                    <h4>{client}<span>{site}</span></h4>
                </div>
            </div>
        </div>
    )
}

export default Testimony
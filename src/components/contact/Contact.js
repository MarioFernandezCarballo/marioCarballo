import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_kaqk96a', 
            'template_uvhj7ck', 
            form.current, 
            '18GicWB97OATLuCST')
            .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                }
            );
            e.target.reset()
        };
    return (
        <div className="contact-section section-padding" data-scroll-index="6" id="contact">
            <div className="container">
                <div className="section-heading mb-40 text-center wow fadeInUp" data-wow-delay="200ms"
                    data-wow-duration="1000ms">
                    <h2>Dame un toque</h2>
                </div>
                <div className="contact-content">
                    <div className="contact-bottom">
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="contact-form-wrapper">
                                    <div className="contact-form">
                                        <form ref={form} onSubmit={sendEmail} id="contact-form" className="comment-form">
                                            <input type="text" name="name" className="" placeholder="Nombre*" required/>
                                            <input type="text" name="phone" className="" placeholder="Teléfono"/>
                                            <input type="text" name="email" className="" placeholder="Email*" required/>
                                            <input type="text" name="subject" className="" placeholder="Asunto*" required/>
                                            <textarea name="message" id="role" cols="30" rows="7"
                                                placeholder="Mensaje*"></textarea>
                                            <button type="submit" className="default-btn mt-5">
                                                Enviar mensaje
                                            </button>
                                        </form>
                                        <p className="form-message mt-4"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    )
}

export default Contact
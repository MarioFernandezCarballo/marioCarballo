import React from "react";

function Contact() {
    return (
        <div className="contact-section section-padding" data-scroll-index="6" id="contact">
            <div className="container">
                <div className="section-heading mb-40 text-center wow fadeInUp" data-wow-delay="200ms"
                    data-wow-duration="1000ms">
                    <h2>Get In Touch</h2>
                </div>
                <div className="contact-content">
                    <div className="contact-bottom">
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="contact-address">
                                    <div className="location-map">
                                        <div id="map">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55565170.29301636!2d-132.08532758867793!3d31.786060306224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1683727759349!5m2!1sen!2sbd"
                                                width="600" height="450" style={{border: '0'}} allowFullScreen=""
                                                loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                        <p>Federal House,123 Main Street
                                            Anytown, USA 12345</p>
                                        <p className="phone"><span>Phone: </span> <a href="tel:01941043264">+01234567890</a>
                                        </p>
                                        <p className="mail"><span>Email:</span> <a
                                                href="mailto:admin@example.com">admin@example.com</a></p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-form-wrapper">
                                    <div className="contact-form">
                                        <form action="contact.php" method="POST" id="contact-form" className="comment-form">
                                            <input type="text" name="name" className="" placeholder="Name*"/>
                                            <input type="text" name="phone" className="" placeholder="Phone no*"/>
                                            <input type="text" name="email" className="" placeholder="Email*"/>
                                            <input type="text" name="subject" className="" placeholder="Subject*"/>
                                            <textarea name="message" id="role" cols="30" rows="7"
                                                placeholder="Message*"></textarea>
                                            <button type="submit" className="default-btn mt-5">
                                                Send Message
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
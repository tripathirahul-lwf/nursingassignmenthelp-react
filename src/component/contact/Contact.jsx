import React from 'react'
import './contact.css'


const Contact = () => {
    return (
        <>

            <section id="contact" className="contact-section">
                <div className="container">
                    <div className="row">

                        <div className="contact-item-wrapper">
                            <div className="row">
                                <div className="col-xl-1 col-lg-1"></div>
                                <div className="col-12 col-md-6 col-xl-5 col-lg-5">
                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <i class="fa-solid fa-phone-volume"></i>
                                        </div>
                                        <div className="contact-content">
                                            <h4>Contact</h4>
                                            <p><a  className='phone' href="tel:+61 4888 96 118">+61 4888 96 118</a></p>
                                            <p><a href="mailto:help@learnwithfraternity.com" className="email"
                                            >help@nursingassignmenthelp.com</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-xl-5 col-lg-5">
                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <i class="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div className="contact-content">
                                            <h4>Address</h4>
                                            <p> Endeavour Hills Victoria, Australia PO Box: 3802</p>
                                            <p>Australia</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-1 col-lg-1"></div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact

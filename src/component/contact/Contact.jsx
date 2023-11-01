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
                                    <div className="col-12 col-md-6 col-xl-4">
                                        <div className="contact-item">
                                            <div className="contact-icon">
                                                <i class="fa-solid fa-phone-volume"></i>
                                            </div>
                                            <div className="contact-content">
                                                <h4>Contact</h4>
                                                <p>0984537278623</p>
                                                <p><a href="hr@learnwithfraternity.com" className="__cf_email__"
                                                  >help@nursingassignmenthelp.com</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-4">
                                        <div className="contact-item">
                                            <div className="contact-icon">
                                                <i class="fa-solid fa-location-dot"></i>
                                            </div>
                                            <div className="contact-content">
                                                <h4>Address</h4>
                                                <p>175 5th Ave, New York, NY 10010</p>
                                                <p>United States</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-4">
                                        <div className="contact-item">
                                            <div className="contact-icon">
                                            <i class="fa-solid fa-clock"></i>
                                            </div>
                                            <div className="contact-content">
                                                <h4>Schedule</h4>
                                                <p>24 Hours / 7 Days Open</p>
                                                <p>Office time: 10 AM - 5:30 PM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact

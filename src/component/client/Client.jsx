import React from 'react'
import './client.css'
import google from '../images/client-logo/google.png'
import trust from '../images/client-logo/trust.png'
import sitejabber from '../images/client-logo/sitejabber.png'

const Client = () => {
    return (
        <>
            <div id="clients" className="brand-area section">

                <div className="section-title-five">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content">
                                    <h6>Meet our Clients</h6>
                                    <h2 className="fw-bold">Our Awesome Clients</h2>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="clients-logos">
                            <div className="single-image">
                                <img src={google} alt="Brand Logo Images" loading='lazy'/>
                            </div>
                            <div className="single-image">
                                <img src={trust} alt="Brand Logo Images" loading='lazy'/>
                            </div>
                            <div className="single-image">
                                <img src={sitejabber} alt="Brand Logo Images" loading='lazy'/>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Client

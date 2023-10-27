import React from 'react'
import './hero.css'
import Embedform from '../embedForm/Embedform'

const Hero = () => {
  return (
    <>
      <section id="hero-area" className="header-area header-eight">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="header-content">
                <h1>Corporate & Business Site Template by Ayro UI.</h1>
                <p>
                  We are a digital agency that helps brands to achieve their
                  business outcomes. We see technology as a tool to create amazing
                  things.
                </p>
                <div className="button">
                  <a href="/" className="btn primary-btn">Connect with expert</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="banner_form">
                <Embedform />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero

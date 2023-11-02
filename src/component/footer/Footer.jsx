import React from 'react'
import './footer.css'
import logo from '../images/logo.png'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="footer-area footer-eleven" id='footer'>

                <div className="footer-top">
                    <div className="container">
                        <div className="inner-content">
                            <div className="row">
                                <div className="footer-widget f-about">
                                    <div className="logo">
                                        <a href="#">
                                            <img src={logo} alt="#" className="img-fluid" />
                                        </a>
                                    </div>
                                   
                                    <div class="social-buttons">
                                        <a href="#" class="social-buttons__button social-button social-button--facebook" aria-label="Facebook">
                                            <span class="social-button__inner">
                                                <i class="fab fa-facebook-f"></i>
                                            </span>
                                        </a>
                                        <a href="#" class="social-buttons__button social-button social-button--linkedin" aria-label="LinkedIn">
                                            <span class="social-button__inner">
                                                <i class="fab fa-linkedin-in"></i>
                                            </span>
                                        </a>
                                        <a href="https://www.instagram.com/learningatwebdev/" target="_blank" class="social-buttons__button social-button social-button--instagram" aria-label="InstaGram">
                                            <span class="social-button__inner">
                                                <i class="fab fa-instagram"></i>
                                            </span>
                                        </a>
                                        <a href="#" class="social-buttons__button social-button social-button--github" aria-label="GitHub">
                                            <span class="social-button__inner">
                                                <i class="fab fa-twitter"></i>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="copy">
                                        Copyright © 2010 - {currentYear} <br /> nursingassignmenthelp.au | All rights reserved.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="container-fluid">
                <div className="disc">
                    <strong>Disclaimer : </strong> All academic content provided by <a href="#">nursingassignmenthelp.au</a>, including assignments, essays, papers, and presentations, is intended for reference only. We strictly disapprove of plagiarism and expect users to use these resources for their own writing purposes.
                </div>
            </div>
        </>
    )
}

export default Footer

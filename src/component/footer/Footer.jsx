import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <>
            <footer className="footer-area footer-eleven">

                <div className="footer-top">
                    <div className="container">
                        <div className="inner-content">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12">

                                    <div className="footer-widget f-about">
                                        <div className="logo">
                                            <a href="index.html">
                                                {/* <!-- <img src="assets/images/logo.svg" alt="#" className="img-fluid" /> --> */}
                                                <h3 className="logo_footer">Nursing</h3>
                                            </a>
                                        </div>
                                        <p>
                                            Making the world a better place through constructing elegant
                                            hierarchies.
                                        </p>
                                    </div>

                                </div>
                                <div className="col-lg-2 col-md-6 col-12">

                                    <div className="footer-widget f-link">
                                        <h5>Solutions</h5>
                                        <ul>
                                            <li><a href="/">Marketing</a></li>
                                            <li><a href="/">Analytics</a></li>
                                            <li><a href="/">Commerce</a></li>
                                            <li><a href="/">Insights</a></li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="col-lg-2 col-md-6 col-12">

                                    <div className="footer-widget f-link">
                                        <h5>Support</h5>
                                        <ul>
                                            <li><a href="/">Pricing</a></li>
                                            <li><a href="/">Documentation</a></li>
                                            <li><a href="/">Guides</a></li>
                                            <li><a href="/">API Status</a></li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-6 col-12">

                                    <div className="footer-widget newsletter">
                                        <h5>Subscribe</h5>
                                        <p>Subscribe to our newsletter for the latest updates</p>
                                        <form action="#" method="get" target="_blank" className="newsletter-form">
                                            <input name="EMAIL" placeholder="Email address" required="required" type="email" />
                                            <div className="button">
                                                <button className="sub-btn">
                                                    <i className="lni lni-envelope"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer

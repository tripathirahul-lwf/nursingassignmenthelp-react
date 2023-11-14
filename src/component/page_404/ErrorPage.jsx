import React from 'react'
import error from '../images/404.png'
import './errorpage.css'

const ErrorPage = () => {
    return (
        <>
            <section className="error_page">
                <div className="container">
                    <div className="main-block ">
                        <div className="error_page-img">
                            <img src={error} alt="404-img" loading='lazy' />
                        </div>
                        <div className="text-center mb-4">
                            <div className="button">
                                <a href="https://nursingassignmenthelp.au/" className="btn primary-btn">GO TO HOMEPAGE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ErrorPage

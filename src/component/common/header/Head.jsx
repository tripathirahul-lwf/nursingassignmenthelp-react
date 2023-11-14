import React, { useEffect } from 'react'
import './head.css'
import logo from '../../images/logo.png'

const Head = () => {
    const closeNav = () => {
        let a = document.getElementById('navButton')
        a.classList.add('collapsed')
        let b = document.getElementById('navbarNine')
        b.classList.remove('show')
      };

    useEffect(() => {
        const handleScroll = () => {
            let navbar = document.querySelector('.navbar-area');

            if (window.scrollY > 50) {
                navbar.classList.add('sticky')
            }
            else {
                navbar.classList.remove('sticky')
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener('scroll',handleScroll);
    }, []);


    return (
        <>
            <section className="navbar-area navbar-nine">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="#">
                                     <img src={logo} alt="Logo" loading='lazy' /> 
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNine"
                                    aria-controls="navbarNine" aria-expanded="false" aria-label="Toggle navigation" id='navButton'>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse navi" id="navbarNine">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="page-scroll active" href="#"  onClick={closeNav}>Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#services"  onClick={closeNav}>Services</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#review"  onClick={closeNav}>Review</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#FAQ"  onClick={closeNav}>Faqs</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="#contact"  onClick={closeNav}>Contact us</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>

                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Head

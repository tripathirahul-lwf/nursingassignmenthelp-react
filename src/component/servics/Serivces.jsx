import React from 'react'
import './service.css'
import thesis from '../images/services/open-book.png'
import research from '../images/services/research.png'
import essay from '../images/services/writing.png'
import caseStudy from '../images/services/file-case.png'
import proofreading from '../images/services/proofreading.png'
import Presentation from '../images/services/presentation.png'

const Serivces = () => {
    return (
        <>
            <section id="services" className="services-area services-eight">

                <div className="section-title-five">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content">
                                    <h2 className="fw-bold">Nursing Assignment Help Services We Offer!</h2>
                                    <p>
                                        With a myriad of nursing assignment writing services waiting to be explored, we offer
                                        assistance wherever a student feels stuck!
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="container">
                    <div className="row">
                        <div className="services_main_block">
                            <div className="single-services">
                                <div className="service-icon">
                                    <img src={thesis} alt="thesis-icon" loading='lazy'/>
                                </div>
                                <div className="service-content">
                                    <h3>Thesis</h3>
                                    <p>
                                        Feeling stuck and needing help to “write my nursing thesis?” Our Ph.D. nursing assignment
                                        writers can take over anytime you need assistance.
                                    </p>
                                </div>
                            </div>

                            <div className="single-services">
                                <div className="service-icon">
                                <img src={research} alt="research-paper-icon" loading='lazy'/>
                                </div>
                                <div className="service-content">
                                    <h3>Research Paper</h3>
                                    <p>
                                        Our nursing assignment experts focus on thorough research and analysis before curating
                                        your research papers. So, if you need urgent nursing research paper help, don't hesitate to
                                        call us!

                                    </p>
                                </div>
                            </div>

                            <div className="single-services">
                                <div className="service-icon">
                                <img src={essay} alt="essay-writing-icon" loading='lazy'/>
                                </div>
                                <div className="service-content">
                                    <h3>Essay Writing </h3>
                                    <p>
                                        Essay writing can be tricky and confusing, if you are facing writer’s block reach out to our
                                        nursing assignment helper for quality assistance today!
                                    </p>
                                </div>
                            </div>

                            <div className="single-services">
                                <div className="service-icon">
                                <img src={caseStudy} alt="case study-icon" loading='lazy'/>
                                </div>
                                <div className="service-content">
                                    <h3>Case Study</h3>
                                    <p>
                                        Don't have the time to work on a case study? Our nursing assignment help experts specialize
                                        in writing case studies for the students in need.
                                    </p>
                                </div>
                            </div>

                            <div className="single-services">
                                <div className="service-icon">
                                <img src={Presentation} alt="presentation-icon" loading='lazy'/>
                                </div>
                                <div className="service-content">
                                    <h3>Presentations</h3>
                                    <p>
                                        Creativity is not everyone’s cup of tea! By seeking nursing assignment help for your
                                        presentations, you give way to straight A’s in your grade card.
                                    </p>
                                </div>
                            </div>

                            <div className="single-services">
                                <div className="service-icon">
                                <img src={proofreading} alt="editing and Proofreading-icon" loading='lazy'/>
                                </div>
                                <div className="service-content">
                                    <h3>Editing And Proofreading</h3>
                                    <p>
                                        Want our nursing assignment experts to have a look at what you created? Don't worry we
                                        will not only proofread but, also make amendments wherever required!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Serivces

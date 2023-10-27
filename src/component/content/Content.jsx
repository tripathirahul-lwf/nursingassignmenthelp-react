import React, { useState } from 'react'
import './content.css'
import contentImg from '../images/nursing-assignment.webp'


const Content = () => {

    const [select, setSelect] = useState(null);

    const toggle = (i) => {
        if (select === i) {
            return setSelect(null)
        }
        else {
            setSelect(i);
        }
    }


    return (
        <>
            <section className="video-area video-one about-five">
                <div className="section-title-five">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content">
                                    <h6>Content</h6>
                                    <h2 className="fw-bold">Watch Our Promo Video</h2>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration in some form.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="container">
                    <div className="content-area">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="accordi">
                                    {data.map((item, i) => (
                                        <div className="accordion-item">
                                            <div className={select == i ? "accordion-item-header active" : "accordion-item-header" } onClick={() => toggle(i)}>
                                                {item.title}
                                            </div>
                                            <div className={select == i ? "accordion-item-body show" : "accordion-item-body"}>
                                                <div className="accordion-item-body-content">
                                                    {item.description}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="content-img">
                                    <img src={contentImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const data = [
    {
        title: ' Do my programming assignment',
        description: 'Programming homework can become a nightmare if not done on time and this is the reason computer science students ask for programming assistance Programming homework can become a nightmare if not done on time and this is the reason computer science students ask for programming assistance'
    },
    {
        title: 'Java assignment help',
        description: 'Programming homework can become a nightmare if not done on time and this is the reason computer science students ask for programming assistance Programming homework can become a nightmare if not done on time and this is the reason computer science students ask for programming assistance'
    },
    {
        title: 'Android assignment & project help',
        description: 'Programming homework can become a nightmare if not done on time and this is the reason computer science students ask for programming assistance Programming homework can become a nightmare if not done on time and this is the reason computer science students ask for programming assistance'
    },
    {
        title: 'Html css programming asssignment help?',
        description: 'Programming homework can become a nightmare if not done on time and this is the reason computer science students ask for programming assistance Programming homework can become a nightmare if not done on time and this is the reason computer science students ask for programming assistance'
    },
    {
        title: 'C++ programming assignment help',
        description: 'Programming homework can become a nightmare if not done on time and this is the reason computer science students ask for programming assistance Programming homework can become a nightmare if not done on time and this is the reason computer science students ask for programming assistance'
    },
    {
        title: ' computer science assignment help',
        description: 'Programming homework can become a nightmare if not done on time and this is the reason computer science students ask for programming assistance Programming homework can become a nightmare if not done on time and this is the reason computer science students ask for programming assistance'
    },
    {
        title: ' Python assignment help',
        description: 'Programming homework can become a nightmare if not done on time and this is the reason computer science students ask for programming assistance Programming homework can become a nightmare if not done on time and this is the reason computer science students ask for programming assistance'
    },
    {
        title: ' Python assignment help',
        description: 'Programming homework can become a nightmare if not done on time and this is the reason computer science students ask for programming assistance Programming homework can become a nightmare if not done on time and this is the reason computer science students ask for programming assistance'
    },
    {
        title: ' computer science assignment help',
        description: 'Programming homework can become a nightmare if not done on time and this is the reason computer science students ask for programming assistance Programming homework can become a nightmare if not done on time and this is the reason computer science students ask for programming assistance'
    },
]

export default Content

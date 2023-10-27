import React, { useState } from 'react'
import './faq.css'
import faqImg from '../images/faq/faq.webp'

const Faq = () => {

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            setSelected(null);
        }
        else {
            setSelected(i)
        }
    }

    return (
        <>
            <section id="FAQ" className="FAQs section">
                <div className="section-title-five">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content">
                                    <h6>FAQs</h6>
                                    <h2 className="fw-bold">Frequently Asked Questions</h2>
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

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="faq-img">
                                <img src={faqImg} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {data.map((item, i) => (
                                <div className="accordion-item">
                                    <div className="item-header" onClick={() => toggle(i)}>
                                        <h4 className="item-question">{item.question}</h4>
                                        <div className={selected == i ? "item-icon rotate" : 'item-icon'}>
                                            <i class="fa fa-angle-down"></i>
                                        </div>
                                    </div>
                                    <div className={selected == i ? " item-content show" : "item-content"}>
                                        <div className="item-content-body">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
const data = [
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur   "
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur ?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur   "
    },
    {
        question: "Lorem ipsum dolor sit amet, dipiscing elit?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur   "
    },
    {
        question: "Lorem amet, consectetur adipiscing elit?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur   "
    },
    {
        question: "Lorem ipsum dolor sit amet,  elit?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur   "
    },
    {
        question: "Lorem ipsum dolor sit amet,  elit?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur   "
    },
    {
        question: "Lorem ipsum dolor sit amet,  elit?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur   "
    },
    {
        question: "Lorem ipsum dolor sit amet,  elit?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur   "
    },
]
export default Faq

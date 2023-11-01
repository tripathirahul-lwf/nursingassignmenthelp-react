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
                                    <h2 className="fw-bold">Online Nursing Assignment Help For A Range Of Subjects</h2>
                                    <p>
                                        Our custom nursing assignment help online ensures to deliver subject specific assignments,
                                        whatever you need at any point in time!
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
                                            <div className={select == i ? "accordion-item-header active" : "accordion-item-header"} onClick={() => toggle(i)}>
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
        title: 'Aged Care Nursing Assignment Help',
        description: 'Aged care nursing assignments require a student to gain a deep understanding of the needs and requirements of elderly parents to answer the questions accurately. Our nursingassignment writing services have Ph.D. level writers who specialize in delivering wellresearched answers with their expertise'
    },
    {
        title: 'Ambulatory Care Nursing Assignment Help',
        description: 'If you are facing to answer your assignments based on the outpatient services then, seeking help from a professional nursing assignment expert can be of help. Our team of expert nursing assignment helper will provide you with solutions without having to worry about the research.'
    },
    {
        title: 'Anatomy Nursing Assignment Help',
        description: 'Need help with nursing assignment for anatomy? Well, our subject specific nursing assignment experts are thoroughly aware of the anatomy of the human body. Seeking help from our experts can give you a worry less time securing A grades!'
    },
    {
        title: 'Cardiac Nursing Assignment Help',
        description: ' Can not get the complexity of cardiac conditions and treatments required to cure the same? Our nursing assignment help can assist you with real time solutions without stressing you out with hours of research work. All you need to do is tell us your story and we will curate something your professor will fall in love with.'
    },
    {
        title: 'Clinical Nursing Assignment Help',
        description: "Can't answer hypothetical situations without facing practical experiences for the same? Don't you worry! Our nursing assignment help writers are chosen from within the field and have the capability to answer your assignments without seeking any practical experience before beginning to draft the answer."
    },
    {
        title: 'Community Care Nursing Assignment Help',
        description: "Haven’t attended a single class based on community care nursing assignments? Well, it’s okay to seek professional nursing assignment help from experts while you catch up on the basics of the subject. All you need to do is provide us with a little information and keep yourself busy learning the concepts!"
    },
    {
        title: 'GERD Nursing Assignment Help',
        description: 'Diseases can be challenging to analyze, especially when you are at the beginning of your course and the curriculum has just begun. If you are facing a hard time cracking the code to receive an A without doing the hard work, our nursing assignment experts are here for you!'
    },
    {
        title: ' Human Nutrition Nursing Assignment Help',
        description: 'Still learning the dietary requirements of a human body while, you have a deadline due in just a few weeks? Our instant nursing assignment help services are here to rescue you from falling grades, while you get time to catch up on the subject you have been in the classes for a while now.'
    },
    {
        title: ' Mental Health Nursing Assignment Help',
        description: 'Understanding psyche and cognition are highly imperative to answer mental health assignments but, if you need professional assistance to work on them, you finally have a solution! With the help of our mental health nursing assignment help, we can assist you with quality assignments so that your grade card looks fantastic for the recruiters to see.'
    },
    {
        title: 'Nursing Ethics Assignment Help',
        description: "Ethics is one of the most challenging tasks while pursuing your nursing career. If you can't remember the ethics by your heart, trust us it will take time! While you polish your skills for ethics, our nursing assignment writers can rescue you from failing your assignments! All you need to do is give us all the details right away!"
    },
]

export default Content

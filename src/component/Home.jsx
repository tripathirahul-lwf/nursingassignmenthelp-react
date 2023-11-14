import React from 'react'

import Hero from './home/Hero'
import Trusted from './trusted/Trusted'
import Steps from './steps/Steps'
import About from './about/About'
import Services from './servics/Serivces'
import Content from './content/Content'
import Cta from './cta/Cta'
import Review from './review/Review'
import Faq from './faq/Faq'
import Contact from './contact/Contact'

const Home = () => {
    return (
        <>
            <Hero />
            <Trusted />
            <Steps />
            <About />
            <Services />
            <Content />
            <Cta />
            <Review />
            <Faq />
            <Contact />
        </>
    )
}

export default Home

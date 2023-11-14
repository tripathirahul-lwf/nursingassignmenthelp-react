import React from 'react'
import './thankyou.css'
import thankYou from '../images/thankyou.jpg'

const Thankyou = () => {
    return (
        <>
            <section className="thank">
                <div className="thankyou_img">
                    <img src={thankYou} alt="thanyou" loading='lazy' />
                </div>

                <div className="text-center mb-4">
                    <div className="button">
                        <a href="https://nursingassignmenthelp.au/" className="btn primary-btn">GO TO HOMEPAGE</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Thankyou

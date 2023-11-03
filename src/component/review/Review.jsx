import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './review.css'

const Review = () => {
    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <section id="review" className="testimonial-5">
                <div className="section-title-five">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content">
                                    <h6>Customer Reviews</h6>
                                    <h2 className="fw-bold">Nursing Assignment Help Reviews From Customers Who Loved Us!</h2>
                                  
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="container">
                    <div className="row testimonial-slider">
                        <Slider {...settings}>
                            <div>
                                <div className="single-testimonial">
                                    <svg className="shape1" width="62" height="31" viewBox="0 0 62 31" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M-1.10459e-06 -3.51286e-06C-1.46049e-06 4.07097 0.801837 8.10209 2.35973 11.8632C3.91763 15.6243 6.20107 19.0417 9.07969 21.9203C11.9583 24.7989 15.3757 27.0824 19.1368 28.6403C22.8979 30.1982 26.929 31 31 31C35.071 31 39.1021 30.1982 42.8632 28.6403C46.6243 27.0824 50.0417 24.7989 52.9203 21.9203C55.7989 19.0417 58.0824 15.6243 59.6403 11.8632C61.1982 8.10209 62 4.07098 62 -8.02757e-07L31 -8.02758e-07L-1.10459e-06 -3.51286e-06Z"
                                            fill="#FF8686" />
                                    </svg>
                                    <svg className="shape2" width="82" height="74" viewBox="0 0 82 74" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="45.0005" cy="37" r="37" fill="#FE9955" />
                                        <path
                                            d="M0.175359 2.73871C1.17682 4.85939 2.2739 6.88145 3.46802 8.90242C4.46524 10.732 5.46811 12.9497 6.94627 14.4811C7.73528 15.3431 9.37218 14.4457 8.96708 13.287C8.96708 13.287 8.96566 13.1899 8.86863 13.1913C9.05846 12.8974 9.2497 12.7003 9.53657 12.4052C9.63361 12.4037 9.82627 12.304 9.92331 12.3026C10.116 12.2027 10.3072 12.0059 10.4985 11.8088C15.7794 14.5465 21.0575 17.0902 25.9574 20.3188C27.4271 21.268 28.8012 22.3157 30.081 23.5587C25.1774 26.7359 19.5257 31.8654 20.6822 37.9632C22.255 45.996 30.8275 41.5036 33.678 37.2886C37.1963 32.2874 36.94 28.0206 33.4815 23.8005C36.7525 21.8117 40.4199 20.3993 44.0133 20.5412C52.6538 20.7066 54.2222 28.4483 52.0851 34.9823C49.548 34.0486 46.6328 33.7999 44.1182 34.4189C39.5716 35.4557 35.5978 42.5017 38.8594 46.5306C42.1196 50.4625 50.1618 42.8719 51.7762 40.422C52.2515 39.7356 52.7252 38.9523 53.1021 38.1703C53.2005 38.266 53.2977 38.2645 53.396 38.3602C60.4477 42.7221 54.5176 48.729 49.6083 51.5181C48.8377 51.9175 49.5325 52.975 50.3045 52.6726C55.415 50.3659 61.3648 45.7175 57.7824 39.6551C56.8879 38.2123 55.6081 36.9692 54.0428 36.1184C56.0998 30.7503 56.0094 24.5398 51.101 20.7292C45.211 16.1562 37.6845 19.1774 32.1017 22.3646C32.0032 22.2691 32.0032 22.2691 31.9048 22.1733C26.4872 16.7199 18.8689 13.4339 12.0254 10.0395C12.5007 9.3532 12.9746 8.56968 13.4499 7.88351C13.7339 7.39393 13.627 6.71609 13.2332 6.33375C9.89298 3.56774 5.88339 1.49089 1.50686 0.875232C0.435374 0.599667 -0.325372 1.67822 0.175359 2.73871ZM33.341 27.4905C35.5295 31.1468 32.9632 34.8724 30.4799 37.6262C27.2329 41.2646 21.8818 40.372 22.8688 34.8253C23.41 32.0028 25.9005 29.7342 27.9114 27.8608C28.9646 26.8749 30.2118 25.886 31.5576 24.9929C32.2483 25.7593 32.8433 26.6243 33.341 27.4905ZM51.1458 37.131C49.8256 39.7708 47.913 41.7398 45.5099 43.3277C44.4523 44.0226 43.2964 44.6217 42.0392 44.9312C38.7541 45.9496 40.3273 40.6856 40.9868 39.3172C42.9709 35.6001 47.6329 35.8234 51.1458 37.131ZM10.7274 7.53494C10.7288 7.63198 10.6318 7.63339 10.6332 7.73043C10.3421 7.73467 10.0538 7.93314 9.86536 8.32395C9.58414 9.00745 9.20589 9.69236 8.82764 10.3774C8.63781 10.6714 8.06407 11.2621 8.25814 11.2592C8.16111 11.2607 8.06548 11.3591 8.0669 11.4561C7.46913 10.3974 6.67729 9.34112 6.07953 8.28236C5.28345 6.93515 4.48596 5.4909 3.68846 4.0465C6.12426 4.69011 8.56855 5.91625 10.7274 7.53494Z"
                                            fill="#7C451F" />
                                    </svg>
                                    <div className="inner-content">
                                        <div className="qote-icon">
                                            <i className="lni lni-quotation"></i>
                                        </div>
                                        <p className="text">
                                            Nursing Assignment help is great with what they do! I took their nursing assignment writing
                                            for anatomy and trust me they gave me a well-structured, well-organized assignment to fall
                                            in love with!

                                        </p>
                                        <div className="author">
                                            <h4 className="name">
                                                David
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="single-testimonial">
                                    <svg className="shape1" width="62" height="31" viewBox="0 0 62 31" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M-1.10459e-06 -3.51286e-06C-1.46049e-06 4.07097 0.801837 8.10209 2.35973 11.8632C3.91763 15.6243 6.20107 19.0417 9.07969 21.9203C11.9583 24.7989 15.3757 27.0824 19.1368 28.6403C22.8979 30.1982 26.929 31 31 31C35.071 31 39.1021 30.1982 42.8632 28.6403C46.6243 27.0824 50.0417 24.7989 52.9203 21.9203C55.7989 19.0417 58.0824 15.6243 59.6403 11.8632C61.1982 8.10209 62 4.07098 62 -8.02757e-07L31 -8.02758e-07L-1.10459e-06 -3.51286e-06Z"
                                            fill="#FF8686" />
                                    </svg>
                                    <svg className="shape2" width="82" height="74" viewBox="0 0 82 74" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="45.0005" cy="37" r="37" fill="#FE9955" />
                                        <path
                                            d="M0.175359 2.73871C1.17682 4.85939 2.2739 6.88145 3.46802 8.90242C4.46524 10.732 5.46811 12.9497 6.94627 14.4811C7.73528 15.3431 9.37218 14.4457 8.96708 13.287C8.96708 13.287 8.96566 13.1899 8.86863 13.1913C9.05846 12.8974 9.2497 12.7003 9.53657 12.4052C9.63361 12.4037 9.82627 12.304 9.92331 12.3026C10.116 12.2027 10.3072 12.0059 10.4985 11.8088C15.7794 14.5465 21.0575 17.0902 25.9574 20.3188C27.4271 21.268 28.8012 22.3157 30.081 23.5587C25.1774 26.7359 19.5257 31.8654 20.6822 37.9632C22.255 45.996 30.8275 41.5036 33.678 37.2886C37.1963 32.2874 36.94 28.0206 33.4815 23.8005C36.7525 21.8117 40.4199 20.3993 44.0133 20.5412C52.6538 20.7066 54.2222 28.4483 52.0851 34.9823C49.548 34.0486 46.6328 33.7999 44.1182 34.4189C39.5716 35.4557 35.5978 42.5017 38.8594 46.5306C42.1196 50.4625 50.1618 42.8719 51.7762 40.422C52.2515 39.7356 52.7252 38.9523 53.1021 38.1703C53.2005 38.266 53.2977 38.2645 53.396 38.3602C60.4477 42.7221 54.5176 48.729 49.6083 51.5181C48.8377 51.9175 49.5325 52.975 50.3045 52.6726C55.415 50.3659 61.3648 45.7175 57.7824 39.6551C56.8879 38.2123 55.6081 36.9692 54.0428 36.1184C56.0998 30.7503 56.0094 24.5398 51.101 20.7292C45.211 16.1562 37.6845 19.1774 32.1017 22.3646C32.0032 22.2691 32.0032 22.2691 31.9048 22.1733C26.4872 16.7199 18.8689 13.4339 12.0254 10.0395C12.5007 9.3532 12.9746 8.56968 13.4499 7.88351C13.7339 7.39393 13.627 6.71609 13.2332 6.33375C9.89298 3.56774 5.88339 1.49089 1.50686 0.875232C0.435374 0.599667 -0.325372 1.67822 0.175359 2.73871ZM33.341 27.4905C35.5295 31.1468 32.9632 34.8724 30.4799 37.6262C27.2329 41.2646 21.8818 40.372 22.8688 34.8253C23.41 32.0028 25.9005 29.7342 27.9114 27.8608C28.9646 26.8749 30.2118 25.886 31.5576 24.9929C32.2483 25.7593 32.8433 26.6243 33.341 27.4905ZM51.1458 37.131C49.8256 39.7708 47.913 41.7398 45.5099 43.3277C44.4523 44.0226 43.2964 44.6217 42.0392 44.9312C38.7541 45.9496 40.3273 40.6856 40.9868 39.3172C42.9709 35.6001 47.6329 35.8234 51.1458 37.131ZM10.7274 7.53494C10.7288 7.63198 10.6318 7.63339 10.6332 7.73043C10.3421 7.73467 10.0538 7.93314 9.86536 8.32395C9.58414 9.00745 9.20589 9.69236 8.82764 10.3774C8.63781 10.6714 8.06407 11.2621 8.25814 11.2592C8.16111 11.2607 8.06548 11.3591 8.0669 11.4561C7.46913 10.3974 6.67729 9.34112 6.07953 8.28236C5.28345 6.93515 4.48596 5.4909 3.68846 4.0465C6.12426 4.69011 8.56855 5.91625 10.7274 7.53494Z"
                                            fill="#7C451F" />
                                    </svg>
                                    <div className="inner-content">
                                        <div className="qote-icon">
                                            <i className="lni lni-quotation"></i>
                                        </div>
                                        <p className="text">
                                            Decent prices and quality assignment is what I always require from a professional. Nursing
                                            assignment experts like them did not fail to give me the comfort I was looking for!
                                        </p>
                                        <div className="author">

                                            <h4 className="name">
                                                Sophie
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="single-testimonial">
                                    <svg className="shape1" width="62" height="31" viewBox="0 0 62 31" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M-1.10459e-06 -3.51286e-06C-1.46049e-06 4.07097 0.801837 8.10209 2.35973 11.8632C3.91763 15.6243 6.20107 19.0417 9.07969 21.9203C11.9583 24.7989 15.3757 27.0824 19.1368 28.6403C22.8979 30.1982 26.929 31 31 31C35.071 31 39.1021 30.1982 42.8632 28.6403C46.6243 27.0824 50.0417 24.7989 52.9203 21.9203C55.7989 19.0417 58.0824 15.6243 59.6403 11.8632C61.1982 8.10209 62 4.07098 62 -8.02757e-07L31 -8.02758e-07L-1.10459e-06 -3.51286e-06Z"
                                            fill="#FF8686" />
                                    </svg>
                                    <svg className="shape2" width="82" height="74" viewBox="0 0 82 74" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="45.0005" cy="37" r="37" fill="#FE9955" />
                                        <path
                                            d="M0.175359 2.73871C1.17682 4.85939 2.2739 6.88145 3.46802 8.90242C4.46524 10.732 5.46811 12.9497 6.94627 14.4811C7.73528 15.3431 9.37218 14.4457 8.96708 13.287C8.96708 13.287 8.96566 13.1899 8.86863 13.1913C9.05846 12.8974 9.2497 12.7003 9.53657 12.4052C9.63361 12.4037 9.82627 12.304 9.92331 12.3026C10.116 12.2027 10.3072 12.0059 10.4985 11.8088C15.7794 14.5465 21.0575 17.0902 25.9574 20.3188C27.4271 21.268 28.8012 22.3157 30.081 23.5587C25.1774 26.7359 19.5257 31.8654 20.6822 37.9632C22.255 45.996 30.8275 41.5036 33.678 37.2886C37.1963 32.2874 36.94 28.0206 33.4815 23.8005C36.7525 21.8117 40.4199 20.3993 44.0133 20.5412C52.6538 20.7066 54.2222 28.4483 52.0851 34.9823C49.548 34.0486 46.6328 33.7999 44.1182 34.4189C39.5716 35.4557 35.5978 42.5017 38.8594 46.5306C42.1196 50.4625 50.1618 42.8719 51.7762 40.422C52.2515 39.7356 52.7252 38.9523 53.1021 38.1703C53.2005 38.266 53.2977 38.2645 53.396 38.3602C60.4477 42.7221 54.5176 48.729 49.6083 51.5181C48.8377 51.9175 49.5325 52.975 50.3045 52.6726C55.415 50.3659 61.3648 45.7175 57.7824 39.6551C56.8879 38.2123 55.6081 36.9692 54.0428 36.1184C56.0998 30.7503 56.0094 24.5398 51.101 20.7292C45.211 16.1562 37.6845 19.1774 32.1017 22.3646C32.0032 22.2691 32.0032 22.2691 31.9048 22.1733C26.4872 16.7199 18.8689 13.4339 12.0254 10.0395C12.5007 9.3532 12.9746 8.56968 13.4499 7.88351C13.7339 7.39393 13.627 6.71609 13.2332 6.33375C9.89298 3.56774 5.88339 1.49089 1.50686 0.875232C0.435374 0.599667 -0.325372 1.67822 0.175359 2.73871ZM33.341 27.4905C35.5295 31.1468 32.9632 34.8724 30.4799 37.6262C27.2329 41.2646 21.8818 40.372 22.8688 34.8253C23.41 32.0028 25.9005 29.7342 27.9114 27.8608C28.9646 26.8749 30.2118 25.886 31.5576 24.9929C32.2483 25.7593 32.8433 26.6243 33.341 27.4905ZM51.1458 37.131C49.8256 39.7708 47.913 41.7398 45.5099 43.3277C44.4523 44.0226 43.2964 44.6217 42.0392 44.9312C38.7541 45.9496 40.3273 40.6856 40.9868 39.3172C42.9709 35.6001 47.6329 35.8234 51.1458 37.131ZM10.7274 7.53494C10.7288 7.63198 10.6318 7.63339 10.6332 7.73043C10.3421 7.73467 10.0538 7.93314 9.86536 8.32395C9.58414 9.00745 9.20589 9.69236 8.82764 10.3774C8.63781 10.6714 8.06407 11.2621 8.25814 11.2592C8.16111 11.2607 8.06548 11.3591 8.0669 11.4561C7.46913 10.3974 6.67729 9.34112 6.07953 8.28236C5.28345 6.93515 4.48596 5.4909 3.68846 4.0465C6.12426 4.69011 8.56855 5.91625 10.7274 7.53494Z"
                                            fill="#7C451F" />
                                    </svg>
                                    <div className="inner-content">
                                        <div className="qote-icon">
                                            <i className="lni lni-quotation"></i>
                                        </div>
                                        <p className="text">
                                            I was drenched in sweat to complete my clinical nursing assignment in time and got to know
                                            about Nursing Assignment Help through a friend. They did a pretty great job in the least
                                            amount of time!
                                        </p>
                                        <div className="author">

                                            <h4 className="name">
                                                Arya
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="single-testimonial">
                                    <svg className="shape1" width="62" height="31" viewBox="0 0 62 31" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M-1.10459e-06 -3.51286e-06C-1.46049e-06 4.07097 0.801837 8.10209 2.35973 11.8632C3.91763 15.6243 6.20107 19.0417 9.07969 21.9203C11.9583 24.7989 15.3757 27.0824 19.1368 28.6403C22.8979 30.1982 26.929 31 31 31C35.071 31 39.1021 30.1982 42.8632 28.6403C46.6243 27.0824 50.0417 24.7989 52.9203 21.9203C55.7989 19.0417 58.0824 15.6243 59.6403 11.8632C61.1982 8.10209 62 4.07098 62 -8.02757e-07L31 -8.02758e-07L-1.10459e-06 -3.51286e-06Z"
                                            fill="#FF8686" />
                                    </svg>
                                    <svg className="shape2" width="82" height="74" viewBox="0 0 82 74" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="45.0005" cy="37" r="37" fill="#FE9955" />
                                        <path
                                            d="M0.175359 2.73871C1.17682 4.85939 2.2739 6.88145 3.46802 8.90242C4.46524 10.732 5.46811 12.9497 6.94627 14.4811C7.73528 15.3431 9.37218 14.4457 8.96708 13.287C8.96708 13.287 8.96566 13.1899 8.86863 13.1913C9.05846 12.8974 9.2497 12.7003 9.53657 12.4052C9.63361 12.4037 9.82627 12.304 9.92331 12.3026C10.116 12.2027 10.3072 12.0059 10.4985 11.8088C15.7794 14.5465 21.0575 17.0902 25.9574 20.3188C27.4271 21.268 28.8012 22.3157 30.081 23.5587C25.1774 26.7359 19.5257 31.8654 20.6822 37.9632C22.255 45.996 30.8275 41.5036 33.678 37.2886C37.1963 32.2874 36.94 28.0206 33.4815 23.8005C36.7525 21.8117 40.4199 20.3993 44.0133 20.5412C52.6538 20.7066 54.2222 28.4483 52.0851 34.9823C49.548 34.0486 46.6328 33.7999 44.1182 34.4189C39.5716 35.4557 35.5978 42.5017 38.8594 46.5306C42.1196 50.4625 50.1618 42.8719 51.7762 40.422C52.2515 39.7356 52.7252 38.9523 53.1021 38.1703C53.2005 38.266 53.2977 38.2645 53.396 38.3602C60.4477 42.7221 54.5176 48.729 49.6083 51.5181C48.8377 51.9175 49.5325 52.975 50.3045 52.6726C55.415 50.3659 61.3648 45.7175 57.7824 39.6551C56.8879 38.2123 55.6081 36.9692 54.0428 36.1184C56.0998 30.7503 56.0094 24.5398 51.101 20.7292C45.211 16.1562 37.6845 19.1774 32.1017 22.3646C32.0032 22.2691 32.0032 22.2691 31.9048 22.1733C26.4872 16.7199 18.8689 13.4339 12.0254 10.0395C12.5007 9.3532 12.9746 8.56968 13.4499 7.88351C13.7339 7.39393 13.627 6.71609 13.2332 6.33375C9.89298 3.56774 5.88339 1.49089 1.50686 0.875232C0.435374 0.599667 -0.325372 1.67822 0.175359 2.73871ZM33.341 27.4905C35.5295 31.1468 32.9632 34.8724 30.4799 37.6262C27.2329 41.2646 21.8818 40.372 22.8688 34.8253C23.41 32.0028 25.9005 29.7342 27.9114 27.8608C28.9646 26.8749 30.2118 25.886 31.5576 24.9929C32.2483 25.7593 32.8433 26.6243 33.341 27.4905ZM51.1458 37.131C49.8256 39.7708 47.913 41.7398 45.5099 43.3277C44.4523 44.0226 43.2964 44.6217 42.0392 44.9312C38.7541 45.9496 40.3273 40.6856 40.9868 39.3172C42.9709 35.6001 47.6329 35.8234 51.1458 37.131ZM10.7274 7.53494C10.7288 7.63198 10.6318 7.63339 10.6332 7.73043C10.3421 7.73467 10.0538 7.93314 9.86536 8.32395C9.58414 9.00745 9.20589 9.69236 8.82764 10.3774C8.63781 10.6714 8.06407 11.2621 8.25814 11.2592C8.16111 11.2607 8.06548 11.3591 8.0669 11.4561C7.46913 10.3974 6.67729 9.34112 6.07953 8.28236C5.28345 6.93515 4.48596 5.4909 3.68846 4.0465C6.12426 4.69011 8.56855 5.91625 10.7274 7.53494Z"
                                            fill="#7C451F" />
                                    </svg>
                                    <div className="inner-content">
                                        <div className="qote-icon">
                                            <i className="lni lni-quotation"></i>
                                        </div>
                                        <p className="text">
                                            I had a family emergency and a nursing reflection assignment submission was the day after. I
                                            chose their urgent nursing assignment help online with too many thoughts in my mind. I was
                                            happy with the work I receive as I was looking for someone to write my nursing assignment
                                            in one day! Happy with the quality too.
                                        </p>
                                        <div className="author">

                                            <h4 className="name">
                                                Malti
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="single-testimonial">
                                    <svg className="shape1" width="62" height="31" viewBox="0 0 62 31" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M-1.10459e-06 -3.51286e-06C-1.46049e-06 4.07097 0.801837 8.10209 2.35973 11.8632C3.91763 15.6243 6.20107 19.0417 9.07969 21.9203C11.9583 24.7989 15.3757 27.0824 19.1368 28.6403C22.8979 30.1982 26.929 31 31 31C35.071 31 39.1021 30.1982 42.8632 28.6403C46.6243 27.0824 50.0417 24.7989 52.9203 21.9203C55.7989 19.0417 58.0824 15.6243 59.6403 11.8632C61.1982 8.10209 62 4.07098 62 -8.02757e-07L31 -8.02758e-07L-1.10459e-06 -3.51286e-06Z"
                                            fill="#FF8686" />
                                    </svg>
                                    <svg className="shape2" width="82" height="74" viewBox="0 0 82 74" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="45.0005" cy="37" r="37" fill="#FE9955" />
                                        <path
                                            d="M0.175359 2.73871C1.17682 4.85939 2.2739 6.88145 3.46802 8.90242C4.46524 10.732 5.46811 12.9497 6.94627 14.4811C7.73528 15.3431 9.37218 14.4457 8.96708 13.287C8.96708 13.287 8.96566 13.1899 8.86863 13.1913C9.05846 12.8974 9.2497 12.7003 9.53657 12.4052C9.63361 12.4037 9.82627 12.304 9.92331 12.3026C10.116 12.2027 10.3072 12.0059 10.4985 11.8088C15.7794 14.5465 21.0575 17.0902 25.9574 20.3188C27.4271 21.268 28.8012 22.3157 30.081 23.5587C25.1774 26.7359 19.5257 31.8654 20.6822 37.9632C22.255 45.996 30.8275 41.5036 33.678 37.2886C37.1963 32.2874 36.94 28.0206 33.4815 23.8005C36.7525 21.8117 40.4199 20.3993 44.0133 20.5412C52.6538 20.7066 54.2222 28.4483 52.0851 34.9823C49.548 34.0486 46.6328 33.7999 44.1182 34.4189C39.5716 35.4557 35.5978 42.5017 38.8594 46.5306C42.1196 50.4625 50.1618 42.8719 51.7762 40.422C52.2515 39.7356 52.7252 38.9523 53.1021 38.1703C53.2005 38.266 53.2977 38.2645 53.396 38.3602C60.4477 42.7221 54.5176 48.729 49.6083 51.5181C48.8377 51.9175 49.5325 52.975 50.3045 52.6726C55.415 50.3659 61.3648 45.7175 57.7824 39.6551C56.8879 38.2123 55.6081 36.9692 54.0428 36.1184C56.0998 30.7503 56.0094 24.5398 51.101 20.7292C45.211 16.1562 37.6845 19.1774 32.1017 22.3646C32.0032 22.2691 32.0032 22.2691 31.9048 22.1733C26.4872 16.7199 18.8689 13.4339 12.0254 10.0395C12.5007 9.3532 12.9746 8.56968 13.4499 7.88351C13.7339 7.39393 13.627 6.71609 13.2332 6.33375C9.89298 3.56774 5.88339 1.49089 1.50686 0.875232C0.435374 0.599667 -0.325372 1.67822 0.175359 2.73871ZM33.341 27.4905C35.5295 31.1468 32.9632 34.8724 30.4799 37.6262C27.2329 41.2646 21.8818 40.372 22.8688 34.8253C23.41 32.0028 25.9005 29.7342 27.9114 27.8608C28.9646 26.8749 30.2118 25.886 31.5576 24.9929C32.2483 25.7593 32.8433 26.6243 33.341 27.4905ZM51.1458 37.131C49.8256 39.7708 47.913 41.7398 45.5099 43.3277C44.4523 44.0226 43.2964 44.6217 42.0392 44.9312C38.7541 45.9496 40.3273 40.6856 40.9868 39.3172C42.9709 35.6001 47.6329 35.8234 51.1458 37.131ZM10.7274 7.53494C10.7288 7.63198 10.6318 7.63339 10.6332 7.73043C10.3421 7.73467 10.0538 7.93314 9.86536 8.32395C9.58414 9.00745 9.20589 9.69236 8.82764 10.3774C8.63781 10.6714 8.06407 11.2621 8.25814 11.2592C8.16111 11.2607 8.06548 11.3591 8.0669 11.4561C7.46913 10.3974 6.67729 9.34112 6.07953 8.28236C5.28345 6.93515 4.48596 5.4909 3.68846 4.0465C6.12426 4.69011 8.56855 5.91625 10.7274 7.53494Z"
                                            fill="#7C451F" />
                                    </svg>
                                    <div className="inner-content">
                                        <div className="qote-icon">
                                            <i className="lni lni-quotation"></i>
                                        </div>
                                        <p className="text">
                                            I tried multiple Nursing Assignment Services before but, never found an easier way to order
                                            until I found Nursing Assignment Help! The nursing assignment experts were so easy on me.
                                            I am glad they didn't give me anxiety.
                                        </p>
                                        <div className="author">

                                            <h4 className="name">
                                                Lucy
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Review

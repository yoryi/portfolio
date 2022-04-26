import React, { useMemo, useEffect, useState } from 'react';
import { debounce } from 'throttle-debounce';

import SwiperCore, { FreeMode, Keyboard, Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Row, Col } from "react-bootstrap";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import TestimonialCard from './TestmonialCard';
import data from '../../data/testimonials.json'

SwiperCore.use([FreeMode, Pagination, Keyboard, Navigation, Autoplay]);

const useWindowSize = () => {
    const isClient = typeof window === 'object';

    function getSize() {
        return {
            height: isClient ? window.innerHeight : undefined,
            width: isClient ? window.innerWidth : undefined,
        };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return;
        }

        const handleResize = debounce(100, () => setWindowSize(getSize()));

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
};


SwiperCore.use([FreeMode, Pagination, Keyboard, Navigation]);

const Testimonial = () => {

    const { width } = useWindowSize();

    const spaceBeteen = useMemo(() => (width > 500 ? 24 : 14), [width]);
    return (
        <>
            <h1 className="testimonial-heading">
                <strong className="purple">Testimonials</strong>
            </h1>
            <Row className="swiper-section">
                <Swiper
                    keyboard={{ enabled: true }}
                    slidesPerView={1}
                    spaceBetween={spaceBeteen}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 8000
                    }}
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        }
                    }}

                >
                    {data.map((value, index) => <Col md={4} className="project-card" key={index}><SwiperSlide key={index} ><TestimonialCard userImg={value.userImg} description={value.description} userInfo={value.userInfo} rating={value.rating} reference={value.reference} /></SwiperSlide></Col>)}
                </Swiper>
            </Row>
        </>

    )
}

export default Testimonial;
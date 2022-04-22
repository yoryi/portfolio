import React, { useMemo, useEffect, useState } from 'react';
import { debounce } from 'throttle-debounce';
// import Swiper core and required modules
import SwiperCore, { FreeMode, Keyboard, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Row, Col } from "react-bootstrap";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import TestimonialCard from './TestmonialCard';
import data from '../../data/testimonials.json'

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
    const slidesPerView = useMemo(
        () => (width > 500 ? width / 500 : width / 300),
        [width]
    );
    const spaceBeteen = useMemo(() => (width > 500 ? 24 : 14), [width]);
    const slidesOffsetBefore = 50;
    return (
        <>
            <h1 className="testimonial-heading">
                <strong className="purple">Testimonials</strong>
            </h1>
            <Row className="swiper-section">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={slidesPerView}
                    spaceBetween={spaceBeteen}
                    slidesOffsetBefore={slidesOffsetBefore}
                    allowSlideNext
                    allowSlidePrev
                    allowTouchMove
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}

                >
                    {data.map((value, index) => <Col md={4} className="project-card"><SwiperSlide key={index}><TestimonialCard userImg={value.userImg} description={value.description} name={value.name} rating={value.rating} /></SwiperSlide></Col>)}
                </Swiper>
            </Row>
        </>

    )
}

export default Testimonial;
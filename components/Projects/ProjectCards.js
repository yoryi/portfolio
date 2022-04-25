import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import "swiper/css";

SwiperCore.use([Autoplay]);

function ProjectCards(props) {
  let randomDelay = Math.floor((Math.random() * 10) + 1) * 1000;
  return (
    <Card className="project-card-view">
      <Card.Header>
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: randomDelay > 4000 ? randomDelay : randomDelay + 5000
          }}
          loop={true}
        >
          {props.imgPath.map((value, index) => (
            <SwiperSlide key={'#' + index}>
              <img src={value} alt="card-img" style={{ width: "100%" }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textTransform: "lowercase" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ textTransform: "lowercase", color: '#c770f0' }}>
          {props.techStack}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

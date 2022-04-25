import React from "react";
import { Col, Row } from "react-bootstrap";

import data from '../../data/techstack.json';

const TechDetailModal = ({ title, rating }) => {
  return (
    <div className="tech-modal">
      <p className="tech-modal__title">
        {title}
      </p>
      <p className="tech-modal__rating">
        {rating}
      </p>
    </div>
  )
}

const PercentOverlay = ({ percent, imgPath1, type }) => {
  let ratingWidth = 72;
  if (type === "smaller") {
    ratingWidth = 60;
  } else if (type === "small") {
    ratingWidth = 66;
  }
  return (
    <div className="overlay" style={{ width: percent * ratingWidth }} >
      <img src={imgPath1} className="tech-icon" />
    </div>
  )
}

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {data.map((value, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <PercentOverlay percent={value.percent} imgPath1={value.imgPath1} type={value.type} />
          <img src={value.imgPath} className="tech-icon" />
          <TechDetailModal title={value.title} rating={`${+value.percent * 100}%`} />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;

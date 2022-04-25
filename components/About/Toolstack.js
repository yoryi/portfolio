import React from "react";
import { Col, Row } from "react-bootstrap";


import data from '../../data/toolstack.json'

function Toolstack() {

  const ToolDetailModal = ({ title, rating }) => {
    return (
      <div className="tool-modal">
        <p className="tool-modal__title">
          {title}
        </p>
      </div>
    )
  }
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        data.map((value, index) => (
          <Col xs={4} md={2} className="tool-icons" key={index}>
            <img src={value.imgPath} className="tool-icon" />
            <ToolDetailModal title={value.title} />
          </Col>
        ))
      }
    </Row>
  );
}

export default Toolstack;

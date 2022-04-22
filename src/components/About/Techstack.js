import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaAws } from 'react-icons/fa'
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiGithubBadge,
  DiBitbucket
} from "react-icons/di";
import {
  SiTailwindcss,
  SiFirebase,
  SiGatsby,
  SiMaterialui,
  SiNextdotjs,
  SiTsnode,
  SiApollographql,
  SiContentful,
  SiShopify
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGatsby />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApollographql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTsnode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiShopify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiContentful />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBitbucket />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />
      </Col>

    </Row>
  );
}

export default Techstack;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { SiUpwork } from "react-icons/si";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              In short, the solutions I created are used by millions of users
              every day. I could build a web, mobile or desktop application
              using{" "}
              <b className="purple">
                React.js, Node.js, Typescript, and Serverless Computing
              </b>
              , conforming to the principle of the least privilege under version
              control for each function (Pay-per-use{" "}
              <b className="purple">AWS</b> or{" "}
              <b className="purple">Google Cloud</b> infrastructure that scales
              indefinitely).
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with{" "}
              <b className="purple">
                Blockchain Smart Contract, NFT, Deep Learning and Natural
                Launguage Processing.
              </b>{" "}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={"/Assets/yoryi.png"} className="avatar" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.upwork.com/fl/yoryojeda"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiUpwork />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/yoryi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:jorgihno.ojeda@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jorgihno-ojeda/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Tilt from "react-parallax-tilt";

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
              I&apos;m a web, mobile and desktop developer, I enjoy designing, coding, and most of all learning new things.🤷‍♂️
              <br />

              <br />
              My field of Interest&apos;s are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
              <br />
              <br />
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
                  <img src="/Assets/icons/upwork.svg" width={20} height={20} alt="upwork" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/yoryi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <img src="/Assets/icons/github3.svg" width={20} height={20} alt="github" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:jorgihno.ojeda@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <img src="/Assets/icons/email.svg" width={20} height={20} alt="email" />

                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/yoryi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <img src="/Assets/icons/linkedin.svg" width={20} height={20} alt="linkedin" />

                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/yoryi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <img src="/Assets/icons/instagram.svg" width={20} height={20} alt="instagram" />

                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/yoryi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <img src="/Assets/icons/facebook.svg" width={20} height={20} alt="facebook" />
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

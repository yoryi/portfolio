import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Jorgihno Ojeda</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Jo</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/yoryi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/Assets/icons/github2.svg"
                  width={15}
                  height={15}
                  alt="github"
                />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:jorgihno.ojeda@gmail.com"
                rel="noopener noreferrer"
              >
                <img
                  src="/Assets/icons/email.svg"
                  width={16}
                  height={15}
                  alt="email"
                />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

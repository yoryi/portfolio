import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle";
import Github from "../components/About/Github";
import Techstack from "../components/About/Techstack";
import Aboutcard from "../components/About/AboutCard";
import laptopImg from "../assets/about.png";
import Toolstack from "../components/About/Toolstack";
import Testimonial from '../components/About/Testimonial';

function About() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            Know Who <strong className="purple">I&apos;M</strong>
                        </h1>
                        <Aboutcard />
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <img src={"../../assets/about.png"} alt="about" className="img-fluid" />
                    </Col>
                </Row>
                <h1 className="project-heading">
                    Professional <strong className="purple">Skillset </strong>
                </h1>

                <Techstack />

                <h1 className="project-heading">
                    <strong className="purple">Tools</strong> I use
                </h1>
                <Toolstack />
                <Testimonial />
                <Github />

            </Container>
        </Container>
    );
}

export default About;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCards";
import Particle from "../components/Particle";
import products from '../data/projects.json';

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I&apos;ve worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {products.map((value, index) => (
                        <Col md={4} className="project-card" key={index}>
                            <ProjectCard
                                imgPath={value.img}
                                isBlog={false}
                                title={value.title}
                                description={value.description}
                                link={value.url}
                                techStack={value.techStack}
                            />
                        </Col>))}
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;

import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { Document, Page, pdfjs } from "react-pdf";

import Particle from "../components/Particle";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
    const [width, setWidth] = useState(1200);
    const [numPages, setNumPages] = useState(1);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="resume-section">
                <Particle />
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={"../Assets/resume-yoryi.pdf"}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>

                <Row className="resume">
                    <Document file={"../Assets/resume-yoryi.pdf"} className="d-flex justify-content-center">
                        <Page pageNumber={numPages} scale={width > 786 ? 1.7 : 0.6} />
                    </Document>
                </Row>

                <Row style={{ justifyContent: "center", position: "relative", flexWrap: 'nowrap' }}>
                    <Button style={{ maxWidth: "40px", marginRight: '10px' }} onClick={() => setNumPages(1)} variant={`${numPages === 2 ? 'light' : 'primary'}`}>1</Button>
                    <Button style={{ maxWidth: "40px" }} onClick={() => setNumPages(2)} variant={`${numPages === 1 ? 'light' : 'primary'}`}>2</Button>
                </Row>


                <Row style={{ justifyContent: "center", position: "relative", marginTop: '30px' }}>
                    <Button
                        variant="primary"
                        href={"../Assets/resume-yoryi.pdf"}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </div >
    );
}

export default ResumeNew;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Jorgihno Ojeda </span>
            from <span className="purple"> Barranquilla, Colombia.</span>
            <br />
            <br />
            I am a Full-Stack React/React Native/Next.js/Node.js/AWS/Firebase developer who includes working at high-level technology companies as well as consulting with clients of many sizes in various industries.
            <br />
            A majority of my career has been focused on full-stack development with clients, which includes projects at various stages of their lifecycle.
            <br />
            Below is high-level information about my technical skills and abilities but the best way to find out if I'm the right fit for your project is to reach out and schedule a call to discuss the specifics of your project.
            <br />
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Jorgihno</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

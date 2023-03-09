import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Jorgihno Ojeda </span>.
            <br />
            <br />
            I am a Full-Stack React/React Native/Next.js/Node.js/AWS/Firebase
            developer who includes working at high-level technology companies as
            well as consulting with clients of many sizes in various industries.
            <br />
            A majority of my career has been focused on full-stack development
            with clients, which includes projects at various stages of their
            lifecycle.
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            &quot;Strive to build things that make a difference!&quot;
          </p>
          <footer className="blockquote-footer">Jorgihno</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

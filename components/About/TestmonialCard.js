import React, { useState } from "react";
import Card from "react-bootstrap/Card";

import fallback from "../../public/Assets/icons/avatar.svg";

const TestimonialCard = (props) => {
    const [imageError, setImageError] = useState(false);
    const fallBackSrc = fallback.src;
    const fullname = props.userInfo.split(",")[0];
    const career = props.userInfo.split(",")[1];

    return (
        <Card className="testimonial-card-view">
            <Card.Header>
                <div className="overlay-circle">

                    <div className="overlay">
                        <div className="social-icons">
                            <a
                                href={props.references?.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ marginRight: '20px', cursor: 'pointer' }}
                            >
                                <img src="/Assets/icons/linkedin1.svg" width={25} height={25} />
                            </a>
                            <a
                                href={props.references?.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ cursor: 'pointer' }}
                            >
                                <img src="/Assets/icons/facebook1.svg" width={25} height={25} />
                            </a>
                        </div>
                    </div>
                    <img src={imageError ? fallBackSrc : props.userImg} alt="card-img" className="user-img" onError={() => setImageError(true)} />
                </div>
            </Card.Header>
            <Card.Body>

                <Card.Text style={{ marginBottom: 0, fontSize: "20px" }}>{fullname}</Card.Text>
                <Card.Text style={{ marginBottom: 0, color: "#c770f0" }}>{career}</Card.Text>
                <br />
                <Card.Text style={{ textAlign: "center" }}>
                    {`${props.description}`}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default TestimonialCard;
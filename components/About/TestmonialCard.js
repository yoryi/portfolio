import React from "react";
import ReactStars from "react-rating-stars-component";
import Card from "react-bootstrap/Card";

const TestimonialCard = (props) => {

    return (
        <Card className="testimonial-card-view">
            <Card.Header>
                <img src={props.userImg} alt="card-img" className="user-img" />

            </Card.Header>

            <Card.Body>
                <div className="d-flex justify-content-center mb-2">
                    <a
                        href={props.references?.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginRight: '20px', cursor: 'pointer' }}
                    >
                        <img src="/Assets/icons/linkedin.svg" width={25} height={25} />
                    </a>
                    <a
                        href={props.references?.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ cursor: 'pointer' }}
                    >
                        <img src="/Assets/icons/facebook.svg" width={25} height={25} />
                    </a>
                </div>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
                <Card.Text style={{ marginBottom: 0 }}>{props.name}</Card.Text>
                <ReactStars
                    classNames="rating-stars"
                    edit={false}
                    count={5}
                    value={5}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    style={{ justifyContent: 'center' }}
                />
            </Card.Body>
        </Card>
    )
}

export default TestimonialCard;
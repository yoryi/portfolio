import React from "react";
import ReactStars from "react-rating-stars-component";
import Card from "react-bootstrap/Card";

import matt from '../../Assets/matt.png';

const TestimonialCard = (props) => {

    return (
        <Card className="testimonial-card-view">
            <Card.Img src="../../Assets/matt.png" alt="card-img" className="user-img" />
            <Card.Body>
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
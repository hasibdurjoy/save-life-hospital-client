import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Nurse = ({ nurse }) => {
    const { name, img, age, price, experience } = nurse;
    return (
        <Col>
            <Card className="shadow-lg h-100 service card-color">
                <Card.Img variant="top" src={img} className="p-2 rounded-lg card-img-top" height="250px" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <h5>Age : {age}</h5>
                        <p>Experience : {experience} years</p>
                        <h4>Hire at : {price} BDT per days</h4>
                    </Card.Text>
                    <button className="btn btn-primary w-100 rounded mb-2">For Details Call: +99999988</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Nurse;
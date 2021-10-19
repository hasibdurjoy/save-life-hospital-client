import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Nurse = ({ nurse }) => {
    const { id, name, img, age, price, experience } = nurse;
    return (
        <Col>
            <Card className="shadow-lg h-100 service">
                <Card.Img variant="top" src={img} className="p-2 rounded-lg card-img-top" height="250px" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <h5>Age : {age}</h5>
                        <p>Experience : {experience} years</p>
                        <h4>Hire at : {price} BDT per days</h4>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button className="btn btn-primary w-100 rounded mb-2">For Details Call: +99999988</button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Nurse;
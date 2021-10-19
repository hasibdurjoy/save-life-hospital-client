import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = ({ doctor }) => {
    const { name, description, img } = doctor;
    return (
        <Col>
            <Card className="shadow-lg h-100 service card-color">
                <Card.Img variant="top" src={img} className="p-2 rounded-lg card-img-top" height="250px" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="text-start">
                        {description}
                    </Card.Text>
                    <button className="btn btn-primary w-100 rounded mb-2">For Details Call: +99999988</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctor;
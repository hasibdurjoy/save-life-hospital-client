import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = ({ doctor }) => {
    const { id, name, description, img } = doctor;
    return (
        <Col>
            <Card className="shadow-lg h-100 service">
                <Card.Img variant="top" src={img} className="p-2 rounded-lg card-img-top" height="250px" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="text-start">
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button className="btn btn-primary w-100 rounded mb-2">For Details Call: +99999988</button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Doctor;
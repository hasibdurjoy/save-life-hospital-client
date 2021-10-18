import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = ({ service }) => {
    return (
        <Col>
            <Card className="shadow-lg h-100">
                <Card.Img variant="top" src={service.img} className="p-2 rounded-lg card-img-top" height="250px" />
                <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button className="btn btn-primary w-100 rounded">See Details</button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;
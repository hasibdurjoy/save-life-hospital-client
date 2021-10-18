import React from 'react';
import './Service.css';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, description, img } = service;
    return (
        <Col>
            <Card className="shadow-lg h-100 service">
                <Card.Img variant="top" src={img} className="p-2 rounded-lg card-img-top" height="250px" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/services/${id}`}>
                        <button className="btn btn-primary w-100 rounded">See Details</button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;
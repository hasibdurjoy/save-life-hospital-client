import React from 'react';
import './Service.css';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, description, img } = service;
    return (
        <Col>
            <Card className="shadow-lg h-100 service card-color">
                <Card.Img variant="top" src={img} className="p-2 rounded-lg card-img-top" height="250px" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="text-start">
                        {description.slice(0,100)}
                    </Card.Text>
                    <Link to={`/services/${id}`}>
                        <button className="btn btn-primary w-100 rounded mb-2">See Details</button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;
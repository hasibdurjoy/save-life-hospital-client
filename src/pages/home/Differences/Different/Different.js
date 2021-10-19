import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Different = ({different}) => {
    const {name,img}=different;
    return (
        <Col>
                <Card className="shadow-lg h-100 ">
                    <Card.Img variant="top" src={img} className="p-2 rounded-lg card-img-top" height="150px" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
    );
};

export default Different;
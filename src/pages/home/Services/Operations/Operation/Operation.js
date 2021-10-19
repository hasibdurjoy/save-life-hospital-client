import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Operation = ({ operation }) => {
    const { operationName, img, cost } = operation;

    return (
        <div>
            <Col>
                <Card className="shadow-lg h-100 service">
                    <Card.Img variant="top" src={img} className="p-2 rounded-lg card-img-top" height="250px" />
                    <Card.Body>
                        <Card.Title>{operationName}</Card.Title>
                        <Card.Text>
                            <h4>Cost : {cost} BDT</h4>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <button className="btn btn-primary w-100 rounded mb-2">For Details Call: +99999988</button>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Operation;
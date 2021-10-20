import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Operation from '../Operation/Operation';

const Operations = () => {
    const [operations, setOperations] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/hasibdurjoy/my-all-json-file/main/operations.json")
            .then(res => res.json())
            .then(data => setOperations(data))
    }, []);
    return (
        <Container className="my-4">
            <h2 className="mb-3">operations</h2>
            <Row xs={1} md={3} className="g-4 rounded-lg">

                {
                    operations.map(operation => <Operation key={operation.id} operation={operation}></Operation>)
                }
            </Row>
        </Container>
    );
};

export default Operations;
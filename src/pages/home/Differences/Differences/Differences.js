import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Different from '../Different/Different';

const Differences = () => {
    const [differences, setDifferences] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/hasibdurjoy/my-all-json-file/main/different.json")
            .then(res => res.json())
            .then(data => setDifferences(data))
    }, [])
    return (
        <Container className=" my-5">
            <h2 className="mb-3">Why You Choose Us ? we have</h2>
            <Row xs={2} md={4} className="g-4 rounded-lg">

                {
                    differences.map(different => <Different key={different.id} different={different}></Different>)
                }
            </Row>
        </Container>
    );
};

export default Differences;
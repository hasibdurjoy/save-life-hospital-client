import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Pathology from '../Pathology/Pathology';

const Pathologies = () => {
    const [pathologies, setPathologies] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/hasibdurjoy/my-all-json-file/main/pathologies.json')
            .then(res => res.json())
            .then(data => setPathologies(data))
    }, []);
    return (
        <Container className="mt-4">
            <h1 className="mb-3">Pathologies</h1>
            <Row xs={1} md={3} className="g-4 rounded-lg">

                {
                    pathologies.map(pathology => <Pathology key={pathology.id} pathology={pathology}></Pathology>)
                }
            </Row>
        </Container>
    );
};

export default Pathologies;
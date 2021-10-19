import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import PatientBed from '../PatientBed/PatientBed';

const PatientBeds = () => {
    const [beds, setBeds] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/hasibdurjoy/my-all-json-file/main/patientBed.json')
            .then(res => res.json())
            .then(data => setBeds(data))
    }, []);
    return (
        <Container className="mt-4">
            <h1 className="mb-3">Beds</h1>
            <Row xs={1} md={3} className="g-4 rounded-lg">

                {
                    beds.map(bed => <PatientBed key={bed.id} bed={bed}></PatientBed>)
                }
            </Row>
        </Container>
    );
};

export default PatientBeds;
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Ambulance from '../Ambulance/Ambulance';
const Ambulances = () => {
    const [ambulances, setAmbulances] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/hasibdurjoy/my-all-json-file/main/ambulences.json")
            .then(res => res.json())
            .then(data => setAmbulances(data))
    }, [])
    return (
        <Container className="mt-4">
            <h2 className="mb-3">Our All Ambulance Services</h2>
            <Row xs={1} md={3} className="g-4 rounded-lg">

                {
                    ambulances.map(ambulance => <Ambulance key={ambulance.id} ambulance={ambulance}></Ambulance>)
                }
            </Row>
        </Container>
    );
};

export default Ambulances;
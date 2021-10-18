import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctors from '../Doctors/Doctors';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <Container className="mt-4">
            <h2>Services</h2>
            <Row xs={1} md={3} className="g-4 rounded-lg">

                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
            <Doctors></Doctors>
        </Container>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/hasibdurjoy/my-all-json-file/main/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);
    return (
        <Container className="mt-4">
            <h2 className="mb-3">Our Expert Doctors</h2>
            <Row xs={1} md={3} className="g-4 rounded-lg">

                {
                    doctors?.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </Row>
        </Container>
    );
};

export default Doctors;
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Nurse from '../Nurse/Nurse';

const Nurses = () => {
    const [nurses, setNurses] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/hasibdurjoy/my-all-json-file/main/nurses.json")
            .then(res => res.json())
            .then(data => setNurses(data))
    }, []);
    return (
        <Container className="mt-4">
            <h2>Nurses</h2>
            <Row xs={1} md={3} className="g-4 rounded-lg">

                {
                    nurses.map(nurse => <Nurse key={nurse.id} nurse={nurse}></Nurse>)
                }
            </Row>
        </Container>
    );
};

export default Nurses;
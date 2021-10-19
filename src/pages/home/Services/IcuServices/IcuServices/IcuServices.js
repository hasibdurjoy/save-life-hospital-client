import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import IcuService from '../IcuService/IcuService';

const IcuServices = () => {
    const [icuServices, setIcuServices] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/hasibdurjoy/my-all-json-file/main/icu.json')
            .then(res => res.json())
            .then(data => setIcuServices(data))
    }, []);
    return (
        <Container className="mt-4">
            <h1 className="mb-3">Pathologies</h1>
            <Row xs={1} md={3} className="g-4 rounded-lg">

                {
                    icuServices.map(icu => <IcuService key={icu.id} icu={icu}></IcuService>)
                }
            </Row>
        </Container>
    );
};

export default IcuServices;
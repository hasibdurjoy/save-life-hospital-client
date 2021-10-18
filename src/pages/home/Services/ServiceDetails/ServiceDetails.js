import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceID } = useParams();
    const [services, setServices] = useState([]);
    const [service, setService] = useState({});
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/hasibdurjoy/my-all-json-file/main/services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setService(data.find(serviceItem => serviceItem.id === serviceID))
            })
    }, []);
    return (
        <div>
            <div>
                <div className="col-lg-6 col-md-6 col-4">
                    <img src={service.img} alt="" height="400" />
                </div>
                <div className="col-lg-6 col-md-6 col-6 d-flex align-items-center pe-5">
                    <div>
                        <h2>{service.name}</h2>
                        <p>{service.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
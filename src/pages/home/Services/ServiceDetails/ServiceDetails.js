import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Ambulances from '../AmbulanceService/Ambulances/Ambulances';
import Doctors from '../Doctors/Doctors';
import Nurses from '../Nurses/Nurses/Nurses';
import Operations from '../Operations/Operations/Operations';

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
        <div className="pt-5 banner-container">
            <div className="px-3">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <img src={service.img} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center pe-5">
                        <div>
                            <h2>{service.name}</h2>
                            <p>{service.description}</p>
                            <button className="btn btn-danger rounded-pill">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
            {
                serviceID === 'service-1' && <Doctors></Doctors>
            }
            {
                serviceID === 'service-5' && <Operations></Operations>
            }
            {
                serviceID === 'service-6' && <Nurses></Nurses>
            }
            {
                serviceID === 'service-7' && <Ambulances></Ambulances>
            }
        </div>
    );
};

export default ServiceDetails;
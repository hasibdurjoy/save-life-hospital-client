import React from 'react';

const About = () => {
    return (
        <div className="px-3">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <img src="https://image.freepik.com/free-vector/city-hospital-building_74855-6301.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <h2>About us</h2>
                    <p className="text-start">A hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment. The best-known type of hospital is the general hospital, which typically has an emergency department to treat urgent health problems ranging from fire and accident victims to a sudden illness. A district hospital typically is the major health care facility in its region, with many beds for intensive care and additional beds for patients who need long-term care. </p>
                </div>
            </div>
        </div>
    );
};

export default About;
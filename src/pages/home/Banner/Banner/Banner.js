import React, { useEffect, useState } from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container pt-3">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <img src="https://i.ibb.co/jzyrtQq/Screenshot-3-removebg-preview.png" alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center pe-5">
                    <div>
                        <h2>Doctor</h2>
                        <p>Description</p>
                        <button className="btn btn-danger rounded-pill">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
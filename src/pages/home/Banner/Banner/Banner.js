import React, { useEffect, useState } from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container pt-3 px-3">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-12">
                    <img src="https://i.ibb.co/jzyrtQq/Screenshot-3-removebg-preview.png" alt="" />
                </div>
                <div className="col-lg-4 col-md-4 col-12 d-flex align-items-center pe-5 text-start">
                    <div>
                        <h2>Save Life Hospital</h2>
                        <p className="text-danger">Your Life Is Our Priority</p>
                        <h4>Ready To give you service</h4>
                        <h2 className="text-danger">Emergency ?</h2>
                        <button className="btn btn-danger rounded-pill">Call : 99999999888</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';

const BannerCarousel = ({ banner }) => {
    return (
        <div className="row">
            <div className="col-lg-6 col-md-6 col-4">
                <img src={banner.img} alt="" height="400" />
            </div>
            <div className="col-lg-6 col-md-6 col-6 d-flex align-items-center pe-5">
                <div>
                    <h2>{banner.header}</h2>
                    <p>{banner.description}</p>
                    <button className="btn btn-danger rounded-pill">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default BannerCarousel;
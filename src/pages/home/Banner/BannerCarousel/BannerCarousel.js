import React from 'react';

const BannerCarousel = ({ banner }) => {
    return (
        <div className="row">
            <div className="col-lg-6 col-md-6 col-4">
                <img src={banner.img} alt="" />
            </div>
            <div className="col-lg-6 col-md-6 col-6 d-flex align-items-center">
                <div>
                    <h2>{banner.header}</h2>
                    <p>Your Life is our priority</p>
                </div>
            </div>
        </div>
    );
};

export default BannerCarousel;
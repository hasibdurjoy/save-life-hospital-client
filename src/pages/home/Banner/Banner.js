import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import BannerCarousel from './BannerCarousel/BannerCarousel';

const Banner = () => {
    const [banners, setBanners] = useState([])
    useEffect(() => {
        fetch('banners.json')
            .then(res => res.json())
            .then(data => setBanners(data))
    }, []);
    console.log(banners);
    return (
        <div className="banner-container">
            <Carousel>
                {
                    banners.map(banner => <Carousel.Item>
                        <BannerCarousel key={banner.id} banner={banner}></BannerCarousel>
                    </Carousel.Item>)
                }

            </Carousel>
        </div>
    );
};

export default Banner;
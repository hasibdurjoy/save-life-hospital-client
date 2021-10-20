import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner/Banner';
import Differences from '../Differences/Differences/Differences';
import Services from '../Services/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Differences></Differences>
            <About></About>
        </div>
    );
};

export default Home;
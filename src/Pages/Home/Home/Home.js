import React from 'react';
import Award from '../Award/Award';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import News from '../News/News';
import Offer from '../Offer/Offer';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Features />
            <Offer />
            <Testimonials />
            <Award />
            <News />
        </div>
    );
};

export default Home;
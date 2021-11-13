import React from 'react';
import About from '../About/About';
import Award from '../Award/Award';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Mission from '../Mission/Mission';
import News from '../News/News';
import Offer from '../Offer/Offer';
import Service from '../Service/Service';
import Team from '../Team/Team';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Service />
            <About />
            <Features />
            <Offer />
            <Testimonials />
            <Team />
            <Mission />
            <Award />
            <News />
        </div>
    );
};

export default Home;
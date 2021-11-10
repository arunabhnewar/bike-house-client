import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Menubar from '../../Shared/Menubar/Menubar';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
            <Menubar />
            <Banner />
            <Features />
            <h1>Home page</h1>
            <Footer />
        </div>
    );
};

export default Home;
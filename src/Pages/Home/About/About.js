import React from 'react';
import './About.css';
import about from '../../../images/about.jpg';
import Zoom from 'react-reveal/Zoom';

const About = () => {
    return (
        <div className="container my-5 pt-5 about-container">
            <div className="row mx-auto">

                <div className="col-md-6 col-sm-12 py-5">
                    <div className="about-img">
                        <img className="img-fluid w-75" src={about} alt="" />
                    </div>
                </div>

                <div className="col-md-6 col-sm-12 py-5 align-self-center">
                    <div className="about-info">
                        <Zoom right cascade>
                            <h1 style={{ color: '#163336' }}
                                className="fw-bold">About Bike House</h1>
                        </Zoom>

                        <p>We’re a bike shop, a family and a team of riders, helping folks in New York explore their passion for cycling. Biking is more than transportation or exercise, it’s a lifestyle. Whether you need help with where to ride or are in need.</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
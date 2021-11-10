import React from 'react';
import { NavLink } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="row d-flex justify-content-center align-items-center banner">
                <div className="col-md-6">
                    <h1 className="text-warning">Experience New Ride </h1>
                    <p className="text-white mt-3 text-center mb-5">Four Wheels move the body and two wheels move the soul. <br /> A bike on the road is worth two in the shed.</p>
                    <NavLink to="/explore" className="p-2 w-25 btn btn-warning">Explore Now</NavLink>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
    );
};

export default Banner;
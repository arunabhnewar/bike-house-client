import React from 'react';
import './Mission.css';

const Mission = () => {
    return (
        <div className="py-5">
            <div className="container-fluid mission-section mt-5">
                <div className="row d-flex justify-content-center align-items-center pt-5 mt-5">
                    <div className="col-md-6 mt-5 pt-5">
                        <h1 className="text-warning fw-bold ">Our mission
                            and philosophy</h1>
                        <span className="text-white mt-3 text-center mb-5">The Biker Marathon initiative materialized through the support of marathoners <br /> and biking enthusiasts, international race directors and volunteers who are <br /> determined to bring peace and goodwill to the world through our favorite activity. <br /> Stay fit and healthy with our programs. If you feel that you are ready to change <br /> your lifestyle, <span style={{ fontSize: "26px" }}
                            className="fw-bold text-warning">join us!</span> </span>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Mission;
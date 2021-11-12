import React from 'react';
import './Service.css';
import service1 from '../../../images/service/service-icon-1.png';
import service2 from '../../../images/service/service-icon-2.png';
import service4 from '../../../images/service/service-icon-4.png';
import service5 from '../../../images/service/service-icon-5.png';

const Service = () => {
    return (
        <div className="container service-container">
            <div className="row mx-auto" style={{ backgroundColor: "#335154" }}>

                <div className="col-md-3 col-sm-12">
                    <div className="service-img mt-3">
                        <img src={service1} alt="" />
                    </div>

                    <div className="service-info mb-5 pt-3">
                        <h4 className="text-white fw-bold">Chain</h4>
                        <span className="text-white">The Discus 45|32 LTD is a disc chain for road bikes, designed to be optimized for 28-30mm tires. </span>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="service-img mt-3">
                        <img src={service2} alt="" />
                    </div>
                    <div className="service-info mb-5 pt-3">
                        <h4 className="text-white fw-bold">Brake Parts</h4>
                        <span className="text-white">A next-level design that’s constantly being upgraded to include better brake parts, better response. </span>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="service-img mt-3">
                        <img src={service4} alt="" />
                    </div>
                    <div className="service-info mb-5 pt-3">
                        <h4 className="text-white fw-bold">Freewheels</h4>
                        <span className="text-white">A 650b wheel set, it can handle wider tires than a typical 700c wheel set can, an incredibly versatile disc wheel set.</span>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="service-img mt-3">
                        <img src={service5} alt="" />
                    </div>
                    <div className="service-info mb-5 pt-3">
                        <h4 className="text-white fw-bold">Head Protectors</h4>
                        <span className="text-white">This system would help to discover the best bike helmets of 2021 and beyond for their safety and ratings.</span>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Service;
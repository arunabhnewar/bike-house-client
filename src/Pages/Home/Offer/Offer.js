import React from 'react';
import { Button } from 'react-bootstrap';
import './Offer.css';

const Offer = () => {
    return (
        <div className="container-fluid">
            <div className="offer-container">
                {/* <h1 style={{ color: '#163336' }} className="fw-bold">New Offer</h1> */}
                <div className="row d-flex justify-content-center align-self-center ">
                    <div className="col-md-6 mt-5 pt-5">
                        <h1 className="pt-5 fw-bold" style={{ color: '#163336' }}>Big Offer</h1>
                        <h6 style={{ color: '#163336' }} className=" mt-3 text-center mb-5">New Bike By Manufactures Biko offers <br /> <span style={{ fontSize: '48px', paddingTop: '5px', fontWeight: 800, color: '#df453e' }}>25% Discount</span></h6>
                        <Button className="btn w-25" style={{ backgroundColor: '#163336', outline: 'none', border: 'none' }}>Buy Now</Button>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div >
        </div>
    );
};

export default Offer;
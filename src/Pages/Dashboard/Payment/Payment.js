import React from 'react';
import comingSoon from '../../../images/coming-soon.png';

const Payment = () => {
    return (
        <div style={{ backgroundColor: "#80d572", }} className="container-fluid py-5">
            <img className="img-fluid w-75" style={{ height: '70vh' }} src={comingSoon} alt="" />
        </div>
    );
};

export default Payment;
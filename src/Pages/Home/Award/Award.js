import React from 'react';
import award1 from '../../../images/awards/award-1.png';
import award2 from '../../../images/awards/award-2.png';
import award3 from '../../../images/awards/award-3.png';
import award4 from '../../../images/awards/award-4.png';
import award5 from '../../../images/awards/award-5.png';
import award6 from '../../../images/awards/award-6.png';

const Award = () => {
    return (
        <div className="container my-5 pt-5">
            <h1 style={{ color: '#163336' }} className="fw-bold pt-5 pb-5">Awards</h1>
            <div className="row mx-auto p-5" style={{ backgroundColor: '#A3B4B7' }}>
                <div className="col-md-2 col-sm-12 pb-3">
                    <img src={award1} alt="" />
                </div>

                <div className="col-md-2 col-sm-12 pb-3">
                    <img src={award2} alt="" />
                </div>

                <div className="col-md-2 col-sm-12 pb-3">
                    <img src={award3} alt="" />
                </div>

                <div className="col-md-2 col-sm-12 pb-3">
                    <img src={award4} alt="" />
                </div>

                <div className="col-md-2 col-sm-12 pb-3">
                    <img src={award5} alt="" />
                </div>

                <div className="col-md-2 col-sm-12 pb-3">
                    <img src={award6} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Award;
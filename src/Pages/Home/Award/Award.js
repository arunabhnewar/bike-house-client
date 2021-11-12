import React from 'react';
import './Award.css';
import award7 from '../../../images/awards/award-7.png';
import award8 from '../../../images/awards/award-8.png';
import award9 from '../../../images/awards/award-9.png';
import award10 from '../../../images/awards/award-10.png';
import award11 from '../../../images/awards/award-11.png';
import award12 from '../../../images/awards/award-12.png';

const Award = () => {
    return (
        <div className="container my-5 pt-5">
            <h1 style={{ color: '#163336' }} className="fw-bold pt-5 pb-5">Awards</h1>
            <div className="row mx-auto p-5" style={{ backgroundColor: '#A3B4B7' }}>
                <div className="col-md-2 col-sm-12 pb-3 ">
                    <img className="award-item" src={award7} alt="" />
                </div>

                <div className="col-md-2 col-sm-12 pb-3">
                    <img className="award-item" src={award8} alt="" />
                </div>

                <div className="col-md-2 col-sm-12 pb-3">
                    <img className="award-item" src={award9} alt="" />
                </div>

                <div className="col-md-2 col-sm-12 pb-3">
                    <img className="award-item" src={award10} alt="" />
                </div>

                <div className="col-md-2 col-sm-12 pb-3">
                    <img className="award-item" src={award11} alt="" />
                </div>

                <div className="col-md-2 col-sm-12 pb-3">
                    <img className="award-item" src={award12} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Award;
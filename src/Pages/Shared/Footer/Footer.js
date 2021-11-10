import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
import payment from '../../../images/payment.png';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faWhatsappSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#163336' }}>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-sm-12 mb-3 col-md-3 pt-5">
                        <h3 className="text-white pb-2 text-start">Useful links</h3>
                        <p className="text-start text-muted footer-menu"> <FontAwesomeIcon icon={faChevronRight} /> About us</p>

                        <p className="text-start text-muted footer-menu"><FontAwesomeIcon icon={faChevronRight} /> Our community</p>

                        <p className="text-start text-muted footer-menu"><FontAwesomeIcon icon={faChevronRight} /> Local events</p>

                        <p className="text-start text-muted footer-menu"><FontAwesomeIcon icon={faChevronRight} /> Privacy policy</p>

                        <p className="text-start text-muted footer-menu"><FontAwesomeIcon icon={faChevronRight} /> Service plus</p>
                    </div>

                    <div className="col-sm-12 mb-3 col-md-3 pt-5">
                        <h3 className="text-white pb-2 text-start">Our shop</h3>
                        <p className="text-start text-muted footer-menu"> <FontAwesomeIcon icon={faChevronRight} /> Bikes and parts</p>

                        <p className="text-start text-muted footer-menu"><FontAwesomeIcon icon={faChevronRight} /> Clothing</p>

                        <p className="text-start text-muted footer-menu"><FontAwesomeIcon icon={faChevronRight} /> Bikes for rent</p>

                        <p className="text-start text-muted footer-menu"><FontAwesomeIcon icon={faChevronRight} /> Booking form</p>
                    </div>

                    <div className="col-sm-12 mb-3 col-md-3 pt-5">
                        <h3 className="text-white pb-2 text-start">Support</h3>
                        <p className="text-start text-muted footer-menu"> <FontAwesomeIcon icon={faChevronRight} /> Customer Support</p>

                        <p className="text-start text-muted footer-menu"><FontAwesomeIcon icon={faChevronRight} /> Delivery Supports</p>

                        <p className="text-start text-muted footer-menu"><FontAwesomeIcon icon={faChevronRight} /> Terms and Conditions</p>

                        <p className="text-start text-muted footer-menu"><FontAwesomeIcon icon={faChevronRight} /> Contact Channels</p>

                        <p className="text-start text-muted footer-menu"><FontAwesomeIcon icon={faChevronRight} /> FAQs</p>
                    </div>

                    <div className="col-sm-12 mb-3 col-md-3 pt-5">
                        <h3 className="text-white pb-2 text-center">Subscribe</h3>

                        <input className="p-2" type="email" name="" id="" style={{ border: 'none', outline: 'none' }} placeholder="Your email.." />

                        <div className="mt-3 mb-4 form-check ">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label text-muted text-start check-form" htmlFor="exampleCheck1">I agree to the <span className="text-white check-input">Privacy Policy</span>.</label>
                        </div>

                        <img className="img-fluid" src={payment} alt="" />
                    </div>

                    <hr className="text-muted mx-auto mt-3" />
                    <div className="row">
                        <div className="col-sm-12 col-md-6 mb-2">
                            <span className="text-muted">newardevil.com @ all rights reserved</span>
                        </div>

                        <div className="col-sm-12 col-md-6 mb-2">
                            <span className="pe-2 text-muted">Follow Us</span>
                            <span className="pe-2"><FontAwesomeIcon style={{ fontSize: "20px", cursor: 'pointer', color: 'lightblue' }} icon={faTwitterSquare} /></span>
                            <span className="pe-2"> <FontAwesomeIcon style={{ fontSize: "20px", cursor: 'pointer', color: 'lightblue' }} icon={faInstagramSquare} /> </span>
                            <span className="pe-2"> <FontAwesomeIcon style={{ fontSize: "20px", cursor: 'pointer', color: 'lightblue' }} icon={faFacebookSquare} /> </span>
                            <span className="pe-2"> <FontAwesomeIcon style={{ fontSize: "20px", cursor: 'pointer', color: 'lightblue' }} icon={faWhatsappSquare} /> </span>
                            <span className="pe-2"> <FontAwesomeIcon style={{ fontSize: "20px", cursor: 'pointer', color: 'lightblue' }} icon={faYoutubeSquare} /> </span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;
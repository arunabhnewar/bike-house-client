import React from 'react';
import './Team.css';
import team1 from '../../../images/team/team-1.jpg';
import team2 from '../../../images/team/team-2.jpg';
import team3 from '../../../images/team/team-3.jpg';
import team4 from '../../../images/team/team-4.jpg';
import team5 from '../../../images/team/team-5.jpg';
import team6 from '../../../images/team/team-6.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const Team = () => {
    return (
        <div className="container my-5 pt-5">
            <h1 className="fw-bold" style={{ color: "#163336" }}>Our Team</h1>
            <div className="row mx-auto">

                <div className="col-md-4 col-sm-12 pt-5">
                    <div className="team-img">
                        <img className="img-fluid" src={team1} alt="" />
                        <div className="team-info">
                            <h4>Thomas Gilbert</h4>
                            <span>Logistics Manager</span>
                        </div>
                    </div>

                    <div >
                        <div className="social-media">
                            <p style={{ color: "#163336" }}>
                                <FontAwesomeIcon style={{ fontSize: '42px', paddingRight: "10px", cursor: 'pointer' }} icon={faFacebookSquare} />
                                <FontAwesomeIcon style={{ fontSize: '42px', paddingRight: "10px", cursor: 'pointer' }} icon={faInstagramSquare} />
                                <FontAwesomeIcon style={{ fontSize: '42px', paddingRight: "10px", cursor: 'pointer' }} icon={faTwitterSquare} />
                            </p>
                        </div>
                    </div>
                </div>


                <div className="col-md-4 col-sm-12 pt-5">
                    <div className="team-img">
                        <img className="img-fluid" src={team2} alt="" />
                        <div className="team-info">
                            <h4>Thomas J. White</h4>
                            <span>Operations Manager</span>
                        </div>
                    </div>

                    <div >
                        <div className="social-media">
                            <p style={{ color: "#163336" }}>
                                <FontAwesomeIcon style={{ fontSize: '42px', paddingRight: "10px", cursor: 'pointer' }} icon={faFacebookSquare} />
                                <FontAwesomeIcon style={{ fontSize: '42px', paddingRight: "10px", cursor: 'pointer' }} icon={faInstagramSquare} />
                                <FontAwesomeIcon style={{ fontSize: '42px', paddingRight: "10px", cursor: 'pointer' }} icon={faTwitterSquare} />
                            </p>
                        </div>
                    </div>
                </div>


                <div className="col-md-4 col-sm-12 pt-5">
                    <div className="team-img">
                        <img className="img-fluid" src={team3} alt="" />
                        <div className="team-info">
                            <h4>Samantha Black</h4>
                            <span>Master Mechanic</span>
                        </div>
                    </div>

                    <div >
                        <div className="social-media">
                            <p style={{ color: "#163336" }}>
                                <FontAwesomeIcon style={{ fontSize: '42px', paddingRight: "10px", cursor: 'pointer' }} icon={faFacebookSquare} />
                                <FontAwesomeIcon style={{ fontSize: '42px', paddingRight: "10px", cursor: 'pointer' }} icon={faInstagramSquare} />
                                <FontAwesomeIcon style={{ fontSize: '42px', paddingRight: "10px", cursor: 'pointer' }} icon={faTwitterSquare} />
                            </p>
                        </div>
                    </div>
                </div>


                <div className="col-md-4 col-sm-12 pt-5">
                    <div className="team-img">
                        <img className="img-fluid" src={team4} alt="" />
                        <div className="team-info">
                            <h4>James Wilson</h4>
                            <span>Master Mechanic</span>
                        </div>
                    </div>

                    <div >
                        <div className="social-media">
                            <p style={{ color: "#163336" }}>
                                <FontAwesomeIcon style={{ fontSize: '42px', paddingRight: "10px", cursor: 'pointer' }} icon={faFacebookSquare} />
                                <FontAwesomeIcon style={{ fontSize: '42px', paddingRight: "10px", cursor: 'pointer' }} icon={faInstagramSquare} />
                                <FontAwesomeIcon style={{ fontSize: '42px', paddingRight: "10px", cursor: 'pointer' }} icon={faTwitterSquare} />
                            </p>
                        </div>
                    </div>
                </div>


                <div className="col-md-4 col-sm-12 pt-5">
                    <div className="team-img">
                        <img className="img-fluid" src={team5} alt="" />
                        <div className="team-info">
                            <h4>Jenny Wallace</h4>
                            <span>Operations Manager</span>
                        </div>
                    </div>

                    <div >
                        <div className="social-media">
                            <p style={{ color: "#163336" }}>
                                <FontAwesomeIcon style={{ fontSize: '42px', paddingRight: "10px", cursor: 'pointer' }} icon={faFacebookSquare} />
                                <FontAwesomeIcon style={{ fontSize: '42px', paddingRight: "10px", cursor: 'pointer' }} icon={faInstagramSquare} />
                                <FontAwesomeIcon style={{ fontSize: '42px', paddingRight: "10px", cursor: 'pointer' }} icon={faTwitterSquare} />
                            </p>
                        </div>
                    </div>
                </div>


                <div className="col-md-4 col-sm-12 pt-5">
                    <div className="team-img">
                        <img className="img-fluid" src={team6} alt="" />
                        <div className="team-info">
                            <h4>Mary Dalton</h4>
                            <span>Sales Manager</span>
                        </div>
                    </div>

                    <div >
                        <div className="social-media">
                            <p style={{ color: "#163336" }}>
                                <FontAwesomeIcon style={{ fontSize: '42px', paddingRight: "10px", cursor: 'pointer' }} icon={faFacebookSquare} />
                                <FontAwesomeIcon style={{ fontSize: '42px', paddingRight: "10px", cursor: 'pointer' }} icon={faInstagramSquare} />
                                <FontAwesomeIcon style={{ fontSize: '42px', paddingRight: "10px", cursor: 'pointer' }} icon={faTwitterSquare} />
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Team;
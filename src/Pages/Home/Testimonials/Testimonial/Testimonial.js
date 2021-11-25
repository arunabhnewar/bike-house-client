import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faQuoteLeft, faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Rating from 'react-rating';
import './Testimonial.css';
import Zoom from 'react-reveal/Zoom';


const Testimonial = ({ testimonial }) => {
    const { name, city, ratting, comment } = testimonial;
    return (
        <div className="row mx-auto">
            <Zoom>
                <div className="col-md-4 col-sm-12 py-3">
                    <div className="card testimonial-card" style={{ width: '18rem' }}>
                        <div className="card-header">
                            <Rating readonly
                                style={{ color: 'orange' }}
                                initialRating={ratting}
                                emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                            />{' '}
                            <span className="text-muted">{ratting}</span>
                        </div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <p style={{ fontSize: "14px", textAlign: "left" }}
                                    className="text-muted">
                                    <FontAwesomeIcon style={{ fontSize: '24px', color: '#df453e' }} icon={faQuoteLeft} /> <br />
                                    {comment}</p>
                                <hr />
                                <footer className="blockquote-footer fw-bold" style={{ fontSize: "16px", color: '#163336' }}>{name}, <cite title="Source Title">{city}</cite></footer>

                            </blockquote>
                        </div>

                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default Testimonial;
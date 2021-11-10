import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Feature.css';

const Feature = ({ feature }) => {
    const { _id, title, brand, category, rating, ratingCount, price, img } = feature;
    return (
        <div className="row mx-auto">
            <div className="col-md-3 col-sm-12">

                <Card className="mx-auto my-3 featured-item rounded-3" style={{ width: '18rem' }} >
                    <div>
                        <Card.Img variant="top" src={img} />
                    </div>

                    <div className="item-detail">
                        <Card.Body>
                            <Card.Title className="text-start fs-6 fw-bold">{title}</Card.Title>
                            <Card.Text className="text-start text-muted">
                                Brand: {brand}
                            </Card.Text>
                            <Card.Text className="text-start text-muted">
                                Category: {category}
                            </Card.Text>

                            <div className="text-start">
                                <Rating readonly
                                    style={{ color: 'orange' }}
                                    initialRating={rating}
                                    emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                    fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                                />{' '}
                                <span className="text-muted">{rating}</span>
                                <span className="text-muted">( {ratingCount} reviews)</span>
                            </div>

                            <Card.Text className="text-start fs-5 fw-bold pt-2">
                                <sup>$</sup> {price}
                            </Card.Text>

                            <div>
                                <Link to={`/placeorder/${_id}`}>
                                    <Button variant="warning" className="text-white">Buy Now</Button>{' '}
                                </Link>
                            </div>
                        </Card.Body>
                    </div>
                </Card>

            </div>
        </div>
    );
};

export default Feature;
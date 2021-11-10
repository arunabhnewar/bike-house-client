import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Product.css';
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product }) => {
    const { _id, title, brand, category, rating, ratingCount, price, img } = product;

    return (

        <div className="row mx-auto">
            <div className="col-md-3 col-sm-12">

                <Card className="mx-auto my-3 product-item rounded-3" style={{ width: '16rem' }} >
                    <div className="">
                        <Card.Img variant="top" src={img} />

                    </div>

                    <div className="product-detail">
                        <Card.Body>
                            <Card.Title style={{ color: '#163336' }} className="text-start fs-5 fw-bold">{title}</Card.Title>
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

                            <Card.Text style={{ color: '#df453e' }} className="text-start fs-5 fw-bold pt-2">
                                <sup>$</sup>{price}
                            </Card.Text>

                            <div>
                                <Link to={`/purchase/${_id}`}>
                                    <Button variant="" className="text-white" style={{ backgroundColor: '#163336' }}>Buy Now</Button>{' '}
                                </Link>
                            </div>
                        </Card.Body>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Product;
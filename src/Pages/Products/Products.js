import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <div className="products-banner">
                <div className="row d-flex justify-content-center align-items-center pt-5">
                    <div className="col-md-6 mt-5 pt-5">
                        <h1 className="text-warning mt-5 pt-5">Rides Made Better </h1>
                        <p className="text-white mt-3 text-center mb-5">Believe in your cycle, it will lead your way <br /> It's a feeling, Ride and live today.</p>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
            <h1 style={{ color: '#163336' }} className="fw-bold mt-5 pb-5">Our Products</h1>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;
import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';
import './Features.css';

const Features = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('https://damp-cove-65094.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setFeatures(data));
    }, [])

    return (
        <div className="my-5 pt-5">
            <h1 style={{ color: '#163336' }} className="fw-bold">Featured Products</h1>

            <div className="features-container py-5">
                {
                    features.slice(0, 6).map(feature => <Feature
                        key={feature._id}
                        feature={feature}
                    ></Feature>)
                }
            </div>

        </div>
    );
};

export default Features;
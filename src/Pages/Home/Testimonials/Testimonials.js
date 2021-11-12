import React, { useState, useEffect } from 'react';
import Testimonial from './Testimonial/Testimonial';
import './Testimonials.css';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <div className="container my-5 pt-5">
            <h1 style={{ color: '#163336' }} className="fw-bold">Testimonials</h1>

            <div className="testimonials-container py-5">
                {
                    testimonials.map(testimonial =>
                        <Testimonial
                            key={testimonial._id}
                            testimonial={testimonial}
                        ></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;
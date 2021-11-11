import React from 'react';
import error from '../../images/error.jpg';

const NotFound = () => {
    return (
        <div className="container-fluid">
            <img className="img-fluid w-75" src={error} alt="" />
        </div>
    );
};

export default NotFound;
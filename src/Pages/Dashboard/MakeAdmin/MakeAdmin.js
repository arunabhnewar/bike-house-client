import React, { useState } from 'react';
import Swal from 'sweetalert2';
import admin from '../../../images/admin.jpg';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://damp-cove-65094.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire('Successfully Admin Added')
                }
            })
        e.preventDefault()
    }
    return (
        <div className="container py-5" style={{ backgroundColor: "#80d572", height: '90vh' }}>
            <div className="row  mb-5 pb-5">
                <div className="col-md-6 col-sm-12">
                    <img className="img-fluid w-50" src={admin} alt="" />
                </div>

                <div className="col-md-6 col-sm-12 pt-5">
                    <h1 className="fw-bold">Make an Admin</h1>
                    <div className="text-center pt-3 ">
                        <form onSubmit={handleAdminSubmit}>

                            <input className="border-bottom border-0 w-75 mb-2 rounded-3" onBlur={handleOnBlur} type="email" name="" id="" />
                            <br />
                            <input style={{ backgroundColor: '#163336' }} className="w-50 btn btn-success m-auto" type="submit" value="Submit" />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;
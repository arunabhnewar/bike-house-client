import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllPurchases = () => {
    const [shippingConfirm, setShippingConfirm] = useState(true);
    const [managePurchases, setManagePurchases] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/purchases')
            .then(res => res.json())
            .then(data => setManagePurchases(data))
    }, [shippingConfirm])

    const deleteHandle = id => {
        const proceed = window.confirm('Are you sure want to cancel');
        if (proceed) {
            const url = `http://localhost:5000/purchases/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Successfully canceled')
                        const remaining = managePurchases.filter(managePurchase => managePurchase?._id !== id);
                        setManagePurchases(remaining);
                    }
                });
        }
    }

    const handleShipping = id => {
        const shipping = window.confirm('Are you sure to shipping purchase?')
        if (shipping) {
            fetch(`http://localhost:5000/purchases/${id}`, {
                method: 'PUT',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount === 1) {
                        alert('Purchase Confirmed Successfully');
                        setShippingConfirm(!shipping)
                    }
                })
        }
    }
    return (
        <div className="container-fluid py-5" style={{ backgroundColor: "#80d572" }}>
            <h1 className="pt-5 fw-bold" style={{ color: '#163336' }}>Manage All Purchases Overview</h1>
            <h5 className=" pt-3" style={{ color: '#163336' }}>Users Total purchase list: <span style={{ color: "#df453e" }}>{managePurchases?.length}</span> </h5>

            <div className="container my-5 pb-5">
                <Table variant="dark" striped bordered hover responsive>
                    <thead>
                        <tr>

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>User Name</th>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Product</th>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Purchase Id</th>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Price</th>
                            ))}


                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Shipping</th>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Cancel</th>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Confirm</th>
                            ))}


                        </tr>
                    </thead>
                    {managePurchases.map((managePurchase) => (

                        <tbody key={managePurchase._id}>
                            <tr>

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>{managePurchase?.name} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>{managePurchase?.title} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>{managePurchase?._id} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}><sup>$</sup>{managePurchase?.price} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>{managePurchase?.status} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>
                                        <button onClick={() => deleteHandle(managePurchase?._id)} className="border-0 text-danger">
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </button>
                                    </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>
                                        <button className="border-0 text-danger"
                                            onClick={() => handleShipping(managePurchase?._id)}>
                                            <FontAwesomeIcon style={{ color: 'green' }} icon={faCheck} />
                                        </button>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    ))}

                </Table>
            </div>

        </div>
    );
};

export default ManageAllPurchases;

// onClick = {() => handleDelete(managePurchase?._id)}
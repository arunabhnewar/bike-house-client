import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ManageAllPurchases = () => {
    const [shippingConfirm, setShippingConfirm] = useState(true);
    const [managePurchases, setManagePurchases] = useState([]);

    useEffect(() => {
        fetch('https://damp-cove-65094.herokuapp.com/purchases')
            .then(res => res.json())
            .then(data => setManagePurchases(data))
    }, [shippingConfirm])

    const deleteHandle = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://damp-cove-65094.herokuapp.com/purchases/${id}`;
                fetch(url, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remaining = managePurchases.filter(managePurchase => managePurchase?._id !== id);
                            setManagePurchases(remaining);
                        }
                    });

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    const handleShipping = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Confirm!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://damp-cove-65094.herokuapp.com/purchases/${id}`, {
                    method: 'PUT',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount === 1) {
                            setShippingConfirm(!shippingConfirm)
                        }
                    })
                Swal.fire(
                    'Confirmed!',
                    'Your file has been confirmed.',
                    'success'
                )
            }
        })
    }

    return (
        <div className="container-fluid py-5" style={{ backgroundColor: "#80d572", height: "100vh" }}>
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
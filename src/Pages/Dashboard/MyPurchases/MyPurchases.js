import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';


const MyPurchases = () => {
    const [purchases, setPurchases] = useState([]);
    const { user } = useAuth();
    const { email } = user;

    useEffect(() => {
        fetch(`https://damp-cove-65094.herokuapp.com/purchases/${email}`)
            .then(res => res.json())
            .then(data => setPurchases(data))
    }, [email])

    const handleDelete = id => {
        // const proceed = window.confirm('Are you sure want to delete');
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
                            // alert('Deleted Successfully')
                            const remaining = purchases.filter(purchase => purchase?._id !== id);
                            setPurchases(remaining);
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

    return (
        <div className="container-fluid py-5" style={{ backgroundColor: "#80d572", height: '100vh' }}>
            <h1 className="pt-5 fw-bold" style={{ color: '#163336' }}>Update Your Product Purchase</h1>

            <h5 className=" pt-3" style={{ color: '#163336' }}>My total purchase list: <span style={{ color: "#df453e" }}>{purchases?.length}</span></h5>

            <div className="container my-5 pb-5">
                <Table variant="dark" striped bordered hover responsive>
                    <thead>
                        <tr>

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Purchase Id</th>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Product</th>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Category</th>
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


                        </tr>
                    </thead>
                    {purchases.map((purchase) => (

                        <tbody key={purchase._id}>
                            <tr>

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>{purchase?._id} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>{purchase?.title} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>{purchase?.category} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}><sup>$</sup>{purchase?.price} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>{purchase?.status} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>
                                        <button onClick={() => handleDelete(purchase?._id)} className="border-0 text-danger">
                                            <FontAwesomeIcon icon={faTrashAlt} />
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

export default MyPurchases;
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://damp-cove-65094.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to remove');
        if (proceed) {
            const url = `https://damp-cove-65094.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Successfully removed')
                        const remaining = products.filter(product => product?._id !== id);
                        setProducts(remaining);
                    }
                });
        }
    }

    return (
        <div className="container-fluid py-5" style={{ backgroundColor: "#80d572" }}>
            <h1 className="pt-5 fw-bold" style={{ color: '#163336' }}>Manage Products OverView</h1>
            <h5 className=" pt-3" style={{ color: '#163336' }}>Total Products in the website: <span style={{ color: "#df453e" }}>{products.length}</span> </h5>

            <div className="container my-5 pb-5">

                <Table variant="dark" striped bordered hover responsive>
                    <thead>
                        <tr>

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Product Id</th>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Products Name</th>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Category</th>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Price</th>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th key={index}>Remove</th>
                            ))}


                        </tr>
                    </thead>
                    {products.map((product) => (

                        <tbody key={product._id}>
                            <tr>

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>{product?._id} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>{product?.title} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>{product?.category} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}><sup>$</sup>{product?.price} </td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}>
                                        <button className="border-0 text-danger"
                                            onClick={() => handleDelete(product?._id)}>
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

export default ManageProducts;



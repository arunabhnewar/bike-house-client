import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from "react-hook-form";
import addProduct from '../../../images/add-product.jpg';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.email = user?.email;
        fetch('https://damp-cove-65094.herokuapp.com/products', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    Swal.fire('Successfully New Product Added!!')
                    reset()
                }
            });
    }
    return (
        <div style={{ backgroundColor: "#80d572" }} className="container-fluid py-5">
            <h1 className="pt-3 mb-5 fw-bold" style={{ color: '#163336' }}>Add New Product</h1>

            <div className="row mx-auto">
                <div className="col-md-6 col-sm-12 align-self-center">
                    <img className="img-fluid w-75 rounded-3" src={addProduct} alt="" />
                </div>

                <div className="col-md-6 col-sm-12">

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input
                            {...register("title")}
                            placeholder="Title"
                            className="p-2 m-2 w-75 border border-white rounded-2"
                            required />

                        <input
                            {...register("brand")}
                            placeholder="Brand"
                            className="p-2 m-2 w-75 border border-white rounded-2"
                            required />

                        <input
                            {...register("category")}
                            placeholder="Category"
                            className="p-2 m-2 w-75 border border-white rounded-2"
                            required />

                        <input
                            {...register("price")}
                            placeholder="Price"
                            className="p-2 m-2 w-75 border border-white rounded-2"
                            required />

                        <input
                            {...register("rating")}
                            placeholder="Rating 1 to 5"
                            className="p-2 m-2 w-75 border border-white rounded-2"
                            required />

                        <input
                            {...register("ratingCount")}
                            placeholder="Only One person given"
                            className="p-2 m-2 w-75 border border-white rounded-2"
                            required />

                        <input
                            {...register("img", { required: true })}
                            placeholder="Image Url"
                            className="p-2 m-2 w-75 border border-white rounded-2"
                            required />

                        <input
                            {...register("description")}
                            placeholder="Description"
                            className="p-2 m-2 w-75 border border-white rounded-2"
                            required />

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit"
                            value="Add Product"
                            className="btn w-75 rounded-2 text-white"
                            style={{ backgroundColor: '#163336' }} />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddProduct;
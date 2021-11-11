import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.email = user?.email;
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Successfully New Product Added!!')
                    reset()
                }
            });
    }
    return (
        <div style={{ backgroundColor: "#80d572" }} className="container-fluid py-5">
            <h1 className="pt-5 fw-bold" style={{ color: '#163336' }}>Add New Product</h1>

            <div className=" w-50 mx-auto mt-5">
                <div className="d-flex justify-content-center align-items-center pb-5">
                    <div className="container">

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input
                                {...register("title")}
                                placeholder="Title"
                                className="p-2 m-2 w-100 border border-white rounded-2"
                                required />

                            <input
                                {...register("brand")}
                                placeholder="Brand"
                                className="p-2 m-2 w-100 border border-white rounded-2"
                                required />

                            <input
                                {...register("category")}
                                placeholder="Category"
                                className="p-2 m-2 w-100 border border-white rounded-2"
                                required />

                            <input
                                {...register("price")}
                                placeholder="Price"
                                className="p-2 m-2 w-100 border border-white rounded-2"
                                required />

                            <input
                                {...register("rating")}
                                placeholder="Rating 1 to 5"
                                className="p-2 m-2 w-100 border border-white rounded-2"
                                required />

                            <input
                                {...register("ratingCount")}
                                placeholder="Only One person given"
                                className="p-2 m-2 w-100 border border-white rounded-2"
                                required />

                            <input
                                {...register("img", { required: true })}
                                placeholder="Image Url"
                                className="p-2 m-2 w-100 border border-white rounded-2"
                                required />

                            <input
                                {...register("description")}
                                placeholder="Description"
                                className="p-2 m-2 w-100 border border-white rounded-2"
                                required />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Add Product" className="btn btn-primary w-50 rounded-2" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
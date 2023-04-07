import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";


const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://e-wishcollection.vercel.app/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="container" >
            <div className="add-service">
                <h2 style={{ color: 'white', textAlign: 'center' }}>Add Products</h2>
                <form id="formcolor" className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" className="mt-3" {...register("name")} placeholder="product name" />
                    <input type="text" {...register("rating")} placeholder="rating" />
                    <input type="text" {...register("cost")} placeholder="price" />
                    <input {...register("image")} placeholder="product url" />
                    <textarea {...register("summery")} placeholder="product summery" />
                    <input className="btn" type="submit" value="Submit" />
                    <Link to="/allproducts"><button className="btn" >ShowProducts</button></Link>
                </form>
            </div>

        </div>
    );
};

export default AddProducts;
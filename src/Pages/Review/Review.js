import React from 'react';
import axios from 'axios';
import './Review.css';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    // -------------------------
    const onSubmit = data => {
        console.log(data);

        axios.post('https://warm-temple-88396.herokuapp.com/review', data)
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
                <h2 style={{ color: 'white', textAlign: 'center' }}>Please Give Us Review</h2>
                <form id="formcolor" className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <input className="mt-3" {...register("name")} defaultValue={user.displayName} />
                    <input className="mt-3" {...register("email")} defaultValue={user.email} />
                    <input type="number" {...register("rating")} placeholder="rating" />
                    <input {...register("image")} placeholder="image url" />
                    <textarea {...register("comment")} placeholder="write comment" />
                    <input className="btn" type="submit" value="Submit" />
                </form>
            </div>

        </div>
    );
};

export default Review;
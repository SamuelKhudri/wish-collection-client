import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Rating from 'react-rating';

const ShowReview = () => {
    const [review, setReview] = useState([])
    // fake data call-------------
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);
    return (
        <div style={{ backgroundColor: "#212335" }}>
            <div className=" p-5 m-5">
                <h1 style={{ color: "white" }} className='text-center'>Our Customers Review</h1>
                <div className='row'>

                    {
                        review.map(revi =>

                            <div class="card-deck col-lg-4 col-md-6 col-12">
                                <div style={{ marginTop: "5px" }} class="card">
                                    < img style={{ borderRadius: "50%", height: "230px", width: "75%", margin: "auto", marginTop: "5px" }} class="card-img-top" src={revi.image} alt="" />
                                    <div class="card-body">
                                        <h5 class="card-title">{revi.name}</h5>
                                        <p class="card-text">{revi.comment}</p >
                                        <div>
                                            <Rating
                                                initialRating={revi.rating}
                                                emptySymbol="far fa-star icon-color "
                                                fullSymbol="fas fa-star icon-color "
                                                readonly

                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default ShowReview;
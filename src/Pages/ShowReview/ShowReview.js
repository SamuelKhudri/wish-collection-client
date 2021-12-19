import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Rating from 'react-rating';

const ShowReview = () => {
    const [review, setReview] = useState([])
    // fake data call-------------
    useEffect(() => {
        fetch('https://warm-temple-88396.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);
    return (
        <div style={{ backgroundColor: "#212335", textAlign: 'center' }}>
            <div className=" p-5 ">
                <h1 style={{ color: "white" }} className='text-center'>Our Customers Review</h1>
                <div className='row'>

                    {
                        review.map(revi =>

                            <div class="card-deck col-lg-4 col-md-6 col-12">
                                <div style={{ marginTop: "5px", backgroundColor: 'rgb(20, 15, 37)' }} class="card">
                                    < img style={{ borderRadius: "50%", height: "230px", width: "60%", margin: "auto", marginTop: "5px" }} class="card-img-top" src={revi.image} alt="" />
                                    <div class="card-body">
                                        <h5 style={{ color: '#f9004d' }} class="card-title">{revi.name}</h5>
                                        <p style={{ color: 'white' }} class="card-text">{revi.comment}</p >
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
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating';
import './ShowReview.css';
const ShowReview = () => {
    const [review, setReview] = useState([])
    // fake data call-------------
    useEffect(() => {
        fetch('https://wish-collection.vercel.app/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);
    return (
        <div style={{ backgroundColor: "ffffffc3", textAlign: 'center', paddingBottom: "60px" }}>
            <div className=" p-2 ">
                <h1 style={{ color: "white", paddingBottom: "60px" }} className='text-center'>Our Customers Review</h1>


                {
                    review.map(revi =>

                        <div className='row'>
                            <div class="col">< img style={{ borderRadius: "50%", alignItems: "center", height: "150px", width: "40%", margin: "auto", marginBottom: "80px" }} src={revi.image} alt="" />
                            </div>
                            <div class="col"><h5 style={{ color: '#000000' }}>{revi.name}</h5>
                            </div>
                            <div class="col"><p style={{ color: '#000000' }}>{revi.comment}</p >
                            </div>
                            <div class="col" style={{}}>
                                <Rating
                                    initialRating={revi.rating}
                                    emptySymbol="far fa-star icon-color "
                                    fullSymbol="fas fa-star icon-color "
                                    readonly />
                            </div>
                        </div>)
                }


            </div>
            <NavLink style={{ color: "#3747dc", textDecoration: 'none' }} to="/allproducts" className="project__btn">see more</NavLink>
        </div>
    );
};

export default ShowReview;




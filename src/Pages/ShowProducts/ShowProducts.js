import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './ShowProducts.css';
const Product = (props) => {
    const { _id, name, image, summery, cost, rating } = props.product;
    // const des = description.slice(0, 100);
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="container">
                <div className="card">
                    <div className="imgBx">
                        <img className="w-50" src={image} alt="" />
                    </div>
                    <div className="contentBx">
                        <h2 style={{ color: '#f9004d', fontWeight: 'bold', fontSize: "30px" }} >{name}</h2>
                        <div className="size">
                            <h3>{summery}</h3>
                        </div>
                        <div className="size">
                            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fc890a' }}>${cost}</h3>
                        </div>
                        <div>
                            <Rating
                                initialRating={rating}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly
                            />
                        </div>
                        <Link to={`/placeorder/${_id}`}><button className="button-29 pt-2">Purches</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Product; 
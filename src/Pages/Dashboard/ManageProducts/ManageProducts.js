// import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
// import imgba from '../../../image/logo.jpg';
const AllProducts = () => {
    // import state
    const [products, setProducts] = useState([])
    // fake data call-------------
    useEffect(() => {
        fetch('https://wish-collection.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    // handle delete function
    const handleDelproducts = id => {
        const proceed = window.confirm('Are you want to delete?');
        if (proceed) {
            const url = `https://wish-collection.vercel.app/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')

                        const remainUser = products.filter(product => product._id !== id);
                        setProducts(remainUser);
                    }
                })
        }
    }



    return (
        <div id="redi-pro" className="products">
            {/* <Button variant="contained" onClick={() => handleDelproducts(product._id)} >Delete</Button> */}
            <div className="container p-5 ">
                <div className="p-5">
                    <h3 style={{ color: 'tomato' }}>
                        Most Wanted Products
                    </h3>
                    <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '60px', textAlign: 'center' }}>
                        Popular products
                    </h1>
                    <div style={{ paddingBottom: "10px" }} className="commonBorder"></div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4"
                >
                    {
                        products.map(product =>
                            <div className="col-lg-4 col-md-6 col-12"
                                key={product._id}
                                product={product}
                            >
                                <div className="container">
                                    <div className="card">
                                        <div className="imgBx">
                                            <img className="w-50" src={product.image} alt="" />
                                        </div>
                                        <div className="contentBx">
                                            <h2 style={{ color: '#f9004d', fontWeight: 'bold', fontSize: "30px" }} >{product.name}</h2>
                                            <div className="size">
                                                <h3>{product.summery}</h3>
                                            </div>
                                            <div className="size">
                                                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fc890a' }}>${product.cost}</h3>
                                            </div>
                                            <div>
                                                <Rating
                                                    initialRating={product.rating}
                                                    emptySymbol="far fa-star icon-color"
                                                    fullSymbol="fas fa-star icon-color"
                                                    readonly
                                                />
                                            </div>
                                            <Link to='/public'><button onClick={() => handleDelproducts(product._id)} className="button-29 pt-2">Delete</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>

            </div>
        </div>

    );
};

export default AllProducts;
import React, { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ShowCategory from '../ShowCategory/ShowCategory';
import './Categories.css';

const Categories = () => {
    // import state
    const [items, setItems] = useState([])
    // fake data call-------------
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    return (
        <div className="project component__space pb-5" id="projecredi">
            <div style={{ paddingTop: '30px' }} className="heading">
                <h1 className="heading">Product Category</h1>
            </div>
            <div style={{ paddingBottom: "10px" }} className="commonBorder"></div>
            <div className="container mt-5">
                <div className='row'>
                    {
                        items.map(item => <ShowCategory
                            key={item._id}
                            item={item}>
                        </ShowCategory>)
                        // we use Showservice function to import data
                    }
                </div>
                <div style={{ marginBottom: '30px', marginTop: '20px' }} className="">
                    <center> <NavLink to="/allproducts"><button className="view__more pointer btnP">View more</button></NavLink> </center>
                </div>
            </div>
        </div>
    );
};

export default Categories;
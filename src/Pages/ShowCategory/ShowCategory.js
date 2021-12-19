import React from 'react';
import { NavLink } from 'react-router-dom';

const ShowCategory = (props) => {
    // use destructuring to add many product
    const { img, title } = props.item;
    return (

        <div className="col-lg-4 col-md-6 col-12 mb-5">
            <div className="project__box pointer relative">
                <div className="project__box__img pointer relative">
                    <div className="project__img__box">
                        <img src={img} alt="" className="project__img" />
                    </div>
                    <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                    <h5 id="text-c" className="project__text">{title}</h5>
                    <NavLink style={{ color: "white", textDecoration: 'none' }} to="/allproducts" className="project__btn">View Details</NavLink>
                </div>
            </div>
        </div>

    );
};

export default ShowCategory;
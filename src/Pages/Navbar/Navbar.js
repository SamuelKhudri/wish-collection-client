import React, { useState, useEffect } from 'react';
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import logo from "../../images/logo.png";
import './Navbar.css';

const Navbar = () => {
    const { user, logout } = useAuth();

    // orders fetch based on email because of showing cart
    const [order, setOrder] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/orders/cart?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [user.email]);
    return (
        <div className='nav-p'>
            <div className="navmother">
                <nav className="navbar navbar-expand-lg navbar-light nav-bgcolor">
                    <div className="container-fluid navbar-side">
                        <div className='d-flex'><img style={{ borderRadius: '30%' }} src={logo} alt="" width="90" height="90" />
                            <h2 style={{ color: 'white', paddingTop: '20px', paddingLeft: '3px', }}> <i>WISH</i></h2></div>
                        <button className="navbar-toggler togol-cl" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon " ></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#redi-pro">Products</a>
                                </li>
                                {user?.email ? (
                                    < >
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/dashboard">Dassboard</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/register"> <button style={{ color: 'white', backgroundColor: '#1010E09F', fontStyle: 'none' }} onClick={logout}>SignOut</button></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/">"{user.displayName}"</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/dashboard/myorder"><Badge badgeContent={order.length} color="primary">
                                                <ShoppingCartOutlined style={{ color: "white" }} />
                                            </Badge></Link>
                                        </li>

                                    </>
                                ) : (

                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/login">Register</Link>
                                    </li>
                                )}
                                <li style={{ paddingTop: '8px', listStyle: 'none' }}><span style={{ cursor: 'pointer', color: 'white', fontWeight: '500' }}>EN</span></li>
                            </ul>

                            <li style={{ paddingTop: '8px', paddingLeft: '70px', listStyle: 'none' }}>
                                <input placeholder="Search" />
                                <Search style={{ color: "white", fontSize: 30 }} />
                            </li>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
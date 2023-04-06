import React from 'react';
import './Footer.css';
// import logo----
import logo from '../../images/logo.png';
import payment from '../../images/payment.png';
import foot1 from '../../image/foot1.png';
import foot2 from '../../image/foot4.jpg';
import foot3 from '../../image/foot.png';
// import fon awesome---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Facebook, Instagram, Pinterest, Twitter } from '@material-ui/icons';
const element2 = <FontAwesomeIcon icon={faEnvelope} />
const element1 = <FontAwesomeIcon icon={faMobile} />
const element3 = <FontAwesomeIcon icon={faPhone} />
// const element4 = <FontAwesomeIcon icon={} />


const Footer = () => {
    return (
        <div className="foot-text">
            <div style={{ backgroundColor: "#000000f5" }} className="pt-5" >
                <div className="container text-md-left">
                    <div className="row">
                        <div id="divH" className="col-lg-3 col-md-4 col-12 ">
                            <h5 id="rightreser">Wish Collection</h5>
                            <img id="imglogo" src={logo} alt="" /><br />

                            <h5 id="rightreser">Valuable Partners</h5>
                            <div id="logodiv" className="d-flex ">
                                <li><img id="imglogo" className="partsize" src={foot1} alt="" /></li>
                                <li><img id="imglogo" className="partsize" src={foot2} alt="" /></li>
                                <li><img id="imglogo" className="partsize" src={foot3} alt="" /></li>
                            </div>
                        </div>
                        <div id="divH" className="col-lg-3 col-md-4 col-12">
                            <h4 >QUICK LINKS</h4>
                            <ul id="licolor" className="list-unstyled" >
                                <li>About</li>
                                <li>Services</li>
                                <li>Partners</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div id="divH" className="col-lg-3 col-md-4 col-12">
                            <h4>Contact us {element1}</h4>
                            <ul id="licolor" className="list-unstyled" >
                                <li>Email: {element2} wishcollection12@email.com</li>
                                <li>Phone: {element3} +8801967748444</li>
                                <li> Contact: {element3} 02323444</li>
                            </ul>
                            <img src={payment} alt="" />
                        </div>
                        <div id="divH" className="col-lg-3 col-md-4 col-12">
                            <ul id="licolor" className="list-unstyled" >

                            </ul>
                            <h4>Get In Touch</h4>
                            <p style={{ color: 'white', paddingLeft: '5px' }}>we are providing you the best and original product.You can touch with us with our new collection </p>
                            <div style={{ display: 'flex', textAlign: 'center', paddingLeft: '40px' }}>
                                <div id='social-icon' style={{ color: 'rgb(59, 89, 153)' }}>
                                    <Facebook style={{ height: '50px', width: '50px' }} />
                                </div>
                                <div id='social-icon' style={{ color: 'rgb(228, 64, 95)' }}>
                                    <Instagram style={{ height: '50px', width: '50px' }} />
                                </div>
                                <div id='social-icon' style={{ color: 'rgb(85, 172, 238)' }}>
                                    <Twitter style={{ height: '50px', width: '50px' }} />
                                </div>
                                <div id='social-icon' style={{ color: 'rgb(230, 0, 35)' }}>
                                    <Pinterest style={{ height: '50px', width: '50px' }} />
                                </div>
                            </div>

                        </div>
                        <div className="footer-bottom">
                            <p id="rightreser" className="text-xs-center">
                                &copy;{new Date().getFullYear()} Authority@- All Rights Reserved
                            </p>
                            <p id="rightreser">Term Condition || Privacy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
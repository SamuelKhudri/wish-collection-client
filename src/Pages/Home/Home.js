import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import ShowReview from '../ShowReview/ShowReview';
import Products from '../Products/Products';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div className='ba-color'>
            <Navbar></Navbar>
            <Banner></Banner>
            <Categories></Categories>
            <Products></Products>
            <Contact></Contact>
            <ShowReview></ShowReview>
            <Footer></Footer>

        </div>
    );
};

export default Home;
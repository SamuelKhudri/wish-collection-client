import React, { useEffect, useState } from 'react';
import ShowProducts from '../ShowProducts/ShowProducts';
import './Products.css';
const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://e-comerce-w-s.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div id="redi-pro" className="products">
            <div className="container p-5 ">
                <div className="p-5">
                    <h3 style={{ color: 'yellow' }}>
                        Most Wanted Products
                    </h3>
                    <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '60px', textAlign: 'center' }}>
                        Popular products
                    </h1>
                    <div style={{ paddingBottom: "10px" }} className="commonBorder"></div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.slice(0, 6).map(product => <ShowProducts
                            key={product.name}
                            product={product}
                        >
                        </ShowProducts>)
                    }
                </div>
            </div>
        </div>
    );
};
export default Products; 
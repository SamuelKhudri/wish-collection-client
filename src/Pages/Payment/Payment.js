import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import './Payment.css';


const stripePromise = loadStripe('pk_test_51KAmzWKYh2DvO0oWnfRwCq78i9P30uG1C5jpBatlqfqbgMvnMANd2LGpCUQ9CnrAxSXp1HtbEz4YqPR2iVeroddp00we34KWQV');

const Payment = () => {
    const { orderId } = useParams()
    const [payment, setPayment] = useState({});
    useEffect(() => {
        fetch(`https://warm-temple-88396.herokuapp.com/orders/${orderId}`)
            .then(res => res.json())
            .then(data => setPayment(data));
    }, [orderId]);
    return (

        <div style={{ color: 'white', textAlign: 'center' }}>
            <h1 >Please Complete Payment for: <span>{payment.productName}</span></h1>
            <h4>{orderId}</h4>
            <h4>Pay:${payment.cost}</h4>
            {payment?.cost &&
                <Elements stripe={stripePromise}>
                    <CheckoutForm payment={payment}></CheckoutForm>
                </Elements>
            }

        </div>
    );
};

export default Payment;
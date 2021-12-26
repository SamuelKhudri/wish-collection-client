import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import MuiButton from '../StyledComponents/MuiButton';
// import { CircularProgress, Typography } from '@mui/material';
// import useAuth from '../../hooks/useAuth';

const CheckoutForm = ({ payment }) => {
   const { cost } = payment;
   // const { user } = useAuth()
   const stripe = useStripe();
   const elements = useElements();
   // console.log(singleProperty)

   // const [process, setProcess] = useState(false);

   // error
   const [error, setError] = useState('');
   const [success, setSuccess] = useState('');
   // console.log(process, error, success)
   // const [clientSecret, setClientSecret] = useState('');

   // useEffect(() => {
   //    fetch('https://rocky-thicket-09241.herokuapp.com/create-payment-intent', {
   //       method: 'POST',
   //       headers: {
   //          'content-type': 'application/json'
   //       },
   //       body: JSON.stringify({ cost })
   //    })
   //       .then(res => res.json())
   //       .then(data => {
   //          console.log(data)
   //          setClientSecret(data.clientSecret)
   //       })
   // }, [cost])
   // handle submit
   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!stripe || !elements) {
         return;
      }
      const card = elements.getElement(CardElement);
      if (card === null) {
         return;
      }
      // setProcess(true)
      const { error, paymentMethod } = await stripe.createPaymentMethod({
         type: 'card',
         card
      })
      if (error) {
         console.log(error)
         setError(error.message)
         setSuccess('')
      }
      else {
         setError('');
         console.log(paymentMethod)
      }
      // payment intent
      // const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
      //    clientSecret,
      //    {
      //       payment_method: {
      //          card: card,
      //          billing_details: {
      //             name: user?.displayName,
      //             email: user?.email,
      //          },
      //       },
      //    },
      // );

      // if (intentError) {
      //    setError(intentError.message)
      //    setSuccess('')
      // }
      // else {
      //    setError('');
      //    setSuccess('Your payment processed successfully');
      //    console.log(paymentIntent)
      //    setProcess(false);
      //  save database
      // const payment = {
      //    amount: paymentIntent.amount,
      //    created: paymentIntent.created,
      //    transaction: paymentIntent.client_secret.slice('_secret')[0],
      // }
      // const url = `https://rocky-thicket-09241.herokuapp.com/ordersProperty/${_id}`;
      //    fetch(url, {
      //       method: 'PUT',
      //       headers: {
      //          'content-type': 'application/json'
      //       },
      //       body: JSON.stringify(payment)
      //    })
      //       .then(res => res.json())
      //       .then(data => console.log(data))
      // }
   }
   return (
      <>
         <form onSubmit={handleSubmit}>
            <CardElement
               options={{
                  style: {
                     base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                           color: '#aab7c4',
                        },
                     },
                     invalid: {
                        color: '#9e2146',
                     },
                  },
               }}
            />
            <button className="btn-submit" type="submit" disabled={!stripe}>
               Pay ${cost}
            </button>
            {/* rgb(240, 22, 149) */}
         </form>
         {
            error && <p style={{ color: 'red', fontWeight: '500' }}>{error}</p>
         }
         {
            success && <p style={{ color: 'green', fontWeight: '500' }}>{success}</p>
         }
      </>
   );
};

export default CheckoutForm;
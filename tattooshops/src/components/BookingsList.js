import React from "react";
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";
const stripePromise = loadStripe('pk_test_51Ix6RuFbKny5eUEqNL77wTMwNWuRsFcbZJgYLssMMvNLzNLz7kD00yVIrNUSG8BhYSdnkCiz5ZKQhbq06PzhfqNA00vs3jabgN');



function BookingsList({ name, time, mobile, artists, price }) {

    const handleClick = async (event) => {
        // Get Stripe.js instance
        const stripe = await stripePromise;
    
        // Call your backend to create the Checkout Session
        const response = await axios.post("http://localhost:4242/create-checkout-session", {name:name, price:price})
        /* ('/create-checkout-session', { method: 'POST' }); */
        console.log(response)
        const sessionId = response.data.id
    
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
          sessionId: sessionId,
        });
    
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        }
      };

  return (
      <>
    <div>
      <br />
      Name : {name}
      <br />
      Time : {time}
      <br />
      Phone Number : {mobile}
      <br />
      Artist : {artists}
      <br />
      Price : {price}
      <br/>
    </div>
    <button role="link" onClick={handleClick}>
      Checkout
    </button>
    </>
  );
}

export default BookingsList;

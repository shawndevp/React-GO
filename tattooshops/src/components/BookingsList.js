import React from "react";
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51Ix6RuFbKny5eUEqNL77wTMwNWuRsFcbZJgYLssMMvNLzNLz7kD00yVIrNUSG8BhYSdnkCiz5ZKQhbq06PzhfqNA00vs3jabgN');

function BookingsList({ name, time, mobile, artists, price }) {
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
    <button role="link">
      Checkout
    </button>
    </>
  );
}

export default BookingsList;

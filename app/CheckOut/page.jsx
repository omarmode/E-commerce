"use client";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Lottie from "lottie-react";
import eid8 from "../../public/Animation - 1714019733947.json";
import CheckoutForm from "./_components/CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51P9JOiEliKoFndbXrQk9kT9I1134V9Qy5QWCO9dms48tktq8mQj2lg1m1DXGnrltNfmgaq2OzEhcuDaghWUQ58qk00m5Zj3qbj"
);
function Checkout() {
  const options = {
    mode: "payment",
    currency: "usd",
    amount: 100,
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
      <Lottie animationData={eid8} style={{ height: "300px" }} />{" "}
    </Elements>
  );
}

export default Checkout;

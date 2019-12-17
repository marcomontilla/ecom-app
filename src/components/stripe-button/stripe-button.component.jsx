import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_VgMKViZeVQTulK3wUr3KkxgH0033HDwMca";

  const onToken = token => {
    console.info(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="MRC Clothing Ltd."
      billingAddress
      shippingAddress
      // image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${priceForStripe}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      stripeKey={publishableKey}
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;

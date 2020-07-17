import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51H5rJ8Jq0sbgK1X7zcmV1J30f9CC59dy0lVUZ1vZObrD0QKDEMAvl12XTgMiJq9jRzZLEm63OsIHv6BOk9cK6Vsr00xU8aam4Y';
  const onToken = (token) => {
    console.log(token);
    alert('payment successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

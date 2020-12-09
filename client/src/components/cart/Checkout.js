import React from "react";
import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import { useSelector } from "react-redux";

toast.configure();

const Checkout = () => {
  const cart = useSelector((state) => state.cartReducer);

  const [product] = React.useState({
    name: `Cart`,
    price: `${cart.cartTotalFinal}`,
    description: `Cart ID: ${cart._id}`,
  });

  async function handleToken(token, addresses) {
    const response = await axios.post("/checkout", {
      token,
      product,
    });
    const status = response;
    if (status.data === "success") {
      console.log(status);
    } else {
      console.log(status);
    }
  }
  return (
    <>
      <Wrapper>
        <StripeCheckout
          stripeKey="pk_test_51Hw8PXAwZOyDGXnzhCVOlURNYAyclZLyMBj2YZ9MaaPafGXe7cYZeMygOcpc8B2ijSje3pqzrQbI2PMZPlththTn00ViwvnXkT"
          token={handleToken}
          billingAddress
          shippingAddress
          amount={product.price * 100}
          name={product.name}
          description={product.description}
          currency="CAD"
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 25px;
`;

export default Checkout;

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
    const { status } = response.data;
    if (status === "success") {
      toast("The payment was successful! Check your emails for more details.", {
        type: "success",
      });
    } else {
      toast("The payment was not successful. Please try again.", {
        type: "error",
      });
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
          currency="cad"
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 25px;
`;

export default Checkout;

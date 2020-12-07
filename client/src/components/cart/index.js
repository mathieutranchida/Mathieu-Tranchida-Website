import React from "react";
import styled from "styled-components";
import CartProducts from "./CartProducts";
import CartSummary from "./CartSummary";

const Cart = () => {
  return (
    <>
      <Wrapper>
        <Header>Your cart</Header>
        <CartWrapper>
          <CartProducts />
          <CartSummary />
        </CartWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 100px);
`;

const Header = styled.div`
  margin: 0px auto;
  padding: 50px 0px;
  max-width: 1000px;
  font-weight: 900;
  text-transform: uppercase;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 20pt;
`;

const CartWrapper = styled.div`
  margin: 0px auto;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
`;

export default Cart;

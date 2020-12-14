import React from "react";
import styled from "styled-components";
import CartProducts from "./CartProducts";
import CartSummary from "./CartSummary";

const Cart = () => {
  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <Header>Your cart</Header>
          <CartWrapper>
            <CartProducts />
            <CartSummary />
          </CartWrapper>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 100px);
`;

const ContentWrapper = styled.div`
  margin: 110px 100px 80px 100px;
  @media (max-width: 1025px) {
    margin: 80px 100px 80px 100px;
  }
  @media (max-width: 900px) {
    margin: 80px 50px 40px 50px;
  }
  @media (max-width: 650px) {
    margin: 80px 25px 30px 25px;
  }
`;

const Header = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 15pt;
  margin-bottom: 25px;
`;

const CartWrapper = styled.div`
  margin: 0px auto;
  max-width: 850px;
`;

export default Cart;

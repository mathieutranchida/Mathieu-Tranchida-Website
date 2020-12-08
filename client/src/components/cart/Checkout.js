import React from "react";
import styled from "styled-components";

const Checkout = () => {
  return (
    <>
      <Button>Checkout</Button>
    </>
  );
};

const Wrapper = styled.div``;

const Button = styled.button`
  margin-top: 25px;
  background-color: transparent;
  border: black 1px solid;
  color: black;
  padding: 15px;
  &:hover:not([disabled]) {
    background-color: black;
    color: white;
    cursor: pointer;
  }
  &:disabled {
    border: grey 1px solid;
    color: grey;
  }
`;

export default Checkout;

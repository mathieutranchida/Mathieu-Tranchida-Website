import React from "react";
import styled from "styled-components";

const CartSummary = () => {
  return (
    <>
      <Wrapper>
        <Header>Cart summary</Header>
        <TotalWrapper>
          <Type>Total:</Type>
          <Total>CAD$ TODO</Total>
        </TotalWrapper>
        <TaxWrapper>
          <Type>Taxes:</Type>
          <Tax>GST (5%): </Tax>
          <Tax>QST (9.975%): </Tax>
        </TaxWrapper>
        <ShippingForm>
          <Type>Select shipping type:</Type>
          <InputRadioDiv>
            <InputRadio type="radio" name="shipping type" value="in person" />
            <Label>In person (Montreal only) - Free</Label>
          </InputRadioDiv>
          <InputRadioDiv>
            <InputRadio type="radio" name="shipping type" value="canada" />
            <Label>Canada - CAD$ 15.00</Label>
          </InputRadioDiv>
          <InputRadioDiv>
            <InputRadio type="radio" name="shipping type" value="worldwide" />
            <Label>Worldwide - CAD$ 30.00</Label>
          </InputRadioDiv>
        </ShippingForm>
        <TotalFinalWrapper>
          <Type>Total + tax + shipping:</Type>
          <Total>CAD$ TODO</Total>
        </TotalFinalWrapper>
        <Button>Checkout</Button>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 210px;
  padding: 12px 12px;
  font-weight: 300;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  font-weight: 900;
  text-transform: uppercase;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 14pt;
`;

const Type = styled.div`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 12pt;
`;

const TotalWrapper = styled.div`
  margin-top: 15px;
`;

const Total = styled.div`
  margin-left: 10px;
`;

const TaxWrapper = styled.div`
  margin-top: 10px;
`;

const Tax = styled.div`
  margin-left: 10px;
`;

const ShippingForm = styled.form`
  display: block;
  margin-top: 10px;
`;

const InputRadioDiv = styled.div`
  display: flex;
  align-items: center;
`;

const InputRadio = styled.input`
  margin-left: 10px;
`;

const Label = styled.label`
  font-size: 11pt;
  margin-left: 5px;
`;

const TotalFinalWrapper = styled.div`
  margin-top: 10px;
`;

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

export default CartSummary;

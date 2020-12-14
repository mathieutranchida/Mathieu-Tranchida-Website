import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Checkout from "./Checkout";

const CartSummary = () => {
  const cart = useSelector((state) => state.cartReducer);
  let roundedGst = Math.round(cart.gst * 100) / 100;
  let roundedQst = Math.round(cart.qst * 100) / 100;
  let roundedFinalPrice = Math.round(cart.cartTotalFinal * 100) / 100;

  const updateShipping = (shippingOption, shippingCost) => {
    let newCart = { ...cart };
    newCart.shippingOption = "";
    newCart.shippingOption = shippingOption;
    newCart.shippingCost = parseFloat(shippingCost);
    newCart.cartTotalFinal =
      Math.round((newCart.totalPriceAfterTax + newCart.shippingCost) * 100) /
      100;
    console.log(newCart);
    fetch(`/modify-cart/${newCart._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCart),
    })
      .then((res) => res.json())
      .then((data) => {
        document.location.reload();
      });
  };

  return (
    <>
      {cart.products.length !== 0 && (
        <Wrapper>
          <TaxWrapper>
            <Tax>GST (5%): {cart.gst > 0 && `$${roundedGst}`}</Tax>
            <Tax>QST (9.975%): {cart.qst > 0 && `$${roundedQst}`}</Tax>
          </TaxWrapper>
          <ShippingForm>
            <Type>Select shipping type:</Type>
            <InputRadioDiv>
              <Label>In person (Montreal only) - Free</Label>
              <InputRadio
                type="radio"
                name="shipping type"
                value="inperson0"
                checked={cart.shippingOption === "inperson"}
                onChange={(ev) => {
                  updateShipping(
                    ev.target.value.replace(/[0-9]/g, ""),
                    ev.target.value.replace(/\D/g, "")
                  );
                }}
              />
            </InputRadioDiv>
            <InputRadioDiv>
              <Label>Canada - CAD$ 15.00</Label>
              <InputRadio
                type="radio"
                name="shipping type"
                value="canada15"
                checked={cart.shippingOption === "canada"}
                onChange={(ev) => {
                  updateShipping(
                    ev.target.value.replace(/[0-9]/g, ""),
                    ev.target.value.replace(/\D/g, "")
                  );
                }}
              />
            </InputRadioDiv>
            <InputRadioDiv>
              <Label>Worldwide - CAD$ 30.00</Label>
              <InputRadio
                type="radio"
                name="shipping type"
                value="worldwide30"
                checked={cart.shippingOption === "worldwide"}
                onChange={(ev) => {
                  updateShipping(
                    ev.target.value.replace(/[0-9]/g, ""),
                    ev.target.value.replace(/\D/g, "")
                  );
                }}
              />
            </InputRadioDiv>
          </ShippingForm>
          <TotalFinalWrapper>
            <Total>TOTAL: CAD$ {roundedFinalPrice}</Total>
            <CheckoutWrapper>
              <Checkout />
            </CheckoutWrapper>
          </TotalFinalWrapper>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  font-weight: 300;
  text-align: right;
  margin-top: 40px;
`;

const Type = styled.div`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 12pt;
`;

const Total = styled.div`
  float: right;
  margin-top: 10px;
  font-size: 15pt;
  font-family: halyard-display, sans-serif;
  font-weight: 500;
`;

const TaxWrapper = styled.div`
  margin-top: 10px;
`;

const Tax = styled.div`
  margin-left: 10px;
`;

const ShippingForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const InputRadioDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const InputRadio = styled.input`
  margin-left: 10px;
`;

const Label = styled.label`
  font-size: 11pt;
  padding-top: 2px;
`;

const TotalFinalWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const CheckoutWrapper = styled.div`
  margin-top: 0px;
  text-align: right;
`;

export default CartSummary;

import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Checkout from "./Checkout";
import {
  cartUpdateShippingOption,
  cartUpdateShippingCost,
} from "../../redux/actions";

const CartSummary = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cartReducer);

  let roundedGst = Math.round(cart.gst * 100) / 100;
  let roundedQst = Math.round(cart.qst * 100) / 100;
  let roundedFinalPrice = Math.round(cart.cartTotalFinal * 100) / 100;

  return (
    <>
      <Wrapper>
        <Header>Cart summary</Header>
        <TotalWrapper>
          <Type>Total:</Type>
          <Total>
            {cart.totalPriceBeforeTax > 0 &&
              `CAD$ ${cart.totalPriceBeforeTax}.00`}
          </Total>
        </TotalWrapper>
        <TaxWrapper>
          <Type>Taxes:</Type>
          <Tax>GST (5%): {cart.gst > 0 && `$${roundedGst}`}</Tax>
          <Tax>QST (9.975%): {cart.qst > 0 && `$${roundedQst}`}</Tax>
        </TaxWrapper>
        <ShippingForm>
          <Type>Select shipping type:</Type>
          <InputRadioDiv>
            <InputRadio
              type="radio"
              name="shipping type"
              value="inperson0"
              onChange={(ev) => {
                dispatch(
                  cartUpdateShippingOption(
                    ev.target.value.replace(/[0-9]/g, "")
                  )
                );
                dispatch(
                  cartUpdateShippingCost(ev.target.value.replace(/\D/g, ""))
                );
              }}
            />
            <Label>In person (Montreal only) - Free</Label>
          </InputRadioDiv>
          <InputRadioDiv>
            <InputRadio
              type="radio"
              name="shipping type"
              value="canada15"
              onChange={(ev) => {
                dispatch(
                  cartUpdateShippingOption(
                    ev.target.value.replace(/[0-9]/g, "")
                  )
                );
                dispatch(
                  cartUpdateShippingCost(ev.target.value.replace(/\D/g, ""))
                );
              }}
            />
            <Label>Canada - CAD$ 15.00</Label>
          </InputRadioDiv>
          <InputRadioDiv>
            <InputRadio
              type="radio"
              name="shipping type"
              value="worldwide30"
              onChange={(ev) => {
                dispatch(
                  cartUpdateShippingOption(
                    ev.target.value.replace(/[0-9]/g, "")
                  )
                );
                dispatch(
                  cartUpdateShippingCost(ev.target.value.replace(/\D/g, ""))
                );
              }}
            />
            <Label>Worldwide - CAD$ 30.00</Label>
          </InputRadioDiv>
        </ShippingForm>
        <TotalFinalWrapper>
          <Type>Total + tax + shipping:</Type>
          <Total>CAD$ {roundedFinalPrice}</Total>
        </TotalFinalWrapper>
        <Checkout />{" "}
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

export default CartSummary;

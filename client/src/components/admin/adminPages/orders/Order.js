import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { updateOrderStatus } from "../../../../redux/actions";

const Order = ({ _id, customer, cardInfo, cart, status }) => {
  console.log(status);
  let shippingOptionString1 = cart.shippingOption.charAt(0).toUpperCase();
  let shippingOptionString2 = cart.shippingOption.slice(1);

  const dispatch = useDispatch();

  return (
    <>
      <Wrapper>
        <OrderStatusWrapper>
          {/* received processing posted */}
          {status.status.status === "received" && (
            <OrderStatusReceived>
              Order: {status.status.status}
            </OrderStatusReceived>
          )}
          {status.status.status === "processing" && (
            <OrderStatusProcessing>
              Order: {status.status.status}
            </OrderStatusProcessing>
          )}
          {status.status.status === "posted" && (
            <OrderStatusPosted>Order: {status.status.status}</OrderStatusPosted>
          )}
          <ChangeStatusWrapper>
            <StatusDescription>Change status:</StatusDescription>
            <StatusInput
              onChange={(ev) => {
                let newOrder = {
                  _id,
                  status,
                };
                newOrder.status.status = ev.target.value;
                fetch(`/change-order-status/${newOrder._id}`, {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(newOrder),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data);
                    dispatch(updateOrderStatus(newOrder));
                  });
              }}
            >
              <Option
                value="received"
                selected={status.status.status === "received"}
              >
                Received
              </Option>
              <Option
                value="processing"
                selected={status.status.status === "processing"}
              >
                Processing
              </Option>
              <Option
                value="posted"
                selected={status.status.status === "posted"}
              >
                Posted
              </Option>
            </StatusInput>
          </ChangeStatusWrapper>
        </OrderStatusWrapper>
        <HeaderWrapper>
          <Header>Order ID:</Header>
          <HeaderId>{_id}</HeaderId>
        </HeaderWrapper>
        <HeaderWrapper>
          <Header>Customer:</Header>
          <HeaderId>{customer.email}</HeaderId>
        </HeaderWrapper>
        <HeaderWrapper>
          <Header>Amount Charged:</Header>
          <HeaderId>$ {cart.cartTotalFinal}</HeaderId>
        </HeaderWrapper>
        <HeaderWrapper>
          <Header>Shipping:</Header>
          <HeaderId>
            {shippingOptionString1}
            {shippingOptionString2}
          </HeaderId>
        </HeaderWrapper>
        <SubHeader>Products ordered:</SubHeader>
        <ProductsOrderedWrapper>
          {cart.products.map((product) => {
            let paperTypeString1 = product.paperType.charAt(0).toUpperCase();
            let paperTypeString2 = product.paperType.slice(1);
            let sizeString1 = product.size.charAt(0).toUpperCase();
            let sizeString2 = product.size
              .slice(1)
              .replace(/([a-z])([A-Z])/g, "$1 $2")
              .toLowerCase();
            return (
              <ProductWrapper>
                <Section>Product:</Section>
                <Info>Name: {product.name}</Info>
                <Info>
                  Paper type: {paperTypeString1}
                  {paperTypeString2}
                </Info>
                <Info>
                  Paper size: {sizeString1}
                  {sizeString2}
                </Info>
                <Info>Price: $ {product.price}</Info>
                <Info>Quantity: {product.quantity}</Info>
              </ProductWrapper>
            );
          })}
        </ProductsOrderedWrapper>
        <SubHeader>Order details:</SubHeader>
        <GridWrapper>
          <SectionWrapper>
            <Section>Ship to:</Section>
            <Info>{customer.shippingName}</Info>
            <Info>{customer.shippingAddressStreet}</Info>
            <Info>
              {customer.shippingAddressCity}, {customer.shippingAddressState}{" "}
              {customer.shippingAddressZipCode}
            </Info>
            <Info>{customer.shippingCountry}</Info>
          </SectionWrapper>
          <SectionWrapper>
            <Section>Billing address:</Section>
            <Info>{customer.billingName}</Info>
            <Info>{customer.billingAddressStreet}</Info>
            <Info>
              {customer.billingAddressCity}, {customer.billingAddressState}{" "}
              {customer.billingAddressZipCode}
            </Info>
            <Info>{customer.billingCountry}</Info>
          </SectionWrapper>
          <SectionWrapper>
            <Section>Payment information:</Section>
            <Info>Customer: {cardInfo.nameOnCard}</Info>
            <Info>Card number: **** **** **** {cardInfo.lastFourDigits}</Info>
            <Info>Expiration: {cardInfo.expiration}</Info>
            <Info>Card type: {cardInfo.type}</Info>
          </SectionWrapper>
        </GridWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 12px 0px;
  border-bottom: 1px grey solid;
  border-image-source: linear-gradient(270deg, white 0%, grey 50%, white 100%);
  border-image-slice: 5;
`;

const OrderStatusWrapper = styled.div`
  float: right;
  text-align: right;
`;

const OrderStatusReceived = styled.div`
  color: red;
`;

const OrderStatusProcessing = styled.div`
  color: orange;
`;

const OrderStatusPosted = styled.div`
  color: green;
`;

const ChangeStatusWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8px;
`;

const StatusDescription = styled.div`
  margin-right: 10px;
`;

const StatusInput = styled.select`
  border-bottom: 1px solid black;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: transparent;
  font-size: 11pt;
  font-family: halyard-display, sans-serif;
  font-weight: 300;
  padding: 2px 4px;
  outline: none;
  color: black;
`;

const Option = styled.option``;

const HeaderWrapper = styled.div`
  width: 100%;
`;

const Header = styled.span`
  text-transform: uppercase;
`;

const HeaderId = styled.span`
  margin-left: 5px;
  font-weight: 300;
`;

const SubHeader = styled.div`
  text-transform: uppercase;
  margin-top: 10px;
  font-size: 13pt;
  font-weight: 500;
`;

const ProductsOrderedWrapper = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const ProductWrapper = styled.div`
  font-weight: 300;
`;

const Section = styled.div`
  font-weight: 400;
`;

const Info = styled.div`
  font-weight: 300;
  font-size: 12pt;
`;

const SectionWrapper = styled.div``;

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export default Order;

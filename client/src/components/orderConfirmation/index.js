import React from "react";
import styled from "styled-components";
import { Image, Transformation } from "cloudinary-react";

import { useSelector } from "react-redux";

const OrderConfirmation = () => {
  const order = useSelector(
    (state) =>
      state.orderConfirmationReducer.order &&
      state.orderConfirmationReducer.order
  );

  let roundedGst = Math.round(order.cart.gst * 100) / 100;
  let roundedQst = Math.round(order.cart.qst * 100) / 100;
  let shippingType1 = order.cart.shippingOption.charAt(0).toUpperCase();
  let shippingType2 = order.cart.shippingOption.slice(1);

  return (
    <>
      <Wrapper>
        <Header>Order confirmation</Header>
        <OrderWrapper>
          <Title>Order:</Title>
          <ProductsWrapper>
            {order.cart.products.map((product) => {
              let sizeString1 = product.size.charAt(0).toUpperCase();
              let sizeString2 = product.size
                .slice(1)
                .replace(/([a-z])([A-Z])/g, "$1 $2")
                .toLowerCase();
              let paperTypeString1 = product.paperType.charAt(0).toUpperCase();
              let paperTypeString2 = product.paperType.slice(1);
              let productTotalPrice =
                parseFloat(product.price) * parseFloat(product.quantity);

              return (
                <>
                  <MappedProductWrapper>
                    <ImageWrapper>
                      <Image cloudName="dldqebddc" publicId={product.imageSrc}>
                        <Transformation
                          quality="50"
                          width="100"
                          height="100"
                          fetchFormat="auto"
                          crop="limit"
                        />
                      </Image>
                    </ImageWrapper>
                    <InfoWrapper>
                      <ProductTitleWrapper>
                        <ProductName>{product.name}</ProductName>
                        <ProductTotalPrice>
                          $ {productTotalPrice}.00
                        </ProductTotalPrice>
                      </ProductTitleWrapper>
                      <ProductInfoWrapper>
                        <ProductInfo>
                          Paper type: {paperTypeString1}
                          {paperTypeString2}
                        </ProductInfo>
                        <ProductInfo>
                          Size: {sizeString1}
                          {sizeString2}
                        </ProductInfo>
                        <ProductInfo>Quantity: {product.quantity}</ProductInfo>
                        <ProductInfo>
                          Individual price: $ {product.price}.00
                        </ProductInfo>
                      </ProductInfoWrapper>
                    </InfoWrapper>
                  </MappedProductWrapper>
                </>
              );
            })}
            <PriceWrapper>
              <TotalWrapper>
                <LeftColumn>
                  <LeftColumnInfo>Total before tax:</LeftColumnInfo>
                  <LeftColumnInfo>GST:</LeftColumnInfo>
                  <LeftColumnInfo>QST:</LeftColumnInfo>
                  <LeftColumnInfo>Shipping:</LeftColumnInfo>
                  <LeftColumnInfoBold>Total:</LeftColumnInfoBold>
                </LeftColumn>
                <RightColumn>
                  <RightColumnInfo>
                    $ {order.cart.totalPriceBeforeTax}.00
                  </RightColumnInfo>
                  <RightColumnInfo>$ {roundedGst}</RightColumnInfo>
                  <RightColumnInfo>$ {roundedQst}</RightColumnInfo>
                  <RightColumnInfo>
                    $ {order.cart.shippingCost}.00
                  </RightColumnInfo>
                  <RightColumnInfoBold>
                    $ {order.cart.cartTotalFinal}
                  </RightColumnInfoBold>
                </RightColumn>
              </TotalWrapper>
            </PriceWrapper>
          </ProductsWrapper>
        </OrderWrapper>
        <OrderDetailsWrapper>
          <Title>Order details:</Title>
          <Section>
            <OrderId>
              Order ID: <Id>{order._id}</Id>
            </OrderId>
          </Section>
          <Section>
            <Subtitle>Customer:</Subtitle>
            <Info>Name: {order.cardInfo.nameOnCard}</Info>
            <Info>Email: {order.customer.email}</Info>
          </Section>
          <Section>
            <Subtitle>Payment information:</Subtitle>
            <Info>Name on card: {order.cardInfo.nameOnCard}</Info>
            <Info>
              Card used: **** **** **** {order.cardInfo.lastFourDigits}
            </Info>
            <Info>Expiration date: {order.cardInfo.expiration}</Info>
            <Info>Card type: {order.cardInfo.type}</Info>
            <Info>Amount charged: CAD$ {order.cardInfo.amountCharged}</Info>
          </Section>
          <Section>
            <Subtitle>Shipping:</Subtitle>
            <Info>
              Shipping type: {shippingType1}
              {shippingType2}
            </Info>
            {order.cart.shippingOption === "inperson" && (
              <Info>Delivery timing: Approximately two weeks</Info>
            )}
            {order.cart.shippingOption === "canada" && (
              <Info>Delivery timing: Approximately three weeks</Info>
            )}
            {order.cart.shippingOption === "worldwide" && (
              <Info>Delivery timing: Approximately four weeks</Info>
            )}
          </Section>
          <Section>
            <Subtitle>Shipping address:</Subtitle>
            <Info>{order.customer.shippingName}</Info>
            <Info>{order.customer.shippingAddressStreet}</Info>
            <Info>
              {order.customer.shippingAddressCity},{"  "}
              {order.customer.shippingAddressState}
              {"  "}
              {order.customer.shippingAddressZipCode}
            </Info>
            <Info>{order.customer.shippingCountry}</Info>
          </Section>
          <Section>
            <Subtitle>Billing address:</Subtitle>
            <Info>{order.customer.billingName}</Info>
            <Info>{order.customer.billingAddressStreet}</Info>
            <Info>
              {order.customer.billingAddressCity},{"  "}
              {order.customer.billingAddressState}
              {"  "}
              {order.customer.billingAddressZipCode}
            </Info>
            <Info>{order.customer.billingCountry}</Info>
          </Section>
        </OrderDetailsWrapper>
        <Print onClick={() => window.print()}>
          Click here to save the confirmation
        </Print>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 100px);
  max-width: 500px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  margin: 110px auto 0px auto;
  @media (max-width: 1025px) {
    margin: 80px auto 80px auto;
  }
  @media (max-width: 900px) {
    margin: 80px auto 0px auto;
  }
  @media (max-width: 650px) {
    margin: 80px auto 0px auto;
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

const OrderWrapper = styled.div``;

const ProductsWrapper = styled.div``;

const MappedProductWrapper = styled.div`
  display: flex;
  border-bottom: 1px grey solid;
  border-image-source: linear-gradient(270deg, white 0%, grey 50%, white 100%);
  border-image-slice: 5;
  padding: 10px 0px 12px 0px;
`;

const ImageWrapper = styled.div`
  height: auto;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 375px;
`;

const ProductName = styled.div`
  font-weight: 500;
  font-size: 12pt;
`;

const ProductTotalPrice = styled.div`
  font-weight: 500;
  font-size: 12pt;
`;

const ProductInfoWrapper = styled.div`
  margin-top: 5px;
`;

const ProductInfo = styled.div`
  font-weight: 300;
  font-size: 11pt;
  margin-right: 25px;
`;

const PriceWrapper = styled.div`
  padding: 0px 0px 0px 0px;
`;

const TotalWrapper = styled.div`
  display: flex;
  justify-content: right;
  float: right;
  margin: 15px 0px 15px 0px;
`;

const LeftColumn = styled.div``;

const LeftColumnInfo = styled.div`
  font-weight: 300;
  font-size: 12pt;
  text-align: right;
`;

const LeftColumnInfoBold = styled.div`
  font-weight: 600;
  font-size: 12pt;
  text-align: right;
  margin-top: 15px;
`;

const RightColumn = styled.div`
  margin-left: 25px;
`;

const RightColumnInfo = styled.div`
  font-weight: 300;
  font-size: 12pt;
  text-align: left;
`;

const RightColumnInfoBold = styled.div`
  font-weight: 600;
  font-size: 12pt;
  text-align: left;
  margin-top: 15px;
`;

const OrderDetailsWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 25px;
`;

const Title = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 14pt;
`;

const Section = styled.div`
  margin-bottom: 15px;
`;

const OrderId = styled.div`
  margin-bottom: 15px;
  display: flex;
`;

const Id = styled.div`
  margin-left: 10px;
  font-weight: 300;
  font-size: 12pt;
`;

const Subtitle = styled.div`
  font-weight: 400;
  font-size: 12pt;
`;

const Info = styled.div`
  font-weight: 300;
  font-size: 12pt;
`;

const Print = styled.button`
  background-color: transparent;
  border: black 1px solid;
  color: black;
  font-family: halyard-display, sans-serif;
  font-size: 11pt;
  font-weight: 300;
  padding: 10px;
  margin: 0px auto 50px auto;
  width: 250px;
  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;

export default OrderConfirmation;

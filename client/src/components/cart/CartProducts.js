import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Image, Transformation } from "cloudinary-react";

const CartProducts = () => {
  const cart = useSelector((state) => state.cartReducer);

  console.log(cart);

  return (
    <>
      <Wrapper>
        {cart.products.length === 0 ? (
          <Empty>
            It looks like your cart is empty! Go to the shop to add products to
            your cart.
          </Empty>
        ) : (
          <WrapperCart>
            {cart.products.map((product) => {
              console.log(product);
              return (
                <>
                  <ProductWrapper>
                    <ImageWrapper>
                      <Image
                        cloudName="dldqebddc"
                        publicId={product.product.imageSrc}
                      >
                        <Transformation
                          quality="100"
                          width="150"
                          height="150"
                          fetchFormat="auto"
                          crop="limit"
                        />
                      </Image>
                    </ImageWrapper>
                    <InfoWrapper>
                      <Main>
                        <ProductName>{product.product.name}</ProductName>
                        <SecondLineWrapper>
                          <SecondLineInfo>
                            Paper type: {product.product.paperType}
                          </SecondLineInfo>
                          <SecondLineInfo>
                            Size: {product.product.size}
                          </SecondLineInfo>
                        </SecondLineWrapper>
                        <Id>Product ID: {product.product._id}</Id>
                      </Main>
                      <Second>
                        <ChangeQuantityWrapper>
                          <QuantityWrapper>
                            <QuantityDescription>Quantity:</QuantityDescription>
                            <QuantityInput>
                              <QuantityInputOption value="1">
                                1
                              </QuantityInputOption>
                              <QuantityInputOption value="2">
                                2
                              </QuantityInputOption>
                              <QuantityInputOption value="3">
                                3
                              </QuantityInputOption>
                              <QuantityInputOption value="4">
                                4
                              </QuantityInputOption>
                              <QuantityInputOption value="5">
                                5
                              </QuantityInputOption>
                              <QuantityInputOption value="6">
                                6
                              </QuantityInputOption>
                              <QuantityInputOption value="7">
                                7
                              </QuantityInputOption>
                              <QuantityInputOption value="8">
                                8
                              </QuantityInputOption>
                              <QuantityInputOption value="9">
                                9
                              </QuantityInputOption>
                            </QuantityInput>
                          </QuantityWrapper>
                          <RemoveButton>Remove</RemoveButton>
                        </ChangeQuantityWrapper>
                        <ProductPriceWrapper>
                          CAD$ {product.product.price}.00
                        </ProductPriceWrapper>
                      </Second>
                    </InfoWrapper>
                  </ProductWrapper>
                </>
              );
            })}
            <TotalPrice>Total: CAD$ TODO</TotalPrice>
          </WrapperCart>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const Empty = styled.div``;

const WrapperCart = styled.div`
  width: 715px;
`;

const ProductWrapper = styled.div`
  height: 150px;
  display: flex;
  padding: 12px 0px;
  border-bottom: 1px grey solid;
  border-image-source: linear-gradient(270deg, white 0%, grey 50%, white 100%);
  border-image-slice: 5;
`;

const ImageWrapper = styled.div`
  height: 150px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
`;

const InfoWrapper = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* width: 100%; */
`;

const Main = styled.div``;

const ProductName = styled.div`
  font-weight: 500;
  font-size: 13pt;
`;

const SecondLineWrapper = styled.div`
  display: flex;
  margin-top: 6px;
`;

const SecondLineInfo = styled.div`
  font-weight: 300;
  font-size: 11pt;
  margin-right: 25px;
`;

const Id = styled.div`
  font-weight: 300;
  font-size: 11pt;
`;

const Second = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChangeQuantityWrapper = styled.div`
  display: flex;
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityDescription = styled.div`
  margin-right: 5px;
  font-size: 11pt;
  font-family: halyard-display, sans-serif;
  font-weight: 300;
`;

const QuantityInput = styled.select`
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

const QuantityInputOption = styled.option`
  font-size: 11pt;
  font-family: halyard-display, sans-serif;
  font-weight: 300;
`;

const RemoveButton = styled.button`
  background-color: transparent;
  border: black 1px solid;
  color: black;
  margin-left: 15px;
  font-family: halyard-display, sans-serif;
  font-size: 11pt;
  font-weight: 300;
  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;

const ProductPriceWrapper = styled.div`
  font-size: 15pt;
  font-family: halyard-display, sans-serif;
  font-weight: 500;
  float: right;
  text-align: right;
`;

const TotalPrice = styled.div`
  float: right;
  margin-top: 10px;
  font-size: 15pt;
  font-family: halyard-display, sans-serif;
  font-weight: 500;
`;

export default CartProducts;

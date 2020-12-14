import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Image, Transformation } from "cloudinary-react";

const CartProducts = () => {
  const cart = useSelector((state) => state.cartReducer);

  const removeFromCart = (productId) => {
    let newCart = { ...cart };
    const index = newCart.products.findIndex(
      (product) => product._id === productId
    );
    if (index !== -1) {
      newCart.totalAmountOfProducts =
        newCart.totalAmountOfProducts - newCart.products[index].quantity;
      newCart.totalPriceBeforeTax =
        newCart.totalPriceBeforeTax -
        newCart.products[index].quantity * newCart.products[index].price;
      newCart.gst = newCart.totalPriceBeforeTax * 0.05;
      newCart.qst = newCart.totalPriceBeforeTax * 0.09975;
      newCart.totalPriceAfterTax =
        newCart.totalPriceBeforeTax + newCart.gst + newCart.qst;
      newCart.cartTotalFinal =
        Math.round((newCart.totalPriceAfterTax + newCart.shippingCost) * 100) /
        100;
      newCart.products.splice(index, 1);
      fetch(`/modify-cart/${newCart._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCart),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          document.location.reload();
        });
    }
  };

  const updateQuantity = (productId, quantity) => {
    let newCart = { ...cart };
    const index = newCart.products.findIndex(
      (product) => product._id === productId
    );
    if (index !== -1) {
      newCart.totalAmountOfProducts =
        newCart.totalAmountOfProducts - newCart.products[index].quantity;
      newCart.totalPriceBeforeTax =
        newCart.totalPriceBeforeTax -
        newCart.products[index].quantity * newCart.products[index].price;
      newCart.products[index].quantity = quantity;
      newCart.totalAmountOfProducts =
        newCart.totalAmountOfProducts + newCart.products[index].quantity;
      newCart.totalPriceBeforeTax =
        newCart.totalPriceBeforeTax +
        newCart.products[index].quantity * newCart.products[index].price;
      newCart.gst = newCart.totalPriceBeforeTax * 0.05;
      newCart.qst = newCart.totalPriceBeforeTax * 0.09975;
      newCart.totalPriceAfterTax =
        newCart.totalPriceBeforeTax + newCart.gst + newCart.qst;
      newCart.cartTotalFinal =
        Math.round((newCart.totalPriceAfterTax + newCart.shippingCost) * 100) /
        100;
      fetch(`/modify-cart/${newCart._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCart),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          document.location.reload();
        });
    }
  };

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
              const quantity = product.quantity;
              let sizeString1 = product.size.charAt(0).toUpperCase();
              let sizeString2 = product.size
                .slice(1)
                .replace(/([a-z])([A-Z])/g, "$1 $2")
                .toLowerCase();
              let paperTypeString1 = product.paperType.charAt(0).toUpperCase();
              let paperTypeString2 = product.paperType.slice(1);
              let productPrice =
                parseFloat(product.price) * parseFloat(product.quantity);
              return (
                <>
                  <ProductWrapper>
                    <ImageWrapper>
                      <Img
                        src={`https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_30,w_250/${product.imageSrc}.jpg`}
                      />
                    </ImageWrapper>
                    <InfoWrapper>
                      <Main>
                        <ProductName>{product.name}</ProductName>
                        <SecondLineWrapper>
                          <SecondLineInfo>
                            Paper type: {paperTypeString1}
                            {paperTypeString2}
                          </SecondLineInfo>
                          <SecondLineInfo>
                            Size: {sizeString1}
                            {sizeString2}
                          </SecondLineInfo>
                        </SecondLineWrapper>
                      </Main>
                      <Second>
                        <ChangeQuantityWrapper>
                          <QuantityWrapper>
                            <QuantityDescription>Quantity:</QuantityDescription>
                            <QuantityInput
                              onChange={(ev) => {
                                console.log(ev.target.value);
                                updateQuantity(product._id, ev.target.value);
                              }}
                            >
                              <QuantityInputOption
                                value="1"
                                selected={quantity === "1"}
                              >
                                1
                              </QuantityInputOption>
                              <QuantityInputOption
                                value="2"
                                selected={quantity === "2"}
                              >
                                2
                              </QuantityInputOption>
                              <QuantityInputOption
                                value="3"
                                selected={quantity === "3"}
                              >
                                3
                              </QuantityInputOption>
                              <QuantityInputOption
                                value="4"
                                selected={quantity === "4"}
                              >
                                4
                              </QuantityInputOption>
                              <QuantityInputOption
                                value="5"
                                selected={quantity === "5"}
                              >
                                5
                              </QuantityInputOption>
                              <QuantityInputOption
                                value="6"
                                selected={quantity === "6"}
                              >
                                6
                              </QuantityInputOption>
                              <QuantityInputOption
                                value="7"
                                selected={quantity === "7"}
                              >
                                7
                              </QuantityInputOption>
                              <QuantityInputOption
                                value="8"
                                selected={quantity === "8"}
                              >
                                8
                              </QuantityInputOption>
                              <QuantityInputOption
                                value="9"
                                selected={quantity === "9"}
                              >
                                9
                              </QuantityInputOption>
                            </QuantityInput>
                          </QuantityWrapper>
                          <RemoveButton
                            onClick={() => {
                              removeFromCart(product._id);
                            }}
                          >
                            Remove
                          </RemoveButton>
                        </ChangeQuantityWrapper>
                        <ProductPriceWrapper>
                          CAD$ {productPrice}.00
                        </ProductPriceWrapper>
                      </Second>
                    </InfoWrapper>
                  </ProductWrapper>
                </>
              );
            })}
            <TotalPrice>CAD$ {cart.totalPriceBeforeTax}.00</TotalPrice>
          </WrapperCart>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const Empty = styled.div`
  text-align: center;
`;

const WrapperCart = styled.div`
  width: 100%;
`;

const ProductWrapper = styled.div`
  display: flex;
  padding: 12px 0px;
  border-bottom: 1px grey solid;
  border-image-source: linear-gradient(270deg, white 0%, grey 50%, white 100%);
  border-image-slice: 5;
`;

const ImageWrapper = styled.div`
  height: 115px;
  width: 115px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
  @media (max-width: 650px) {
    height: 130px;
  }
  @media (max-width: 500px) {
    height: 150px;
  }
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const InfoWrapper = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const Main = styled.div``;

const ProductName = styled.div`
  font-weight: 500;
  font-size: 13pt;
`;

const SecondLineWrapper = styled.div`
  display: flex;
  margin-top: 6px;
  @media (max-width: 650px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    margin-bottom: 7px;
  }
`;

const SecondLineInfo = styled.div`
  font-weight: 300;
  font-size: 11pt;
  margin-right: 25px;
`;

const Second = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 500px) {
    flex-direction: column;
  }
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
  @media (max-width: 500px) {
    margin-top: 10px;
  }
`;

const TotalPrice = styled.div`
  float: right;
  margin-top: 10px;
  font-size: 15pt;
  font-family: halyard-display, sans-serif;
  font-weight: 500;
`;

export default CartProducts;

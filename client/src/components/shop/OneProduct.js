import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import COLORS from "../../constants";
import { BiX } from "react-icons/bi";

import {
  addProductNameBeforeAddToCart,
  addProductImageSrcBeforeAddToCart,
  addProductIdBeforeAddToCart,
  addProductPaperTypeBeforeAddToCart,
  addProductSizeBeforeAddToCart,
  adjustProductQuantityBeforeAddToCart,
  addProductPriceBeforeAddToCart,
  addProductBeforeAddToCartReset,
} from "../../redux/actions";

import { cartAddProduct } from "../../redux/actions";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const OneProduct = ({ ...product }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const priceLists = useSelector(
    (state) =>
      state.priceListReducer.priceList && state.priceListReducer.priceList
  );

  const productInfo = useSelector(
    (state) => state.productBeforeAddToCartReducer
  );
  const oldCart = useSelector((state) => state.cartReducer);

  const addToCart = () => {
    let newCart = { ...oldCart };
    newCart.products = [...newCart.products, productInfo];
    newCart.totalAmountOfProducts = newCart.products.reduce((acc, product) => {
      return acc + parseFloat(product.quantity);
    }, 0);
    newCart.totalPriceBeforeTax = newCart.products.reduce((acc, product) => {
      return acc + parseFloat(product.price) * parseFloat(product.quantity);
    }, 0);
    newCart.gst = newCart.totalPriceBeforeTax * 0.05;
    newCart.qst = newCart.totalPriceBeforeTax * 0.09975;
    newCart.totalPriceAfterTax =
      newCart.totalPriceBeforeTax + newCart.gst + newCart.qst;
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
        console.log(data);
        dispatch(cartAddProduct(productInfo));
        history.push("/cart");
      });
  };

  return (
    <>
      <ImageWrapper
        onClick={() => {
          handleOpen();
          dispatch(addProductBeforeAddToCartReset());
          dispatch(addProductNameBeforeAddToCart(product.imageName));
          dispatch(addProductImageSrcBeforeAddToCart(product.imageSrc));
          dispatch(addProductIdBeforeAddToCart(uuidv4()));
        }}
      >
        <Img
          src={`https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_1500/${product.imageSrc}.jpg`}
          srcset={`https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_256/${product.imageSrc}.jpg 256w,
            https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_512/${product.imageSrc}.jpg 512w,
            https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_768/${product.imageSrc}.jpg 768w,
            https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_1024/${product.imageSrc}.jpg 1024w,
            https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_1280/${product.imageSrc}.jpg 1280w
            https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_1500/${product.imageSrc}.jpg 1500w`}
          alt={product.name}
        />
      </ImageWrapper>
      {/* ----------------------Modal---------------------- */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ModalWrapper>
            <ModalTitle>
              <Title>Add this photo to your cart</Title>
              <BiX
                style={{
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                  position: "relative",
                  left: "5px",
                }}
                onClick={handleClose}
              />
            </ModalTitle>
            <Main>
              <ImgModal
                src={`https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_1500/${product.imageSrc}.jpg`}
                srcset={`https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_256/${product.imageSrc}.jpg 256w,
                  https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_512/${product.imageSrc}.jpg 512w,
                  https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_768/${product.imageSrc}.jpg 768w,
                  https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_1024/${product.imageSrc}.jpg 1024w,
                  https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_1280/${product.imageSrc}.jpg 1280w
                  https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_1500/${product.imageSrc}.jpg 1500w`}
                alt={product.name}
              />
              <InfoWrapper>
                <Details>
                  <Name>{product.imageName}</Name>
                  <Athlete>
                    <Title1>Athlete:</Title1> {product.athlete}
                  </Athlete>
                  <Location>
                    <Title1>Location:</Title1> {product.location}
                  </Location>
                  <Project>
                    <Title1>Project:</Title1> {product.project}
                  </Project>
                  <Dropdowns>
                    <InputDiv>
                      <Select
                        name="paper type"
                        required
                        onChange={(ev) => {
                          dispatch(
                            addProductPaperTypeBeforeAddToCart(ev.target.value)
                          );
                        }}
                      >
                        <Option value="">Choose paper</Option>
                        <Option value="glossy">Glossy</Option>
                        <Option value="matte">Matte</Option>
                      </Select>
                      <Type>
                        Paper type <Required>*</Required>
                      </Type>
                    </InputDiv>
                    <InputDiv>
                      <Select
                        name="image format"
                        required
                        onChange={(ev) => {
                          dispatch(
                            addProductSizeBeforeAddToCart(
                              ev.target.value.replace(/[0-9]/g, "")
                            )
                          );
                          dispatch(
                            addProductPriceBeforeAddToCart(
                              ev.target.value.replace(/\D/g, "")
                            )
                          );
                        }}
                      >
                        <Option value="" price="">
                          Choose format
                        </Option>
                        {product.imageFormat === "2x3" &&
                          priceLists.twoByThree.map((productOption) => {
                            return (
                              <Option
                                value={`${productOption.sizeValue}${productOption.price}`}
                                key={productOption.size}
                              >
                                {productOption.size} - ${productOption.price}
                              </Option>
                            );
                          })}
                        {product.imageFormat === "4x5" &&
                          priceLists.fourByFive.map((productOption) => {
                            return (
                              <Option
                                value={`${productOption.sizeValue}${productOption.price}`}
                                key={productOption.size}
                                price={productOption.price}
                              >
                                {productOption.size} - ${productOption.price}
                              </Option>
                            );
                          })}
                        {product.imageFormat === "1x1" &&
                          priceLists.oneByOne.map((productOption) => {
                            return (
                              <Option
                                value={`${productOption.sizeValue}${productOption.price}`}
                                key={productOption.size}
                                price={productOption.price}
                              >
                                {productOption.size} - ${productOption.price}
                              </Option>
                            );
                          })}
                      </Select>
                      <Type>
                        Paper size <Required>*</Required>
                      </Type>
                    </InputDiv>
                  </Dropdowns>
                </Details>
                <CartInfo>
                  {productInfo.price && (
                    <Quantity>
                      Quantity:{" "}
                      <QuantityInput
                        onChange={(ev) => {
                          dispatch(
                            adjustProductQuantityBeforeAddToCart(
                              ev.target.value
                            )
                          );
                        }}
                        type="number"
                        defaultValue="1"
                        min="1"
                        max="9"
                      />
                    </Quantity>
                  )}
                  {productInfo.price && (
                    <Price>CAD$ {productInfo.price}.00</Price>
                  )}
                  <ButtonAdd
                    disabled={!productInfo.paperType || !productInfo.size}
                    onClick={() => {
                      addToCart();
                    }}
                  >
                    Add to cart
                  </ButtonAdd>
                </CartInfo>
              </InfoWrapper>
            </Main>
          </ModalWrapper>
        </Fade>
      </Modal>
    </>
  );
};

const ImageWrapper = styled.div`
  cursor: pointer;
  margin-bottom: 16px;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  max-height: 90vh;
  object-fit: contain;
  @media (max-width: 800px) {
    max-height: none;
  }
`;

const ImgModal = styled.img`
  object-fit: contain;
  max-height: 80vh;
  max-width: 60vw;
  @media (max-width: 950px) {
    max-height: 200px;
    max-width: 400px;
    margin-bottom: 25px;
  }
  @media (max-width: 490px) {
    max-height: 150px;
    max-width: 300px;
  }
  @media (max-width: 383px) {
    max-height: 125px;
    max-width: 250px;
  }
`;

const ModalWrapper = styled.div`
  background-color: white;
  outline: none;
  padding: 20px 25px;
  min-width: 400px;
  @media (max-width: 490px) {
    min-width: 300px;
  }
  @media (max-width: 383px) {
    min-width: 250px;
  }
`;

const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const Title = styled.div`
  font-weight: 500;
`;

const Main = styled.div`
  display: flex;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const InfoWrapper = styled.div`
  margin-left: 25px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 950px) {
    margin-left: 0px;
    width: 400px;
  }
  @media (max-width: 490px) {
    width: 300px;
  }
  @media (max-width: 383px) {
    width: 250px;
  }
`;

const Name = styled.div`
  font-weight: 500;
  font-size: 13pt;
  margin-bottom: 20px;
`;

const Details = styled.div`
  font-weight: 200;
  margin-bottom: 25px;
`;

const Title1 = styled.span`
  font-weight: 400;
  @media (max-height: 650px) {
    display: none;
  }
`;

const Athlete = styled.div`
  @media (max-height: 650px) {
    display: none;
  }
`;

const Location = styled.div`
  @media (max-height: 650px) {
    display: none;
  }
`;

const Project = styled.div`
  @media (max-height: 650px) {
    display: none;
  }
`;

const Dropdowns = styled.div`
  margin-top: 30px;
`;

const InputDiv = styled.div`
  margin-top: 15px;
`;

const Type = styled.div`
  font-weight: 200;
  font-size: 11pt;
`;

const Select = styled.select`
  width: 150px;
  border-bottom: 1px solid ${COLORS.grey};
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: transparent;
  font-size: 11pt;
  font-family: halyard-display, sans-serif;
  font-weight: 300;
  padding: 2px 4px;
  outline: none;
  color: ${COLORS.black};
`;

const Option = styled.option``;

const Required = styled.span`
  font-weight: 400;
  color: red;
`;

const CartInfo = styled.div``;

const Quantity = styled.div`
  text-align: right;
  position: relative;
  left: 19px;
  margin-bottom: 5px;
`;

const QuantityInput = styled.input`
  width: 25px;
  border: none;
  font-size: 12pt;
  font-family: halyard-display, sans-serif;
  outline: none;
`;

const Price = styled.div`
  text-align: right;
  margin-bottom: 10px;
  font-size: 15pt;
`;

const ButtonAdd = styled.button`
  background-color: transparent;
  border: black 1px solid;
  color: black;
  padding: 15px;
  width: 250px;
  &:hover:not([disabled]) {
    background-color: black;
    color: white;
    cursor: pointer;
  }
  &:disabled {
    border: grey 1px solid;
    color: grey;
  }
  @media (max-width: 950px) {
    width: 400px;
  }
  @media (max-width: 490px) {
    width: 300px;
  }
  @media (max-width: 383px) {
    width: 250px;
  }
`;

export default OneProduct;

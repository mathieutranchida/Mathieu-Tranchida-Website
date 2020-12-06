import React, { useState } from "react";
import styled from "styled-components";
import { Image, Transformation } from "cloudinary-react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import COLORS from "../../constants";
import { BiX } from "react-icons/bi";

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

  return (
    <>
      <Wrapper>
        <ImageWrapper onClick={handleOpen}>
          <Image
            cloudName="dldqebddc"
            publicId={product.imageSrc}
            // height="(max-height: 90vh)"
            // width="(max-width: 90vw)"
            // srcset={`https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_256/${product.imageSrc}.jpg 256w,
            //       https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_512/${product.imageSrc}.jpg 512w,
            //       https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_768/${product.imageSrc}.jpg 768w,
            //       https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_1024/${product.imageSrc}.jpg 1024w,
            //       https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_1280/${product.imageSrc}.jpg 1280w`}
            // src={`https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_512/${product.imageSrc}.jpg`}
          >
            <Transformation
              quality="100"
              width="1100"
              height="800"
              fetchFormat="auto"
              crop="limit"
            />
          </Image>
          {/* <img
            sizes="(min-width: 30em) 28em, 100vw"
            src={`https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_auto/${product.imageSrc}.jpg`}
            // srcset={`https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_256/${product.imageSrc}.jpg 256w,
            //       https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_512/${product.imageSrc}.jpg 512w,
            //       https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_768/${product.imageSrc}.jpg 768w,
            //       https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_1024/${product.imageSrc}.jpg 1024w,
            //       https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_100,w_1280/${product.imageSrc}.jpg 1280w`}
          /> */}
        </ImageWrapper>
        <AddToCart onClick={handleOpen}>Add to cart</AddToCart>
      </Wrapper>

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
              <Image cloudName="dldqebddc" publicId={product.imageSrc}>
                <Transformation
                  quality="100"
                  width="1000"
                  height="700"
                  fetchFormat="auto"
                  crop="limit"
                />
              </Image>
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
                      <Select name="paper type" required>
                        <Option value="">Choose paper</Option>
                        <Option value="glossy">Glossy</Option>
                        <Option value="matte">Matte</Option>
                      </Select>
                      <Type>
                        Paper type <Required>*</Required>
                      </Type>
                    </InputDiv>
                    <InputDiv>
                      <Select name="image format" required>
                        <Option value="">Choose format</Option>
                        {product.imageFormat === "2x3" &&
                          priceLists.twoByThree.map((productOption) => {
                            return (
                              <Option
                                value={`${productOption.size} - $${productOption.price}`}
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
                                value={`${productOption.size} - $${productOption.price}`}
                                key={productOption.size}
                              >
                                {productOption.size} - ${productOption.price}
                              </Option>
                            );
                          })}
                        {product.imageFormat === "1x1" &&
                          priceLists.oneByOne.map((productOption) => {
                            return (
                              <Option
                                value={`${productOption.size} - $${productOption.price}`}
                                key={productOption.size}
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
                  <Quantity>
                    Quantity:{" "}
                    <QuantityInput
                      type="number"
                      defaultValue="1"
                      min="1"
                      max="9"
                    />
                  </Quantity>
                  <Price>CAD$ 10.00</Price>
                  <ButtonAdd>Add to cart</ButtonAdd>
                </CartInfo>
              </InfoWrapper>
            </Main>
          </ModalWrapper>
        </Fade>
      </Modal>
    </>
  );
};

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

const ImageWrapper = styled.div`
  cursor: pointer;
`;

const AddToCart = styled.div`
  text-align: right;
  font-family: sweet-sans-pro, sans-serif;
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0px;
  font-size: 10pt;
  cursor: pointer;
`;

const ModalWrapper = styled.div`
  background-color: white;
  outline: none;
  padding: 20px 25px;
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
`;

const InfoWrapper = styled.div`
  margin-left: 25px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Name = styled.div`
  font-weight: 500;
  font-size: 13pt;
  margin-bottom: 20px;
`;

const Details = styled.div`
  font-weight: 200;
`;

const Title1 = styled.span`
  font-weight: 400;
`;

const Athlete = styled.div``;

const Location = styled.div``;

const Project = styled.div``;

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
  width: 125px;
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
  cursor: pointer;
  width: 250px;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export default OneProduct;

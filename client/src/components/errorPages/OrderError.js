import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { BiErrorAlt } from "react-icons/bi";

const OrderError = () => {
  const history = useHistory();

  return (
    <>
      <Wrapper>
        <ErrorWrapper>
          <BiErrorAlt style={{ width: "75px", height: "75px" }} />
          <ErrorTextWrapper>
            <ErrorText>
              Oops! It looks like something went wrong while processing your
              order.
            </ErrorText>
            <ErrorText>
              Please try again or contact customer service at +1 (438) 927-7693
              if the error persists.
            </ErrorText>
          </ErrorTextWrapper>
          <BackToCart
            onClick={() => {
              history.push("/cart");
            }}
          >
            Go back to your cart
          </BackToCart>
        </ErrorWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorWrapper = styled.div`
  text-align: center;
`;

const ErrorTextWrapper = styled.div`
  margin-top: 35px;
  margin-bottom: 20px;
`;

const ErrorText = styled.div``;

const BackToCart = styled.button`
  background-color: transparent;
  border: black 1px solid;
  color: black;
  font-family: halyard-display, sans-serif;
  font-size: 11pt;
  font-weight: 400;
  padding: 8px 20px;
  cursor: pointer;
`;

export default OrderError;

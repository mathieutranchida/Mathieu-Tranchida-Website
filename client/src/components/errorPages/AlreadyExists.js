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
              This email address is already subscribed to our newsletter{" "}
            </ErrorText>
          </ErrorTextWrapper>
          <BackToHomepage
            onClick={() => {
              history.push("/blog");
            }}
          >
            Go back to the blog
          </BackToHomepage>
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
  padding: 25px;
`;

const ErrorTextWrapper = styled.div`
  margin-top: 35px;
  margin-bottom: 20px;
`;

const ErrorText = styled.div``;

const BackToHomepage = styled.button`
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

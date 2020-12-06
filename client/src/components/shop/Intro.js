import React from "react";
import styled from "styled-components";

import StoreBackground from "../../assets/StoreBackground.jpg";
import { VscChevronDown } from "react-icons/vsc";
import COLORS from "../../constants";

const Intro = () => {
  return (
    <>
      <Wrapper>
        <FiWrapper>
          <VscChevronDown
            style={{
              height: "35px",
              width: "35px",
              color: `${COLORS.black}`,
            }}
          />
        </FiWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${StoreBackground});
  background-size: cover;
  background-position: center;
`;

const FiWrapper = styled.div`
  position: absolute;
  top: 96vh;
  left: 50%;
  transform: translate(-50% -50%);

  animation-name: ArrowUpAndDown;
  animation-duration: 4s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;

  @keyframes ArrowUpAndDown {
    0% {
      transform: translateY(0px);
    }
    20% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    80% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export default Intro;

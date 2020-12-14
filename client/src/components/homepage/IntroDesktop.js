import React from "react";
import styled from "styled-components";

import backgroundImg from "../../assets/background-img-horizontal.jpg";
import backgroundImgVertical from "../../assets/gallery/gallery-10.jpg";
import { VscChevronDown } from "react-icons/vsc";
import COLORS from "../../constants";

const IntroDesktop = () => {
  return (
    <>
      <Intro>
        <FiWrapper>
          <VscChevronDown
            style={{
              height: "35px",
              width: "35px",
              color: `${COLORS.black}`,
            }}
          />
        </FiWrapper>
      </Intro>
    </>
  );
};

const Intro = styled.div`
  height: 100vh;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: bottom;
  @media (max-width: 800px) {
    background-image: url(${backgroundImgVertical});
    background-position: top;
  }
`;

const FiWrapper = styled.div`
  position: absolute;
  top: calc(100vh - 34px);
  width: 100vw;
  display: flex;
  justify-content: center;

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

export default IntroDesktop;

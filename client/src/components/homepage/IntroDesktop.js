import React from "react";
import styled from "styled-components";

import backgroundImg from "../../assets/background-img.jpg";
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
        <TextAnimation>
          <Name>Mathieu Tranchida</Name>
          <Activity>Photography</Activity>
        </TextAnimation>
      </Intro>
    </>
  );
};

const Intro = styled.div`
  height: 100vh;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
`;

const FiWrapper = styled.div`
  position: absolute;
  top: 96vh;
  left: 50%;
  transform: translate(-50%, -50%);

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

const TextAnimation = styled.div`
  position: absolute;
  top: 80px;
  right: 35px;
  text-align: right;
  color: black;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 9pt;
  font-weight: 300;

  animation-name: leftToRight;
  animation-duration: 3300ms;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;

  @keyframes leftToRight {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    30% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

const Name = styled.div`
  text-transform: uppercase;
  letter-spacing: 10px;
  text-shadow: 0px 0px 50px white;
`;

const Activity = styled.div`
  text-transform: uppercase;
  letter-spacing: 10px;
  text-shadow: 0px 0px 50px white;
`;

export default IntroDesktop;

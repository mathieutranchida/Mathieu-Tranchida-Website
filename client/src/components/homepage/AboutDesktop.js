import React from "react";
import styled from "styled-components";

import portrait from "../../assets/portrait.jpg";

const AboutDesktop = () => {
  return (
    <>
      <Wrapper>
        <Title>Mathieu Tranchida</Title>
        <Main>
          <TextWrapper>
            <Text>
              Mathieu Tranchida is an action photographer living between
              Montreal and his home country of Switzerland.
            </Text>
            <Text>
              Mathieu has been shooting photos professionally since 2017. In the
              last four years, Mathieu mainly produced sport, product and event
              images for brands such as Arc’teryx and Psicobloc. More recently,
              Mathieu has been pushing his work towards editorial standards and
              has been published in magazines such as The Ski Journal, Downdays,
              Gripped, and L’Équipe.
            </Text>
            <TextLast>
              Over the years, Mathieu has proved to be comfortable in the
              outdoors and showed the ability to operate in exposed terrain with
              professional camera equipment. Mathieu is a certified Advanced
              Wilderness First Aider (AWFA), has avalanche training and is able
              to do rope operations while climbing.
            </TextLast>
          </TextWrapper>
          <Portrait src={portrait} alt="mathieu tranchida's portrait" />
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 150px;
  @media (max-width: 1150px) {
    margin-top: 75px;
    margin-bottom: 75px;
  }
  @media (max-width: 1000px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  @media (max-width: 868px) {
    margin-top: 30px;
    margin-bottom: 0px;
  }
  @media (max-width: 600px) {
    margin-top: 20px;
  }
`;

const Title = styled.div`
  font-family: sweet-sans-pro, sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 50px;
  font-style: italic;
  position: absolute;
  left: 38vw;
  transform: translate(-50%);
  display: block;
  margin-top: 25px;
  @media (max-width: 1150px) {
    position: relative;
    text-align: center;
    left: 50vw;
    margin-top: 75px;
  }
  @media (max-width: 1000px) {
    margin-top: 50px;
  }
  @media (max-width: 666px) {
    font-size: 45px;
  }
  @media (max-width: 600px) {
    font-size: 40px;
    margin-top: 25px;
  }
  @media (max-width: 550px) {
    font-size: 35px;
  }
  @media (max-width: 500px) {
    font-size: 30px;
  }
  @media (max-width: 440px) {
    font-size: 25px;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  margin: 135px 100px;
  margin-top: 25px;
  @media (max-width: 1150px) {
    margin-top: 40px;
    margin-bottom: 0px;
  }
  @media (max-width: 1000px) {
    margin-left: 50px;
    margin-right: 50px;
  }
  @media (max-width: 868px) {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 25px;
  }
`;

const TextWrapper = styled.div`
  width: 400px;
  text-align: justify;
  margin-right: 100px;
  margin-top: 135px;
  @media (max-width: 1150px) {
    margin-top: 0px;
    margin-right: 75px;
  }
  @media (max-width: 1000px) {
    margin-right: 50px;
  }
  @media (max-width: 868px) {
    margin-right: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 35px;
  }
`;

const Text = styled.div`
  font-weight: 300;
  margin-bottom: 20px;
  text-indent: 40px;
`;

const TextLast = styled.div`
  font-weight: 300;
  text-indent: 40px;
`;

const Portrait = styled.img`
  height: 500px;
  width: 500px;
  @media (max-width: 1150px) {
    height: 400px;
    width: 400px;
  }
  @media (max-width: 600px) {
    height: 100%;
    width: 100%;
  }
`;

export default AboutDesktop;

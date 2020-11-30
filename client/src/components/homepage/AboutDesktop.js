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

const Wrapper = styled.div``;

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
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  margin: 135px 100px;
`;

const TextWrapper = styled.div`
  width: 400px;
  text-align: justify;
  margin-right: 100px;
  margin-top: 135px;
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
`;

export default AboutDesktop;

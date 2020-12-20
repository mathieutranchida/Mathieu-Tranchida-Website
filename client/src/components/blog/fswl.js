import React from "react";
import styled from "styled-components";

import OtherReads from "./OtherReads";
import ScrollToTop from "./ScrollToTop";

const Fswl = () => {
  return (
    <>
      <ScrollToTop showBelow={500} />
      <Wrapper>
        <Main>
          <Header>From Switzerland with Love</Header>
          <Author></Author>
          <Story>
            <Paragraph>Coming soon</Paragraph>
            <Quote>Coming soon</Quote>
            <Img
              src={`https://res.cloudinary.com/dldqebddc/image/upload/f_auto,q_70,w_1500/eltozicw0ahimliojr1k.jpg`}
              alt="Remco"
            />
          </Story>
        </Main>
        <OtherReads />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  max-width: 1000px;
  margin: 100px 0px 80px 0px;
  width: 100%;
  @media (max-width: 1025px) {
    margin: 80px 0px 80px 0px;
  }
`;

const Header = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 15pt;
  margin-bottom: 25px;
`;

const Author = styled.div`
  text-align: center;
`;

const Story = styled.div`
  margin-top: 50px;
`;

const Section = styled.div`
  font-weight: 500;
  font-size: 14pt;
  margin-bottom: 15px;
  margin-top: 40px;
`;

const Paragraph = styled.div`
  text-align: justify;
  margin-bottom: 15px;
  font-weight: 300;
  text-indent: 50px;
`;

const Quote = styled.div`
  font-style: italic;
  margin-bottom: 15px;
  text-align: justify;
  font-weight: 300;
  text-indent: 50px;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  max-height: 500px;
  max-width: 100vw;
  object-fit: contain;
  margin-bottom: 20px;
  margin-top: 10px;
  user-select: none;
`;

export default Fswl;

import React from "react";
import styled from "styled-components";

const Fswl = () => {
  return (
    <>
      <Wrapper>
        <Main>
          <Header>From Switzerland with Love</Header>
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
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

export default Fswl;

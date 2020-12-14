import React from "react";
import styled from "styled-components";

import MainShop from "./MainShop";

const Shop = () => {
  return (
    <>
      <Wrapper>
        <MainShop />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 100px);
`;

export default Shop;

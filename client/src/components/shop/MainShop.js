import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import OneProduct from "./OneProduct";

const MainShop = () => {
  const products = useSelector(
    (state) =>
      state.allProductsReducer.products && state.allProductsReducer.products
  );

  return (
    <>
      <Wrapper>
        {products &&
          products.map((product) => (
            <OneProduct key={product._id} {...product} />
          ))}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 100px 100px 100px;
  @media (max-width: 1025px) {
    margin: 90px 16px 0px 16px;
  }
`;

export default MainShop;

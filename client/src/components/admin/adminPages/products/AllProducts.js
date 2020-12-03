import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import SideBar from "../../SideBar";
import AdminHeader from "../../adminHeader/index";
import AdminProduct from "./AdminProduct";

const AllProducts = () => {
  const products = useSelector(
    (state) =>
      state.allProductsReducer.products && state.allProductsReducer.products
  );

  return (
    <>
      <Wrapper>
        <SideBar />
        <MainWrapper>
          <Header>
            <Section>
              See, modify, and delete all products from the store
            </Section>
            <AdminHeader />
          </Header>
          <GridWrapper>
            {products &&
              products.map((product) => (
                <AdminProduct key={product.imageSrc} {...product} />
              ))}
          </GridWrapper>
        </MainWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const MainWrapper = styled.div`
  width: calc(100vw - 300px);
`;

const Header = styled.div`
  border-bottom: 1px grey solid;
  border-image-source: linear-gradient(270deg, white 5%, grey 65%, grey 100%);
  border-image-slice: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
`;

const Section = styled.div`
  font-weight: 500;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 25px;
`;

export default AllProducts;

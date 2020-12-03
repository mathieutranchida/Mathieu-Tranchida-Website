import React from "react";
import styled from "styled-components";
import SideBar from "../../SideBar";

const AllProducts = () => {
  return (
    <>
      <Wrapper>
        <SideBar />
        allProducts
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default AllProducts;

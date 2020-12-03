import React from "react";
import styled from "styled-components";
import SideBar from "../../SideBar";

const AllPriceLists = () => {
  return (
    <>
      <Wrapper>
        <SideBar />
        allPriceLists
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default AllPriceLists;

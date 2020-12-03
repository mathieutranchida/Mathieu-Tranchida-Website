import React from "react";
import styled from "styled-components";

import SideBar from "../../SideBar";

const AllOrders = () => {
  return (
    <>
      <Wrapper>
        <SideBar />
        allOrders
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default AllOrders;

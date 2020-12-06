import React from "react";
import styled from "styled-components";

import SideBar from "./SideBar";

const Admin = () => {
  return (
    <>
      <Wrapper>
        <SideBar />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
`;

const Text = styled.div`
  text-transform: uppercase;
  letter-spacing: 10px;
`;

export default Admin;

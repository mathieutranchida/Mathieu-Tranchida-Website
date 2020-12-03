import React from "react";
import styled from "styled-components";
import SideBar from "../../SideBar";

const allUsers = () => {
  return (
    <>
      <Wrapper>
        <SideBar />
        allUsers
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default allUsers;

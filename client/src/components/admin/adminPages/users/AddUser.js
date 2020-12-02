import React from "react";
import styled from "styled-components";
import SideBar from "../../SideBar";

const AddUser = () => {
  return (
    <>
      <Wrapper>
        <SideBar />
        addUser
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default AddUser;

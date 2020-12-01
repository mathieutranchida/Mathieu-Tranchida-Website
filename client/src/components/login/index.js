import React from "react";
import styled from "styled-components";

import COLORS from "../../constants";

import LoginComponent from "./LoginComponent";

const Login = () => {
  return (
    <>
      <Wrapper>
        <LoginComponent />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.secondary};
  width: 100vw;
  height: calc(100vh - 100px);
`;

export default Login;

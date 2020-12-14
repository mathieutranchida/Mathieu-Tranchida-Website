import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import COLORS from "../../constants";

import LoginComponent from "./LoginComponent";

const Login = () => {
  return (
    <>
      <Wrapper>
        <Header to="/">Return to site</Header>
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

const Header = styled(NavLink)`
  font-family: sweet-sans-pro, sans-serif;
  text-transform: uppercase;
  /* letter-spacing: 9px; */
  font-weight: 500;
  font-size: 10pt;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  color: white;
  position: absolute;
  top: 30px;
  right: 40px;
`;

export default Login;

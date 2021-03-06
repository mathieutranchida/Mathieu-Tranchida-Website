import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import COLORS from "../../constants";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <Nothing>Login</Nothing>
        <Content>© Mathieu Tranchida - 2020 All rights Reserved</Content>
        <Login to="/login">Login</Login>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  color: ${COLORS.white};
  background-color: ${COLORS.secondary};
  padding: 0px 50px;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Content = styled.div`
  font-weight: 200;
  text-align: center;
`;

const Nothing = styled.div`
  color: black;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none;
  @media (max-width: 600px) {
    display: none;
  }
`;

const Login = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: 200;
  @media (max-width: 600px) {
    margin-top: 10px;
  }
`;

export default Footer;

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import COLORS from "../../constants";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <Wrapper>
        <Logo src={logo} alt="Mathieu Tranchida's logo" />
        <Nav>
          <Link exact to="/">
            Portfolio
          </Link>
          <Link to="/blog">Blog</Link>
          <Link to="/rates">Rates</Link>
          <Link to="/store">Store</Link>
        </Nav>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const Logo = styled.img`
  height: 65px;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Nav = styled.nav`
  position: absolute;
  top: 30px;
  right: 30px;
  background-color: white;
  border-radius: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  box-shadow: 0px 0px 10px 0px ${COLORS.dropShadow};
  width: 315px;
  text-transform: uppercase;
  font-size: 13px;
  font-family: sweet-sans-pro, sans-serif;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 4px 10px 5px 10px;
  border-radius: 200px;
  &.active {
    color: ${COLORS.white};
    background-color: ${COLORS.secondary};
  }
`;

export default Header;

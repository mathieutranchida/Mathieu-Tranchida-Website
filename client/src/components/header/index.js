import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import COLORS from "../../constants";
import logo from "../../assets/logo.png";
import Contact from "./Contact";

const Header = () => {
  return (
    <>
      <Wrapper>
        <Contact />
        <Logo src={logo} alt="Mathieu Tranchida's logo" />
        <MenuWrapper>
          <Menu>Menu</Menu>
          <LineWrapper>
            <Line />
            <Line />
            <Line />
          </LineWrapper>
        </MenuWrapper>
        <Nav>
          <Link exact to="/">
            Portfolio
          </Link>
          <Link to="/blog">Blog</Link>
          <Link to="/rates">Rates</Link>
          <Link to="/store">Store</Link>
          <Link to="/cart">Cart</Link>
        </Nav>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const LineWrapper = styled.div``;

const Line = styled.div`
  border-bottom: 2px solid black;
  margin: 5px 0px 5px 0px;
  width: 40px;
  /* box-shadow: 0px 0px 10px 0px ${COLORS.dropShadow}; */
`;

const Logo = styled.img`
  height: 55px;
  position: absolute;
  top: 45px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MenuWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: right;
  align-items: center;
  top: 29px;
  right: 0px;
`;

const Menu = styled.div`
  padding-bottom: 2px;
  margin-right: 15px;
  color: white;
  text-transform: uppercase;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 12pt;
  font-weight: 600;
  letter-spacing: 2px;
  /* text-shadow: 0px 0px 10px rgba(100, 100, 100, 0.8); */
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
  width: 375px;
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

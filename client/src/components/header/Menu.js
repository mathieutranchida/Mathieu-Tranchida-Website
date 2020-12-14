import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { BiX } from "react-icons/bi";
import ContactSmartphone from "./ContactSmartphone";

import "./Menu.css";

const Menu = () => {
  return (
    <>
      <MenuWrapper
        className="menu"
        onClick={() => {
          document.querySelector(".menu").classList.remove("menuFadeOut");
          document.querySelector(".menu").classList.remove("menuFadeIn");
          document
            .querySelector(".realMenu")
            .classList.remove("realMenuFadeOut");
          document
            .querySelector(".realMenu")
            .classList.remove("realMenuFadeIn");
          document.querySelector(".menu").classList.add("menuFadeOut");
          document
            .querySelector(".realMenu")
            .classList.remove("realMenuFadeIn");
          document.querySelector(".realMenu").classList.add("realMenuFadeIn");
        }}
      >
        <MenuTitle>Menu</MenuTitle>
        <LineWrapper>
          <Line />
          <Line />
          <Line />
        </LineWrapper>
      </MenuWrapper>
      <OpenMenuWrapper className="realMenu">
        <Nav>
          <LinkWrapper>
            <Link exact to="/">
              Homepage
            </Link>
            <ContactWrapper>
              <ContactSmartphone />
            </ContactWrapper>
            <Link to="/store">Store</Link>
            <Link to="/cart">Cart</Link>
          </LinkWrapper>
          <BiXWrapper>
            <BiX
              style={{
                width: "25px",
                height: "25px",
                cursor: "pointer",
                color: "black",
              }}
              onClick={() => {
                document.querySelector(".menu").classList.remove("menuFadeIn");
                document
                  .querySelector(".realMenu")
                  .classList.remove("realMenuFadeOut");
                document
                  .querySelector(".realMenu")
                  .classList.remove("realMenuFadeIn");
                document.querySelector(".menu").classList.add("menuFadeIn");
                document
                  .querySelector(".realMenu")
                  .classList.add("realMenuFadeOut");
              }}
            />
          </BiXWrapper>
        </Nav>
      </OpenMenuWrapper>
    </>
  );
};

const MenuWrapper = styled.div`
  transition: 500ms ease;
  &:hover {
    transform: translateX(-10px);
  }
`;

const MenuTitle = styled.div`
  padding-bottom: 2px;
  margin-right: 15px;
  color: white;
  text-transform: uppercase;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 12pt;
  font-weight: 600;
  letter-spacing: 2px;
  color: black;
`;

const LineWrapper = styled.div``;

const Line = styled.div`
  border-bottom: 2px solid black;
  margin: 5px 0px 5px 0px;
  width: 60px;
`;

const OpenMenuWrapper = styled.div``;

const Nav = styled.nav`
  border-radius: 200px;
  margin-right: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const BiXWrapper = styled.div`
  padding-top: 5px;
  @media (max-width: 800px) {
    margin-right: 10px;
    margin-bottom: 8px;
  }
`;

const Link = styled(NavLink)`
  color: white;
  text-transform: uppercase;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 12pt;
  font-weight: 600;
  letter-spacing: 2px;
  color: black;
  text-decoration: none;
  margin: 0px 10px;
  &.active {
    text-decoration: line-through;
  }
  @media (max-width: 800px) {
    margin-bottom: 8px;
  }
`;

const ContactWrapper = styled.div`
  @media (min-width: 1026px) {
    display: none;
  }
  @media (max-width: 800px) {
    margin-bottom: 8px;
  }
`;

export default Menu;

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Title to="/admin">Admin Portal</Title>
        </TitleWrapper>
        <Main>
          <DropdownWrapper>
            <Button>Products</Button>
            <Dropdown className="dropdown1" style={{ display: "block" }}>
              <DropdownItem to="/admin/all-products">
                See all products
              </DropdownItem>
              <DropdownItem to="/admin/add-product">Add a product</DropdownItem>
            </Dropdown>
          </DropdownWrapper>
          <DropdownWrapper>
            <Button>Orders</Button>
            <Dropdown className="dropdown4" style={{ display: "block" }}>
              <DropdownItem to="/admin/all-orders">See all orders</DropdownItem>
            </Dropdown>
          </DropdownWrapper>
          <DropdownWrapper>
            <Button>Newsletter</Button>
            <Dropdown className="dropdown4" style={{ display: "block" }}>
              <DropdownItem to="/admin/newsletter-emails">
                See all emails
              </DropdownItem>
            </Dropdown>
          </DropdownWrapper>
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 100px);
  width: 300px;
  border-right: 1px solid transparent;
  border-image-source: linear-gradient(180deg, white 0%, grey 10%, grey 100%);
  border-image-slice: 5;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled(NavLink)`
  font-family: sweet-sans-pro, sans-serif;
  text-transform: uppercase;
  letter-spacing: 9px;
  margin-top: 27px;
  font-weight: 700;
  font-size: 10pt;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

const Main = styled.div`
  margin-top: 25px;
  border-bottom: 1px solid grey;
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  border-top: 1px solid grey;
`;

const Button = styled.button`
  background-color: transparent;
  color: black;
  font-family: sweet-sans-pro, sans-serif;
  border: none;
  width: 300px;
  font-size: 12pt;
  padding: 10px;
  outline: none;
  /* cursor: pointer;
  &:hover {
    background-color: #eeeeee;
  }
  &:focus {
    background-color: #eeeeee;
  } */
`;

const Dropdown = styled.div`
  width: 300px;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 11pt;
  padding: 0px 0px 10px 0px;
`;

const DropdownItem = styled(NavLink)`
  display: block;
  padding: 5px 25px;
  text-decoration: none;
  color: black;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #eeeeee;
  }
  &:focus {
    background-color: #eeeeee;
  }
  &.active {
    background-color: #eeeeee;
  }
`;

export default SideBar;

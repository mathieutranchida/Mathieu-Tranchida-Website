import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const AdminHeader = () => {
  return (
    <>
      <Wrapper to="/">Return to main site</Wrapper>
    </>
  );
};

const Wrapper = styled(NavLink)`
  font-family: sweet-sans-pro, sans-serif;
  text-transform: uppercase;
  /* letter-spacing: 9px; */
  font-weight: 500;
  font-size: 10pt;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

export default AdminHeader;

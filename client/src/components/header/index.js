import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import logo from "../../assets/logo.png";
import Contact from "./Contact";
import Menu from "./Menu";

const Header = () => {
  const history = useHistory();

  return (
    <>
      <Wrapper>
        <Contact />
        <Logo
          src={logo}
          alt="Mathieu Tranchida's logo"
          onClick={() => {
            history.push("/");
          }}
        />
        <Menu />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  overflow: hidden;
`;

const Logo = styled.img`
  height: 55px;
  position: absolute;
  top: 45px;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export default Header;

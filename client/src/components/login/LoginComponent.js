import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import COLORS from "../../constants";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Wrapper>
        <Title>Login</Title>
        <InputDiv>
          <Type>Email</Type>
          <Input
            type="email"
            required
            onChange={(ev) => {
              setEmail(ev.target.value);
            }}
          />
        </InputDiv>
        <InputDiv>
          <Type>Password</Type>
          <Input
            type="password"
            required
            onChange={(ev) => {
              setPassword(ev.target.value);
            }}
          />
        </InputDiv>
        <SignUp to="/create-account">Create an account</SignUp>
        <ButtonWrapper>
          <Button>Login</Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${COLORS.white};
`;

const Title = styled.div`
  font-weight: 900;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 20pt;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

const InputDiv = styled.div`
  font-family: sweet-sans-pro, sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 11pt;
`;

const Type = styled.div`
  margin-top: 15px;
`;

const Input = styled.input`
  width: 300px;
  border: 2px solid ${COLORS.white};
  background-color: transparent;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 11pt;
  padding: 2px 4px;
  outline: none;
  color: ${COLORS.white};
`;

const SignUp = styled(NavLink)`
  display: block;
  text-align: right;
  font-size: 10pt;
  font-family: sweet-sans-pro, sans-serif;
  text-decoration: none;
  color: ${COLORS.white};
  margin: 5px 0px;
`;

const ButtonWrapper = styled.div``;

const Button = styled.button`
  float: right;
  background-color: white;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 11pt;
  padding: 7px 20px;
  color: ${COLORS.black};
  border: none;
  text-transform: uppercase;
  font-weight: 900;
  margin: 10px 0px 0px 0px;
`;

export default LoginComponent;

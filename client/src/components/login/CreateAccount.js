import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import {
  updateAccountName,
  updateAccountEmail,
  updateAccountPassword,
  updateAccountPhone,
  updateAccountType,
} from "../../redux/actions";

import COLORS from "../../constants";

const CreateAccount = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const newUser = useSelector((state) => state.createUserReducer);
  console.log(newUser);

  return (
    <>
      <Main>
        <Wrapper>
          <Title>Sign up</Title>
          <InputDiv>
            <Type>Name</Type>
            <Input
              type="name"
              required
              onChange={(ev) => {
                dispatch(updateAccountName(ev.target.value));
              }}
            />
          </InputDiv>
          <InputDiv>
            <Type>Email</Type>
            <Input
              type="email"
              required
              onChange={(ev) => {
                dispatch(updateAccountEmail(ev.target.value));
              }}
            />
          </InputDiv>
          <InputDiv>
            <Type>Password</Type>
            <Input
              type="password"
              required
              onChange={(ev) => {
                dispatch(updateAccountPassword(ev.target.value));
              }}
            />
          </InputDiv>
          <InputDiv>
            <Type>Phone</Type>
            <Input
              type="phone"
              onChange={(ev) => {
                dispatch(updateAccountPhone(ev.target.value));
              }}
            />
          </InputDiv>
          <InputForm>
            <Type>Select account type:</Type>
            <InputRadioDiv>
              <InputRadio
                type="radio"
                name="accountType"
                value="individual"
                onClick={(ev) => {
                  dispatch(updateAccountType(ev.target.value));
                }}
              />
              <Label>Individual</Label>
            </InputRadioDiv>
            <InputRadioDiv>
              <InputRadio
                type="radio"
                name="accountType"
                value="editorial"
                onClick={(ev) => {
                  dispatch(updateAccountType(ev.target.value));
                }}
              />
              <Label>Editorial</Label>
            </InputRadioDiv>
          </InputForm>
          <ButtonWrapper>
            <Button
              onClick={(ev) => {
                history.push("/login");
              }}
            >
              Sign up
            </Button>
          </ButtonWrapper>
        </Wrapper>
      </Main>
    </>
  );
};

const Main = styled.div`
  background-color: ${COLORS.secondary};
  width: 100vw;
  height: calc(100vh - 100px);
`;

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
  font-family: sweet-sans-pro, sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 11pt;
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

const InputForm = styled.form`
  display: block;
`;

const InputRadioDiv = styled.div`
  display: flex;
  align-items: center;
`;

const InputRadio = styled.input``;

const Label = styled.label`
  font-family: sweet-sans-pro, sans-serif;
  font-size: 11pt;
  margin-left: 5px;
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
  margin: 25px 0px 0px 0px;
`;

export default CreateAccount;

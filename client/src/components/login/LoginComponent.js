import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { BiTrash, BiX } from "react-icons/bi";
import COLORS from "../../constants";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const history = useHistory();

  return (
    <>
      <Wrapper>
        <Title>Admin Login</Title>
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
        <ButtonWrapper>
          <Button
            disabled={!email || !password}
            onClick={(ev) => {
              fetch("/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  if (data.token) {
                    localStorage.setItem("mtAuthenticated", true);
                    history.push("/admin/all-products");
                  } else {
                    handleOpen();
                    setEmail("");
                    setPassword("");
                  }
                });
            }}
          >
            Login
          </Button>
        </ButtonWrapper>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <EditModalWrapper>
              <EditModalTitle>
                <TitleModal>Your email or password is incorect</TitleModal>
                <BiX
                  style={{ width: "25px", height: "25px", cursor: "pointer" }}
                  onClick={handleClose}
                />
              </EditModalTitle>
            </EditModalWrapper>
          </Fade>
        </Modal>
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
  &:disabled {
    color: grey;
  }
  &:hover:not([disabled]) {
    cursor: pointer;
  }
`;

const EditModalWrapper = styled.div`
  background-color: white;
  outline: none;
  padding: 20px 25px;
  width: 325px;
`;

const EditModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleModal = styled.div`
  font-weight: 500;
`;

export default LoginComponent;

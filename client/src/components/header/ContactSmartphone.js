import React, { useState } from "react";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { BiPhone, BiX } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import COLORS from "../../constants";

import ContactUs from "./ContactUs";

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

const ContactSmartphone = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ContactTitle onClick={handleOpen}>Contact</ContactTitle>
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
          <ModalWrapper>
            <MainModalWrapper>
              <ModalTitle>
                <Title>Contact information</Title>
                <BiX
                  style={{
                    width: "25px",
                    height: "25px",
                    cursor: "pointer",
                    color: "white",
                  }}
                  onClick={handleClose}
                />
              </ModalTitle>
              <Main>
                <Div>
                  <InfoNoIcons>Mathieu Tranchida</InfoNoIcons>
                </Div>
                <ContactWrapperDescription>
                  <Div>
                    <BiPhone
                      style={{
                        width: "17px",
                        height: "17px",
                        color: "white",
                        paddingTop: "5px",
                      }}
                    />
                    <Info>+1 (438) 927-7693</Info>
                  </Div>
                  <Div>
                    <FiMail
                      style={{
                        width: "17px",
                        height: "17px",
                        color: "white",
                        paddingTop: "5px",
                      }}
                    />
                    <Info>mathieu.tranchida@gmail.com</Info>
                  </Div>
                  <Div>
                    <AiOutlineInstagram
                      style={{
                        width: "17px",
                        height: "17px",
                        color: "white",
                        paddingTop: "5px",
                      }}
                    />
                    <Info>mathieutranchida</Info>
                  </Div>
                </ContactWrapperDescription>
                <LocationWrapper>
                  <GoLocation
                    style={{
                      width: "17px",
                      height: "17px",
                      color: "white",
                      paddingTop: "5px",
                    }}
                  />
                  <Info>Montreal, QC, Canada</Info>
                </LocationWrapper>
                <SendAnEmailWrapper>
                  <SendAnEmailTitle>Connect with Mathieu</SendAnEmailTitle>
                  <ContactUs />
                </SendAnEmailWrapper>
              </Main>
            </MainModalWrapper>
          </ModalWrapper>
        </Fade>
      </Modal>
    </>
  );
};

const ContactTitle = styled.div`
  color: white;
  text-transform: uppercase;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 12pt;
  font-weight: 600;
  letter-spacing: 2px;
  color: black;
  text-decoration: none;
  margin: 0px 10px;
  cursor: pointer;
`;

const ModalWrapper = styled.div`
  position: absolute;
  left: 0px;
  background-color: white;
  outline: none;
  width: 50%;
  height: 100vh;
  background-color: black;
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

const MainModalWrapper = styled.div`
  margin: 20px 25px;
`;

const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  color: black;
  text-transform: uppercase;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 15pt;
  font-weight: 800;
  letter-spacing: 2px;
  color: white;
`;

const Main = styled.div`
  margin: 15px 0px;
  font-family: sweet-sans-pro, sans-serif;
  font-weight: 400;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const ContactWrapperDescription = styled.div``;

const LocationWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
`;

const Info = styled.div`
  color: white;
  padding-left: 15px;
`;

const InfoNoIcons = styled.div`
  color: white;
  padding-left: 32px;
`;

const SendAnEmailWrapper = styled.div`
  margin-top: 50px;
`;

const SendAnEmailTitle = styled.div`
  color: white;
  font-family: sweet-sans-pro, sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-weight: 11pt;
`;

export default ContactSmartphone;

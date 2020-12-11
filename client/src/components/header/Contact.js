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

const ButtonDelete = ({ _id }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (_id) => {
    fetch(`/delete-product/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: _id }),
    }).then(() => {
      window.location.reload();
    });
  };

  return (
    <>
      <ContactWrapper onClick={handleOpen}>
        <LineWrapper>
          <Line />
        </LineWrapper>
        <Contact>Contact</Contact>
      </ContactWrapper>
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
            </EditModalTitle>
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
            </Main>
          </EditModalWrapper>
        </Fade>
      </Modal>
    </>
  );
};

const ContactWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 30px;
  cursor: pointer;
`;

const LineWrapper = styled.div``;

const Line = styled.div`
  border-bottom: 2px solid black;
  margin: 5px 0px 5px 0px;
  width: 40px;
  /* box-shadow: 0px 0px 10px 0px ${COLORS.dropShadow}; */
`;

const Contact = styled.div`
  padding-bottom: 2px;
  margin-left: 15px;
  color: black;
  text-transform: uppercase;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 12pt;
  font-weight: 600;
  letter-spacing: 2px;
  /* text-shadow: 0px 0px 10px rgba(100, 100, 100, 0.8); */
`;

const EditModalWrapper = styled.div`
  position: absolute;
  left: 0px;
  background-color: white;
  outline: none;
  padding: 20px 25px;
  width: 50%;
  height: 96vh;
  background-color: black;
`;

const EditModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  color: black;
  text-transform: uppercase;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 12pt;
  font-weight: 600;
  letter-spacing: 2px;
  color: white;
`;

const Main = styled.div`
  margin: 15px 0px;
  font-family: sweet-sans-pro, sans-serif;
  font-weight: 500;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const ContactWrapperDescription = styled.div`
  margin-top: 8px;
`;

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

export default ButtonDelete;

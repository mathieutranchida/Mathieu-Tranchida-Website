import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { BiX } from "react-icons/bi";
import COLORS from "../../constants";
import { AiOutlineSend } from "react-icons/ai";

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

const Newsletter = () => {
  const [email, setEmail] = useState("");
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
      <Title>Subscribe to our newsletter:</Title>
      <Wrapper>
        <Input
          placeholder="Email..."
          type="email"
          onChange={(ev) => {
            setEmail(ev.target.value);
          }}
        />
        <SendButtonWrapper
          onClick={() => {
            fetch("/newsletter-post-email", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email }),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.error) {
                  history.push("/email-already-exists");
                } else {
                  handleOpen();
                }
              });
          }}
        >
          <AiOutlineSend
            style={{
              color: "white",
              backgroundColor: "black",
              width: "100%",
              height: "100%",
            }}
          />
        </SendButtonWrapper>
      </Wrapper>
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
              <TitleModal>
                You succesfully subscribed to the newsletter
              </TitleModal>
              <BiX
                style={{ width: "25px", height: "25px", cursor: "pointer" }}
                onClick={handleClose}
              />
            </EditModalTitle>
          </EditModalWrapper>
        </Fade>
      </Modal>
    </>
  );
};

const Title = styled.div`
  text-align: center;
  font-size: 12pt;
  font-weight: 500;
  margin: 50px 0px 12px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 300px;
  border: 2px solid ${COLORS.black};
  background-color: transparent;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 11pt;
  padding: 2px 4px;
  outline: none;
  color: ${COLORS.black};
`;

const SendButtonWrapper = styled.div`
  width: 22px;
  height: 22px;
  padding: 4px 4px 4px 3px;
  background-color: black;
  cursor: pointer;
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

export default Newsletter;

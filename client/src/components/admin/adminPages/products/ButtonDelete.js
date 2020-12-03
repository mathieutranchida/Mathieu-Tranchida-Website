import React, { useState } from "react";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { BiTrash, BiX } from "react-icons/bi";
// import COLORS from "../../../../constants";

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
      <Button onClick={handleOpen}>
        <BiTrash style={{ width: "20px", height: "20px" }} />
      </Button>
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
              <Title>Confirm you want to delete this product ?</Title>
              <BiX
                style={{ width: "25px", height: "25px", cursor: "pointer" }}
                onClick={handleClose}
              />
            </EditModalTitle>
            <ButtonWrapper>
              <DeleteButton
                onClick={() => {
                  handleDelete(_id);
                  document.location.reload();
                }}
              >
                Delete
              </DeleteButton>
            </ButtonWrapper>
          </EditModalWrapper>
        </Fade>
      </Modal>
    </>
  );
};

const Button = styled.button`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-left: 5px;
  border: none;
  background-color: transparent;
  outline: none;
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

const Title = styled.div`
  font-weight: 500;
`;

const ButtonWrapper = styled.div`
  float: right;
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: red 1px solid;
  color: red;
  padding: 15px;
  cursor: pointer;
  &:hover {
    background-color: red;
    color: white;
  }
`;

export default ButtonDelete;

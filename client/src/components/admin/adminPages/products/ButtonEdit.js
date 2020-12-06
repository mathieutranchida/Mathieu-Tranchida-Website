import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { BiPencil, BiCheck, BiX } from "react-icons/bi";
import COLORS from "../../../../constants";

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

const ButtonEdit = ({ _id }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetch(`/product/${_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application.json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEdit = () => {
    fetch(`/modify-product/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    }).then(() => {
      window.location.reload();
    });
  };

  return (
    <>
      <Button onClick={handleOpen}>
        <BiPencil style={{ width: "20px", height: "20px" }} />
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
              <Title>Modify a product</Title>
              <BiX
                style={{ width: "25px", height: "25px", cursor: "pointer" }}
                onClick={handleClose}
              />
            </EditModalTitle>
            <Main>
              <InputDiv>
                <Input
                  placeholder="Add image title..."
                  required
                  type="text"
                  value={product.imageName}
                  onChange={(ev) => {
                    setProduct((product) => {
                      return {
                        ...product,
                        imageName: ev.target.value,
                      };
                    });
                  }}
                />
                <Type>
                  Image title <Required>*</Required>
                </Type>
              </InputDiv>
              <InputDiv>
                <Input
                  placeholder="Add athlete name..."
                  type="text"
                  value={product.athlete}
                  onChange={(ev) => {
                    setProduct((product) => {
                      return {
                        ...product,
                        athlete: ev.target.value,
                      };
                    });
                  }}
                />
                <Type>Athlete</Type>
              </InputDiv>
              <InputDiv>
                <Input
                  placeholder="Add location..."
                  type="text"
                  value={product.location}
                  onChange={(ev) => {
                    setProduct((product) => {
                      return {
                        ...product,
                        location: ev.target.value,
                      };
                    });
                  }}
                />
                <Type>Location</Type>
              </InputDiv>
              <InputDiv>
                <Input
                  placeholder="Add project name..."
                  type="text"
                  value={product.project}
                  onChange={(ev) => {
                    setProduct((product) => {
                      return {
                        ...product,
                        project: ev.target.value,
                      };
                    });
                  }}
                />
                <Type>Project</Type>
              </InputDiv>
              <InputDiv>
                <Select
                  name="image type"
                  value={product.imageType}
                  onChange={(ev) => {
                    setProduct((product) => {
                      return {
                        ...product,
                        imageType: ev.target.value,
                      };
                    });
                  }}
                >
                  <Option value="">Choose type</Option>
                  <Option value="action">Action</Option>
                  <Option value="landscape">Landscape</Option>
                  <Option value="lifestyle">Lifestyle</Option>
                </Select>
                <Type>Image type</Type>
              </InputDiv>
              <InputDiv>
                <Select
                  name="image format"
                  required
                  value={product.imageFormat}
                  onChange={(ev) => {
                    setProduct((product) => {
                      return {
                        ...product,
                        imageFormat: ev.target.value,
                      };
                    });
                  }}
                >
                  <Option value="">Choose format</Option>
                  <Option value="1x1">1 x 1</Option>
                  <Option value="4x5">4 x 5</Option>
                  <Option value="2x3">2 x 3</Option>
                </Select>
                <Type>
                  Image format <Required>*</Required>
                </Type>
              </InputDiv>
              <InputDiv>
                <Box
                  placeholder="Add client warning..."
                  value={product.clientWarning}
                  onChange={(ev) => {
                    setProduct((product) => {
                      return {
                        ...product,
                        clientWarning: ev.target.value,
                      };
                    });
                  }}
                />
                <Type>Client warning</Type>
              </InputDiv>
              <InputDiv>
                <Box
                  placeholder="Add tags..."
                  value={product.tag}
                  onChange={(ev) => {
                    setProduct((product) => {
                      return {
                        ...product,
                        tag: ev.target.value,
                      };
                    });
                  }}
                />
                <Type>Image tags</Type>
              </InputDiv>
            </Main>
            <ButtonWrapper>
              <BiCheck
                style={{ width: "25px", height: "25px", cursor: "pointer" }}
                onClick={() => {
                  handleEdit(product._id);
                }}
              />
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
`;

const EditModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 500;
`;

const Main = styled.div`
  margin: 15px 0px 0px 0px;
`;

const InputDiv = styled.div`
  margin-bottom: 12px;
`;

const Type = styled.div`
  font-weight: 200;
  font-size: 11pt;
`;

const Input = styled.input`
  width: 300px;
  border-bottom: 1px solid ${COLORS.grey};
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: transparent;
  font-size: 11pt;
  font-family: halyard-display, sans-serif;
  font-weight: 300;
  padding: 2px 4px;
  outline: none;
  color: ${COLORS.black};
`;

const Box = styled.input`
  width: 300px;
  height: 100px;
  border: 1px solid ${COLORS.grey};
  background-color: transparent;
  font-size: 11pt;
  font-family: halyard-display, sans-serif;
  font-weight: 300;
  padding: 2px 4px;
  outline: none;
  color: ${COLORS.black};
`;

const Select = styled.select`
  width: 125px;
  border-bottom: 1px solid ${COLORS.grey};
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: transparent;
  font-size: 11pt;
  font-family: halyard-display, sans-serif;
  font-weight: 300;
  padding: 2px 4px;
  outline: none;
  color: ${COLORS.black};
`;

const Option = styled.option``;

const Required = styled.span`
  font-weight: 400;
  color: red;
`;

const ButtonWrapper = styled.div`
  float: right;
  display: flex;
  align-items: center;
`;

export default ButtonEdit;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  toTop: {
    zIndex: 100,
    position: "fixed",
    bottom: "25px",
    right: "25px",
    backgroundColor: "black",
    color: "white",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "black",
      backgroundColor: "#grey",
    },
  },
}));

const ScrollToTop = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const classes = useStyles();

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });

  const handleClick = () => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {show && (
        <IconButton
          onClick={() => {
            handleClick();
          }}
          className={classes.toTop}
        >
          <ExpandLessIcon />
        </IconButton>
      )}
    </>
  );
};

const Button = styled.button`
  display: none;
  position: fixed;
  bottom: 20px;
  right: 25px;
  z-index: 1000;
  border: 1px solid black;
  background-color: white;
  padding: 8px 20px;
  outline: none;
  cursor: pointer;
  font-family: halyard-display, sans-serif;
  font-size: 11pt;
  font-weight: 400;
  transition: 0.5s ease;
  &:hover {
    transform: translateY(-3px);
  }
`;

export default ScrollToTop;

import React from "react";
import styled from "styled-components";

const ScrollToTop = () => {
  const myButton = document.getElementById("backToTop");
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      myButton &&
      (document.body.scrollTop > 1000 ||
        document.documentElement.scrollTop > 1000)
    ) {
      myButton.style.display = "block";
    } else {
      myButton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <Button
        id="backToTop"
        onClick={() => {
          topFunction();
        }}
      >
        Back to top
      </Button>
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

import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const OtherReads = () => {
  const history = useHistory();

  return (
    <>
      <Button
        onClick={() => {
          history.push("/blog");
        }}
      >
        Other reads
      </Button>
    </>
  );
};

const Button = styled.button`
  background-color: transparent;
  border: black 1px solid;
  color: black;
  font-family: halyard-display, sans-serif;
  font-size: 11pt;
  font-weight: 400;
  padding: 8px 20px;
  cursor: pointer;
  text-align: center;
  float: center;
  margin-bottom: 25px;
  transition: 0.5s ease;
  outline: none;
  &:hover {
    transform: translateY(-3px);
  }
`;

export default OtherReads;

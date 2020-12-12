import React, { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";

import COLORS from "../../constants";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2lz9tdc",
        "template_qu7pwha",
        e.target,
        "user_48pmgavLTUZbdVapzMSzv"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Wrapper>
      <Form className="contact-form" onSubmit={sendEmail}>
        <Input type="hidden" name="contact_number" />
        <Div>
          <Input
            type="text"
            name="user_name"
            placeholder="*name"
            value={name}
            onChange={(ev) => {
              setName(ev.target.value);
            }}
          />
        </Div>
        <Div>
          <Input
            type="email"
            name="user_email"
            placeholder="*email"
            value={email}
            onChange={(ev) => {
              setEmail(ev.target.value);
            }}
          />
        </Div>
        <Div>
          <Textarea
            name="message"
            value={message}
            placeholder="*message"
            onChange={(ev) => {
              setMessage(ev.target.value);
            }}
          />
        </Div>
        <Button
          type="submit"
          value="Send"
          disabled={!name || !email || !message}
        />
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
`;

const Form = styled.form`
  margin-top: 5px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  font-family: sweet-sans-pro, sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 11pt;
  margin-bottom: 10px;
`;

const Input = styled.input`
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid ${COLORS.white};
  background-color: transparent;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 11pt;
  padding: 2px 4px;
  outline: none;
  color: ${COLORS.white};
`;

const Textarea = styled.textarea`
  margin-top: 10px;
  height: 250px;
  border: 1px solid ${COLORS.white};
  background-color: transparent;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 11pt;
  padding: 2px 4px;
  outline: none;
  color: ${COLORS.white};
  @media (max-height: 688px) {
    height: 220px;
  }
  @media (max-height: 668px) {
    height: 200px;
  }
  @media (max-height: 648px) {
    height: 180px;
  }
  @media (max-height: 628px) {
    height: 160px;
  }
  @media (max-height: 608px) {
    height: 140px;
  }
  @media (max-height: 588px) {
    height: 120px;
  }
  @media (max-height: 568px) {
    height: 100px;
  }
  @media (max-height: 548px) {
    height: 80px;
  }
  @media (max-height: 528px) {
    height: 60px;
  }
`;

const Button = styled.input`
  float: right;
  background-color: transparent;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 11pt;
  padding: 7px 20px;
  color: ${COLORS.white};
  border: 2px white solid;
  text-transform: uppercase;
  font-weight: 900;
  margin: 10px 0px 0px 0px;
  &:disabled {
    color: grey;
    border: 2px grey solid;
  }
  &:hover:not([disabled]) {
    cursor: pointer;
  }
`;

export default ContactUs;

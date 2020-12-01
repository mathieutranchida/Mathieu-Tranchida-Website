import React from "react";
import styled from "styled-components";

const TestimoniesDesktop = () => {
  return (
    <>
      <Wrapper>
        <TestimonialWrapper>
          <Text>
            "Mat’s artistic vision always blows my mind. His enthusiasm and
            passion for the work he does is extremely inspiring. He never takes
            no for an answer and is constantly trying to come up with new ideas
            and new ways to take his work to a new level. He really goes above
            and beyond and takes pride in creating the best possible outcome in
            whatever he’s working on. I have had the pleasure of working
            together with Mat on a few projects. He is very easy to work with,
            contributing fresh, new ideas while still capturing the essence of
            whatever concept he is working on. Collaborating with him is an
            experience I always look forward to."
          </Text>
          <Person>Aidan Cameron, Content Creator</Person>
          {/* <Button onClick={history.push("/testimonies")}> */}
          <Button>See more testimonials</Button>
        </TestimonialWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 135px 100px;
`;

const TestimonialWrapper = styled.div`
  max-width: 1000px;
`;

const Text = styled.div`
  font-weight: 300;
  margin-bottom: 15px;
  text-indent: 40px;
  text-align: justify;
`;

const Person = styled.div`
  font-weight: 500;
  margin-bottom: 5px;
  text-align: right;
`;

const Button = styled.button`
  text-align: right;
  font-family: sweet-sans-pro, sans-serif;
  text-transform: uppercase;
  float: right;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0px;
  cursor: pointer;
`;

export default TestimoniesDesktop;

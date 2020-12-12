import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Testimonies = () => {
  const history = useHistory();

  return (
    <>
      <Wrapper>
        <TestimonialWrapper>
          <Title>Testimonials</Title>
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
          <Text>
            "Mathieu is a very professional photographer. During the shoot of
            our movie "From Switzerland With Love", the priority is first and
            foremost the film and Mathieu knew how to immortalize each moment of
            the sessions without disturbing the cameramen in any way. From
            lifestyle to action, he produced quality content that I am extremely
            happy with."
          </Text>
          <Person>Laurent de Martin, Professional Skier & Producer</Person>
          <Text>
            "Very fortunate to have met Mathieu through Arc'teryx! Over the
            years we have done a variety of shoots together and he is always
            able to create a feeling of exhilaration and intensity in his work.
            It has been such a pleasure to shoot training, product, lifestyle,
            and outdoor projects with him. Looking forward to the many more to
            come!"
          </Text>
          <Person>
            Zoe Beauchemin, Climbing Athlete for Arc’teryx and Allez-up
          </Person>
          <Text>
            "It was a pleasure to work with Mathieu. He’s an outstanding
            photographer who knows exactly how to get the “money shot”. All his
            photos are created with deliberate intention. He is able to combine
            the needs of his client with his artistic vision to create
            spectacular photos. He achieves what few others do as well, which is
            to capture the atmosphere and the emotion of an event."
          </Text>
          <Person>
            Alexa Fay, Digital Marketing Director of Psicobloc Open Series
          </Person>
          <Text>
            "Mathieu is professional and always at the top of his game. His
            images are technically beautiful. He's always wiling to learn new
            skills to adapt to customer needs. He is capable of creating the
            right settings no matter the request or environment."
          </Text>
          <LastPerson>
            Katherine Boivin, Marketing Lead at Arc’teryx Montreal
          </LastPerson>
          <Button
            onClick={() => {
              history.push("/");
            }}
          >
            Back to homepage
          </Button>
        </TestimonialWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
`;

const TestimonialWrapper = styled.div`
  max-width: 1000px;
  margin: 115px 100px 80px 100px;
  @media (max-width: 1025px) {
    margin: 80px 100px 80px 100px;
  }
  @media (max-width: 750px) {
    margin: 80px 75px 60px 75px;
  }
  @media (max-width: 500px) {
    margin: 80px 50px 50px 50px;
  }
`;

const Title = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 15pt;
  margin-bottom: 25px;
`;

const Text = styled.div`
  font-weight: 300;
  margin-bottom: 15px;
  text-indent: 40px;
  text-align: justify;
`;

const Person = styled.div`
  font-weight: 500;
  margin-bottom: 65px;
  text-align: right;
`;

const LastPerson = styled.div`
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

export default Testimonies;

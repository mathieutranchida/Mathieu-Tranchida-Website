import React from "react";
import styled from "styled-components";

import IntroDesktop from "./IntroDesktop";
import AboutDesktop from "./AboutDesktop";
import GalleryDesktop from "./GalleryDesktop";
import TestimoniesDesktop from "./TestimoniesDesktop";
import CollaborationsDesktop from "./CollaborationsDesktop";

const Homepage = () => {
  return (
    <>
      <Wrapper>
        <IntroDesktop />
        <AboutDesktop />
        <GalleryDesktop />
        <TestimoniesDesktop />
        <CollaborationsDesktop />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

export default Homepage;

import React, { useEffect } from "react";
import styled from "styled-components";

import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
// import { GoDash } from "react-icons/go";

import img1 from "../../assets/gallery/gallery-2.jpg";
import img2 from "../../assets/gallery/gallery-1.jpg";
import img3 from "../../assets/gallery/gallery-15.jpg";
import img4 from "../../assets/gallery/gallery-10.jpg";
import img5 from "../../assets/gallery/gallery-3.jpg";
import img6 from "../../assets/gallery/gallery-4.jpg";
import img7 from "../../assets/gallery/gallery-9.jpg";
import img8 from "../../assets/gallery/gallery-6.jpg";
import img9 from "../../assets/gallery/gallery-7.jpg";
import img10 from "../../assets/gallery/gallery-8.jpg";

import COLORS from "../../constants";

let slideIndex = 1;

function plusSlides() {
  showSlides((slideIndex += 1));
}

function minusSlides() {
  showSlides((slideIndex -= 1));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

const GalleryDesktop = () => {
  useEffect(() => {
    showSlides(slideIndex);
  }, []);

  return (
    <>
      <Wrapper>
        <SlideshowContainer>
          <Button
            onClick={() => {
              minusSlides();
            }}
          >
            <VscChevronLeft style={{ width: "25px", height: "25px" }} />
          </Button>
          <Slide className="slides">
            <Image src={img1} />
            <Info>Athlete: Remco Kayser | From Switzerland With Love</Info>
          </Slide>
          <Slide className="slides">
            <Image src={img2} />
            <Info>Athlete: Laurent de Martin | From Switzerland With Love</Info>
          </Slide>
          <Slide className="slides">
            <Image src={img3} />
            <Info>
              Athlete: Marc Antoine Vigneault | Disturban - Jackalope TV
            </Info>
          </Slide>
          <Slide className="slides">
            <Image src={img4} />
            <Info>
              Athlete: Bea Evans | Exploring Montreal's urban climbing
            </Info>
          </Slide>
          <Slide className="slides">
            <Image src={img5} />
            <Info>
              Athlete: Remco Kayser | From Switzerland With Love | Published in
              The Ski Journal & Downdays
            </Info>
          </Slide>
          <Slide className="slides">
            <Image src={img6} />
            <Info>Athlete: Laurent de Martin | From Switzerland With Love</Info>
          </Slide>
          <Slide className="slides">
            <Image src={img7} />
            <Info>
              Athlete: Bea Evans | Exploring Montreal's urban climbing
            </Info>
          </Slide>
          <Slide className="slides">
            <Image src={img8} />
            <Info>Athlete: Remco Kayser</Info>
          </Slide>
          <Slide className="slides">
            <Image src={img9} />
            <Info>
              Athlete: Sampo Vallotton, Remco Kayser, Nicolas Vuigner, and
              @slippy.grill
            </Info>
          </Slide>
          <Slide className="slides">
            <Image src={img10} />
            <Info>Athlete: @slippy.grill</Info>
          </Slide>
          <Button
            onClick={() => {
              plusSlides();
            }}
          >
            <VscChevronRight style={{ width: "25px", height: "25px" }} />
          </Button>
        </SlideshowContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-height: 90vh;
  padding: 75px 50px 50px 50px;
  @media (max-width: 600px) {
    padding: 50px 0px 50px 0px;
  }
`;

const SlideshowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Slide = styled.div`
  display: none;

  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;

  @-webkit-keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  max-height: 85vh;
  max-width: 90vw;
  @media (max-width: 1000px) {
    max-width: 80vw;
    max-height: 532px;
  }
  @media (max-width: 900px) {
    max-width: 80vw;
    max-height: 480px;
  }
  @media (max-width: 800px) {
    max-width: 80vw;
    max-height: 425px;
  }
  @media (max-width: 700px) {
    max-width: 80vw;
    max-height: 373px;
  }
  @media (max-width: 600px) {
    max-width: 80vw;
    max-height: 320px;
  }
  @media (max-width: 500px) {
    max-width: 80vw;
    max-height: 265px;
  }
  @media (max-width: 450px) {
    max-width: 75vw;
    max-height: 240px;
  }
  @media (max-width: 400px) {
    max-width: 70vw;
    max-height: 200px;
  }
  @media (max-width: 350px) {
    max-width: 70vw;
    max-height: 160px;
  }
  @media (max-width: 300px) {
    max-width: 70vw;
    max-height: 140px;
  }
`;

const Info = styled.div`
  text-align: right;
  font-weight: 200;
  font-size: 10pt;
`;

const Button = styled.button`
  cursor: pointer;
  outline: none;
  color: ${COLORS.secondary};
  background-color: ${COLORS.white};
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  margin: 10px;
`;

// const DotButton = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;

// `;

// const DotContainer = styled.div`
//   /* color: ${COLORS.dropShadow}; */
// `;

export default GalleryDesktop;

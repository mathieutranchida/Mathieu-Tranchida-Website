import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import mtlUrbanClimbingCover from "../../assets/blog/mtlUrbanClimbing/coverIndex.jpeg";
import fswlCover from "../../assets/blog/fswl/coverIndex.jpeg";

const Blog = () => {
  const history = useHistory();

  return (
    <>
      <Wrapper>
        <Main>
          <Header>Blog</Header>
          <ArticleWrapperMontrealUrban
            onClick={() => {
              history.push("/blog/montreal-urban-climbing");
            }}
          >
            <Overlay>
              <ArticleTitle>Montreal's Urban Climbing</ArticleTitle>
            </Overlay>
          </ArticleWrapperMontrealUrban>
          <ArticleWrapperFswl
            onClick={() => {
              history.push("/blog/from-switzerland-with-love");
            }}
          >
            <Overlay>
              <ArticleTitle>From Switzerland With Love</ArticleTitle>
            </Overlay>
          </ArticleWrapperFswl>
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  max-width: 1000px;
  margin: 100px 0px 80px 0px;
  width: 100%;
  @media (max-width: 1025px) {
    margin: 80px 0px 80px 0px;
  }
`;

const Header = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 15pt;
  margin-bottom: 25px;
`;

const ArticleWrapperMontrealUrban = styled.div`
  height: 200px;
  background: url(${mtlUrbanClimbingCover});
  background-size: cover;
  background-position: bottom;
  background-color: black;
  cursor: pointer;
`;

const ArticleWrapperFswl = styled.div`
  height: 200px;
  background: url(${fswlCover});
  background-size: cover;
  background-position: bottom;
  background-color: black;
  cursor: pointer;
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: relative;
`;

const ArticleTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  text-align: center;
  font-weight: 900;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 15pt;
  margin-bottom: 25px;
  color: white;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
`;

export default Blog;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

import Header from "./components/header/index";
import Homepage from "./components/homepage/index";
import Blog from "./components/blog/index";
import Store from "./components/store/index";
import Footer from "./components/footer/index";
import Rates from "./components/rates/index";
import Testimonies from "./components/testimonies/index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Wrapper>
          <Header />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route to="/rates">
              <Rates />
            </Route>
            <Route to="/blog">
              <Blog />
            </Route>
            <Route to="/store">
              <Store />
            </Route>
            <Route to="/testimonies">
              <Testimonies />
            </Route>
          </Switch>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </>
  );
};

const Wrapper = styled.div``;

export default App;

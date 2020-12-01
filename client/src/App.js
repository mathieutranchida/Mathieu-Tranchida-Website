import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

import Header from "./components/header/index";
import Homepage from "./components/homepage/index";
import Blog from "./components/blog/index";
import Shop from "./components/shop/index";
import Footer from "./components/footer/index";
import Rates from "./components/rates/index";
import Testimonies from "./components/testimonies/index";
import Login from "./components/login/index";
import CreateAccount from "./components/login/CreateAccount";

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
            <Route path="/rates">
              <Rates />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/store">
              <Shop />
            </Route>
            <Route path="/testimonies">
              <Testimonies />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/create-account">
              <CreateAccount />
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

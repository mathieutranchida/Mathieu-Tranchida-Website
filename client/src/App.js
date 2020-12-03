import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

// User interface
import Header from "./components/header/index";
import Homepage from "./components/homepage/index";
import Blog from "./components/blog/index";
import Shop from "./components/shop/index";
import Footer from "./components/footer/index";
import Rates from "./components/rates/index";
import Testimonies from "./components/testimonies/index";
import Login from "./components/login/index";
import CreateAccount from "./components/login/CreateAccount";

// Admin interface
import Admin from "./components/admin/index";
// Orders
import AllOrders from "./components/admin/adminPages/orders/AllOrders";
// Price list
import AddPriceList from "./components/admin/adminPages/priceList/AddPriceList";
import AllPriceLists from "./components/admin/adminPages/priceList/AllPriceLists";
// Products
import AddProduct from "./components/admin/adminPages/products/AddProduct";
import AllProducts from "./components/admin/adminPages/products/AllProducts";
// User
import AddUser from "./components/admin/adminPages/users/AddUser";
import AllUsers from "./components/admin/adminPages/users/AllUsers";

// Custom hook call imports
import useFetchAllProducts from "./customHooks/useFetchAllProducts";

const App = () => {
  useFetchAllProducts();

  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Wrapper>
          <Switch>
            <Route exact path="/">
              <Header />
              <Homepage />
            </Route>
            <Route path="/rates">
              <Header />
              <Rates />
            </Route>
            <Route path="/blog">
              <Header />
              <Blog />
            </Route>
            <Route path="/store">
              <Header />
              <Shop />
            </Route>
            <Route path="/testimonies">
              <Header />
              <Testimonies />
            </Route>

            {/* --------------------AUTHENTICATION------------------ */}
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/create-account">
              <CreateAccount />
            </Route>

            {/* -----------------------ADMIN------------------------- */}
            <Route exact path="/admin">
              <Admin />
            </Route>

            {/* -----------------------Orders------------------------- */}
            <Route path="/admin/all-orders">
              <AllOrders />
            </Route>

            {/* -----------------------Price list------------------------- */}
            <Route path="/admin/all-price-lists">
              <AllPriceLists />
            </Route>
            <Route path="/admin/add-price-list">
              <AddPriceList />
            </Route>

            {/* -----------------------Products------------------------- */}
            <Route path="/admin/all-products">
              <AllProducts />
            </Route>
            <Route path="/admin/add-product">
              <AddProduct />
            </Route>

            {/* -----------------------Users------------------------- */}
            <Route path="/admin/all-users">
              <AllUsers />
            </Route>
            <Route path="/admin/add-user">
              <AddUser />
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

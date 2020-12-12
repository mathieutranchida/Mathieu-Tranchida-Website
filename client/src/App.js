import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

import ProtectedRoute from "./ProtectedRoute";

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
import Cart from "./components/cart/index";
import OrderConfirmation from "./components/orderConfirmation/index";
import OrderError from "./components/errorPages/OrderError";
import NotAuth from "./components/errorPages/NotAuth";

// Admin interface
// Orders
import AllOrders from "./components/admin/adminPages/orders/AllOrders";
// Price list
import AllPriceLists from "./components/admin/adminPages/priceList/AllPriceLists";
// Products
import AddProduct from "./components/admin/adminPages/products/AddProduct";
import AllProducts from "./components/admin/adminPages/products/AllProducts";

// Custom hook call imports
import useFetchAllProducts from "./customHooks/useFetchAllProducts";
import useFetchPriceList from "./customHooks/useFetchPriceList";
import useCartId from "./customHooks/useCartId";
import useFetchAllOrders from "./customHooks/useFetchAllOrders";

const App = () => {
  useFetchAllProducts();
  useFetchPriceList();
  useCartId();
  useFetchAllOrders();

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
            <Route path="/cart">
              <Header />
              <Cart />
            </Route>
            <Route path="/order-confirmation">
              <Header />
              <OrderConfirmation />
            </Route>
            <Route path="/order-error">
              <Header />
              <OrderError />
            </Route>
            <Route path="/not-authorised">
              <Header />
              <NotAuth />
            </Route>

            {/* --------------------AUTHENTICATION------------------ */}
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/create-account">
              <CreateAccount />
            </Route>

            {/* -----------------------ADMIN------------------------- */}
            {/* -----------------------Orders------------------------- */}
            <ProtectedRoute
              exact
              path="/admin/all-orders"
              component={AllOrders}
            />

            {/* -----------------------Price list------------------------- */}
            <ProtectedRoute
              exact
              path="/admin/all-price-lists"
              component={AllPriceLists}
            />

            {/* -----------------------Products------------------------- */}
            <ProtectedRoute
              exact
              path="/admin/all-products"
              component={AllProducts}
            />

            <ProtectedRoute
              exact
              path="/admin/add-product"
              component={AddProduct}
            />
          </Switch>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  position: relative;
`;

export default App;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

import ProtectedRoute from "./ProtectedRoute";

// User interface
import Header from "./components/header/index";
import Homepage from "./components/homepage/index";
import Shop from "./components/shop/index";
import Footer from "./components/footer/index";
import Testimonies from "./components/testimonies/index";
import Login from "./components/login/index";
import Cart from "./components/cart/index";
import OrderConfirmation from "./components/orderConfirmation/index";
import OrderError from "./components/errorPages/OrderError";
import NotAuth from "./components/errorPages/NotAuth";

// Blog
import Blog from "./components/blog";
import Fswl from "./components/blog/fswl";
import MontrealUrbanClimbing from "./components/blog/montrealUrbanClimbing";

// Admin interface
// Orders
import AllOrders from "./components/admin/adminPages/orders/AllOrders";
// Products
import AddProduct from "./components/admin/adminPages/products/AddProduct";
import AllProducts from "./components/admin/adminPages/products/AllProducts";

// Custom hook call imports
import useFetchAllProducts from "./customHooks/useFetchAllProducts";
import useFetchPriceList from "./customHooks/useFetchPriceList";
import useCartId from "./customHooks/useCartId";
import useFetchAllOrders from "./customHooks/useFetchAllOrders";
import ScrollToTop from "./customHooks/ScrollToTop";

const App = () => {
  useFetchAllProducts();
  useFetchPriceList();
  useCartId();
  useFetchAllOrders();

  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <GlobalStyles />
          <Wrapper>
            <Switch>
              <Route exact path="/">
                <Header />
                <Homepage />
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

              {/* --------------------BLOG------------------ */}
              <Route exact path="/blog">
                <Header />
                <Blog />
              </Route>
              <Route path="/blog/from-switzerland-with-love">
                <Header />
                <Fswl />
              </Route>
              <Route path="/blog/montreal-urban-climbing">
                <Header />
                <MontrealUrbanClimbing />
              </Route>

              {/* --------------------AUTHENTICATION------------------ */}
              <Route path="/login">
                <Login />
              </Route>

              {/* -----------------------ADMIN------------------------- */}
              {/* -----------------------Orders------------------------- */}
              <ProtectedRoute path="/admin/all-orders" component={AllOrders} />

              {/* -----------------------Products------------------------- */}
              <ProtectedRoute
                path="/admin/all-products"
                component={AllProducts}
              />

              <ProtectedRoute
                path="/admin/add-product"
                component={AddProduct}
              />
            </Switch>
            <Footer />
          </Wrapper>
        </ScrollToTop>
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

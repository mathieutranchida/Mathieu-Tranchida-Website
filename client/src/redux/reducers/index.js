import { combineReducers } from "redux";

import createUserReducer from "./createUserReducer";
import adminAddProductReducer from "./adminAddProductReducer";
import allProductsReducer from "./allProductsReducer";
import priceListReducer from "./priceListReducer";
import productBeforeAddToCartReducer from "./productBeforeAddToCartReducer";
import cartReducer from "./cartReducer";
import orderConfirmationReducer from "./orderConfirmationReducer";
import allOrdersReducer from "./allOrdersReducer";
import newsletterReducer from "./newsletterReducer";

export default combineReducers({
  createUserReducer,
  adminAddProductReducer,
  allProductsReducer,
  priceListReducer,
  productBeforeAddToCartReducer,
  cartReducer,
  orderConfirmationReducer,
  allOrdersReducer,
  newsletterReducer,
});

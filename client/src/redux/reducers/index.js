import { combineReducers } from "redux";

import createUserReducer from "./createUserReducer";
import addProductReducer from "./addProductReducer";
import allProductsReducer from "./allProductsReducer";

export default combineReducers({
  createUserReducer,
  addProductReducer,
  allProductsReducer,
});

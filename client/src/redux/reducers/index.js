import { combineReducers } from "redux";

import createUserReducer from "./createUserReducer";
import addProductReducer from "./addProductReducer";

export default combineReducers({ createUserReducer, addProductReducer });

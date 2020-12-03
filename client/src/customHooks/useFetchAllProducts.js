import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  requestAllProducts,
  receiveAllProducts,
  receiveAllProductsError,
} from "../redux/actions";

const useFetchAllProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAllProducts());
    fetch("/products", {
      method: "get",
      headers: {
        "Content-Type": "application.json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        dispatch(receiveAllProducts(data.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(receiveAllProductsError());
      });
  }, []);
};

export default useFetchAllProducts;

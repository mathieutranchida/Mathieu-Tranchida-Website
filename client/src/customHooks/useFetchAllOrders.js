import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  requestAllOrders,
  receiveAllOrders,
  receiveAllOrdersError,
} from "../redux/actions";

const useFetchAllOrders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAllOrders());
    fetch("/orders", {
      method: "get",
      headers: {
        "Content-Type": "application.json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(receiveAllOrders(data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(receiveAllOrdersError());
      });
  });
};

export default useFetchAllOrders;

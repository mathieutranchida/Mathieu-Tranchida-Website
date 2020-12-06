import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  requestPriceList,
  receivePriceList,
  receivePriceListError,
} from "../redux/actions";

const useFetchPriceList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestPriceList());
    fetch("/price-lists", {
      method: "get",
      headers: {
        "Content-Type": "application.json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(receivePriceList(data.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(receivePriceListError());
      });
  }, []);
};

export default useFetchPriceList;

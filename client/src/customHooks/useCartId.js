import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  cartUpdateCartId,
  receiveCart,
  requestCart,
  requestCartError,
} from "../redux/actions";

const useCartId = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cartReducer);

  useEffect(() => {
    if (!localStorage.getItem("mtCartId")) {
      fetch("/add-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...cart }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          localStorage.setItem("mtCartId", data.data._id);
          dispatch(cartUpdateCartId(data.data._id));
        });
    } else {
      const _id = localStorage.getItem("mtCartId");
      dispatch(requestCart());
      fetch(`/cart/${_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(receiveCart(data.data));
        })
        .catch(dispatch(requestCartError()));
    }
  }, []);
};

export default useCartId;

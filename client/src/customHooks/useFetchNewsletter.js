import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  requestAllEmails,
  receiveAllEmails,
  receiveAllEmailsError,
} from "../redux/actions";

const useFetchNewsletter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAllEmails());
    fetch("/newsletter-email", {
      method: "get",
      headers: {
        "Content-Type": "application.json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(receiveAllEmails(data.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(receiveAllEmailsError());
      });
  }, []);
};

export default useFetchNewsletter;

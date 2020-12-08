// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { v4 as uuidv4 } from "uuid";

// import { cartUpdateCartId } from "../redux/actions";

// const useCartId = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!localStorage.getItem("mtCartId")) {
//       const id = uuidv4();
//       dispatch(cartUpdateCartId(id));
//       localStorage.setItem("mtCartId", id);
//     } else {
//       dispatch(cartUpdateCartId(localStorage.getItem("mtCartId")));
//     }
//   }, []);
// };

// export default useCartId;

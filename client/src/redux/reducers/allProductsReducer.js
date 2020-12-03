const initialState = {
  products: null,
  status: "idle",
};

export default function allProductsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ALL_PRODUCTS": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_ALL_PRODUCTS": {
      return {
        ...state,
        products: action.products,
        status: "idle",
      };
    }
    case "RECEIVE_ALL_PRODUCTS_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }
    default: {
      return state;
    }
  }
}

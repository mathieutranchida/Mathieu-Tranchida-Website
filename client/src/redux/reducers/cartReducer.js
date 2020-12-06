const initialState = {
  products: [],
  totalAmountOfProducts: null,
  totalPriceBeforeTax: null,
  tax: null,
  totalPriceAfterTax: null,
  status: "idle",
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "CART_ADD_PRODUCT": {
      return {
        ...state,
        products: [...state.products, { product: action.product }],
      };
    }
    case "REQUEST_CART": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_CART": {
      return {
        ...state,
        status: "idle",
        products: action.data.products,
        totalAmountOfProducts: action.data.totalAmountOfProducts,
        totalPriceBeforeTax: action.data.totalPriceBeforeTax,
        tax: action.data.tax,
        totalPriceAfterTax: action.data.totalPriceAfterTax,
      };
    }
    case "RECEIVE_CART_ERROR": {
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

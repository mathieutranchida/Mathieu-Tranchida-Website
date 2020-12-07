const initialState = {
  _id: null,
  products: [],
  totalAmountOfProducts: null,
  totalPriceBeforeTax: null,
  gst: null,
  qst: null,
  totalPriceAfterTax: null,
  shipping: null,
  cartTotalFinal: null,
  status: "idle",
};

export default function cartReducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case "CART_UPDATE_CART_ID": {
      return {
        ...state,
        _id: action._id,
      };
    }
    case "CART_ADD_PRODUCT": {
      newState.products = [...newState.products, action.product];
      newState.totalAmountOfProducts = newState.products.reduce(
        (acc, product) => {
          return acc + parseFloat(product.quantity);
        },
        0
      );
      return newState;
      // return {
      //   ...state,
      //   products: [...state.products, action.product],
      // };
    }
    case "CART_REMOVE_PRODUCT": {
      const stateCopy = { ...state };
      const indexToRemove = stateCopy.products.findIndex(
        (product) => product._id === action.product
      );
      if (indexToRemove !== -1) {
        stateCopy.products.splice(indexToRemove, 1);
        return {
          ...stateCopy,
          products: [...stateCopy.products],
        };
      } else {
        return {
          ...stateCopy,
        };
      }
    }
    case "CART_UPDATE_PRODUCT_QUANTITY": {
      const index = newState.products.findIndex(
        (product) => product._id === action.product
      );
      if (index !== -1) {
        newState.products[index].quantity = action.product.quantity;
      }
      return newState;
    }
    //   const stateCopy = { ...state };
    //   const indexToChange = stateCopy.products.findIndex(
    //     (product) => product._id === action.product
    //   );
    //   if (indexToChange !== -1) {
    //     return {
    //       ...stateCopy,
    //     };
    //   } else {
    //     return {
    //       ...stateCopy,
    //     };
    //   }
    // }
    case "CART_UPDATE_TOTAL_AMOUNT_OF_PRODUCTS": {
      return {
        ...state,
        totalAmountOfProducts: action.totalAmountOfProducts,
      };
    }
    case "CART_UPDATE_TOTAL_PRICE_BEFORE_TAX": {
      return {
        ...state,
        totalPriceBeforeTax: action.totalPriceBeforeTax,
      };
    }
    case "CART_UPDATE_GST": {
      return {
        ...state,
        gst: action.gst,
      };
    }
    case "CART_UPDATE_QST": {
      return {
        ...state,
        qst: action.qst,
      };
    }
    case "CART_UPDATE_TOTAL_PRICE_AFTER_TAX": {
      return {
        ...state,
        totalPriceAfterTax: action.totalPriceAfterTax,
      };
    }
    case "CART_UPDATE_SHIPPING": {
      return {
        ...state,
        shipping: action.shipping,
      };
    }
    case "CART_UPDATE_TOTAL_FINAL": {
      return {
        ...state,
        cartTotalFinal: action.cartTotalFinal,
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
        gst: action.data.gst,
        qst: action.data.qst,
        totalPriceAfterTax: action.data.totalPriceAfterTax,
        shipping: action.data.shipping,
        cartTotalFinal: action.data.cartTotalFinal,
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

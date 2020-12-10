const initialState = {
  _id: null,
  products: [],
  totalAmountOfProducts: 0,
  totalPriceBeforeTax: 0,
  gst: 0,
  qst: 0,
  totalPriceAfterTax: 0,
  shippingOption: "",
  shippingCost: 0,
  cartTotalFinal: 0,
  status: "idle",
};

export default function cartReducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case "CART_UPDATE_CART_ID": {
      newState._id = action._id;
      return newState;
    }
    case "CART_ADD_PRODUCT": {
      newState.products = [...newState.products, action.product];
      newState.totalAmountOfProducts = newState.products.reduce(
        (acc, product) => {
          return acc + parseFloat(product.quantity);
        },
        0
      );
      newState.totalPriceBeforeTax = newState.products.reduce(
        (acc, product) => {
          return acc + parseFloat(product.price) * parseFloat(product.quantity);
        },
        0
      );
      newState.gst = newState.totalPriceBeforeTax * 0.05;
      newState.qst = newState.totalPriceBeforeTax * 0.09975;
      newState.totalPriceAfterTax =
        newState.totalPriceBeforeTax + newState.gst + newState.qst;
      newState.cartTotalFinal =
        Math.round(
          (newState.totalPriceAfterTax + newState.shippingCost) * 100
        ) / 100;
      return newState;
    }
    // case "CART_REMOVE_PRODUCT": {
    //   console.log(newState);
    //   const index = newState.products.findIndex((product) => {
    //     console.log(product);
    //     return product._id === action.product;
    //   });
    //   console.log(action, index);
    //   if (index !== -1) {
    //   newState.totalAmountOfProducts =
    //     newState.totalAmountOfProducts - newState.products[index].quantity;
    //   newState.totalPriceBeforeTax =
    //     newState.totalPriceBeforeTax -
    //     newState.products[index].quantity * newState.products[index].price;
    //   newState.gst = newState.totalPriceBeforeTax * 0.05;
    //   newState.qst = newState.totalPriceBeforeTax * 0.09975;
    //   newState.totalPriceAfterTax =
    //     newState.totalPriceBeforeTax + newState.gst + newState.qst;
    //   newState.cartTotalFinal =
    //     Math.round(
    //       (newState.totalPriceAfterTax + newState.shippingCost) * 100
    //     ) / 100;
    //   newState.products.splice(index, 1);
    //   return {
    //     ...newState,
    //     products: [...newState.products],
    //     };
    //   };
    // }
    // case "CART_UPDATE_PRODUCT_QUANTITY": {
    //   const index = newState.products.findIndex(
    //     (product) => product._id === action.product._id
    //   );
    //   if (index !== -1) {
    //     newState.totalAmountOfProducts =
    //       newState.totalAmountOfProducts - newState.products[index].quantity;
    //     newState.totalPriceBeforeTax =
    //       newState.totalPriceBeforeTax -
    //       newState.products[index].quantity * newState.products[index].price;
    //     newState.products[index].quantity = parseFloat(action.quantity);
    //     newState.totalAmountOfProducts =
    //       newState.totalAmountOfProducts + newState.products[index].quantity;
    //     newState.totalPriceBeforeTax =
    //       newState.totalPriceBeforeTax +
    //       newState.products[index].quantity * newState.products[index].price;
    //     newState.gst = newState.totalPriceBeforeTax * 0.05;
    //     newState.qst = newState.totalPriceBeforeTax * 0.09975;
    //     newState.totalPriceAfterTax =
    //       newState.totalPriceBeforeTax + newState.gst + newState.qst;
    //     newState.cartTotalFinal =
    //       Math.round(
    //         (newState.totalPriceAfterTax + newState.shippingCost) * 100
    //       ) / 100;
    //   }
    //   return newState;
    // }
    // case "CART_UPDATE_SHIPPING_OPTION": {
    //   return {
    //     ...state,
    //     shippingOption: action.shippingOption,
    //   };
    // }
    // case "CART_UPDATE_SHIPPING_COST": {
    //   newState.shippingCost = parseFloat(action.shippingCost);
    //   newState.cartTotalFinal =
    //     Math.round(
    //       (newState.totalPriceAfterTax + newState.shippingCost) * 100
    //     ) / 100;
    //   return newState;
    // }
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
        _id: action.data._id,
        products: action.data.products,
        totalAmountOfProducts: action.data.totalAmountOfProducts,
        totalPriceBeforeTax: action.data.totalPriceBeforeTax,
        gst: action.data.gst,
        qst: action.data.qst,
        totalPriceAfterTax: action.data.totalPriceAfterTax,
        shippingOption: action.data.shippingOption,
        shippingCost: action.data.shippingCost,
        cartTotalFinal: action.data.cartTotalFinal,
      };
    }
    case "RESET_CART": {
      return {
        ...state,
        products: [],
        totalAmountOfProducts: 0,
        totalPriceBeforeTax: 0,
        gst: 0,
        qst: 0,
        totalPriceAfterTax: 0,
        shippingOption: "",
        shippingCost: 0,
        cartTotalFinal: 0,
        status: "idle",
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

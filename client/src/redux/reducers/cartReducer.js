const initialState = {
  products: [
    //remove
    {
      product: {
        name: "Classic LDM blunt sur muraille",
        imageSrc: "qazdsao0hlv8mn4ayzh7",
        _id: "5fc8003e1a4fc743e82db183",
        paperType: "glossy",
        size: "tenByFifteenInches",
        quantity: "1",
        price: "35",
      },
    },
    {
      product: {
        name: "OnSite Sunrise",
        imageSrc: "eu1all1cpqcfqfncpwpd",
        _id: "5fc8019b1a4fc743e82db184",
        paperType: "matte",
        size: "eightByTwelveInches",
        quantity: "1",
        price: "25",
      },
    },
    //end remove
  ],
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

const initialState = {
  name: "",
  _id: "",
  paperType: "",
  size: "",
  quantity: "1",
  price: null,
};

export default function productBeforeAddToCartReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case "ADD_PRODUCT_NAME_BEFORE_ADD_TO_CART": {
      return {
        ...state,
        name: action.name,
      };
    }
    case "ADD_PRODUCT_ID_BEFORE_ADD_TO_CART": {
      return {
        ...state,
        _id: action._id,
      };
    }
    case "ADD_PRODUCT_PAPER_TYPE_BEFORE_ADD_TO_CART": {
      return {
        ...state,
        paperType: action.paperType,
      };
    }
    case "ADD_PRODUCT_SIZE_BEFORE_ADD_TO_CART": {
      return {
        ...state,
        size: action.size,
      };
    }
    case "ADJUST_QUANTITY_BEFORE_ADD_TO_CART": {
      return {
        ...state,
        quantity: action.quantity,
      };
    }
    case "ADD_PRODUCT_PRICE_BEFORE_ADD_TO_CART": {
      return {
        ...state,
        price: action.price,
      };
    }
    case "ADD_PRODUCT_BEFORE_ADD_TO_CART_RESET": {
      return {
        ...state,
        name: "",
        _id: "",
        paperType: "",
        size: "",
        quantity: "1",
        price: null,
      };
    }
    default: {
      return state;
    }
  }
}

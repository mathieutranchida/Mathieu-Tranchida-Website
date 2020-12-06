const initialState = {
  priceList: null,
  status: "null",
};

export default function priceListReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_PRICE_LIST": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_PRICE_LIST": {
      return {
        ...state,
        priceList: action.priceList,
        status: "idle",
      };
    }
    case "RECEIVE_PRICE_LIST_ERROR": {
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

const initialState = {
  order: null,
  status: "idle",
};

export default function orderConfirmationReducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case "ADD_ORDER_CONFIRMATION": {
      newState.order = action.order;
      return newState;
    }
    case "REQUEST_ORDER_CONFIRMATION": {
      newState.status = "loading";
      return newState;
    }
    case "RECEIVE_ORDER_CONFIRMATION": {
      newState.order = action.order;
      newState.status = "loaded";
      return newState;
    }
    case "RECEIVE_ORDER_CONFIRMATION_ERROR": {
      newState.status = "error";
      return newState;
    }
    default: {
      return state;
    }
  }
}

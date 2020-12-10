const initialState = {
  orders: null,
  status: "idle",
};

export default function allOrdersReducer(state = initialState, action) {
  // const newState = { ...state };
  switch (action.type) {
    case "REQUEST_ALL_ORDERS": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_ALL_ORDERS": {
      return {
        ...state,
        orders: action.orders,
        status: "idle",
      };
    }
    case "RECEIVE_ALL_ORDERS_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }
    case "UPDATE_ORDER_STATUS": {
      const index = state.orders.data.findIndex((order) => {
        console.log(order);
        return order._id === action.order.status._id;
      });
      const copy = state.orders.data;
      console.log(copy);
      copy[index].status.status = action.order.status.status;
      return {
        ...state,
        orders: {
          ...state.orders,
          data: [...copy],
          // data: { [index]: { status: action.order.status.status.status } },
        },
      };
    }
    default: {
      return state;
    }
  }
}

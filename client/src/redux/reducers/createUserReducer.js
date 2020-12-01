const initialState = {
  name: "",
  email: "",
  password: "",
  phone: "",
  accountType: "",
};

export default function createUserReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_ACCOUNT_NAME": {
      return {
        ...state,
        name: action.data,
      };
    }
    case "UPDATE_ACCOUNT_EMAIL": {
      return {
        ...state,
        email: action.data,
      };
    }
    case "UPDATE_ACCOUNT_PASSWORD": {
      return {
        ...state,
        password: action.data,
      };
    }
    case "UPDATE_ACCOUNT_PHONE": {
      return {
        ...state,
        phone: action.data,
      };
    }
    case "UPDATE_ACCOUNT_TYPE": {
      return {
        ...state,
        accountType: action.data,
      };
    }
    default: {
      return state;
    }
  }
}

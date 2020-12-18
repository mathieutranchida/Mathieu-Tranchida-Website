const initialState = {
  emails: null,
  status: "null",
};

export default function newsletterReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_NEWSLETTER_EMAIL_LIST": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_NEWSLETTER_EMAIL_LIST": {
      return {
        ...state,
        emails: action.emails,
        status: "idle",
      };
    }
    case "RECEIVE_NEWSLETTER_EMAIL_LIST_ERROR": {
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

// for admin/add-product

const initialState = {
  imageName: "",
  imageSrc: "",
  athlete: "",
  location: "",
  project: "",
  imageType: "",
  imageFormat: "",
  clientWarning: "",
  tag: [],
};

export default function adminAddProductReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_ADD_PRODUCT_IMAGE_NAME": {
      return {
        ...state,
        imageName: action.data,
      };
    }
    case "UPDATE_ADD_PRODUCT_IMAGE_SRC": {
      return {
        ...state,
        imageSrc: action.data,
      };
    }
    case "UPDATE_ADD_PRODUCT_ATHLETE": {
      return {
        ...state,
        athlete: action.data,
      };
    }
    case "UPDATE_ADD_PRODUCT_LOCATION": {
      return {
        ...state,
        location: action.data,
      };
    }
    case "UPDATE_ADD_PRODUCT_PROJECT": {
      return {
        ...state,
        project: action.data,
      };
    }
    case "UPDATE_ADD_PRODUCT_IMAGE_TYPE": {
      return {
        ...state,
        imageType: action.data,
      };
    }
    case "UPDATE_ADD_PRODUCT_IMAGE_FORMAT": {
      return {
        ...state,
        imageFormat: action.data,
      };
    }
    case "UPDATE_ADD_PRODUCT_CLIENT_WARNING": {
      return {
        ...state,
        clientWarning: action.data,
      };
    }
    case "UPDATE_ADD_PRODUCT_TAG": {
      return {
        ...state,
        tag: action.data,
      };
    }
    case "CLEAR_ADD_PRODUCT": {
      return {
        ...state,
        imageName: "",
        imageSrc: "",
        athlete: "",
        location: "",
        project: "",
        imageType: "",
        imageFormat: "",
        clientWarning: "",
        tag: [],
      };
    }
    default: {
      return state;
    }
  }
}

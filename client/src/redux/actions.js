// USER -------------------------------------------
// Create user info state
export const updateAccountName = (data) => ({
  type: "UPDATE_ACCOUNT_NAME",
  data,
});

export const updateAccountEmail = (data) => ({
  type: "UPDATE_ACCOUNT_EMAIL",
  data,
});

export const updateAccountPassword = (data) => ({
  type: "UPDATE_ACCOUNT_PASSWORD",
  data,
});

export const updateAccountPhone = (data) => ({
  type: "UPDATE_ACCOUNT_PHONE",
  data,
});

export const updateAccountType = (data) => ({
  type: "UPDATE_ACCOUNT_TYPE",
  data,
});

// PRODUCT ----------------------------------------
// Add product to the store (from admin/add-product)
export const updateAddProductImageName = (data) => ({
  type: "UPDATE_ADD_PRODUCT_IMAGE_NAME",
  data,
});

export const updateAddProductImageSrc = (data) => ({
  type: "UPDATE_ADD_PRODUCT_IMAGE_SRC",
  data,
});

export const updateAddProductAthlete = (data) => ({
  type: "UPDATE_ADD_PRODUCT_ATHLETE",
  data,
});

export const updateAddProductLocation = (data) => ({
  type: "UPDATE_ADD_PRODUCT_LOCATION",
  data,
});

export const updateAddProductProject = (data) => ({
  type: "UPDATE_ADD_PRODUCT_PROJECT",
  data,
});

export const updateAddProductImageType = (data) => ({
  type: "UPDATE_ADD_PRODUCT_IMAGE_TYPE",
  data,
});

export const updateAddProductImageFormat = (data) => ({
  type: "UPDATE_ADD_PRODUCT_IMAGE_FORMAT",
  data,
});

export const updateAddProductClientWarning = (data) => ({
  type: "UPDATE_ADD_PRODUCT_CLIENT_WARNING",
  data,
});

export const updateAddProductTag = (data) => ({
  type: "UPDATE_ADD_PRODUCT_TAG",
  data,
});

export const clearAddProduct = (data) => ({
  type: "CLEAR_ADD_PRODUCT",
  data,
});

// Receive all products from database
export const requestAllProducts = () => ({
  type: "REQUEST_ALL_PRODUCTS",
});

export const receiveAllProducts = (products) => ({
  type: "RECEIVE_ALL_PRODUCTS",
  products,
});

export const receiveAllProductsError = () => ({
  type: "RECEIVE_ALL_PRODUCTS_ERROR",
});

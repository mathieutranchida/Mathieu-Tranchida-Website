// import { useDispatch, useSelector } from "react-redux";
// import { v4 as uuidv4 } from "uuid";

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

// Product information before adding to cart
export const addProductNameBeforeAddToCart = (name) => ({
  type: "ADD_PRODUCT_NAME_BEFORE_ADD_TO_CART",
  name,
});

export const addProductImageSrcBeforeAddToCart = (imageSrc) => ({
  type: "ADD_PRODUCT_IMAGE_SRC_BEFORE_ADD_TO_CART",
  imageSrc,
});

export const addProductIdBeforeAddToCart = (_id) => ({
  type: "ADD_PRODUCT_ID_BEFORE_ADD_TO_CART",
  _id,
});

export const addProductPaperTypeBeforeAddToCart = (paperType) => ({
  type: "ADD_PRODUCT_PAPER_TYPE_BEFORE_ADD_TO_CART",
  paperType,
});

export const addProductSizeBeforeAddToCart = (size) => ({
  type: "ADD_PRODUCT_SIZE_BEFORE_ADD_TO_CART",
  size,
});

export const adjustProductQuantityBeforeAddToCart = (quantity) => ({
  type: "ADJUST_QUANTITY_BEFORE_ADD_TO_CART",
  quantity,
});

export const addProductPriceBeforeAddToCart = (price) => ({
  type: "ADD_PRODUCT_PRICE_BEFORE_ADD_TO_CART",
  price,
});

export const addProductBeforeAddToCartReset = (price) => ({
  type: "ADD_PRODUCT_BEFORE_ADD_TO_CART_RESET",
  price,
});

// PRICE LIST ------------------------------------
// Receive price list
export const requestPriceList = () => ({
  type: "REQUEST_PRICE_LIST",
});

export const receivePriceList = (priceList) => ({
  type: "RECEIVE_PRICE_LIST",
  priceList,
});

export const receivePriceListError = () => ({
  type: "RECEIVE_PRICE_LIST_ERROR",
});

// CART ------------------------------------------
// Add product to cart
export const cartUpdateCartId = (_id) => ({
  type: "CART_UPDATE_CART_ID",
  _id,
});

export const cartAddProduct = (product) => ({
  type: "CART_ADD_PRODUCT",
  product,
});

// export const cartRemoveProduct = (product) => ({
//   type: "CART_REMOVE_PRODUCT",
//   product,
// });

// export const cartUpdateProductQuantity = (product, quantity) => {
//   console.log(product, quantity);
//   return {
//     type: "CART_UPDATE_PRODUCT_QUANTITY",
//     product,
//     quantity,
//   };
// };

// export const cartUpdateShippingOption = (shippingOption) => ({
//   type: "CART_UPDATE_SHIPPING_OPTION",
//   shippingOption,
// });

// export const cartUpdateShippingCost = (shippingCost) => ({
//   type: "CART_UPDATE_SHIPPING_COST",
//   shippingCost,
// });

export const cartUpdateTotalFinal = (cartTotalFinal) => ({
  type: "CART_UPDATE_TOTAL_FINAL",
  cartTotalFinal,
});

export const requestCart = () => ({
  type: "REQUEST_CART",
});

export const receiveCart = (data) => ({
  type: "RECEIVE_CART",
  data,
});

export const requestCartError = () => ({
  type: "RECEIVE_CART_ERROR",
});

export const resetCart = () => ({
  type: "RESET_CART",
});

// ORDERS ------------------------------------------
// Order confirmations

export const addOrderConfirmation = (order) => ({
  type: "ADD_ORDER_CONFIRMATION",
  order,
});

export const requestOrderConfirmation = () => ({
  type: "REQUEST_ORDER_CONFIRMATION",
});

export const receiveOrderConfirmation = (order) => ({
  type: "RECEIVE_ORDER_CONFIRMATION",
  order,
});

export const receiveOrderConfirmationError = () => ({
  type: "RECEIVE_ORDER_CONFIRMATION_ERROR",
});

// Get all orders
export const requestAllOrders = () => ({
  type: "REQUEST_ALL_ORDERS",
});

export const receiveAllOrders = (orders) => ({
  type: "RECEIVE_ALL_ORDERS",
  orders,
});

export const receiveAllOrdersError = () => ({
  type: "RECEIVE_ALL_ORDERS_ERROR",
});

export const updateOrderStatus = (order) => ({
  type: "UPDATE_ORDER_STATUS",
  order,
});

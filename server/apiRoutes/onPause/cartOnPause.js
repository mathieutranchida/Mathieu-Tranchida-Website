// Import the cart
const cart = require("../../data/cart.json");

// Get the cart
const getCart = (req, res) => {
  try {
    res.status(200).json({ status: 200, data: cart });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

// Add a product to the cart
const AddProductToCart = (req, res) => {
  try {
    const product = req.body;

    const handleAddToCart = (product) => {
      const productFound = cart.products.find(
        (productObj) => productObj.product._id === product._id
      );
      if (productFound) {
        cart.products.forEach((productObj, index) => {
          if (productFound._id === productObj._id) {
            cart.products[index] = {
              ...cart.products[index],
              quantity: (cart.products[index].quantity += product.quantity),
            };
            cart.numberOfProducts += product.quantity;
            const cartTotalPrice = parseFloat(product.price.substring(1));
            cart.totalPrice += cartTotalPrice;
          }
        });
      } else {
        cart.products.push({ product: product, quantity: product.quantity });
        cart.numberOfProducts += product.quantity;
        const cartTotalPrice = parseFloat(product.price.substring(1));
        cart.totalPrice += cartTotalPrice;
      }
    };

    handleAddToCart(product);

    res.status(200).json({ status: 200, data: product });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

// Modify the quantity of the cart
const modifyProductCartQuantity = (req, res) => {
  try {
    const _id = req.params._id;
    const quantity = req.body.quantity;

    const handleQuantityChange = (productId, quantity) => {
      const productFound = cart.products.find(
        (productObj) => productObj.product._id === productId
      );
      if (productFound) {
        cart.products.forEach((productObj, index) => {
          if (productFound._id === productObj._id) {
            cart.numberOfProducts -= cart.products[index].quantity;
            cart.totalPrice -=
              cart.products[index].quantity *
              parseFloat(cart.products[index].product.price.substring(1));
            cart.products[index] = {
              ...cart.products[index],
              quantity: parseInt(quantity),
            };
            cart.numberOfProducts += cart.products[index].quantity;
            cart.totalPrice +=
              cart.products[index].quantity *
              parseFloat(cart.products[index].product.price.substring(1));
          }
        });
      }
    };

    handleQuantityChange(_id, quantity);

    res
      .status(200)
      .json({ status: 200, data: { _id: _id, quantity: quantity } });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

// Remove from cart
const deleteProductFromCart = (req, res) => {
  try {
    const _id = req.params._id;

    const handleDelete = (productId) => {
      const productFound = cart.products.find(
        (productObj) => productObj.product._id === productId
      );
      if (productFound) {
        cart.products.forEach((productObj, index) => {
          if (productFound._id === productObj._id) {
            cart.numberOfProducts -= cart.products[index].quantity;
            cart.totalPrice -=
              cart.products[index].quantity *
              parseFloat(cart.products[index].product.price.substring(1));
            cart.items.splice(index, 1);
          }
        });
      }
    };

    handleDelete(_id);

    res.status(200).json({ status: 200, data: _id });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

module.exports = {
  getCart,
  AddProductToCart,
  modifyProductCartQuantity,
  deleteProductFromCart,
};

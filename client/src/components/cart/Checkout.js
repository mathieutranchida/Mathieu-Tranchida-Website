import React, { useEffect } from "react";
import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  addOrderConfirmation,
  resetCart,
  cartUpdateCartId,
} from "../../redux/actions";

const Checkout = () => {
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const [product, setProduct] = React.useState({
    name: `Cart`,
    price: `${cart.cartTotalFinal}`,
    description: `Cart ID: ${cart._id}`,
  });

  useEffect(() => {
    setProduct({
      name: `Cart`,
      price: `${cart.cartTotalFinal}`,
      description: `Cart ID: ${cart._id}`,
    });
  }, [cart]);

  async function handleToken(token, addresses) {
    const response = await axios.post("/checkout", {
      token,
      product,
      addresses,
    });

    if (response.data.status === "success") {
      const customerInfoString = response.config.data;
      let customerInfo = JSON.parse(customerInfoString);
      console.log(customerInfo);
      let order = { customer: {}, cardInfo: {}, cart: {} };
      order.customer.shippingName = customerInfo.addresses.shipping_name;
      order.customer.email = customerInfo.token.email;
      order.customer.shippingCountry =
        customerInfo.addresses.shipping_address_country;
      order.customer.shippingCountryCode =
        customerInfo.addresses.shipping_address_country_code;
      order.customer.shippingAddressZipCode =
        customerInfo.addresses.shipping_address_zip;
      order.customer.shippingAddressStreet =
        customerInfo.addresses.shipping_address_line1;
      order.customer.shippingAddressCity =
        customerInfo.addresses.shipping_address_city;
      order.customer.shippingAddressState =
        customerInfo.addresses.shipping_address_state;
      order.customer.billingName = customerInfo.addresses.billing_name;
      order.customer.billingCountry =
        customerInfo.addresses.billing_address_country;
      order.customer.billingCountryCode =
        customerInfo.addresses.billing_address_country_code;
      order.customer.billingAddressZipCode =
        customerInfo.addresses.billing_address_zip;
      order.customer.billingAddressStreet =
        customerInfo.addresses.billing_address_line1;
      order.customer.billingAddressCity =
        customerInfo.addresses.billing_address_city;
      order.customer.billingAddressState =
        customerInfo.addresses.billing_address_state;
      order.cardInfo.amountCharged = customerInfo.product.price;
      order.cardInfo.nameOnCard = customerInfo.token.card.name;
      order.cardInfo.lastFourDigits = customerInfo.token.card.last4;
      order.cardInfo.expiration =
        customerInfo.token.card.exp_month +
        " / " +
        customerInfo.token.card.exp_year;
      order.cardInfo.type = customerInfo.token.card.brand;
      order.cart = cart;

      fetch("/post-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("mtOrderId", data.data._id);
          dispatch(addOrderConfirmation(data.data));
          history.push("/order-confirmation");
          let newCart = {};
          newCart._id = localStorage.getItem("mtCartId");
          newCart.products = [];
          newCart.totalAmountOfProducts = 0;
          newCart.totalPriceBeforeTax = 0;
          newCart.gst = 0;
          newCart.qst = 0;
          newCart.totalPriceAfterTax = 0;
          newCart.shippingOption = "";
          newCart.shippingCost = 0;
          newCart.cartTotalFinal = 0;
          newCart.status = "idle";
          fetch(`/modify-cart/${newCart._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCart),
          }).then(() => {
            dispatch(resetCart());
          });
        });
    } else {
      console.log(response);
    }
  }

  return (
    <>
      {cart._id && (
        <Wrapper>
          <StripeCheckout
            stripeKey="pk_test_51Hw8PXAwZOyDGXnzhCVOlURNYAyclZLyMBj2YZ9MaaPafGXe7cYZeMygOcpc8B2ijSje3pqzrQbI2PMZPlththTn00ViwvnXkT"
            token={handleToken}
            billingAddress
            shippingAddress
            amount={product.price * 100}
            name={product.name}
            description={product.description}
            currency="CAD"
          />
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 25px;
`;

export default Checkout;

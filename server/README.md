# Backend

The server runs on localhost port 4000.

The database is hosted on MongoDB and is restricted. Please contact Mathieu Tranchida to get the authorisation.

## Endpoints

### Products

| Endpoints              | HTTP Method | Description                           |
| ---------------------- | ----------- | ------------------------------------- |
| `/products`            | GET         | Retrieve all products in the database |
| `/product/:_id`        | GET         | Get a product by its MongoDB id       |
| `/post-product`        | POST        | Post a product to the database        |
| `/modify-product/:_id` | PUT         | Modify a product by its MongoDB id    |
| `/delete-product/:_id` | DELETE      | Delete one product by its MongoDB id  |

#### Product data structure

```
    {
        _id: '5fdf42521a5a09794e847030',
        imageName: 'Bea on her bike',
        imageSrc: 'hbuzlyfqypcag3q1qkom',
        athlete: 'Bea Evans',
        location: 'Montreal, QC',
        project: 'Montreal\'s urban climbing',
        imageType: 'lifestyle',
        imageFormat: '2x3',
        clientWarning: '',
        tag: []
    }
```

### Cart

| Endpoints           | HTTP Method | Description                                   |
| ------------------- | ----------- | --------------------------------------------- |
| `/cart/:_id`        | GET         | Get a cart by its MongoDB id                  |
| `/add-cart`         | POST        | Create a new cart                             |
| `/modify-cart/:_id` | PUT         | Add, modify, and delete a product in the cart |
| `/delete-cart/:_id` | DELETE      | Delete a cart by its MongoDB id               |

#### Cart data structure

```
{
    _id: '5fd3b2cc3000714abea0f5f4',
    products: [
        {
            name: 'Traverse au Parc Olympique',
            imageSrc: 'kuqxlzjvqigymm0gcdwj',
            _id: 'a7e70ebb-a0d7-482c-bdac-38994faa238a',
            paperType: 'matte',
            size: 'twelveByEighteenInches',
            quantity: '1',
            price: '65'
        }
    ],
    totalAmountOfProducts: 1,
    totalPriceBeforeTax: 65,
    gst: 3.25,
    qst: 6.483750000000001,
    totalPriceAfterTax: 74.73375,
    shippingOption: 'canada',
    shippingCost: 15,
    cartTotalFinal: 89.73,
    status: 'idle'
  }
```

### Price lists

| Endpoints      | HTTP Method | Description              |
| -------------- | ----------- | ------------------------ |
| `/price-lists` | GET         | Retreive all price lists |

### Order

| Endpoints                   | HTTP Method | Description                             |
| --------------------------- | ----------- | --------------------------------------- |
| `/orders`                   | GET         | Retrieve all orders in the database     |
| `/order/:_id`               | GET         | Get an order by its MongoDB id          |
| `/post-order`               | POST        | Create a new order                      |
| `/change-order-status/:_id` | PUT         | Change the status of an order by its id |

#### Order data structure

```
{
    _id: '5fd6982f8d97669448f257f7',
    customer: {
        shippingName: 'Mathieu Tranchida',
        email: 'mathieu.tranchida@gmail.com',
        shippingCountry: 'Canada',
        shippingCountryCode: 'CA',
        shippingAddressZipCode: 'H2L3p6',
        shippingAddressStreet: '2000 Rue Saint Timothée, Appartement 307',
        shippingAddressCity: 'Montreal',
        shippingAddressState: 'QC',
        billingName: 'Mathieu Tranchida',
        billingCountry: 'Canada',
        billingCountryCode: 'CA',
        billingAddressZipCode: 'H2L3p6',
        billingAddressStreet: '2000 Rue Saint Timothée, Appartement 307',
        billingAddressCity: 'Montreal',
        billingAddressState: 'QC'
    },
    cardInfo: {
        amountCharged: '239.2',
        nameOnCard: 'Mathieu Tranchida',
        lastFourDigits: '4242',
        expiration: '12 / 2021',
        type: 'Visa'
    },
    cart: {
        _id: '5fd3b2cc3000714abea0f5f4',
        products: [
            {
            name: 'Kamouraska - Mobydick (5.11B)',
            imageSrc: 'ptc0y3ggvnnun40xrnsp',
            _id: '293a34cd-9b4f-477a-82d7-ce765f4c325c',
            paperType: 'matte',
            size: 'twelveByEighteenInches',
            quantity: '3',
            price: '65'
            }
        ],
        totalAmountOfProducts: 3,
        totalPriceBeforeTax: 195,
        gst: 9.75,
        qst: 19.45125,
        totalPriceAfterTax: 224.20125000000002,
        shippingOption: 'canada',
        shippingCost: 15,
        cartTotalFinal: 239.2,
        status: 'idle'
    },
    status: {
        _id: '5fd6982f8d97669448f257f7',
        status: {
            _id: '5fd6982f8d97669448f257f7',
            status: 'posted'
        }
    }
}
```

### User

Passwords are encrypted using Bcrypt and jwt

| Endpoints | HTTP Method | Description                        |
| --------- | ----------- | ---------------------------------- |
| `/users`  | GET         | Retrieve all users in the database |
| `/signup` | POST        | Sign up an user                    |
| `/login`  | POST        | Login an user                      |

### Newsletter

| Endpoints                       | HTTP Method | Description                                    |
| ------------------------------- | ----------- | ---------------------------------------------- |
| `/newsletter-email`             | GET         | Retrieve all newsletter emails in the database |
| `/newsletter-post-email`        | POST        | Post a new email to the newsletter list        |
| `/newsletter-delete-email/:_id` | DELETE      | Delete an email from the database              |

### Stripe

| Endpoints   | HTTP Method | Description     |
| ----------- | ----------- | --------------- |
| `/checkout` | GET         | Stripe checkout |

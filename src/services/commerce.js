// dependencies
import Commerce from '@chec/commerce.js';
// env constants
const checAPIKey = process.env.REACT_APP_CHEC_PUBLIC_KEY;
const devEnvironment = process.env.NODE_ENV === 'development';

const commerceConfig = {
  axiosConfig: {
    headers: {
      'X-Chec-Agent': 'commerce.js/v2',
      'Chec-Version': '2021-09-29',
    },
  },
};

if (devEnvironment && !checAPIKey) {
  throw Error(
    'Your public API key must be provided as an environment variable named REACT_APP_CHEC_PUBLIC_KEY. Obtain your Chec public key by logging into your Chec account and navigate to Setup > Developer, or can be obtained with the Chec CLI via with the command chec whoami',
  );
}

const commerce = new Commerce(checAPIKey, devEnvironment, commerceConfig);

/** Commerce Methods */
const addToCart = async (productId, quantity) => {
  const r = await commerce.cart.add(productId, quantity);
  return r.cart;
};

const captureCheckout = async (checkoutTokenId, newOrder) => {
  const r = await commerce.checkout.capture(checkoutTokenId, newOrder);
  return r;
};

const emptyCart = async () => {
  const r = await commerce.cart.empty();
  return r.cart;
};

const getCart = async () => {
  const r = await commerce.cart.retrieve();
  return r;
};

const getProducts = async () => {
  const r = await commerce.products.list();
  return r.data;
};

const refreshCart = async () => {
  const r = await commerce.cart.refresh();
  return r;
};

const removeFromCart = async (lineItemId) => {
  const r = await commerce.cart.remove(lineItemId);
  return r.cart;
};

const updateCartQty = async (lineItemId, quantity) => {
  const r = await commerce.cart.update(lineItemId, { quantity });
  return r.cart;
};

export {
  addToCart,
  captureCheckout,
  emptyCart,
  getCart,
  getProducts,
  refreshCart,
  removeFromCart,
  updateCartQty,
};

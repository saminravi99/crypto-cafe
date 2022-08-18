import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART} from "./actionTypes";

//function to increase quantity of product added in cart
export const increaseProductQuantity = (id, quantity) => {
  return {
    type: INCREASE_QUANTITY,
    payload: {
      id,
      quantity,
    },
  };
};

//function to decrease quantity of product added in cart
export const decreaseProductQuantity = (id, quantity) => {
  return {
    type: DECREASE_QUANTITY,
    payload: {
      id,
      quantity,
    },
  };
};

//function to add new product to cart
export const addProductToCart = (
  id,
  productName,
  productPrice
) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id,
      productName,
      productPrice,
      addedQuantity: 1,
    },
  };
};

//function to remove product from cart
export const removeProductFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id,
    },
  };
}


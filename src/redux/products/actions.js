import { ADD_TO_CART_FIRST, DECREASE_TO_CART } from "./actionTypes";

//function to add product from shop for the first time
export const addProduct = (id, quantity) => {
  return {
    type: ADD_TO_CART_FIRST,
    payload: {
        id,
        quantity,
    },
  };
}

//function to decrease quantity of product in the shop when it is added to the cart
export const decreaseProduct = (id, quantity) => {
  return {
    type: DECREASE_TO_CART,
    payload: {
        id,
        quantity,
    },
  };
}

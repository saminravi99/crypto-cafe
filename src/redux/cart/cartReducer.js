import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from "./actionTypes";

//Initial State
const initialState = {
  totalProducts: 0,
  cart: [
    // {
    //   id: 1,
    //   productName: "Asus Vivobook X515MA",
    //   productPrice: 35000,
    //   addedQuantity: 1,
    // },
  ],
};
//Reducer Function
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalProducts: state?.totalProducts ? state.totalProducts + 1 : 1,
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              addedQuantity: product?.addedQuantity
                ? product?.addedQuantity + 1
                : 1,
            };
          } else {
            return product;
          }
        }),
        totalProducts: state?.totalProducts ? state.totalProducts + 1 : 1,
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              addedQuantity: product.addedQuantity - 1,
            };
          } else {
            return product;
          }
        }),
        totalProducts: state.totalProducts - 1 ,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
        totalProducts: state.totalProducts - 1,
      };

    default:
      return state;
  }
};

export default cartReducer;

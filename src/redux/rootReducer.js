import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import productsReducer from "./products/productsReducer";

// to combine all reducers
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;

import React from "react";
import { useSelector } from "react-redux";

const CartTotal = () => {
  //selector to get the cart products
  const cart = useSelector((state) => state.cart);

  //calculate the total price of all products added to cart
  const totalPrice = cart.cart.reduce((total, product) => {
    return total + product.productPrice * product.addedQuantity;
  }, 0);

  return (
    <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
      <div className="flex justify-center items-center text-center">
        <div className="text-xl font-semibold">
          <p>Total Price</p>
          <p className="text-5xl">TK. {totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;

import React from "react";
import CartProduct from "./CartProduct";
import CartTotalItem from "./CartTotalItem";
import { useSelector } from "react-redux";

const Cart = () => {
  //selector to get the cart products
  const cart = useSelector((state) => state.cart);
  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        {cart.cart.map((product) => (
          <CartProduct key={product.id} id={product.id} {...product} />
        ))}
        {/* To Calculate How Many Products are there in the cart that has been added*/}
        <CartTotalItem 
        totalProducts={cart.totalProducts}
        />
      </div>
    </div>
  );
};

export default Cart;

import React from "react";

const CartTotalItem = ({ totalProducts }) => {
  return (
    <div>
      <div className="flex justify-center items-center text-center">
        <div className="text-xl font-semibold">
          <p>Total Item</p>
          <p className="text-5xl">{totalProducts}</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotalItem;

import React from "react";
import Cart from "./Cart";

const ShoppingCarts = ({ carts, setCarts }) => {
  console.log(carts);
  return (
    <div className="w-4/5 mx-auto my-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {/* Carts */}
      <div className="">
        {
            carts.map(cart => <Cart key={cart.id} cart={cart} carts={carts} setCarts={setCarts} />)
        }
      </div>
    </div>
  );
};

export default ShoppingCarts;

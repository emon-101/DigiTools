import React from "react";
import Cart from "./Cart";

const ShoppingCarts = ({ carts, setCarts }) => {
//   console.log(carts);
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="w-4/5 mx-auto my-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {/* Carts */}
      <div className="">
        {
            carts.map(cart => <Cart key={cart.id} cart={cart} carts={carts} setCarts={setCarts} />)
        }
      </div>
      {/* Total Price */}
      <div className="flex justify-between items-center p-4">
        <span className="text-zinc-400 font-bold">Total: </span>
        <span className="font-bold text-2xl">$ {totalPrice}</span>
      </div>
    </div>
  );
};

export default ShoppingCarts;

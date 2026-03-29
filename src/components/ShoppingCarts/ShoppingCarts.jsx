import React from "react";
import Cart from "./Cart";
import { toast } from "react-toastify";
import { FaShoppingCart } from "react-icons/fa";

const ShoppingCarts = ({ carts, setCarts }) => {
  //   console.log(carts);
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    setCarts([]);
    toast.success("Payment Successfull");
  };
  return (
    <div className="w-4/5 mx-auto my-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {carts.length === 0 ? (
        <div className="rounded-2xl overflow-hidden bg-base-200 py-16">
          <FaShoppingCart className="mx-auto text-5xl text-zinc-500 mb-4" />
          <p className="font-semibold text-xl text-zinc-500 text-center">
            Your Cart is Empty Now
          </p>
        </div>
      ) : (
        <div className="">
          {/* Carts */}
          <div className="">
            {carts.map((cart) => (
              <Cart
                key={cart.id}
                cart={cart}
                carts={carts}
                setCarts={setCarts}
              />
            ))}
          </div>
          {/* Total Price */}
          <div className="flex justify-between items-center p-4">
            <span className="text-zinc-400 font-bold">Total: </span>
            <span className="font-bold text-2xl">$ {totalPrice}</span>
          </div>
          {/* Proceed to payment section */}
          <div className="mb-12">
            <a
              onClick={handleCheckout}
              className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-6 rounded-full text-lg text-white transition-all hover:grayscale-50 font-bold w-full"
            >
              Proceed To Checkout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCarts;

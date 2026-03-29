import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <div className="flex justify-between items-center rounded-2xl bg-base-200 overflow-hidden p-6 mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 inline-flex rounded-full border border-zinc-300">
            <img
              className="w-8 h-8 object-cover"
              src={cart.icon}
              alt={cart.name}
            />
          </div>
          <div className="">
            <h3 className="font-semibold text-xl">{cart.name}</h3>
            <p className="mt-2 font-bold text-zinc-400">${cart.price}</p>
          </div>
        </div>
        <button className="font-bold text-[#FF3980]">Remove</button>
      </div>
    </div>
  );
};

export default Cart;

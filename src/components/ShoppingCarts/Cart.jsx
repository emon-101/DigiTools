import React from "react";
import { toast } from "react-toastify";

const Cart = ({ cart, carts, setCarts }) => {
    const handleRemoveCard = (id) => {
        const filteredCards = carts.filter(item => item.id !== id);
        setCarts(filteredCards);
        toast.success("Removed Item form the Carts");
    }
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
        <button onClick={()=> handleRemoveCard(cart.id)} className="font-bold text-[#FF3980]">Remove</button>
      </div>
    </div>
  );
};

export default Cart;

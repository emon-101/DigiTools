import React, { useState } from "react";
import { BiCheck } from "react-icons/bi";

const Card = ({ card, carts, setCarts }) => {
//   console.log(card);
  const [buy, setBuy] = useState(false);

  const handleBuyCard = () => {
    setBuy(!buy);
    setCarts([...carts, card]);
  }
  return (
    <div>
      <div className="relative rounded-2xl shadow border border-zinc-400 overflow-hidden p-6">
        {/* icon */}
        <div className="border border-zinc-300 p-2 inline-flex rounded-full mb-4">
          <img className="w-8 h-8 object-cover" src={card.icon} alt="" />
        </div>
        <div
          className={`absolute top-2 right-2 rounded-full px-4 py-1 
            ${card.tagType === "best-seller" && "bg-[#FEF3C6] text-[#BB4D00]"}
            ${card.tagType === "popular" && "bg-[#E1E7FF] text-[#4F39F6]"}
            ${card.tagType === "new" && "bg-[#DBFCE7] text-[#0A883E]"}
            `}
        >
          {card.tag}
        </div>
        <h3 className="text-2xl font-bold mb-4">{card.name}</h3>
        <p className="text-zinc-400 font-light mb-4">{card.description}</p>
        {/* Pricing */}
        <div className="text-2xl font-bold mb-4">
          ${card.price}
          <span className="text-lg text-zinc-400 font-light">/mo</span>
        </div>
        {/* Lists */}
        <ul>
          {card.features.map((list) => (
            <li className="flex gap-2 items-center text-zinc-400 font-extralight">
              <BiCheck className="text-2xl text-green-500" />
              {list}
            </li>
          ))}
        </ul>
        {/* Buttons */}
        <button onClick={handleBuyCard} className={`btn py-2 rounded-full text-white transition-all hover:grayscale-50 font-medium w-full mt-4 ${buy ? "bg-green-500": "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"}`}>
          {buy ? "Availabe in Cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default Card;

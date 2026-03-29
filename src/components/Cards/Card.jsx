import React from "react";
import { BiCheck } from "react-icons/bi";

const Card = ({ card }) => {
  console.log(card);
  return (
    <div>
      <div className="relative rounded-2xl shadow border border-zinc-400 overflow-hidden p-6">
        {/* icon */}
        <div className="border border-zinc-300 p-2 inline-flex rounded-full mb-4">
          <img className="w-8 h-8 object-cover" src={card.icon} alt="" />
        </div>
        <div className="absolute top-2 right-2 rounded-full bg-red-500/50 px-4 py-1">
          best seller
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
        <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-2 rounded-full text-white transition-all hover:grayscale-50 font-medium w-full mt-4">
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default Card;

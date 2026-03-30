import React from "react";
import { IoCheckmark } from "react-icons/io5";

const Pricing = () => {
  return (
    <div>
      <h1 className="font-black text-3xl lg:text-5xl text-center mb-4">
        Simple, Transparent Pricing
      </h1>
      <p className="text-center text-zinc-400 mb-10">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      <div className="w-4/5 mx-auto mb-10 mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* card 1 */}
        <div className="bg-base-200 shadow-sm border border-zinc-300 overflow-hidden p-6 rounded-2xl flex flex-col justify-between">
          <div className="">
            <h3 className="font-bold text-2xl mb-1">Starter</h3>
            <p className="text-zinc-400">Perfect for getting started</p>
          </div>

          <div className="text-3xl font-bold">
            $0<span className="text-xl font-medium text-zinc-400">/month</span>
          </div>

          <div className="">
            <ul className="text-zinc-400 font-medium">
              <li className="flex items-center gap-2">
                <IoCheckmark className="text-xl text-green-500" /> Access to 10
                free tools
              </li>
              <li className="flex items-center gap-2">
                <IoCheckmark className="text-xl text-green-500" /> Basic
                templates
              </li>
              <li className="flex items-center gap-2">
                <IoCheckmark className="text-xl text-green-500" /> Community
                support
              </li>
              <li className="flex items-center gap-2">
                <IoCheckmark className="text-xl text-green-500" /> 1 project per
                month
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <button className="btn py-2 rounded-full text-white transition-all hover:grayscale-50 font-medium w-full mt-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            Get Started Free
          </button>
        </div>
        {/* card 2 */}
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-sm border border-zinc-300 p-6 rounded-2xl flex flex-col gap-4 text-white relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[#BB4D00] bg-[#FEF3C6] px-4 py-1 rounded-full">Most Popular</div>
          <div className="">
            <h3 className="font-bold text-2xl mb-1">Pro</h3>
            <p className="text-zinc-400">Best for professionals</p>
          </div>

          <div className="text-3xl font-bold">
            $29<span className="text-xl font-medium text-zinc-400">/month</span>
          </div>

          <div className="">
            <ul className="text-white">
              <li className="flex items-center gap-2">
                <IoCheckmark className="text-xl text-white" /> Access to all
                premium tools
              </li>
              <li className="flex items-center gap-2">
                <IoCheckmark className="text-xl text-white" /> Unlimited
                templates
              </li>
              <li className="flex items-center gap-2">
                <IoCheckmark className="text-xl text-white" /> Priority
                support
              </li>
              <li className="flex items-center gap-2">
                <IoCheckmark className="text-xl text-white" /> Unlimited
                projects
              </li>
              <li className="flex items-center gap-2">
                <IoCheckmark className="text-xl text-white" /> Cloud sync
              </li>
              <li className="flex items-center gap-2">
                <IoCheckmark className="text-xl text-white" /> Advanced
                analytics
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="">
            <button className="py-2 rounded-full transition-all hover:grayscale-50 font-medium w-full mt-4 bg-white text-[#9514FA]">
            Start Pro Trial
          </button>
          </div>
        </div>
        {/* card 3 */}
        <div className="bg-base-200 shadow-sm border border-zinc-300 overflow-hidden p-6 rounded-2xl flex flex-col gap-4">
          <div className="">
            <h3 className="font-bold text-2xl">Enterprise</h3>
            <p className="text-zinc-400">For teams and businesses</p>
          </div>

          <div className="text-3xl font-bold">
            $99<span className="text-xl font-medium text-zinc-400">/month</span>
          </div>

          <div className="">
            <ul className="text-zinc-400 font-medium">
              <li className="flex items-center gap-2">
                <IoCheckmark className="text-xl text-green-500" /> Everything in Pro
              </li>
              <li className="flex items-center gap-2">
                <IoCheckmark className="text-xl text-green-500" /> Team collaboration
              </li>
              <li className="flex items-center gap-2">
                <IoCheckmark className="text-xl text-green-500" /> Custom integrations
              </li>
              <li className="flex items-center gap-2">
                <IoCheckmark className="text-xl text-green-500" /> Dedicated support
              </li>
              <li className="flex items-center gap-2">
                <IoCheckmark className="text-xl text-green-500" /> SLA guarantee
              </li>
              <li className="flex items-center gap-2">
                <IoCheckmark className="text-xl text-green-500" /> Custom branding
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <button className="btn py-2 rounded-full text-white transition-all hover:grayscale-50 font-medium w-full mt-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

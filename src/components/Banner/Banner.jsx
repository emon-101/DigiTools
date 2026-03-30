import React from "react";
import bannerImg from "../../assets/banner.png";
import { FaDotCircle } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <div className="md:w-4/5 mx-auto my-20 px-2">
      <div className="">
        <div className="hero-content flex-col lg:flex-row-reverse gap-16">
          <img src={bannerImg} className="w-full rounded-lg shadow-2xl" />
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E1E7FF] text-sm font-medium px-5 py-2 rounded-full mb-4">
              <span className="text-[#4F39F6]">
                <FaDotCircle />
              </span>
              <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                New: AI-Powered Tools Available
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-[#101727]">
              Supercharge Your Digital Workflow
            </h1>
            <p className="py-6 text-[#627382] max-w-md">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <div className="flex gap-3">
                <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-5 py-2 rounded-full text-white transition-all hover:grayscale-50 font-medium hover:scale-105">Explore Products</a>
                <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent px-5 py-2 rounded-full transition-all font-medium border border-purple-600 hover:scale-105"><CiPlay1 className="text-purple-600" /> Watch Demo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="shadow-sm">
      <div className="navbar bg-base-100 w-4/5 mx-auto py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold text-[#101727]"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <a className="text-3xl lg:text-4xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent leading-tight whitespace-nowrap">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-[#101727]">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-4 items-center">
          <a href="">
            <HiOutlineShoppingCart className="text-xl font-semibold text-[#101727]" />
          </a>
          <a className="font-semibold text-[#101727]" href="">
            Login
          </a>
          <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-5 py-2 rounded-full text-white transition-all hover:grayscale-50 font-medium">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

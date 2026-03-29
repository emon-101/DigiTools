import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Stats from "./components/Stats/Stats";
import Cards from "./components/Cards/Cards";
import ShoppingCarts from "./components/ShoppingCarts/ShoppingCarts";

function App() {

  const [tab, setTab] = useState("products");
  return (
    <>
      <Navbar />
      <Banner />
      <Stats />
      {/* Toggle Card Section */}
      <div className="">
        <h1 className="font-black text-3xl lg:text-5xl text-[#101727] mb-4 text-center">
          Premium Digital Tools
        </h1>
        <p className="text-[#627382] max-w-md mx-auto text-center mb-4">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        {/* Tab */}
        <div className="flex justify-center mb-10">
          <div className="tabs tabs-box justify-center gap-10 inline-flex rounded-full px-4 py-2">
            <input
              type="radio"
              name="my_tabs_1"
              className={`tab rounded-full font-semibold ${tab==="products" && "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}`}
              aria-label="Products"
              defaultChecked
              onClick={()=> setTab("products")}
            />
            <input
              type="radio"
              name="my_tabs_1"
              className={`tab rounded-full font-semibold ${tab==="cart" && "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}`}
              aria-label={`Cart (0)`}
              onClick={()=> setTab("cart")}
            />
          </div>
        </div>

        {/* Section Interchange */}
        <div className="">
          {
            tab==="products" ? <Cards /> : <ShoppingCarts />
          }
        </div>
      </div>
    </>
  );
}

export default App;

import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Stats from "./components/Stats/Stats";
import Cards from "./components/Cards/Cards";
import ShoppingCarts from "./components/ShoppingCarts/ShoppingCarts";
import { ToastContainer } from "react-toastify";
import Steps from "./components/Steps/Steps";

const fetchProducts = async () => {
  const res = await fetch("/productsData.json");
  return res.json();
};

function App() {
  const productsPromise = fetchProducts();
  const [tab, setTab] = useState("products");
  const [carts, setCarts] = useState([]);
  return (
    <>
      <Navbar carts={carts} />
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
              className={`tab rounded-full font-semibold ${tab === "products" && "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}`}
              aria-label="Products"
              defaultChecked
              onClick={() => setTab("products")}
            />
            <input
              type="radio"
              name="my_tabs_1"
              className={`tab rounded-full font-semibold ${tab === "cart" && "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}`}
              aria-label={`Cart (${carts.length})`}
              onClick={() => setTab("cart")}
            />
          </div>
        </div>

        {/* Section Interchange */}
        <div className="">
          {tab === "products" ? (
            <Suspense fallback={<div className="flex justify-center py-5"><span className="loading loading-bars loading-xl"></span></div>}>
              <Cards carts={carts} setCarts={setCarts} productsPromise={productsPromise} />
            </Suspense>
          ) : (
            <ShoppingCarts carts={carts} setCarts={setCarts} />
          )}
        </div>
      </div>

      <Steps />

      <ToastContainer />
    </>
  );
}

export default App;

import React from "react";

const WorkFlow = () => {
  return (
    <div className="mt-25">
      <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-30 flex justify-center items-center flex-col gap-4 px-4">
        <div className="">
          <h1 className="font-black text-xl md:text-4xl text-center">
            Ready to Transform Your Workflow?
          </h1>
          <p className="text-zinc-400 mt-3 max-w-lg text-center mx-auto">
            Join thousands of professionals who are already using Digitools to
            work smarter.Start your free trial today.
          </p>
        </div>

        <div className="">
            <div className="flex gap-2 mb-2 justify-center">
                <button className="bg-white rounded-full px-5 py-2 text-violet-500 w-50 cursor-pointer hover:grayscale">Explore Products</button>
                <button className="border border-white text-white rounded-full px-5 py-2 w-50 cursor-pointer hover:grayscale">View Pricing</button>
            </div>
            <p className="text-zinc-400">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;

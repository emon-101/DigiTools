import React from 'react';
import img1 from "../../assets/user.png";
import img2 from "../../assets/package.png";
import img3 from "../../assets/rocket.png";

const Steps = () => {
    return (
        <div className='bg-base-200 py-20 mt-25 mb-30'>
            <h1 className='font-black text-3xl lg:text-5xl text-center mb-4'>Get Started in 3 Steps</h1>
            <p className='text-center text-zinc-400'>Start using premium digital tools in minutes, not hours.</p>

            {/* 3 steps cards */}
            <div className="w-4/5 mx-auto mb-10 mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* card 1 */}
                <div className="relative flex flex-col justify-center items-center gap-4 bg-white border border-zinc-300 px-6 rounded-2xl overflow-hidden py-20 shadow">
                    {/* img */}
                    <div className="rounded-full bg-base-300 p-4">
                        <img className='w-15 h-15' src={img1} alt="Photo" />
                    </div>
                    <div className="absolute top-5 right-5 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10 h-10 text-sm text-white font-semibold flex items-center justify-center">01</div>
                    <h2 className='text-2xl font-bold'>Create Account</h2>
                    <p className='text-zinc-400 text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                {/* card 2 */}
                <div className="relative flex flex-col justify-center items-center gap-4 bg-white border border-zinc-300 px-6 rounded-2xl overflow-hidden py-20 shadow">
                    {/* img */}
                    <div className="rounded-full bg-base-300 p-4">
                        <img className='w-15 h-15' src={img2} alt="Photo" />
                    </div>
                    <div className="absolute top-5 right-5 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10 h-10 text-sm text-white font-semibold flex items-center justify-center">02</div>
                    <h2 className='text-2xl font-bold'>Choose Products</h2>
                    <p className='text-zinc-400 text-center'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                {/* card 3 */}
                <div className="relative flex flex-col justify-center items-center gap-4 bg-white border border-zinc-300 px-6 rounded-2xl overflow-hidden py-20 shadow">
                    {/* img */}
                    <div className="rounded-full bg-base-300 p-4">
                        <img className='w-15 h-15' src={img3} alt="Photo" />
                    </div>
                    <div className="absolute top-5 right-5 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10 h-10 text-sm text-white font-semibold flex items-center justify-center">03</div>
                    <h2 className='text-2xl font-bold'>Start Creating</h2>
                    <p className='text-zinc-400 text-center'>Download and start using your premium tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default Steps;
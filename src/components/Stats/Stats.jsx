import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] mb-30'>
            <div className="flex justify-between w-3/4 mx-auto py-15">
                <div className="">
                    <h1 className='font-black text-white text-4xl lg:text-6xl'>50K+</h1>
                    <p className='font-medium text-white lg:text-2xl mt-4'>Active Users</p>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="">
                    <h1 className='font-black text-white text-4xl lg:text-6xl'>200+</h1>
                    <p className='font-medium text-white lg:text-2xl mt-4'>Premium Tools</p>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="">
                    <h1 className='font-black text-white text-4xl lg:text-6xl'>4.9</h1>
                    <p className='font-medium text-white lg:text-2xl mt-4'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#101727]'>
            <div className="w-4/5 mx-auto text-white grid md:grid-cols-3 lg:grid-cols-5 gap-4 pt-30 pb-20 border-b-2 border-zinc-700">
                {/* Headline */}
                <div className="">
                    <h1 className='font-bold mb-2 text-3xl'>DigiTools</h1>
                    <p className='text-zinc-400'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                {/* Products */}
                <div className="">
                    <h3 className='text-xl font-medium mb-2'>Product</h3>
                    <ul className='flex flex-col gap-2 text-zinc-400'>
                        <a href="">Features</a>
                        <a href="">Pricing</a>
                        <a href="">Templates</a>
                        <a href="">Integrations</a>
                    </ul>
                </div>
                {/* Menu */}
                <div className="">
                    <h3 className='text-xl font-medium mb-2'>Company</h3>
                    <ul className='flex flex-col gap-2 text-zinc-400'>
                        <a href="">About</a>
                        <a href="">Blog</a>
                        <a href="">Careers</a>
                        <a href="">Press</a>
                    </ul>
                </div>
                {/* Resources */}
                <div className="">
                    <h3 className='text-xl font-medium mb-2'>Resources</h3>
                    <ul className='flex flex-col gap-2 text-zinc-400'>
                        <a href="">Documentation</a>
                        <a href="">Help Center</a>
                        <a href="">Community</a>
                        <a href="">Contact</a>
                    </ul>
                </div>
                {/* Social links */}
                <div className="">
                    <h3 className='text-xl font-medium mb-3'>Social Links</h3>
                    <div className="flex gap-1.5 cursor-pointer">
                        <div className="bg-white rounded-full flex justify-center items-center p-2"><FaInstagram className='text-black' /></div>
                        <div className="bg-white rounded-full flex justify-center items-center p-2"><FaFacebook className='text-black' /></div>
                        <div className="bg-white rounded-full flex justify-center items-center p-2"><FaXTwitter className='text-black'r /></div>
                    </div>
                </div>
            </div>
            {/* Copyrights */}
            <div className="w-4/5 mx-auto text-zinc-400 py-7.5 flex justify-between items-center flex-col md:flex-row gap-2">
                <small>© 2026 Digitools. All rights reserved.</small>
                <div className="flex gap-2">
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Service</a>
                    <a href="">Cookies</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
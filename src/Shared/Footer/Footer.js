import React from 'react';
import FooterContainer from './FooterContainer';
import {
    FaFacebookSquare
} from "react-icons/fa";
const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer className='bg-gray-900 text-white pb-5'>
            <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7 '>
                <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'><span className='text-teal-400'>My</span>Product</h1>
                <div>
                    <input type="text" placeholder='Enter your phone' className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none' />
                    <button className='bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full'>
                        request

                    </button>
                </div>
            </div>

            <FooterContainer />
            <div>
                <p className='text-center mt-2'>Copyright@{date} all rights reserved</p>
            </div>

        </footer>
    );
};

export default Footer;
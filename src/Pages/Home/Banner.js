import React from 'react';
import banner from '../../assets/image/banner.jpeg'
const Banner = () => {
    return (
        <div class="hero h-screen" style={{ background: `url(${banner})` }} >
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-white">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                    <p class="mb-5 text-xl">This is manufacturing company. Here we manufacture different types of electronic tools . That contains very high standard and quality also</p>
                    <button class="btn btn-accent text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import banner from '../../assets/image/banner.jpeg'
const Banner = () => {
    return (
        <div className="hero h-screen" style={{ background: `url(${banner})` }} >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5 text-xl">This is manufacturing company. Here we manufacture different types of electronic tools . That contains very high standard and quality also</p>
                    <button className="btn btn-accent text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
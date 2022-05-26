import React from 'react';
import expert from '../../assets/image/Experts-pana.png'
const Information = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={expert} className="max-w-sm rounded-lg shadow-2xl" alt='img' />
                    <div>
                        <h1 className="text-5xl font-bold text-secondary">Need More information about us?</h1>
                        <p className="py-6 font-bold">If you want to learn more about pricing, implementation, or anything else , get in touch today. Our product experts are standing by and ready to help.</p>
                        <button className="btn btn-accent text-white">Let's chat</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;
import React from 'react';
import approach from '../../assets/image/approach.png'
const Approach = () => {
    return (
        <div>
            <div className="hero min-h-screen mt-2">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={approach} className="max-w-sm rounded-lg shadow-2xl" alt='img' />
                    <div>
                        <h1 className="text-5xl font-bold text-blue-500">Our Approach to all clients!</h1>
                        <p className="py-6 font-bold">Our approach always to our customers always positive. We always try to convince our clients with simile face . We always try to provide our best effort for our clients.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Approach;
import React from 'react';
import approach from '../../assets/image/approach.png'
const Approach = () => {
    return (
        <div>
            <div class="hero min-h-screen mt-2">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={approach} class="max-w-sm rounded-lg shadow-2xl" alt='img' />
                    <div>
                        <h1 class="text-5xl font-bold text-blue-500">Our Approach to all clients!</h1>
                        <p class="py-6 font-bold">Our approach always to our customers always positive. We always try to convince our clients with simile face . We always try to provide our best effort for our clients.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Approach;
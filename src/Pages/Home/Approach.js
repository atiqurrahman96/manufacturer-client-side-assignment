import React from 'react';
import approach from '../../assets/image/approach.png'
const Approach = () => {
    return (
        <div>
            <div class="hero min-h-screen mt-2">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={approach} class="max-w-sm rounded-lg shadow-2xl" alt='img' />
                    <div>
                        <h1 class="text-5xl font-bold">Our Approach to all clients!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Approach;
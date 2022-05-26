import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='flex justify-center items-start'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Name:Atiqur Rahman</h2>
                    <p className='font-bold'>Email:aitqurrahmanbd302@gmail.com</p>
                    <p className='font-bold'>Educational Background: BA(Honours) in English</p>
                    <p>List of skills: <li>HTML</li>
                        <li>Css</li>
                        <li>Bootstrap</li>
                        <li>Tailwind</li>
                        <li>React</li></p>

                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;
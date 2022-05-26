import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='flex justify-center items-start'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Name:Atiqur Rahman</h2>
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
import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='flex justify-center items-start'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Name:Atiqur Rahman</h2>
                    <p className='font-bold'>Email:aitqurrahmanbd302@gmail.com</p>
                    <p className='font-bold'>Educational Background: BA(Honours) in English, from Islamic University , Kustia</p>
                    <p>List of skills: <li>HTML</li>
                        <li>Css</li>
                        <li>Bootstrap</li>
                        <li>Tailwind</li>
                        <li>React</li></p>
                    <h2>Here this is my some projects live site links</h2>
                    <p>1.link: https://my-grocery-warehouse-services.web.app/ </p>
                    <p>2.link: https://willy-loman-photography-corner.web.app/</p>
                    <p>3.link: https://heroic-licorice-af5fb4.netlify.app/</p>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;
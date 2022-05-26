import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('https://ancient-sea-95326.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className='text-4xl font-bold text-center text-accent'>Tools</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    >
                    </Part>)
                }
            </div>

        </div>
    );
};

export default Parts;
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Part = ({ part }) => {
    const { _id, image, name, price, quantity, about } = part;
    const navigate = useNavigate();
    const navigateToItemDetail = id => {
        navigate(`/part/${id}`)
    }
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mb-5 ">
                <figure><img style={{ width: '50%' }} className="rounded-md" src={image} alt="name" /></figure>
                <div class="card-body">
                    <h2 class="text-center font-bold text-2xl">
                        {name}
                        <div class="badge badge-accent ml-3">NEW</div>
                    </h2>
                    <p className='text-center font-bold'>Per Price:$<span>{price}</span></p>
                    <p className='text-center font-bold'>Available Quantity:{quantity}</p>
                    <small className='text-center font-bold'>Description:{about}</small>
                </div>
                <div className='flex justify-center'>
                    <button onClick={() => navigateToItemDetail(_id)} class="btn btn-accent text-white">Purchase</button>
                </div>
            </div>

        </div>

    );
};

export default Part;
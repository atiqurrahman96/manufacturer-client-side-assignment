import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlaceOrder from './PlaceOrder';


const PurchasePage = () => {
    const { id } = useParams();
    const [purchase, setPurchase] = useState({});
    useEffect(() => {
        fetch(`https://ancient-sea-95326.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [])

    return (
        <div className='flex justify-center items-start'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={purchase.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{purchase.name}</h2>
                    <p>Available quantity:{purchase.quantity}</p>
                    <p>Per price:${purchase.price}</p>
                    <p>about:{purchase.about}</p>

                    <PlaceOrder purchase={purchase}></PlaceOrder>
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;
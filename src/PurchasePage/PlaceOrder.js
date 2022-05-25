import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const PlaceOrder = ({ purchase }) => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleBooking = (event) => {
        event.preventDefault();
        const booking = {

            email: user.email,
            name: user.displayName,
            product: purchase.name,
            phone: event.target.phone.value,
            address: event.target.address.value,

        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast.success('your order has successfully been placed')
                }
                else {
                    toast.error('Order already exists')
                }
                event.target.reset()
                navigate('/home')
            });




    }

    return (
        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-2'>


            <input type="text" name="name" disabled value={user?.displayName} className="input input-bordered input-primary w-full max-w-xs" />
            <input type="email" name='email' disabled value={user?.email} className="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" name='product' disabled value={purchase.name} className="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" name='phone' placeholder="Your phone" required className="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" name='address' placeholder="Your address" required className="input input-bordered input-primary w-full max-w-xs" />
            <input type="submit" value="Submit" className="btn btn-secondary   w-full max-w-xs" />

        </form>
    );
};

export default PlaceOrder;
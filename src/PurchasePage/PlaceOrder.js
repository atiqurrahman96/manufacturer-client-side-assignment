import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const PlaceOrder = () => {
    const [user] = useAuthState(auth);

    const handleBooking = (event) => {
        event.preventDefault();
        const booking = {
            email: user.email,
            name: user.displayName,
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
                    toast('data has added')
                }
                else {
                    toast('daata already added')
                }
                event.target.reset()
            });




    }

    return (
        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-2'>


            <input type="text" name="name" disabled value={user?.displayName} className="input input-bordered input-primary w-full max-w-xs" />
            <input type="email" name='email' disabled value={user?.email} className="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" name='phone' placeholder="Your phone" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" name='address' placeholder="Your address" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="submit" value="Submit" className="btn btn-secondary   w-full max-w-xs" />

        </form>
    );
};

export default PlaceOrder;
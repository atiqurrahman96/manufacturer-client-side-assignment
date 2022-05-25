import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const Review = () => {
    const [user] = useAuthState(auth)

    const handleBooking = (event) => {
        event.preventDefault();
        const reviews = {
            product: event.target.product.value,
            textarea: event.target.textarea.value,
            rating: event.target.rating.value,
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    toast.success('your opinion has already been placed')
                }
                event.target.reset();

            })




    }
    return (
        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-2'>


            <input type="text" name="name" disabled value={user?.displayName} className="input input-bordered input-primary w-full max-w-xs" />

            <input type="text" name='product' placeholder='please enter your product name' className="input input-bordered input-primary w-full max-w-xs" />
            <textarea className='input-bordered input-primary' placeholder='click here to give your opinion' name="textarea" id="" cols="30" rows="5"></textarea>
            <input type="text" name='rating' placeholder="ratings style[2 of 5]" required className="input input-bordered input-primary w-full max-w-xs" />

            <input type="submit" value="Submit" className="btn btn-accent text-white   w-full max-w-xs" />

        </form>
    );
};

export default Review;
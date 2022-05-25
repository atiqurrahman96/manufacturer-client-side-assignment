import React, { useEffect, useState } from 'react';

import SingleReview from './SingleReview';

const AllReview = () => {
    const [reviews, setReviews] = useState([]);
    console.log(reviews);
    useEffect(() => {
        fetch('http://localhost:5000/reviews', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl font-bold text-accent text-center'>Client Reviews : {reviews.length}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5'>
                {
                    reviews.map(review => <SingleReview
                        review={review}

                    ></SingleReview>)
                }
            </div>
        </div>
    );
};

export default AllReview;
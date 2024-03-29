import React, { useEffect, useState } from 'react';

import SingleReview from './SingleReview';

const AllReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://ancient-sea-95326.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl font-bold text-accent text-center'>Client Reviews : {reviews.length}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5'>
                {
                    reviews?.map(review => <SingleReview
                        review={review}
                        key={review._id}
                    ></SingleReview>)
                }
            </div>
        </div>
    );
};

export default AllReview;
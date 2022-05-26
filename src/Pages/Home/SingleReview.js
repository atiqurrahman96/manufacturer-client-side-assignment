import React from 'react';

const SingleReview = ({ review }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-2">
            <div className="card-body">
                <h2 className="text-center font-bold text-3xl text-purple-500">{review.product}</h2>
                <p className='font-bold'>{review.textarea}</p>
                <p className='font-bold'>{review.rating}</p>

            </div>
        </div>
    );
};

export default SingleReview;
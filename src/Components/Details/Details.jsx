import React from 'react';
import useReview from "../Hooks/useReview";
import Review from '../Review/Review';

const Details = () => {
    const[reviews, setReviews] = useReview()

    return (
        <div className='m-3 p-3'>

            {
                reviews.map(review => <Review key={review.id} review={review}></Review>)
            }
        </div>
    );
};

export default Details;
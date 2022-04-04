import React from 'react';
import { useParams } from 'react-router-dom';
import useReview from '../Hooks/useReview';

const Details = () => {

    const [reviews, setReviews] = useReview()

     const{reviewId} = useParams()

    
    return (
        <div>
            <h1>Details Review</h1>
            {
              reviews.find(book => book.id === reviewId)
            }
        </div>
    );
};

export default Details;
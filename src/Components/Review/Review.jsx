import React from 'react';
import './Review.css'
const Review = (props) => {
    const{book_name, book_review,image,Rating} = props.review


    return (
        <div className='card--design1'>
            <div>
              <img  src={image} className="w-100" alt="..." />
            </div>
            <div className='p-3'>
             <h5 className="card-title">{book_name}</h5>
             <p className="card-text">{book_review}</p> 
             <h5 className='text-primary'><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></h5>
             <p>Rating:{Rating}</p>
            </div>      
           
        </div>
    );
};

export default Review;
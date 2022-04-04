import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Review.css'
const Review = (props) => {
    const{book_name, book_review,image,id} = props.review

let navigate = useNavigate();
 const reviewDetails =() => {
        console.log('Food Details')
        let path = `/details/${id}`
        navigate(path)
        //console.log(path);
 }
    return (
        <div className='card--design1'>
            <div>
              <img  src={image} className="w-100" alt="..." />
            </div>
            <div>
             <h5 class="card-title">{book_name}</h5>
             <p class="card-text">{book_review}</p>
                 <button onClick={reviewDetails} className='btn btn-primary'>Details</button>
            </div>         
        </div>
    );
};

export default Review;
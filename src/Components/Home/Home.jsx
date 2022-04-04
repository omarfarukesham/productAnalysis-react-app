import React from "react";
import image from "../1.jpeg";
import useReview from "../Hooks/useReview";
import Review from "../Review/Review";
import "./Home.css";
const Home = () => {
  const [reviews, setReviews] =  useReview()

  const detailHandler = (id) =>{
      console.log('detail-review', id);
  }

  return (
    <div className="justify-content-center align-items-center">
      <div className="row">
        <div className="col-md-6">
          <div className="banner--design pt-3">
            <img className="rounded" src={image}  alt="books images" />
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="text--design p-5">
            <h1>
              Best Books <span className="text-primary">Review</span>
            </h1>
            <h5>By - Jone Smith</h5>
            <p>
              Time management secret one of the most motivating books ever in my
              personal bookself, which always help me to deal whatever the
              crisis in my personal life and collective life. I realize every
              human being have some opportunitiy for usage their best resourses
              like time and Energy, yes this book truely make sure, how to
              analysis our productive time. Happy Reading..........
            </p>
            <button className="btn btn-primary btn-lg">Read Success</button>
          </div>
        </div>
      </div>

      {/* customer review section  */}
      <div className="review--design text-center m-3">
        <h1>Customer Review({reviews.length})</h1>

        <div className="row card--design">
          <div>
            {
              reviews.slice(0,3).map(review => <Review 
                key={review.id} 
                review={review}
                detailHandler={detailHandler}
                
                ></Review>)
            }
      
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;

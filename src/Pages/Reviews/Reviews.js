import React from 'react'
import './Reviews.css'
import reviewsData from './reviewsData'
import ReviewCard from './ReviewCard'

const Reviews = () => {
  return (
    <section>
        <h1 className='review-h1'><span>See Our </span><span>Reviews</span></h1>
        <div className='review-grid'>
        {
            reviewsData.map((data, index) => {
                return <ReviewCard key={index} data={data} />;
            })
        }
        </div>
        <div className='review-btn'>
            <button >View All</button>
        </div>
    </section>
  )
}

export default Reviews
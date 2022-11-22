import React from "react";
import './ReviewCard.css'
import { MdAccountCircle } from "react-icons/md";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import ReviewStar from "./ReviewStar";

const ReviewCard = ({data}) => {
  return (
    <div className="review-card">
      <div className="review-profile">
        <MdAccountCircle size={70} />
        <div className="name-review">
          <p>{data.Name}</p>
          <ReviewStar stars={data.review} />
        </div>
      </div>
      <div className="review-statement">
        <p>
          <RiDoubleQuotesL />
          {data.statement}
          <RiDoubleQuotesR />
        </p>
      </div>
      <div className="date">
        <p>{data.date}</p>
      </div>
    </div>
  );
};

export default ReviewCard;

import React from 'react'
import './TourStars.css'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Stars = ({stars}) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
      let number = index + 0.5;
      return (
        <span key={index}>
          {stars >= index + 1 ? (
            <FaStar className="icon" color=""/>
          ) : stars >= number ? (
            <FaStarHalfAlt className="icon" />
          ) : (
            <AiOutlineStar className="icon" />
          )}
        </span>
      );
    });
  
    return <div className="star-icons-div">{ratingStar}</div>;
}

export default Stars
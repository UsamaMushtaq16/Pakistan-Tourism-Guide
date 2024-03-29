import React, { useState } from 'react'
import { MdLocationOn } from "react-icons/md";
import FoodCircle from "./FoodCircle";
import "./FoodCard.css";

const FoodCard = ({data}) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => { 
      setIsHovering(false);
    };
  
    const upperStyle = {
      backgroundImage: `url(${data.img})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      transitionDelay: ".1s",
      height: "230px",
    };
  
    const upperActiveStyle = {
      backgroundImage: `linear-gradient(
        rgba(4, 115, 106, 0.75),
        rgba(4, 115, 106, 0.75)
      ),url(${data.img})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      transitionDelay: ".1s",
      height: "230px",
    };
  
    const lowerStyle = {};
  
    const lowerActiveStyle = {
      backgroundImage: `linear-gradient(
        rgba(4, 115, 106, 0.75),
        rgba(4, 115, 106, 0.75)
      )`,
    };
  
    return (
      <div
        className={isHovering ? "active-food" : "food-card"}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div
          className="food-upper-div"
          style={isHovering ? upperActiveStyle : upperStyle}
        >
          {data.featured ? <p className="feature-tag">Featured</p> : <p className="disable-feature-tag"></p>}
          <div className="reviews-div">
            <p>{data.rating}</p>
            <div className="review-right">
              <FoodCircle rating={data.rating} />
              <p className="reviews-p"> {data.reviews} reviews</p>
            </div>
          </div>
        </div>
        <div
          className="food-lower-div"
          style={isHovering ? lowerActiveStyle : lowerStyle}
        >
          <p>
            <span>
              <MdLocationOn size={25}/>
            </span>
            <span>{data.location}</span>
          </p>
          <h2>{data.hotelName}</h2>
          <div className="Opentime-div">
              <p><span><h3>Open Now:</h3></span><span><p id='time-text'>{data.time}</p></span> </p>
          </div>
        </div>
      </div>
    );
}

export default FoodCard
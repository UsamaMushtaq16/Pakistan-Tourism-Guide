import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import Circles from "../HotelPage/Circles";
import "./RecommendedHotel.css";
import Stars from "../HotelPage/Stars";

const RecommendedHotels = ({ data }) => {
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
      className={isHovering ? "active-plan" : "plan-card"}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div
        className="plan-upper-div"
        style={isHovering ? upperActiveStyle : upperStyle}
      >
        {data.featured ? <p className="feature-tag">Featured</p> : <p className="disable-feature-tag"></p>}
        <div className="reviews-div">
          <div className="ratings">
          <p>{data.rating}</p>
          </div>
          <div className="review-right">
            <Circles rating={data.rating} />
            <p className="reviews-p"> {data.reviews} reviews</p>
          </div>
        </div>
      </div>
      <div
        className="plan-lower-div"
        style={isHovering ? lowerActiveStyle : lowerStyle}
      >
        <p className="rr-location">
          <span>
            <MdLocationOn size={25}/>
          </span>
          <span>{data.location}</span>
        </p>
        <div className="hding">
        <h2>{data.hotelName}</h2>
        </div>
        <div className="r-stars-div">
          <Stars stars={data.stars} />
        </div>

        <div className="r-prc">
          <span><h3>{data.price} </h3></span><span>per night</span>
        </div>

      </div>
    </div>
  );
};

export default RecommendedHotels;

import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import Stars from "./Stars";
import "./ViewedTour.css";

const ViewedTour = ({ data }) => {
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
            <Stars rating={data.rating} stars={data.stars}/>
            <p className="reviews-p"> {data.reviews} reviews</p>
          </div>
        </div>
      </div>
      <div
        className="plan-lower-div"
        style={isHovering ? lowerActiveStyle : lowerStyle}
      >

        <p className="t-location">
          <span>
            <MdLocationOn size={25} />
          </span>
          <span>{data.description}</span>
        </p>
        <div className="hding">
          <h2>{data.agencyName}</h2>
        </div>

        <div className="t-price">

          <div className="t-duration">
            <p>{data.duration}</p>
          </div>

          <div className="t-prc">
            <span><h3>{data.price} </h3></span> <span>per person</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ViewedTour;

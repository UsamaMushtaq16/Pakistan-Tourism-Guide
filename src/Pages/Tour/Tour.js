import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useEffect, useState } from "react";
import TourCard from "./TourCard";
import tourData from "./tourData";
import "./Tour.css";
import { Link } from "react-router-dom";

const Tour = () => {
  const [start, setStart] = useState(0);
  const [current, setCurrent] = useState(0);
  const [end, setEnd] = useState(3);
  const [disableLeft, setdisableLeft] = useState(true);
  const [disableRight, setdisableRight] = useState(false);

  useEffect(() => {
    if (start === 0) {
      setdisableLeft(true);
      setdisableRight(false);
      setCurrent(0);
    }
    if (end === tourData.length) {
      setdisableRight(true);
      setdisableLeft(false);
      setCurrent(2);
    }
  }, [setCurrent, setdisableLeft, setdisableRight, end, start]);

  const goToLeft = () => {
    if (start > 0) {
      setCurrent(start);
      setStart(start - 1);
      setEnd(end - 1);
      setdisableRight(false);
      setCurrent(1);
    }
  };

  const goToRight = () => {
    if (end < tourData.length) {
      setStart(start + 1);
      setCurrent(end - 1);
      setEnd(end + 1);
      setdisableLeft(false);
      setCurrent(1);
    }
  };

  return (
    <section className="tour-div">
      <div className="tour-content">
        <h1 className="tour-heading">
          <span>Book Your </span>
          <span>Tour</span>
        </h1>
        <p>Explore one of the famous and beautiful places of Pakistan</p>
      </div>
      <div
        className={disableLeft ? "disable-tour-btn tour-left-btn" : "action-tour-btn tour-left-btn"}
        onClick={() => goToLeft()}
      >
        <AiOutlineLeft size={30} />
      </div>
      <div
        className={
          disableRight ? "disable-tour-btn tour-right-btn" : "action-tour-btn tour-right-btn"
        }
        onClick={() => goToRight()}
      >
        <AiOutlineRight size={30} />
      </div>
      <div className="tour-grid">
        {tourData.slice(start,end).map((data, index) => {
          return <TourCard key={index} data={data} />;
        })}
      </div>
      <div className="tour-slider">
        {Array.from({ length: 3 }).map((data, index) => {
          return (
            <div
              key={index}
              className={
                current === index
                  ? "tour-slider-active-dot"
                  : "tour-slider-dot"
              }
            ></div>
          );
        })}
      </div>
      <div className="tour-view-btn">
        <Link to='/tour'><button>View All</button></Link>
      </div>
    </section>
  );
};

export default Tour;

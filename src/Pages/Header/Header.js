import React, { useEffect, useState } from "react";
import "./Header.css";
import imageSlider from "./data";
import Navbar from "./Navbar/Navbar";
import event from "../../assets/HomeAssets/events.png";
import help from "../../assets/HomeAssets/help.png";

const Header = () => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 3) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [setCurrentState, currentState]);

  const bgImageStyle = {
    backgroundImage: `url(${imageSlider[currentState].img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
    transitionDelay: ".1s",
  };
  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };

  return (
    <div className="container-style">
      <div style={bgImageStyle}>
        <div className="header">
          <Navbar />
          <div className="hero-main">
            <div className="hero-section">
              <div className="hero-headings">
                <p>Experience</p>
                <h1>Pakistan</h1>
                <button>Contact Us</button>
              </div>
              <div className="float-btn">
                <button>
                  <img id="event" src={event} alt="img" />
                </button>
                <button>
                  <img id="q-a" src={help} alt="img" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Slider">
        {Array.from({ length: 4 }).map((item, index) => (
          <div
            onClick={() => goToNext(index)}
            className={currentState === index ? "active-dot" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Header;

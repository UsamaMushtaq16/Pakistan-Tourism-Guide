import React from "react";
import './Notification.css'
import warning from "../../assets/HomeAssets/alert.png";
import globe from "../../assets/HomeAssets/language.png";
import search from "../../assets/HomeAssets/search.png";
import notification from "../../assets/HomeAssets/icon.png";

const Notification = () => {
  return (
    <div className="notification-bar">
      <div className="left-bar">
        <img src={warning} alt="img" />
        <p>COVID-19, Please maintain a safe distance during your journey</p>
      </div>
      <div className="right-bar">
        <div className="select-lang">
          <img src={globe} alt="img" />
          <select name="language" id="">
            <option value="free">English</option>
            <option value="starter">Urdu</option>
            <option value="professional">Arabic</option>
            <option value="corporate">Spanish</option>
          </select>
        </div>
        <div className="search">
          <img src={search} alt="img" />
          <img src={notification} alt="img" />
        </div>
        <div className="login-signup">
          <span>
            <button><a href='/login'>LogIn</a></button>
          </span>
          <span><a href="/signup">Sign Up</a></span>
        </div>
      </div>
    </div>
  );
};

export default Notification;

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
          <span>
          <select name="register" id="register">
            <option value="1" selected>Register As..</option>
            <option value="user"><a href="/signup">User</a></option>
            <option value="hotel-manager"><a href="/signup">Hotel Manager</a></option>
            <option value="restaurant-manager"><a href="/signup">Restaurant Manager</a></option>
            <option value="tour-guide"><a href="/signup">Tour Guide</a></option>
            <option value="transport-agency"><a href="/signup">Transport Agency</a></option>
          </select>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Notification;

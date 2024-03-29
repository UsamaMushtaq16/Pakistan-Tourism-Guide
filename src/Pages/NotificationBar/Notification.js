import React from "react";
import './Notification.css'
import warning from "../../assets/HomeAssets/alert.png";
import { Link } from "react-router-dom";

const Notification = () => {
  return (
    <div className="notification-bar">
      <div className="left-bar">
        <img src={warning} alt="img" />
        <p>COVID-19, Please maintain a safe distance during your journey</p>
      </div>
      <div className="right-bar">
        {/* <div className="select-lang">
          <img src={globe} alt="img" />
          <select name="language" id="">
            <option value="free">English</option>
            <option value="starter">Urdu</option>
            <option value="professional">Arabic</option>
            <option value="corporate">Spanish</option>
          </select>
        </div> */}
        {/* <div className="search">
          <img src={search} alt="img" />
          <img src={notification} alt="img" />
        </div> */}
        <div className="login-signup">
          <span>
            <button><Link to='/login'>LogIn</Link></button>
          </span>
          <span >
            <div class="dropdown">
              <button >Register &nbsp;<i class="fa fa-caret-down"></i> </button>
              <div class="dropdown-content">
                <Link to="/signup" className="lnk">User</Link>
                <Link to="/hotel-manager-signup" className="lnk">Hotel Manager</Link>
                <Link to="/restaurant-manager-signup" className="lnk">Restaurant Manager</Link>
                <Link to="/tour-agency-signup" className="lnk">Tour Agency</Link>
                <Link to="/transport-agency-signup" className="lnk">Transport Agency</Link>
                <Link to="/tourist-guide-signup" className="lnk">Tourist Guide</Link>
               </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Notification;

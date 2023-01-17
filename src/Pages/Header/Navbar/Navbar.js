import React from "react";
import './Navbar.css'
import footerLogo from '../../../assets/FooterAssets/Logo1.png'
import dropDown from '../../../assets/HomeAssets/dropDown1.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <img id="logo" src={footerLogo} alt="img" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Tour Plans</Link>
        </li>
        <li>
          <Link to="/">Restaurants</Link>
        </li>
        <li>
          <Link to="/hotel">Hotels</Link>
        </li>
        <li>
          <Link to="/">Transport</Link>
        </li>
        <li>
          <Link to="/">
            <span>More</span>
            <span>
              <img src={dropDown} alt="" />
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

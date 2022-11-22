import React from "react";
import './Navbar.css'
import Logo from '../../../assets/HomeAssets/Logo.png'
import dropDown from '../../../assets/HomeAssets/dropDown1.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <img id="logo" src={Logo} alt="img" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Tour Plans</a>
        </li>
        <li>
          <a href="/">Restaurants</a>
        </li>
        <li>
          <a href="/">Hotels</a>
        </li>
        <li>
          <a href="/">Transport</a>
        </li>
        <li>
          <a href="/">
            <span>More</span>
            <span>
              <img src={dropDown} alt="" />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

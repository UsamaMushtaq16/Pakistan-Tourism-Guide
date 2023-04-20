import React from "react";
import './Navbar.css'
import footerLogo from '../../../assets/FooterAssets/Logo1.png'
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
          <Link to="/tour">Tour Plans</Link>
        </li>
        <li>
          <Link to="/restaurant">Restaurants</Link>
        </li>
        <li>
          <Link to="/hotel">Hotels</Link>
        </li>
        <li>
          <Link to="/transport">Transport</Link>
        </li>
        <li>
           <><Link to='/places'>Places</Link></>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

import React from 'react'
import './TouristGuideManagerLeftBar.css'
import { Link } from "react-router-dom";

export default function TouristGuideManagerLeftBar() {
  return (
    <div class="left-sidebar">
                    <ul>
                        <li><Link to="/tourist-guide-manager">Bookings</Link></li>
                        <li><Link to="/tourist-guide-manager/cancelled-tourist-guide-bookings">Cancelled Bookings</Link></li> 
                      
                    </ul>
                    <ul class="logout">
                        <li><Link to="/">Logout</Link></li>
                    </ul>
                </div>
  )
}

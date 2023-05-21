import React from 'react'
import './TourManagerLeftBar.css'
import { Link } from "react-router-dom";

export default function TourManagerLeftBar() {
  return (
    <div class="left-sidebar">
                    <ul>
                        <li><Link to="/tour-manager">Bookings</Link></li>
                        <li><Link to="/tour-manager/cancelled-tour-bookings">Cancelled Bookings</Link></li> 
                      
                    </ul>
                    <ul class="logout">
                        <li><Link to="/">Logout</Link></li>
                    </ul>
                </div>
  )
}

import React from 'react'
import './HotelManagerLeftBar.css'
import { Link } from "react-router-dom";

export default function HotelManagerLeftBar() {
  return (
    <div class="left-sidebar">
                    <ul>
                        <li><Link to="/hotel-manager">Bookings</Link></li>
                        <li><Link to="/hotel-manager/cancelled-hotel-bookings">Cancelled Bookings</Link></li> 
                      
                    </ul>
                    <ul class="logout">
                        <li><Link to="/">Logout</Link></li>
                    </ul>
                </div>
  )
}

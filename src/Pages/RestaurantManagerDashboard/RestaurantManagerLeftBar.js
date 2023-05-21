import React from 'react'
import './RestaurantManagerLeftBar.css'
import { Link } from "react-router-dom";

export default function RestaurantManagerLeftBar() {
  return (
    <div class="left-sidebar">
                    <ul>
                        <li><Link to="/restaurant-manager">Bookings</Link></li>
                        <li><Link to="/restaurant-manager/cancelled-restaurant-bookings">Cancelled Bookings</Link></li> 
                      
                    </ul>
                    <ul class="logout">
                        <li><Link to="/">Logout</Link></li>
                    </ul>
                </div>
  )
}

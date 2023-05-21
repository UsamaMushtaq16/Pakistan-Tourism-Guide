import React from 'react'
import './TransportManagerLeftBar.css'
import { Link } from "react-router-dom";

export default function TransportManagerLeftBar() {
  return (
    <div class="left-sidebar">
                    <ul>
                        <li><Link to="/transport-manager">Bookings</Link></li>
                        <li><Link to="/transport-manager/cancelled-transport-bookings">Cancelled Bookings</Link></li> 
                      
                    </ul>
                    <ul class="logout">
                        <li><Link to="/">Logout</Link></li>
                    </ul>
                </div>
  )
}

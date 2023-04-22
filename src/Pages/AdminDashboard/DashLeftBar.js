import React from 'react'
import './DashLeftBar.css'
import { Link } from "react-router-dom";

export default function DashLeftBar() {
  return (
    <div class="left-sidebar">
                    <ul>
                        <li><Link to="/admin">Dashboard</Link></li>
                        <li><Link to="/admin/hotels">Hotels</Link></li> 
                        <li><Link to="/admin/restaurants">Restaurants</Link></li>
                        <li><Link to="/admin/tour-agency">Tour Agencies</Link></li>
                        <li><Link to="/admin/transport">Transport</Link></li>
                        <li><Link to="/admin/tourist-guide">Tourist Guides</Link></li>
                        <li><Link to="/admin/users">Users</Link></li>
                        <li><Link to="#">Pending Approvals</Link></li>
                    </ul>
                    <ul class="logout">
                        <li><Link to="#">Logout</Link></li>
                    </ul>
                </div>
  )
}

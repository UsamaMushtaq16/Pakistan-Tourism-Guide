import React from 'react'
import './RestaurantManagerTopBar.css'
import Logo from '../../assets/HomeAssets/Logo1.png'
import profile from '../../assets/TransportAssets/Profile1.jpg'


export default function RestaurantManagerTopBar() {
  return (
    <div class="top-bar">
    <div>
        <img src={Logo} alt="Site Logo"/>
    </div>
    <div>
        <input type="text" id="search-bar" placeholder="Search..." />

    </div>
    <div class="admin-profile">
        <p class="admin-text">Restaurant Manager</p>
        <img src={profile} alt="Admin Profile" class="admin"/>

    </div>
   </div>
  )
}

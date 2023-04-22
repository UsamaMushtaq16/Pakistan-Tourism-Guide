import React from 'react'
import './AdminRestaurantCard.css'

export default function AdminRestaurantCard({adminRestaurantData}) {
  return (
    <>
    <div className="admin-restaurant-card-main">
       <div className="admin-restaurant-card-image">
           <img src={adminRestaurantData.img} alt="" />
       </div>
       <div className="admin-restaurant-card-detail">
           <h3>{adminRestaurantData.restaurantName}</h3>
           <p>{adminRestaurantData.location}</p>

       </div>
      <div className="admin-restaurant-card-button">

       <button>View Details</button>
       <button className='admin-restaurant-card-delete'>Remove</button>
      </div>
    </div>
    </>
  )
}

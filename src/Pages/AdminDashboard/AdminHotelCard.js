import React from 'react'
import './AdminHotelCard.css'

export default function AdminHotelCard({ adminHotelData }) {
  return (
     <>
     <div className="admin-hotel-card-main">
        <div className="admin-hotel-card-image">
            <img src={adminHotelData.img} alt="" />
        </div>
        <div className="admin-hotel-card-detail">
            <h3>{adminHotelData.hotelName}</h3>
            <p>{adminHotelData.location}</p>

        </div>
        <div className="admin-hotel-card-price">
            <h4>{adminHotelData.price}</h4>
            <span>per night</span>
        </div>
        <button>View Details</button>
        <button className='admin-hotel-card-delete'>Remove</button>
     </div>
     </>
  )
}

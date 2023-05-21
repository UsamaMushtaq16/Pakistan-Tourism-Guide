import React from 'react'
import RestaurantManagerTopBar from './RestaurantManagerTopBar'
import RestaurantManagerLeftBar from './RestaurantManagerLeftBar'


export default function CancelledRestaurantBookings() {
  return (
    <>
    <RestaurantManagerTopBar/>    
    <div className="hotel-manager">
      <RestaurantManagerLeftBar />
      <div className="hotel-manager-main">
        <h1>Cancelled Bookings</h1>
        <hr />
      </div>
    </div>
  </>
  )
}

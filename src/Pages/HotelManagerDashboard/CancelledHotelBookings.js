import React from 'react'
import HotelManagerTopBar from './HotelManagerTopBar'
import HotelManagerLeftBar from './HotelManagerLeftBar'


export default function CancelledHotelBookings() {
  return (
    <>
    <HotelManagerTopBar/>    
    <div className="hotel-manager">
      <HotelManagerLeftBar />
      <div className="hotel-manager-main">
        <h1>Cancelled Bookings</h1>
        <hr />
      </div>
    </div>
  </>
  )
}

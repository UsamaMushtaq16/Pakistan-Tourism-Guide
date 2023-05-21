import React from 'react'
import TourManagerTopBar from './TourManagerTopBar'
import TourManagerLeftBar from './TourManagerLeftBar'


export default function CancelledTourBookings() {
  return (
    <>
    <TourManagerTopBar/>    
    <div className="hotel-manager">
      <TourManagerLeftBar />
      <div className="hotel-manager-main">
        <h1>Cancelled Bookings</h1>
        <hr />
      </div>
    </div>
  </>
  )
}

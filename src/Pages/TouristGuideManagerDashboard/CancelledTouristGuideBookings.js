import React from 'react'
import TouristGuideManagerTopBar from './TouristGuideManagerTopBar'
import TouristGuideManagerLeftBar from './TouristGuideManagerLeftBar'


export default function CancelledTouristGuideBookings() {
  return (
    <>
    <TouristGuideManagerTopBar/>    
    <div className="hotel-manager">
      <TouristGuideManagerLeftBar />
      <div className="hotel-manager-main">
        <h1>Cancelled Bookings</h1>
        <hr />
      </div>
    </div>
  </>
  )
}

import React from 'react'
import TransportManagerTopBar from './TransportManagerTopBar'
import TransportManagerLeftBar from './TransportManagerLeftBar'


export default function CancelledTransportBookings() {
  return (
    <>
    <TransportManagerTopBar/>    
    <div className="hotel-manager">
      <TransportManagerLeftBar />
      <div className="hotel-manager-main">
        <h1>Cancelled Bookings</h1>
        <hr />
      </div>
    </div>
  </>
  )
}

import React from 'react'
import './HotelManager.css'
import HotelManagerTopBar from './HotelManagerTopBar'
import HotelManagerLeftBar from './HotelManagerLeftBar'
import hotelManagerData from './HotelManagerData'
import HotelBookingsCard from './HotelBookingsCard'

export default function HotelManager() {
  return (
    <>
      <HotelManagerTopBar />

      <div className="hotel-manager">
        <HotelManagerLeftBar />
        <div className="hotel-manager-main">
          <h1>Hotel Bookings</h1>
          <hr />
          <div>
            {
              hotelManagerData.map((hotelManagerData) => {
                return (<HotelBookingsCard key={hotelManagerData} hotelManagerData={hotelManagerData} />)
              })
            }

          </div>
        </div>
      </div>
    </>
  )
}

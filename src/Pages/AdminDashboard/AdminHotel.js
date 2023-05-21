import React from 'react'
import DashTopBar from './DashTopBar'
import DashLeftBar from './DashLeftBar'
import './AdminHotel.css'
import AdminHotelCard from './AdminHotelCard'
import adminHotelData from './AdminHotelData'

export default function AdminHotel() {
  return (
    <>
      <DashTopBar />
      <div className="dashHotel-container">

        <DashLeftBar />
        <div className="admin-hotel">
          <h1>Hotels</h1>
          <hr />
          <div>
            {
              adminHotelData.map((adminHotelData) => {
                return (<AdminHotelCard key={adminHotelData.id} adminHotelData={adminHotelData} />)
              })
            }
          </div>

        </div>
      </div>

    </>
  )
}

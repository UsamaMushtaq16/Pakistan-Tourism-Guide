import React from 'react'
import './TourManager.css'
import tourManagerData from './TourManagerData'
import TourManagerTopBar from './TourManagerTopBar'
import TourManagerLeftBar from './TourManagerLeftBar'
import TourBookingsCard from './TourBookingsCard'

export default function TourManager() {
  return (
    <>
      <TourManagerTopBar />

      <div className="tour-manager">
        <TourManagerLeftBar />
        <div className="tour-manager-main">
          <h1>Tour Bookings</h1>
          <hr />
          <div>
            {
              tourManagerData.map((tourManagerData) => {
                return (<TourBookingsCard key={tourManagerData} tourManagerData={tourManagerData} />)
              })
            }

          </div>
        </div>
      </div>
    </>
  )
}

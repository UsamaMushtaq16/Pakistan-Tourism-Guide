import React from 'react'
import './TouristGuideManager.css'
import touristGuideManagerData from './TouristGuideManagerData'
import TouristGuideManagerTopBar from './TouristGuideManagerTopBar'
import TouristGuideManagerLeftBar from './TouristGuideManagerLeftBar'
import TouristGuideBookingsCard from './TouristGuideBookingsCard'

export default function TouristGuideManager() {
  return (
    <>
      <TouristGuideManagerTopBar />

      <div className="tourist-guide-manager">
        <TouristGuideManagerLeftBar />
        <div className="tourist-guide-manager-main">
          <h1>Tourist Guide Bookings</h1>
          <hr />
          <div>
            {
              touristGuideManagerData.map((touristGuideManagerData) => {
                return (<TouristGuideBookingsCard key={touristGuideManagerData} touristGuideManagerData={touristGuideManagerData} />)
              })
            }

          </div>
        </div>
      </div>
    </>
  )
}

import React from 'react'
import DashTopBar from './DashTopBar'
import DashLeftBar from './DashLeftBar'
import './AdminTouristGuide.css'
import adminTouristGuideData from './AdminTouristGuideData'
import AdminTouristGuideCard from './AdminTouristGuideCard'


export default function AdminTouristGuide() {
  return (
     <>
    <DashTopBar/>

    <div className="dashtouristGuide-container">
        <DashLeftBar/>

        <div className="admin-touristGuide">
            <h1>Tourist Guides</h1>
            <hr />
            <div>
    {
              adminTouristGuideData.map((adminTouristGuideData) => {
                return (<AdminTouristGuideCard key={adminTouristGuideData.id} adminTouristGuideData={adminTouristGuideData} />)
              })
}
    </div>

        </div>
    </div>
     </>
  )
}

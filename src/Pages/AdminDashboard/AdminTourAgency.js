import React from 'react'
import DashTopBar from './DashTopBar'
import DashLeftBar from './DashLeftBar'
import './AdminTourAgency.css'
import adminTourAgencyData from './AdminTourAgencyData'
import AdminTourAgencyCard from './AdminTourAgencyCard'

export default function AdminTourAgency() {
  return (
     <>
    <DashTopBar/>

    <div className="dashTourAgency-container">
        <DashLeftBar/>

        <div className="admin-tourAgency">
            <h1>Tour Agencies</h1>
            <hr />
            <div>
    {
              adminTourAgencyData.map((adminTourAgencyData) => {
                return (<AdminTourAgencyCard key={adminTourAgencyData.id} adminTourAgencyData={adminTourAgencyData} />)
              })
}
    </div>

        </div>
    </div>
     </>
  )
}

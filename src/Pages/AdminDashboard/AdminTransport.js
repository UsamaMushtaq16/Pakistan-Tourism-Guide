import React from 'react'
import DashTopBar from './DashTopBar'
import DashLeftBar from './DashLeftBar'
import './AdminTransport.css'
import adminTransportData from './AdminTransportData'
import AdminTransportCard from './AdminTransportCard'


export default function AdminTransport() {
  return (
     <>
    <DashTopBar/>

    <div className="dashTransport-container">
        <DashLeftBar/>

        <div className="admin-transport">
            <h1>Transport</h1>
            <hr />
            <div>
    {
              adminTransportData.map((adminTransportData) => {
                return (<AdminTransportCard key={adminTransportData.id} adminTransportData={adminTransportData} />)
              })
}
    </div>

        </div>
    </div>
     </>
  )
}

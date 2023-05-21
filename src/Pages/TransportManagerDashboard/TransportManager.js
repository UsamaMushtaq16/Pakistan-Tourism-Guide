import React from 'react'
import './TransportManager.css'
import transportManagerData from './TransportManagerData'
import TransportManagerTopBar from './TransportManagerTopBar'
import TransportManagerLeftBar from './TransportManagerLeftBar'
import TransportBookingsCard from './TransportBookingsCard'

export default function TransportManager() {
  return (
    <>
      <TransportManagerTopBar />

      <div className="transport-manager">
        <TransportManagerLeftBar />
        <div className="transport-manager-main">
          <h1>Transport Bookings</h1>
          <hr />
          <div>
            {
              transportManagerData.map((transportManagerData) => {
                return (<TransportBookingsCard key={transportManagerData} transportManagerData={transportManagerData} />)
              })
            }

          </div>
        </div>
      </div>
    </>
  )
}

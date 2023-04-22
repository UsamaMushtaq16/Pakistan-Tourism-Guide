import React from 'react'
import './AdminTransportCard.css'

export default function AdminTransportCard({adminTransportData}) {
  return (
    <>
    <div className="admin-transport-card-main">
       <div className="admin-transport-card-image">
           <img src={adminTransportData.img} alt="" />
       </div>
       <div className="admin-transport-card-detail">
           <h3>{adminTransportData.name}</h3>
           <p>{adminTransportData.description}</p>

       </div>

       <div className="admin-transport-card-duration">
             <p>{adminTransportData.convence}</p>
       </div>

       <div className="admin-transport-card-price">
            <h4>{adminTransportData.price}</h4>
            <span>per person</span>
        </div>

      <div className="admin-transport-card-button">

       <button>View Details</button>
       <button className='admin-transport-card-delete'>Remove</button>
      </div>
    </div>
    </>
  )
}

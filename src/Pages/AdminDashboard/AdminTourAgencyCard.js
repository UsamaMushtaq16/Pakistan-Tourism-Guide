import React from 'react'
import './AdminTourAgencyCard.css'

export default function AdminTourAgencyCard({adminTourAgencyData}) {
  return (
    <>
    <div className="admin-tourAgency-card-main">
       <div className="admin-tourAgency-card-image">
           <img src={adminTourAgencyData.img} alt="" />
       </div>
       <div className="admin-tourAgency-card-detail">
           <h3>{adminTourAgencyData.agencyName}</h3>
           <p>{adminTourAgencyData.description}</p>

       </div>

       <div className="admin-tourAgency-card-duration">
             <p>{adminTourAgencyData.duration}</p>
       </div>

       <div className="admin-tourAgency-card-price">
            <h4>{adminTourAgencyData.price}</h4>
        </div>

      <div className="admin-tourAgency-card-button">

       <button>View Details</button>
       <button className='admin-tourAgency-card-delete'>Remove</button>
      </div>
    </div>
    </>
  )
}

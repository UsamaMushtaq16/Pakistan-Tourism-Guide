import React from 'react'
import './AdminUserCard.css'

export default function AdminUserCard({adminUserData}) {
  return (
    <>
    <div className="admin-user-card-main">
       <div className="admin-user-card-image">
           <img src={adminUserData.img} alt="" />
       </div>
       <div className="admin-user-card-detail">
           <h3>{adminUserData.name}</h3>

       </div>

       <div className="admin-user-card-email">
             <p>{adminUserData.email}</p>
       </div>

       <div className="admin-user-card-phone">
            <p>{adminUserData.phone}</p>

        </div>

      <div className="admin-user-card-button">

       <button>View Details</button>
       <button className='admin-user-card-delete'>Remove</button>
      </div>
    </div>
    </>
  )
}

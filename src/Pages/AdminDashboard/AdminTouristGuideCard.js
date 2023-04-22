import React from 'react'
import './AdminTouristGuideCard.css'

export default function AdminTouristGuideCard({adminTouristGuideData}) {
  return (
    <>
    <div className="admin-touristGuide-card-main">
       <div className="admin-touristGuide-card-image">
           <img src={adminTouristGuideData.img} alt="" />
       </div>
       <div className="admin-touristGuide-card-detail">
           <h3>{adminTouristGuideData.name}</h3>
           <p>{adminTouristGuideData.location}</p>

       </div>

       <div className="admin-touristGuide-card-duration">
             <p>{adminTouristGuideData.time}</p>
       </div>

       <div className="admin-touristGuide-card-price">
            <h4>{adminTouristGuideData.price}</h4>

        </div>

      <div className="admin-touristGuide-card-button">

       <button>View Details</button>
       <button className='admin-touristGuide-card-delete'>Remove</button>
      </div>
    </div>
    </>
  )
}

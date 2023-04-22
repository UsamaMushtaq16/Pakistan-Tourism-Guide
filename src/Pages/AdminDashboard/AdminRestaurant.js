import React from 'react'
import DashTopBar from './DashTopBar'
import DashLeftBar from './DashLeftBar'
import './AdminRestaurant.css'
import adminRestaurantData from './AdminRestaurantData'
import AdminRestaurantCard from './AdminRestaurantCard'

export default function AdminRestaurant() {
  return (
     <>
    <DashTopBar/>

    <div className="dashRestaurant-container">
        <DashLeftBar/>

        <div className="admin-restaurant">
            <h1>Restaurants</h1>
            <hr />
            <div>
    {
              adminRestaurantData.map((adminRestaurantData) => {
                return (<AdminRestaurantCard key={adminRestaurantData.id} adminRestaurantData={adminRestaurantData} />)
              })
}
    </div>

        </div>
    </div>
     </>
  )
}

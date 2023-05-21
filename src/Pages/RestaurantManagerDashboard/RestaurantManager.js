import React from 'react'
import './RestaurantManager.css'
import restaurantManagerData from './RestaurantManagerData'
import RestaurantManagerTopBar from './RestaurantManagerTopBar'
import RestaurantManagerLeftBar from './RestaurantManagerLeftBar'
import RestaurantBookingsCard from './RestaurantBookingsCard'

export default function RestaurantManager() {
  return (
    <>
      <RestaurantManagerTopBar />

      <div className="restaurant-manager">
        <RestaurantManagerLeftBar />
        <div className="restaurant-manager-main">
          <h1>Restaurant Bookings</h1>
          <hr />
          <div>
            {
              restaurantManagerData.map((restaurantManagerData) => {
                return (<RestaurantBookingsCard key={restaurantManagerData} restaurantManagerData={restaurantManagerData} />)
              })
            }

          </div>
        </div>
      </div>
    </>
  )
}

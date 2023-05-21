import React from 'react'
import './RestaurantBookingsCard.css'

export default function RestaurantBookingsCard({ restaurantManagerData }) {
    return (
        <>
            <div className="restaurant-bookings-card">
                <div className="restaurant-bookings-card-sec">
                    <div className="restaurant-user-detail">
                        <p>Name:</p>
                        <span>{restaurantManagerData.name}</span>
                    </div>
                    <div className="restaurant-user-detail">
                        <p>CNIC:</p>
                        <span>{restaurantManagerData.cnic}</span>

                    </div>
                    <div className="restaurant-user-detail">
                        <p>Phone:</p>
                        <span>{restaurantManagerData.phone}</span>
                    </div>
                   
                </div>
                <div className="restaurant-bookings-card-sec">
                <div className="restaurant-user-detail">
                        <p>Email:</p>
                        <span>{restaurantManagerData.email}</span>

                    </div>

                    <div className="restaurant-user-detail">
                        <p>Family Hall:</p>
                        <span>{restaurantManagerData.family_hall}</span>
                    </div>

                    <div className="restaurant-user-detail">
                        <p>Table:</p>
                        <span>{restaurantManagerData.table}</span>

                    </div>

    
                </div>
                <div className="restaurant-bookings-card-sec">
                        
                    <div className="restaurant-user-detail">
                        <p>Meal:</p>
                        <span>{restaurantManagerData.meal}</span>
                    </div>

                    <div className="restaurant-user-detail">
                        <p>Date:</p>
                        <span>{restaurantManagerData.date}</span>

                    </div>
                    <div className="restaurant-user-detail">
                         <button>Cancel Booking</button>

                    </div>
                </div>

               

            </div>
        </>
    )
}

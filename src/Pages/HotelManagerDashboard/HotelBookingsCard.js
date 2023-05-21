import React from 'react'
import './HotelBookingsCard.css'

export default function HotelBookingsCard({ hotelManagerData }) {
    return (
        <>
            <div className="hotel-bookings-card">
                <div className="hotel-bookings-card-sec">
                    <div className="hotel-user-detail">
                        <p>Name:</p>
                        <span>{hotelManagerData.name}</span>
                    </div>
                    <div className="hotel-user-detail">
                        <p>CNIC:</p>
                        <span>{hotelManagerData.cnic}</span>

                    </div>
                    <div className="hotel-user-detail">
                        <p>Phone:</p>
                        <span>{hotelManagerData.phone}</span>
                    </div>
                   
                </div>
                <div className="hotel-bookings-card-sec">
                <div className="hotel-user-detail">
                        <p>Email:</p>
                        <span>{hotelManagerData.email}</span>

                    </div>

                    <div className="hotel-user-detail">
                        <p>Stay Duration:</p>
                        <span>{hotelManagerData.stay}</span>
                    </div>

                    <div className="hotel-user-detail">
                        <p>Guests & Room:</p>
                        <span>{hotelManagerData.guests_room}</span>

                    </div>

    
                </div>
                <div className="hotel-bookings-card-sec">
                        
                    <div className="hotel-user-detail">
                        <p>Check-In:</p>
                        <span>{hotelManagerData.check_in}</span>
                    </div>

                    <div className="hotel-user-detail">
                        <p>Check-Out:</p>
                        <span>{hotelManagerData.check_out}</span>

                    </div>
                    <div className="hotel-user-detail">
                         <button>Cancel Booking</button>

                    </div>
                </div>

               

            </div>
        </>
    )
}

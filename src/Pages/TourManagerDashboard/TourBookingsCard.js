import React from 'react'
import './TourBookingsCard.css'

export default function TourBookingsCard({ tourManagerData }) {
    return (
        <>
            <div className="tour-bookings-card">
                <div className="tour-bookings-card-sec">
                    <div className="tour-user-detail">
                        <p>Name:</p>
                        <span>{tourManagerData.name}</span>
                    </div>
                    <div className="tour-user-detail">
                        <p>CNIC:</p>
                        <span>{tourManagerData.cnic}</span>

                    </div>
                    <div className="tour-user-detail">
                        <p>Phone:</p>
                        <span>{tourManagerData.phone}</span>
                    </div>
                   
                </div>
                <div className="tour-bookings-card-sec">
                <div className="tour-user-detail">
                        <p>Email:</p>
                        <span>{tourManagerData.email}</span>

                    </div>

                    <div className="tour-user-detail">
                        <p>Family:</p>
                        <span>{tourManagerData.family}</span>
                    </div>

                    <div className="tour-user-detail">
                        <p>Tour Duration:</p>
                        <span>{tourManagerData.tour_duration}</span>

                    </div>

    
                </div>
                <div className="tour-bookings-card-sec">
                        
                    <div className="tour-user-detail">
                        <p>Tour:</p>
                        <span>{tourManagerData.tour}</span>
                    </div>
                    <div className="tour-user-detail">
                        <p>Date:</p>
                        <span>{tourManagerData.date}</span>
                    </div>

                   
                    <div className="tour-user-detail">
                         <button>Cancel Booking</button>

                    </div>
                </div>

               

            </div>
        </>
    )
}

import React from 'react'
import './TouristGuideBookingsCard.css'

export default function TouristGuideBookingsCard({ touristGuideManagerData }) {
    return (
        <>
            <div className="hotel-bookings-card">
                <div className="hotel-bookings-card-sec">
                    <div className="hotel-user-detail">
                        <p>Name:</p>
                        <span>{touristGuideManagerData.name}</span>
                    </div>
                    <div className="hotel-user-detail">
                        <p>CNIC:</p>
                        <span>{touristGuideManagerData.cnic}</span>

                    </div>
                    <div className="hotel-user-detail">
                        <p>Phone:</p>
                        <span>{touristGuideManagerData.phone}</span>
                    </div>
                   
                </div>
                <div className="hotel-bookings-card-sec">
                <div className="hotel-user-detail">
                        <p>Email:</p>
                        <span>{touristGuideManagerData.email}</span>

                    </div>

                    <div className="hotel-user-detail">
                        <p>City:</p>
                        <span>{touristGuideManagerData.city}</span>
                    </div>

                    <div className="hotel-user-detail">
                        <p>Guidance Duration :</p>
                        <span>{touristGuideManagerData.guidance_duration}</span>

                    </div>

    
                </div>
                <div className="hotel-bookings-card-sec">
                        
                    <div className="hotel-user-detail">
                        <p>Date:</p>
                        <span>{touristGuideManagerData.date}</span>
                    </div>

                    <div className="hotel-user-detail">
                        <p>Time:</p>
                        <span>{touristGuideManagerData.time}</span>

                    </div>
                    <div className="hotel-user-detail">
                         <button>Cancel Booking</button>

                    </div>
                </div>

               

            </div>
        </>
    )
}

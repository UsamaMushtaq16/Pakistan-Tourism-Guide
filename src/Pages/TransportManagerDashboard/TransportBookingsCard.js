import React from 'react'
import './TransportBookingsCard.css'

export default function TransportBookingsCard({ transportManagerData }) {
    return (
        <>
            <div className="transport-bookings-card">
                <div className="transport-bookings-card-sec">
                    <div className="transport-user-detail">
                        <p>Name:</p>
                        <span>{transportManagerData.name}</span>
                    </div>
                    <div className="transport-user-detail">
                        <p>CNIC:</p>
                        <span>{transportManagerData.cnic}</span>

                    </div>
                    <div className="transport-user-detail">
                        <p>Phone:</p>
                        <span>{transportManagerData.phone}</span>
                    </div>

                </div>
                <div className="transport-bookings-card-sec">
                    <div className="transport-user-detail">
                        <p>Persons:</p>
                        <span>{transportManagerData.persons}</span>
                    </div>

                    <div className="transport-user-detail">
                        <p>Convence Type:</p>
                        <span>{transportManagerData.convence_type}</span>
                    </div>

                    <div className="transport-user-detail">

                        <p>Destination:</p>
                        <span>{transportManagerData.destination}</span>


                    </div>


                </div>
                <div className="transport-bookings-card-sec">

                    <div className="transport-user-detail">
                        <p>Date:</p>
                        <span>{transportManagerData.date}</span>
                    </div>

                    <div className="transport-user-detail">
                        <p>Time:</p>
                        <span>{transportManagerData.time}</span>

                    </div>
                    <div className="transport-user-detail">
                        <button>Cancel Booking</button>

                    </div>
                </div>



            </div>
        </>
    )
}

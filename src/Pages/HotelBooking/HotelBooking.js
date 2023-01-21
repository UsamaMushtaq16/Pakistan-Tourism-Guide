import React from 'react'
import Notification from '../NotificationBar/Notification'
import Navbar from '../Header/Navbar/Navbar'
import Footer from '../Footer/Footer'
import './HotelBooking.css'

export default function HotelBooking() {
    return (
        <>
            <Notification/>
            <Navbar />
            <div className='booking-main'>
                <h1 className='booking-head'>
                    <span>Hotel </span>
                    <span>Booking</span>
                </h1>
                <p className='text-center'>Please fill the form given below to book your room in the hotel.</p>
                <form className='booking-form'>

                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name"  required/>
                    </div>
                    <div class="mb-3">
                        <label for="days" class="form-label">CNIC No.</label>
                        <input type="number" class="form-control" id="days"  required/>
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Phone</label>
                        <input type="tel" class="form-control" id="phone"  required/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  required/>
                    </div>
                    <div class="mb-3">
                        <label for="days" class="form-label">Days to Stay</label>
                        <input type="number" class="form-control" id="days"  required/>
                    </div>
                    <div class="mb-3">
                        <label for="guest-room" class="form-label">Guests & Rooms</label>
                        <select class="form-select" id="guest-room" required>
                            <option selected>Choose...</option>
                            <option value="1">2 adults, 1 room</option>
                            <option value="2">4 adults, 2 rooms</option>
                            <option value="3">6 adults, 3 rooms</option>
                        </select>
                    </div>
                    <div className='dte'>
                    <div class="mb-4 col mx-1">
                        <label for="date" class="form-label">Check-in</label>
                        <input type="date" class="form-control" id="date"  required/>
                    </div>
                    <div class="mb-4 col mx-1" >
                        <label for="date" class="form-label">Check-out</label>
                        <input type="date" class="form-control" id="date"  required/>
                    </div>
                    </div>

                    <button type="submi" class="btn btn-primary sbmt">Submit</button>
                </form>

            </div>
            <Footer />
        </>
    )
}

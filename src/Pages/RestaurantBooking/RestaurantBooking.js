import React from 'react'
import Notification from '../NotificationBar/Notification'
import Navbar from '../Header/Navbar/Navbar'
import Footer from '../Footer/Footer'
import './RestaurantBooking.css'

export default function RestaurantBooking() {
    return (
        <>
            <Notification />
            <Navbar />
            <div className='booking-main'>
                <h1 className='booking-head'>
                    <span>Restaurant </span>
                    <span>Booking</span>
                </h1>
                <p className='text-center'>Please fill the form given below to reserve your table in our restaurant.</p>
                <form className='booking-form'>

                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" required />
                    </div>
                    <div class="mb-3">
                        <label for="days" class="form-label">CNIC No.</label>
                        <input type="number" class="form-control" id="days" required />
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Phone</label>
                        <input type="tel" class="form-control" id="phone" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    </div>
                    <div class="mb-3">
                    <label for="family" class="form-label">Family Hall (For families only)</label>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="guest-room" class="form-label">Table</label>
                        <select class="form-select" id="guest-room" required>
                            <option selected>Choose...</option>
                            <option value="1">2 Persons</option>
                            <option value="2">4 Persons</option>
                            <option value="3">6 Persons</option>
                        </select>
                    </div>
                    
                        <div class="mb-3">
                            <label for="date" class="form-label">Date</label>
                            <input type="date" class="form-control" id="date" required />
                        </div>
                    
                  

                    <button type="submit" class="btn btn-primary sbmt">Submit</button>
                </form>

            </div>
            <Footer />
        </>
    )
}

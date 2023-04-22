import React from 'react'
import Notification from '../NotificationBar/Notification'
import Navbar from '../Header/Navbar/Navbar'
import Footer from '../Footer/Footer'
import './TouristGuideBooking.css'

export default function TouristGuideBooking() {
    return (
        <>
            <Notification />
            <Navbar />
            <div className='booking-main'>
                <h1 className='booking-head'>
                    <span>Tourist Guide </span>
                    <span>Booking</span>
                </h1>
                <p className='text-center'>Please fill the form given below to book your tourist guide.</p>
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
                        <label for="city" class="form-label">City</label>
                        <select class="form-select" id="specificSizeSelect">
                            <option selected>Choose...</option>
                            <option selected>Choose...</option>
                            <option value="1">Islamabad</option>
                            <option value="2">Lahore</option>
                            <option value="3">Muree</option>
                            <option value="4">Swat</option>

                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="duration" class="form-label">Guidance Duration</label>
                        <select class="form-select" id="specificSizeSelect">
                            <option selected>Choose...</option>
                            <option value="1">1 Day</option>
                            <option value="2">10 Hours</option>
                            <option value="3">6 Hours</option>
                            <option value="3">2 Days</option>

                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="date" class="form-label">Date</label>
                        <input type="date" class="form-control" id="date" required />
                    </div>
                    <div class="mb-3">
                        <label for="date" class="form-label">Time</label>
                        <input type="time" class="form-control" id="date" required />
                    </div>



                    <button type="submit" class="btn btn-primary sbmt">Submit</button>
                </form>

            </div>
            <Footer />
        </>
    )
}

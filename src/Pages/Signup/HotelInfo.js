import React from 'react'
import './UserInfo.css'

export default function HotelInfo() {
    return (
        <>
        
            <div className='user-info-main'>
                <h1 className='user-info-head'>
                    <span>Hotel </span>
                    <span>Information</span>
                </h1>
                <p className='text-center'>Please fill the form given below to complete your signup process.</p>
                <form className='user-info-form'>
                <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name"  required/>
                    </div> 
                    
                    <div class="mb-3">
                        <label for="phone" class="form-label">Phone</label>
                        <input type="tel" class="form-control" id="phone" required />
                    </div>
                    <div class="mb-3">
                        <label for="cnic" class="form-label">CNIC No.</label>
                        <input type="number" class="form-control" id="cnic" required />
                    </div>
                     
                    <div class="mb-3">
                        <label for="address" class="form-label">Adress</label>
                        <input type="text" class="form-control" id="address" required />
                    </div>
                    <div class="mb-3">
                        <label for="price" class="form-label">Price</label>
                        <input type="number" class="form-control" id="price" required />
                    </div>
                    <div class="mb-3">
                        <label for="roomAmenities" class="form-label">Room Amenities</label>
                        <input type="text" class="form-control" id="roomAmenities" required />
                    </div>
                    <div class="mb-3">
                        <label for="roomFeatures" class="form-label">Room Features</label>
                        <input type="text" class="form-control" id="roomFeatures" required />
                    </div>
                    <div class="mb-3">
                        <label for="roomTypes" class="form-label">Room Types</label>
                        <input type="text" class="form-control" id="roomTypes" required />
                    </div>
                    

                    <button type="submi" class="btn btn-primary sbmt">Submit</button>
                </form>

            </div>

        </>
    )
}
